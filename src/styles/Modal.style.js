import styled from 'styled-components';

const ModalStyle = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`;

const Close = styled.div`
    text-align: right;
    padding: 20px 30px 0 0;
`;
const CloseButton = styled.button`
    padding: 6px 8px;
    border-radius: 6px;
    font-size: 14px;
    background-color: #ff6f91;
    border: none;
    color: white;
    cursor: pointer;
`;

export { ModalStyle, Close, CloseButton };
