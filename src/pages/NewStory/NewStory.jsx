import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./NewStory.module.css";

export const NewStory = () => {
    return (
        <div className={style.new__story}>
            <Header />
            <section className={style.new__story-section}>
                <Container>
                    <h2 className={style.new__story-section-headline}>Створити нову історію</h2>
                    <p className={style.new__story-section-text}>Обкладинка статті</p>
                    <img className={style.new__story-section-img} src="" alt="Image" />
                    <button className={style.new__story-section-img-btn}>Завантажити фото</button>
                    <form className={style.new__story-section-form} action="">
                        <p className={style.new__story-form-headline-text}>Загаловок</p>
                        <input className={style.new__story-form-headline} type="text" placeholder='Введіть заголовок історії' />
                        <p className={style.new__story-form-category-text}>Категорія</p>
                        <input className={style.new__story-form-category} type="text" placeholder='Категорія' />
                        <p className={style.new__story-form-story-text}>Текст історії</p>
                        <input className={style.new__story-form-story} type="text" placeholder='Ваша історія тут' />
                        <button className={style.new__story-form-save}>Зберегти</button>
                        <button className={style.new__story-form-cancel}>Відмінити</button>
                    </form>
                </Container>

            </section>
            <Footer />
        </div>
    )
}