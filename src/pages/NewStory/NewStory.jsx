import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

export const NewStory = () => {
    return (
        <div className='NewStory'>
            <Header/>
            <section>
                <h2>Створити нову історію</h2>
                <p>Обкладинка статті</p>
                <img src="" alt="Image" />
                <button>Завантажити фото</button>
                <form action="">
                    <p>Загаловок</p>
                    <input type="text" placeholder='Введіть заголовок історії' />
                    <p>Категорія</p>
                    <input type="text" placeholder='Категорія' />
                    <p>Текст історії</p>
                    <input type="text" placeholder='Ваша історія тут' />
                    <button>Зберегти</button>
                    <button>Відмінити</button>
                </form>
            </section>
            <Footer/>
        </div>
    )
}