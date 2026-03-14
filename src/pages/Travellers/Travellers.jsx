import { Header } from '../../components/Header/Header.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';
import { Container } from "../../components/Container/Container.jsx";
import style from "./Travellers.module.css";
import placeholder from "../NewStory/placeholder.png";
import { useState, useEffect } from 'react';
import {getAPI} from "../../API/Stories/getAPI.jsx"

// import { Component } from 'react';

// export class Travellers extends Component {

//     state = {
//         travellers: [

//         ]
//     }

//     componentDidMount() {
//         this.getAPI()
//     }

//     getAPI = async () => {
//         await fetch("https://69749e44265838bbea956cab.mockapi.io/travellers").then((result) => result.json()).then((resultdata) =>
//             this.setState(({
//                 travellers: resultdata
//             }))
//         )
//     }

//     render() {
//         return (
//             <div className={style.travellers}>
//                 <Header />
//                 <section className={style.travellers__section}>
//                     <Container>


//                         <h1 className={style.travellers__sectionHeadline}>Мандрівники</h1>
//                         <ul className={style.travellers__sectionList}>
//                             {this.state.travellers.map(traveller => {
//                                 return <li>
//                                     <img src={traveller.avatar} alt={traveller.name} />
//                                     <div>
//                                         <h3>{traveller.name}</h3>
//                                         <p>Статей: {traveller.articles}</p>
//                                         <button>Переглянути профіль</button>
//                                     </div>
//                                 </li>
//                             })}

//                         </ul>


//                         <button className={style.travellers__loadMore}>Показати ще</button>
//                     </Container>
//                 </section>
//                 <Footer />
//             </div>
//         )
//     }
// }

export const Travellers = () => {
    const [travellers, setTravellers] = useState([])

    useEffect(() => {
            getAPI().then((resultdata) => setTravellers(resultdata))
    }, [])


    return (
        <div className={style.travellers}>
            <Header />
            <section className={style.travellers__section}>
                <Container>


                    <h1 className={style.travellers__sectionHeadline}>Мандрівники</h1>
                    <ul className={style.travellers__sectionList}>
                        {travellers.map(traveller => {
                            return <li>
                                <img src={traveller.avatar} alt={traveller.name} />
                                <div>
                                    <h3>{traveller.name}</h3>
                                    <p>Статей: {traveller.articles}</p>
                                    <button>Переглянути профіль</button>
                                </div>
                            </li>
                        })}

                    </ul>


                    <button className={style.travellers__loadMore}>Показати ще</button>
                </Container>
            </section>
            <Footer />
        </div>
    )
}