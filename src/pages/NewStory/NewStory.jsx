import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./NewStory.module.css";
import placeholder from "./placeholder.png";

export const NewStory = () => {
    return (
        <div className={style.newStory}>
            <Header />
            <section className={style.newStory__section}>
                <Container>
                    <h2 className={style.newStory__headline}>Створити нову історію</h2>
                    <p className={style.newStory__text}>Обкладинка статті</p>
                    <img className={style.newStory__photo} src={placeholder} alt="Image" />
                    <button className={style.newStory__download}>Завантажити фото</button>

                    <form className={style.newStory__section__form} action="">
                        <p className={style.newStory__formText}>Загаловок</p>
                        <input className={style.newStory__formInp} type="text" placeholder='Введіть заголовок історії' />
                        <p className={style.newStory__formText}>Категорія</p>
                        <input className={style.newStory__formInp} type="text" placeholder='Категорія' />
                        <p className={style.newStory__formText}>Текст історії</p>
                        <input className={style.newStory__bigFormInp} type="text" placeholder='Ваша історія тут' />
                        <div className={style.newStory__buttons}>
                        <button className={style.newStory__formSave}>Зберегти</button>
                        <button className={style.newStory__formCancel}>Відмінити</button>
                        </div>
                    </form>

                </Container>

            </section>
            <Footer />
        </div>
    )
}