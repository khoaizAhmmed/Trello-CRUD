import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav';
import Authorization from './Authorization';
import BoardList from './BoardList';
import Dashboard from './Dashboard';
import Logout from './Logout';

export default function Pages({ isLoggedIn }) {
    return (
        <>
            {isLoggedIn && <Nav />}
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <Navigate to="/dashboard" /> : <Authorization />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/board/:id" element={<BoardList />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </>
    );
}
