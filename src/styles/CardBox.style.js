import styled from 'styled-components';

const CardBox = styled.div`
    padding: 4px 0;
`;
const CardLi = styled.div`
    padding: 10px 8px;
    color: #172b4d;
    margin: 6px 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    background-color: #fef6ff;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
const AddListButton = styled.input`
    width: 100%;
    padding: 10px 20px;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    background: none;
    color: #4b4453;
    text-align: left;
    border: none;
    margin: auto;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.8s;
    &:hover {
        background: rgba(176, 168, 185, 0.4);
    }
`;
const InputBox = styled.div`
    width: 100%;
`;
const InputField = styled.input`
    width: 100%;
    padding: 0 5px;
    height: 50px;
    color: #172b4d;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    margin: 10px 0px;
    border-radius: 6px;
    border: none;
`;

export { CardBox, CardLi, AddListButton, InputBox, InputField };
