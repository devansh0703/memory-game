import React, { useState, useEffect } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import CardGrid from './components/CardGrid';

function App() {
    const [cards, setCards] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
            const data = await response.json();
            const fetchedCards = data.results.map((item, index) => ({
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                text: item.name
            }));
            setCards(fetchedCards);
        } catch (error) {
            console.error('Error fetching cards:', error);
        }
    };

    const handleCardClick = (card) => {
        if (clickedCards.includes(card.text)) {
            setCurrentScore(0);
            setClickedCards([]);
        } else {
            const newScore = currentScore + 1;
            setCurrentScore(newScore);
            setClickedCards([...clickedCards, card.text]);
            if (newScore > bestScore) {
                setBestScore(newScore);
            }
        }
    };

    return (
        <div className="App">
            <h1>Memory Game</h1>
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
            <CardGrid cards={cards} onCardClick={handleCardClick} />
        </div>
    );
}

export default App;

