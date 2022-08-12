import styled from 'styled-components';

const FormStyle = styled.form`
    width: 400px;
    height: auto;
    margin: 80px auto;
    background: white;
    border-radius: 14px;
    text-align: center;
    box-shadow: 10px 8px 20px 15px rgba(0, 0, 0, 0.05);
`;

const FormHead = styled.h2`
    text-align: center;
    padding: 14px;
    border-bottom: 1px solid silver;
`;

const Level = styled.div`
    text-align: center;
    font-size: 18px;
    margin: 8px;
`;
const Input = styled.input`
    width: 90%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    margin: 10px 0px;
    border-radius: 8px;
    border: 0.5px solid #b0a8b9;
`;

const Button = styled.button`
    width: 90%;
    height: 50px;
    border: 1px solid;
    background: #2c73d2;
    border-radius: 10px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    margin: 20px 0px;

    &:hover {
        border-color: #2691d9;
        transition: 0.5s;
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
const SaveButton = styled.button`
    padding: 6px 12px;
    color: white;
    border-radius: 4px;
    background-color: #2c73d2;
    border-radius: 6px;
    border: none;
    cursor: pointer;
`;
const ExitsButton = styled.button`
    padding: 6px 12px;
    color: black;
    font-size: 18px;
    font-weight: 500;
    border-radius: 4px;
    background: none;
    border-radius: 6px;
    border: none;
    cursor: pointer;
`;

const Error = styled.p`
    font-size: 14px;
    color red ;
`;

export {
    FormStyle,
    FormHead,
    Level,
    Input,
    Button,
    InputBox,
    InputField,
    SaveButton,
    ExitsButton,
    Error,
};
