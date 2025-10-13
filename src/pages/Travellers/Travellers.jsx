import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

export const Travellers = () => {
    return (
        <div className='Travellers'>
            <Header/>
            <section>
                <h1></h1>
                <ul>
                    {/* <li>
                        <img src="" alt="" />
                        <div>
                            <h3></h3>
                            <p></p>
                            <button>Переглянути профіль</button>
                        </div>
                    </li>
                    li template */}
                    <button>Показати ще</button>
                </ul>
            </section>
            <Footer/>
        </div>
    )
}