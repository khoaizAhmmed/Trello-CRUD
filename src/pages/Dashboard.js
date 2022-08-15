import { CloseCircle, Edit2 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Card, CardButton, CardLink, CardTitle, TextCenter } from '../styles/Card.style';
import { Wrapper } from '../styles/Container.style';
import Modal from './modals/Modal';

function Dashboard() {
    const [boards, setBoards] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [inputName, setInputName] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [updateBoardId, setUpdateBoardId] = useState('');
    const me = JSON.parse(sessionStorage.getItem('me'));
    const authorize = JSON.parse(sessionStorage.getItem('auth'));
    const { idOrganizations } = me;
    const id = idOrganizations[0];

    const colorArray = ['#845EC2', '#2C73D2', '#0081CF', '#008E9B', '#008F7A'];

    const createBoard = async (e) => {
        e.preventDefault();
        const api = await fetch(
            `https://api.trello.com/1/boards/?name=${inputName}&desc=${inputDesc}&key=${authorize.key}&token=${authorize.secret}`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        if (api.status === 200) {
            const data = await api.json();
            console.log(data);
            const newBoard = [...boards, data];
            setBoards(newBoard);
            setModalOpen(false);
        }
    };
    const UpdateBoard = async (e) => {
        e.preventDefault();
        const api = await fetch(
            `https://api.trello.com/1/boards/${updateBoardId}?name=${inputName}&desc=${inputDesc}&key=${authorize.key}&token=${authorize.secret}`,
            {
                method: 'PUT',
            }
        );
        if (api.status === 200) {
            const data = await api.json();
            setBoards(boards.map((board) => (board.id === data.id ? { ...data } : board)));
            setUpdateModal(false);
        }
    };

    const openModalHandler = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };
    const closeModal = (e) => {
        e.preventDefault();
        setModalOpen(false);
        setUpdateModal(false);
    };
    const deleteHandler = async (e, boardId) => {
        const MySwal = withReactContent(Swal);
        e.preventDefault();
        const accept = await MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
        });
        if (accept.isConfirmed) {
            const deleteBoardApi = await fetch(
                `https://api.trello.com/1/boards/${boardId}?key=${authorize.key}&token=${authorize.secret}`,
                {
                    method: 'DELETE',
                }
            );

            if (deleteBoardApi.status === 200) {
                const currentBoard = boards.filter((board) => board.id !== boardId);
                console.log(currentBoard);
                setBoards(currentBoard);

                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        }
    };

    const editModal = (e, boardId, name, desc) => {
        e.preventDefault();
        setUpdateModal(true);
        setInputName(name);
        setInputDesc(desc);
        setUpdateBoardId(boardId);
    };

    useEffect(() => {
        const getBoards = async () => {
            const api = await fetch(
                `https://api.trello.com/1/organizations/${id}/boards?key=${authorize.key}&token=${authorize.secret}`
            );
            const data = await api.json();
            setBoards(data);
        };

        console.log('dashboard');
        getBoards();
    }, []);

    return (
        <div>
            {updateModal && (
                <Modal
                    name={inputName}
                    desc={inputDesc}
                    Title="Update Board"
                    inputNameHandler={(e) => {
                        setInputName(e.target.value);
                    }}
                    inputDescHandler={(e) => {
                        setInputDesc(e.target.value);
                    }}
                    clickHandler={UpdateBoard}
                    closeHandler={closeModal}
                />
            )}
            {modalOpen && (
                <Modal
                    Title="Create Board"
                    inputNameHandler={(e) => {
                        setInputName(e.target.value);
                    }}
                    inputDescHandler={(e) => {
                        setInputDesc(e.target.value);
                    }}
                    clickHandler={createBoard}
                    closeHandler={closeModal}
                />
            )}
            <div>
                <h3>Boards</h3>
                <Wrapper>
                    {boards &&
                        boards.map((board, i) => (
                            <CardLink key={board.id} to={`/board/${board.id}?name=${board.name}`}>
                                <Card
                                    inputColor={
                                        colorArray[Math.floor(Math.random() * colorArray.length)]
                                    }
                                >
                                    <CardButton>
                                        <Edit2
                                            onClick={(e) => {
                                                editModal(e, board.id, board.name, board.desc);
                                            }}
                                        />

                                        <CloseCircle
                                            onClick={(e) => {
                                                deleteHandler(e, board.id);
                                            }}
                                        />
                                    </CardButton>
                                    <CardTitle>{board.name}</CardTitle>
                                </Card>
                            </CardLink>
                        ))}
                    <Card inputColor="#E0E9E9" onClick={openModalHandler}>
                        <TextCenter>Create new board</TextCenter>
                    </Card>
                </Wrapper>
            </div>
        </div>
    );
}

export default React.memo(Dashboard);
