import Header from './Header';
import Animes from './Animes';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="row">
                    <Animes />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
