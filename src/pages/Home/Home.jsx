import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Home.module.css";


export const Home = () => {
    return (
        <div className="Home">
            <Header />
            {/* hero section */}
            <section className={style.hero}>
                <Container>
                    <div className={style.hero__}>
                        <h2 className={style.hero__}>Відкрий Україну заново — еко-мандри для натхнення</h2>
                        <p className={style.hero__}>Подорожуй екологічно, відкривай заповідні місця, гори та річки України. Ми зібрали маршрути, які допоможуть побачити красу природи без шкоди для неї.</p>
                        <button className={style.hero__}> Доєднатись до мандрів</button>
                    </div>
                    <img className={style.hero__} src="" alt="" />
                </Container>
            </section>

            {/* popular section */}

            <section className={style.popular}>
                <Container>
                    <div className={style.popular__}>
                        <h2 className={style.popular__}>Популярні статті</h2>
                        <button className={style.popular__}>Всі статті</button>
                    </div>
                    <ul className={style.popular__}>
                        {/* <li className={style.popular__}>
                        <img className={style.popular__} src="" alt="" />
                        <div className={style.popular__}>
                            <p className={style.popular__}></p>
                            <h3 className={style.popular__}></h3>
                            <button className={style.popular__}>Переглянути статтю</button>
                            <button className={style.popular__}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.6666 18.5007L7.89809 20.5407C7.33042 20.7854 6.79167 20.7395 6.28184 20.403C5.77201 20.0665 5.51709 19.5903 5.51709 18.9745V4.76198C5.51709 4.30032 5.68601 3.90007 6.02384 3.56123C6.36151 3.22223 6.76034 3.05273 7.22034 3.05273H18.1128C18.5745 3.05273 18.9748 3.22223 19.3136 3.56123C19.6526 3.90007 19.8221 4.30032 19.8221 4.76198V18.9745C19.8221 19.5903 19.5662 20.0665 19.0543 20.403C18.5425 20.7395 18.0028 20.7854 17.4351 20.5407L12.6666 18.5007ZM12.6666 16.6785L18.1128 18.9745V4.76198H7.22034V18.9745L12.6666 16.6785ZM12.6666 4.76198H7.22034H18.1128H12.6666Z" fill="black"/>
</svg>
                            </button>
                        </div>
                    </li>
                    li template */}
                    </ul>
                </Container>
            </section>

            {/* eco section */}

            <section className={style.eco}>
                <Container>
                    <div className={style.eco__}>
                        <h2 className={style.eco__}>Мандруй екологічно та відкривай нові горизонти</h2>
                        <p className={style.eco__}>Наш проєкт створений для тих, хто хоче досліджувати Україну відповідально. Ми допоможемо знайти унікальні маршрути, які поєднують красу природи, локальну культуру та принципи сталого туризму.</p>
                        <div className={style.eco__}>
                            <h3 className={style.eco__}>Еко-маршрути по Україні</h3>
                            <p className={style.eco__}>Від Карпат до Чорного моря — добірка локацій, де можна подорожувати без шкоди для довкілля.</p>

                            <h3 className={style.eco__}>Практичні екологічні поради</h3>
                            <p className={style.eco__}>Дізнайся, як зменшити свій екологічний слід під час мандрів, та зробити подорож комфортною й свідомою.</p>
                        </div>
                    </div>
                    <img className={style.eco__} src="" alt="" />
                </Container>

            </section>

            {/* our travellers section */}

            <section className={style.travellers}>
                <Container>
                    <div className={style.travellers__}>
                        <h2 className={style.travellers__}>Наші Мандрівники</h2>
                        <button className={style.travellers__}>Всі мандрівники</button>
                    </div>
                    <ul>
                        {/* <li className={style.travellers__}>
                        <img className={style.travellers__} src="" alt="" />
                        <div className={style.travellers__}>
                            <h3 className={style.travellers__}></h3>
                            <p className={style.travellers__}></p>
                            <button className={style.travellers__}>Переглянути профіль</button>
                        </div>
                    </li>
                    li template */}
                    </ul>
                </Container>
            </section>

            {/* join us section */}

            <section className={style.join__us}>
                <Container>
                    <h2 className={style.join__us__}>Приєднуйся до спільноти свідомих мандрівників</h2>
                    <p className={style.join__us__}>Стань частиною ком’юніті, де подорожі стають не лише пригодою, а й внеском у збереження природи. Тут ти знайдеш однодумців, поради для сталих мандрів та натхнення для нових маршрутів Україною.</p>
                    <button className={style.join__us__}>Зареєструватися</button>
                </Container>
            </section>
            <Footer />
        </div>
    )
}