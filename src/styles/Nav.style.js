import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0rem;
`;
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    height: 40px;
    margin: 0 20px;
    padding: 9px 25px;
    h4 {
        color: black;
        font-size: 18px;
    }
    &.active {
        background-color: rgba(0, 136, 169, 1);
        h4 {
            color: white;
        }
    }
`;

export { List, SLink };
