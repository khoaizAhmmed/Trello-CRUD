import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../components/CardList';

import { ExitsButton, InputBox, InputField, SaveButton } from '../styles/Form.style';
import { AddListButton, ListBox, ListTitle, ListWarp } from '../styles/ListBox.style';

function BoardList() {
    const [lists, setList] = useState([]);
    const [listName, setListName] = useState('');
    const [addList, setAddList] = useState(false);
    const params = useParams();
    const authorize = JSON.parse(sessionStorage.getItem('auth'));
    const inputRef = useRef(null);

    // Create List Function
    const paramsName = new URL(document.location).searchParams;
    const BoardName = paramsName.get('name');

    const createListHandler = async (e) => {
        e.preventDefault();
        if (!!listName === false) {
            return;
        }
        const createListApi = await fetch(
            `https://api.trello.com/1/lists?name=${listName}&idBoard=${params.id}&key=${authorize.key}&token=${authorize.secret}`,
            {
                method: 'POST',
            }
        );
        if (createListApi.status === 200) {
            const newData = await createListApi.json();
            const newList = [...lists, newData];
            console.log(newList);
            setList(newList);
            setAddList(false);
        }
    };

    const addListHandler = (e) => {
        e.preventDefault();
        setAddList(true);
    };

    const closeCardHandler = (e) => {
        e.preventDefault();
        setAddList(false);
    };

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, [addList]);
    useEffect(() => {
        const getList = async () => {
            const listApi = await fetch(
                `https://api.trello.com/1/boards/${params.id}/lists?key=${authorize.key}&token=${authorize.secret}`
            );
            const list = await listApi.json();
            setList(list);
        };
        getList();
    }, []);

    return (
        <>
            <h2>{BoardName} Board</h2>
            <br />
            <h3>Lists</h3>
            <ListWarp>
                {lists?.map((li) => (
                    <ListBox key={li.id}>
                        <ListTitle>{li.name}</ListTitle>
                        <CardList id={li.id} />
                    </ListBox>
                ))}
                <ListBox>
                    {addList === false && (
                        <AddListButton
                            onClick={addListHandler}
                            type="button"
                            value="+ Add Another List"
                        />
                    )}
                    {addList && (
                        <InputBox>
                            <InputField
                                ref={inputRef}
                                onChange={(e) => {
                                    setListName(e.target.value);
                                }}
                            />
                            <SaveButton onClick={createListHandler}>Save</SaveButton>
                            <ExitsButton onClick={closeCardHandler}>X</ExitsButton>
                        </InputBox>
                    )}
                </ListBox>
            </ListWarp>
        </>
    );
}

export default React.memo(BoardList);
