import styled from 'styled-components';

const ListWarp = styled.div`
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
`;
const ListBox = styled.div`
    min-width: 280px;
    height: auto;
    background: #d4e5ed;
    margin: 20px;
    padding: 14px;
    border-radius: 6px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
const ListTitle = styled.div`
    padding: 20px,
    font-size:16px;
    font-weight:600;
    padding:6px 4px;
    color:#4B4453;
`;
const AddListButton = styled.input`
    width: 100%;
    padding: 10px 20px;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    background: rgba(176, 168, 185, 0.4)
    color: #4b4453;
    text-align: left;
    border: none;
    margin: auto;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.8s;
`;

export { ListWarp, ListBox, ListTitle, AddListButton };
