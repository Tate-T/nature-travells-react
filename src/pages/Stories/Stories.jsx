import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Stories.module.css";

export const Stories = () => {
    return (
        <div className="Stories">
            <Header />
            <section>
                <Container>
                    <h1>Статті</h1>
                    <ul>
                        <li><button>Всі статті</button></li>
                        <li><button>Маршрути</button></li>
                        <li><button>Еко-поради</button></li>
                        <li><button>Природа</button></li>
                        <li><button>Культура</button></li>
                        <li><button>Локальні продукти</button></li>
                    </ul>
                    <ul>
                        {/* <li>
                        <img src="" alt="" />
                        <div>
                            <p></p>
                            <h3></h3>
                            <button>Переглянути статтю</button>
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.6666 18.5007L7.89809 20.5407C7.33042 20.7854 6.79167 20.7395 6.28184 20.403C5.77201 20.0665 5.51709 19.5903 5.51709 18.9745V4.76198C5.51709 4.30032 5.68601 3.90007 6.02384 3.56123C6.36151 3.22223 6.76034 3.05273 7.22034 3.05273H18.1128C18.5745 3.05273 18.9748 3.22223 19.3136 3.56123C19.6526 3.90007 19.8221 4.30032 19.8221 4.76198V18.9745C19.8221 19.5903 19.5662 20.0665 19.0543 20.403C18.5425 20.7395 18.0028 20.7854 17.4351 20.5407L12.6666 18.5007ZM12.6666 16.6785L18.1128 18.9745V4.76198H7.22034V18.9745L12.6666 16.6785ZM12.6666 4.76198H7.22034H18.1128H12.6666Z" fill="black"/>
</svg>
                            </button>
                        </div>
                    </li>
                    li template */}
                        <button>Показати ще</button>
                    </ul>
                </Container>

            </section>
            <Footer />
        </div>
    )
}