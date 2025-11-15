import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Travellers.module.css";

export const Travellers = () => {
    return (
        <div className={style.travellers}>
            <Header/>
            <section className={style.travellers__section}>
                <Container>
                                    <h1 className={style.travellers__sectionHeadline}></h1>
                <ul className={style.travellers__sectionList}>
                    {/* <li>
                        <img src="" alt="" />
                        <div>
                            <h3></h3>
                            <p></p>
                            <button>Переглянути профіль</button>
                        </div>
                    </li>
                    li template */}
                </ul>
                <button className={style.travellers__loadMore}>Показати ще</button>
                </Container>
            </section>
            <Footer/>
        </div>
    )
}

// I ACTUALLY DID IT I NAMED EVERY PAGE