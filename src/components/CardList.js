import React, { useEffect, useRef, useState } from 'react';
import { AddListButton, CardBox, CardLi } from '../styles/CardBox.style';
import { ExitsButton, InputBox, InputField, SaveButton } from '../styles/Form.style';

function CardList({ id }) {
    const [cards, setCards] = useState([]);
    const [cardName, setCardName] = useState('');
    const [addCard, setAddCard] = useState(false);
    const cardInput = useRef(null);

    const authorize = JSON.parse(sessionStorage.getItem('auth'));

    const addCardHandler = (e) => {
        e.preventDefault();
        setAddCard(true);
    };
    const closeCardHandler = (e) => {
        e.preventDefault();
        setAddCard(false);
    };
    const createCardHandler = async (e) => {
        e.preventDefault();
        if (!!cardName === false) {
            return;
        }
        const createCardApi = await fetch(
            `https://api.trello.com/1/cards?idList=${id}&name=${cardName}&key=${authorize.key}&token=${authorize.secret}`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
            }
        );
        if (createCardApi.status === 200) {
            const newData = await createCardApi.json();
            const newCards = [...cards, newData];
            setCards(newCards);
            setAddCard(false);
        }
    };
    useEffect(() => {
        cardInput.current && cardInput.current.focus();
    }, [addCard]);
    useEffect(() => {
        const getCards = async (CardId) => {
            const cardsApi = await fetch(
                `https://api.trello.com/1/lists/${CardId}/cards?key=${authorize.key}&token=${authorize.secret}`
            );
            const card = await cardsApi.json();
            setCards(card);
        };
        getCards(id);
    }, []);
    return (
        <div>
            <CardBox>
                {cards?.map((c) => (
                    <CardLi key={c.id}>{c.name}</CardLi>
                ))}
            </CardBox>
            {addCard === false && (
                <AddListButton onClick={addCardHandler} type="button" value="+ Add a card" />
            )}
            {addCard && (
                <InputBox>
                    <InputField
                        ref={cardInput}
                        onChange={(e) => {
                            setCardName(e.target.value);
                        }}
                    />
                    <SaveButton onClick={createCardHandler}>Save</SaveButton>
                    <ExitsButton onClick={closeCardHandler}>X</ExitsButton>
                </InputBox>
            )}
        </div>
    );
}

export default React.memo(CardList);
