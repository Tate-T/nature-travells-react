import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

export const Traveller = () => {
    return (
        <div className='Traveller'>
            <Header/>
            <section>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h4></h4>
                        <p></p>
                    </div>
                </div>
                <div>
                    <button>Збережені історії</button>
                    <button>Мої історії</button>
                </div>
                <h2>Статті Мандрівника</h2>
                <ul>
                    {/* <li>
                        <img src="" alt="" />
                        <div>
                            <p></p>
                            <h3></h3>
                            <button>Переглянути статтю</button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.6661 18.8341L7.8976 20.8741C7.32994 21.1188 6.79118 21.0729 6.28135 20.7364C5.77152 20.3999 5.5166 19.9237 5.5166 19.3079V5.09536C5.5166 4.63369 5.68552 4.23344 6.02335 3.89461C6.36102 3.55561 6.75985 3.38611 7.21985 3.38611H18.1124C18.574 3.38611 18.9743 3.55561 19.3131 3.89461C19.6521 4.23344 19.8216 4.63369 19.8216 5.09536V19.3079C19.8216 19.9237 19.5657 20.3999 19.0539 20.7364C18.542 21.0729 18.0023 21.1188 17.4346 20.8741L12.6661 18.8341ZM12.6661 17.0119L18.1124 19.3079V5.09536H7.21985V19.3079L12.6661 17.0119ZM12.6661 5.09536H7.21985H18.1124H12.6661Z" fill="black"/>
</svg>
                            </button>
                            </div>
                    </li>
                    li template */}
                </ul>
                <button>Показати ще</button>
            </section>
            <Footer/>
        </div>
    )
}