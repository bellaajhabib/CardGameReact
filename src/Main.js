import './App.css';
import LoadingPage from "./Loading/LoadingPage";
import axios from "axios";
import {URL_CARDS_RAND, URL_CARDS_SORT, SORT} from "./config/GloableVaraible";
import {useEffect, useState} from "react";


import ImageList from "./comp/ImageList";


function Main() {
    const [cards, setCards] = useState([]);
    const [tempCards, setTempCards] = useState([]);
    const [cardsPos, setCardsPos] = useState(URL_CARDS_RAND);
    const [loading, setLoading] = useState(true);
    const [showToggles, setShowToggles] = useState(true);
    const [buttonText, setButtonText] = useState("Tri par cartes");
    const handleClick = (toggle) => {
        setShowToggles(!toggle);
        setCards([]);
        setButtonText(showToggles ? 'Aléatoire' : "Tri par cartes");
        setCardsPos(URL_CARDS_RAND);
        setCards([...tempCards].sort((a, b) => a.value - b.value));
        console.log(tempCards);
        setLoading(true);
    }

    useEffect(() => {
        if (showToggles) {
            axios.get(cardsPos)
                .then(response => {
                    setCards(response.data);
                    setTempCards(response.data);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [showToggles]);


    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div className={"box"}>
                {loading ? <div><LoadingPage/></div> : <ImageList cards={cards}/>}
            </div>

            {!loading ?
                <div className="container bg-opacity-25">
                    <div className="col-md-12 text-center">
                        <button type="button"
                                className="btn btn-outline-warning"
                                onClick={() => handleClick(showToggles)}>
                            <span>{buttonText}</span></button>
                    </div>
                </div> : ''}

        </div>
    );
}

export default Main;
