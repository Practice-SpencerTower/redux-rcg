import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import { authActions } from './store';

function App() {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    return (
        <>
            {isAuthenticated && <Auth />}
            <Header />
            <Counter />
        </>
    );
}

export default App;
