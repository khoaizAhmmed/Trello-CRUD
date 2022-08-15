import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardLink = styled(Link)`
    text-decoration: none;
    color: #697689;
`;
const Card = styled.div`
    height: 120px;
    width: 220px;
    padding: 6px;
    border-radius: 20px;
    background-color: ${(props) => props.inputColor};
    margin: 20px;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    h3 {
        text-align: center;
    }
`;

const CardTitle = styled.div`
    margin: 0px 12px 0px 12px;
    font-size: 17px;
    font-weight: 600;
    color: #ffffff;

    overflow-wrap: break-word;
`;
const CardButton = styled.div`
    text-align: right;
    padding: 4px 6px 2px 6px;
    svg {
        padding: 0 4px;
        size: 16px;
        color: #ffffff;
        opacity: 0.4;
        &:hover {
            opacity: 1;
            transition: 0.4s;
            scale: 1.4;
        }
    }
`;
const TextCenter = styled.p`
    text-align: center;
    height: 16px;
    margin: auto;
    color: #4b4453;
    margin: 40px 0px;
    transition: 0.4s;
    &:hover {
        scale: 1.2;
    }
`;
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
`;

export { Card, TextCenter, Gradient, CardTitle, CardButton, CardLink };
