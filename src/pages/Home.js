import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../context';

export default function Home() {

    const { user } = useAuth();

    return (
        <>
            <Header /> <br />
            APP HOME
            {user && (<div style={{ padding: 10, border: '10px solid red' }}> Bu alan sadece giriş işlemi yapılınca görünür</div>)}
            <Footer />
        </>
    )
}