import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Home.module.css";
import forest from "./forest.png";
import forest2 from "./foresttwo.png";

export const Home = () => {
    return (
        <div className={style.home}>
            <Header />
            {/* hero section */}
            <section className={style.hero}>
                <Container>
                    <div className={style.hero__flex}>
                    <div className={style.hero__leftSide}>
                        <h2 className={style.hero__headline}>Відкрий Україну заново — еко-мандри для натхнення</h2>
                        <p className={style.hero__describtion}>Подорожуй екологічно, відкривай заповідні місця, гори та річки України. Ми зібрали маршрути, які допоможуть побачити красу природи без шкоди для неї.</p>
                        <button className={style.hero__join}> Доєднатись до мандрів</button>
                    </div>
                    <img className={style.hero__img} src={forest} alt="forest" />
                </div>
                </Container>
            </section>

            {/* popular section */}

            <section className={style.popular}>
                <Container>
                    <div className={style.popular__top}>
                        <h2 className={style.popular__headline}>Популярні статті</h2>
                        <button className={style.popular__articles}>Всі статті</button>
                    </div>
                    <ul className={style.popular__articlesList}>
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
                    <div className={style.popular__arrows}>
                        <button className={style.popular__leftArrow}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.09502 12.8518L12.5968 18.3533C12.7668 18.5236 12.8527 18.7236 12.8545 18.9533C12.8565 19.1829 12.7726 19.3836 12.6028 19.5553C12.4328 19.7274 12.2322 19.8125 12.001 19.8105C11.7699 19.8085 11.5686 19.7226 11.3973 19.5528L4.44727 12.6028C4.35627 12.5108 4.29011 12.4151 4.24877 12.3158C4.20727 12.2163 4.18652 12.1108 4.18652 11.9993C4.18652 11.8878 4.20727 11.7825 4.24877 11.6835C4.29011 11.5844 4.35627 11.4889 4.44727 11.3973L11.4033 4.44127C11.5791 4.27144 11.7805 4.18652 12.0075 4.18652C12.2344 4.18652 12.4328 4.27144 12.6028 4.44127C12.7726 4.61527 12.8575 4.81602 12.8575 5.04352C12.8575 5.27119 12.7726 5.47027 12.6028 5.64077L7.09502 11.1483H19.2978C19.5419 11.1483 19.7459 11.2291 19.9098 11.3908C20.0736 11.5524 20.1555 11.7555 20.1555 12C20.1555 12.2445 20.0736 12.4476 19.9098 12.6093C19.7459 12.7709 19.5419 12.8518 19.2978 12.8518H7.09502Z" fill="#1B391B" />
                            </svg>
                        </button>
                        <button className={style.popular__rightArrow}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9051 12.8517H4.70234C4.45767 12.8517 4.25459 12.7709 4.09309 12.6092C3.93142 12.4476 3.85059 12.2445 3.85059 12C3.85059 11.7555 3.93142 11.5524 4.09309 11.3907C4.25459 11.2291 4.45767 11.1482 4.70234 11.1482H16.9051L11.4033 5.64674C11.2333 5.47674 11.1473 5.27649 11.1451 5.04599C11.1428 4.81532 11.2267 4.61457 11.3968 4.44374C11.5672 4.27224 11.7679 4.18749 11.9991 4.18949C12.2303 4.19149 12.4315 4.2774 12.6028 4.44724L19.5528 11.3972C19.6438 11.4892 19.71 11.5849 19.7513 11.6842C19.7928 11.7837 19.8136 11.8892 19.8136 12.0007C19.8136 12.1122 19.7928 12.2175 19.7513 12.3165C19.71 12.4157 19.6438 12.5111 19.5528 12.6027L12.5968 19.5527C12.421 19.7266 12.2196 19.8135 11.9926 19.8135C11.7658 19.8135 11.5673 19.7261 11.3973 19.5512C11.2275 19.3811 11.1426 19.1823 11.1426 18.955C11.1426 18.7278 11.2275 18.5292 11.3973 18.3592L16.9051 12.8517Z" fill="#1B391B" />
                            </svg>
                        </button>
                    </div>
                </Container>
            </section>

            {/* eco section */}

            <section className={style.eco}>
                <Container>
                    <div className={style.eco__flex}>
                    <div className={style.eco__left}>
                        <h2 className={style.eco__headline}>Мандруй екологічно та відкривай нові горизонти</h2>
                        <p className={style.eco__info}>Наш проєкт створений для тих, хто хоче досліджувати Україну відповідально. Ми допоможемо знайти унікальні маршрути, які поєднують красу природи, локальну культуру та принципи сталого туризму.</p>
                        <div className={style.eco__textBox}>
                            <div className={style.eco__box}>
                            <h3 className={style.eco__boxHeadline}>Еко-маршрути по Україні</h3>
                            <p className={style.eco__boxText}>Від Карпат до Чорного моря — добірка локацій, де можна подорожувати без шкоди для довкілля.</p>
                            </div>

                            <div className={style.eco__box}>
                            <h3 className={style.eco__boxHeadline}>Практичні екологічні поради</h3>
                            <p className={style.eco__boxText}>Дізнайся, як зменшити свій екологічний слід під час мандрів, та зробити подорож комфортною й свідомою.</p>
                            </div>
                        </div>
                    </div>
                    <img className={style.eco__img} src={forest2} alt="" />
                </div>
                </Container>

            </section>

            {/* our travellers section */}

            <section className={style.travellers}>
                <Container>
                    <div className={style.travellers__top}>
                        <h2 className={style.travellers__headline}>Наші Мандрівники</h2>
                        <button className={style.travellers__travs}>Всі мандрівники</button>
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
                    <div className={style.travellers__arrows}>
                        <button className={style.travellers__leftArrow}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.09502 12.8518L12.5968 18.3533C12.7668 18.5236 12.8527 18.7236 12.8545 18.9533C12.8565 19.1829 12.7726 19.3836 12.6028 19.5553C12.4328 19.7274 12.2322 19.8125 12.001 19.8105C11.7699 19.8085 11.5686 19.7226 11.3973 19.5528L4.44727 12.6028C4.35627 12.5108 4.29011 12.4151 4.24877 12.3158C4.20727 12.2163 4.18652 12.1108 4.18652 11.9993C4.18652 11.8878 4.20727 11.7825 4.24877 11.6835C4.29011 11.5844 4.35627 11.4889 4.44727 11.3973L11.4033 4.44127C11.5791 4.27144 11.7805 4.18652 12.0075 4.18652C12.2344 4.18652 12.4328 4.27144 12.6028 4.44127C12.7726 4.61527 12.8575 4.81602 12.8575 5.04352C12.8575 5.27119 12.7726 5.47027 12.6028 5.64077L7.09502 11.1483H19.2978C19.5419 11.1483 19.7459 11.2291 19.9098 11.3908C20.0736 11.5524 20.1555 11.7555 20.1555 12C20.1555 12.2445 20.0736 12.4476 19.9098 12.6093C19.7459 12.7709 19.5419 12.8518 19.2978 12.8518H7.09502Z" fill="#1B391B" />
                            </svg>
                        </button>
                        <button className={style.travellers__rightArrow}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9051 12.8517H4.70234C4.45767 12.8517 4.25459 12.7709 4.09309 12.6092C3.93142 12.4476 3.85059 12.2445 3.85059 12C3.85059 11.7555 3.93142 11.5524 4.09309 11.3907C4.25459 11.2291 4.45767 11.1482 4.70234 11.1482H16.9051L11.4033 5.64674C11.2333 5.47674 11.1473 5.27649 11.1451 5.04599C11.1428 4.81532 11.2267 4.61457 11.3968 4.44374C11.5672 4.27224 11.7679 4.18749 11.9991 4.18949C12.2303 4.19149 12.4315 4.2774 12.6028 4.44724L19.5528 11.3972C19.6438 11.4892 19.71 11.5849 19.7513 11.6842C19.7928 11.7837 19.8136 11.8892 19.8136 12.0007C19.8136 12.1122 19.7928 12.2175 19.7513 12.3165C19.71 12.4157 19.6438 12.5111 19.5528 12.6027L12.5968 19.5527C12.421 19.7266 12.2196 19.8135 11.9926 19.8135C11.7658 19.8135 11.5673 19.7261 11.3973 19.5512C11.2275 19.3811 11.1426 19.1823 11.1426 18.955C11.1426 18.7278 11.2275 18.5292 11.3973 18.3592L16.9051 12.8517Z" fill="#1B391B" />
                            </svg>
                        </button>
                    </div>
                </Container>
            </section>

            {/* join us section */}

            <section className={style.joinUs}>
                <Container>
                    <div className={style.joinCont}>
                    <h2 className={style.joinUs__headline}>Приєднуйся до спільноти свідомих мандрівників</h2>
                    <p className={style.joinUs__info}>Стань частиною ком’юніті, де подорожі стають не лише пригодою, а й внеском у збереження природи. Тут ти знайдеш однодумців, поради для сталих мандрів та натхнення для нових маршрутів Україною.</p>
                    <button className={style.joinUs__signup}>Зареєструватися</button>
                </div>
                </Container>
            </section>
            <Footer />
        </div>
    )
}