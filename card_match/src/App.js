import './App.css';
import {useEffect, useState} from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
    {"src": "/img/acorn.png", matched: false},
    {"src": "/img/bee.png", matched: false},
    {"src": "/img/cake.png", matched: false},
    {"src": "/img/croissant.png", matched: false },
    {"src": "/img/pancake.png", matched: false},
    {"src": "/img/cat.png", matched: false}
]

function App() {
    const[cards, setCards] = useState([])
    //array of cards
    const[turns, setTurns] = useState(0)
    //how many turns user taking to complete the cards
    const[choiceOne, setChoiceOne] = useState(null)
    const[choiceTwo, setChoiceTwo] = useState(null)
    const[disabled, setDisabled] = useState(false)

    //shuffle cards
    const shuffleCards = () =>{
        const shuffledCards = [...cardImages, ...cardImages]
        //create an array with 12 objects from cardImages
            .sort(() => Math.random()-0.5)
            .map((card)=>({...card, id:Math.random()}))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    // handle a choice
    const handleChoice = (card) => {
        console.log(card)
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {//map through all cards
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }

        }
    }, [choiceOne, choiceTwo])

    console.log(cards)

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }
    //start new game automatically
    useEffect(() => {
        shuffleCards()
    }, [])

    return (
    <div className="App">
        <h1>Card Match</h1>
        <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
            { cards.map(card =>(
                <SingleCard
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                 />
            ))}
        </div>
        <p>Turns: {turns}</p>
    </div>
    );
}

export default App;
