import { Routes, useLocation } from 'react-router-dom';

export default function ProtectedPages() {
    const location = useLocation();
    return <Routes location={location} key={location.pathname} />;
}
