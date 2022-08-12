import React from 'react';
import { List, SLink } from '../styles/Nav.style';

export default function Nav() {
    return (
        <List>
            <SLink to="/dashboard">
                <h4>Dashboard</h4>
            </SLink>
            <SLink to="/logout">
                <h4>Logout</h4>
            </SLink>
        </List>
    );
}
