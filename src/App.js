import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global.style';

import Pages from './pages/Pages';

function App() {
    const authorize = JSON.parse(sessionStorage.getItem('auth')) || false;
    const LoggedIn = authorize.login;

    return (
        <div>
            <BrowserRouter>
                <GlobalStyle />
                <Pages isLoggedIn={LoggedIn} />
            </BrowserRouter>
        </div>
    );
}
export default App;
