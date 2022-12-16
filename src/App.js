import Header from './Header';
import Animes from './Animes';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Header />
            <p className='text-center mt-2' id='bevezeto'>Ez a weboldal 2022-es öszi anime szezonbol add némi betekintést.</p>
            <p className='text-center'>Forrás: <a href="https://www.myanimelist.net/" target='_blank' rel='noreferrer'>MyAnimeList</a></p>
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
