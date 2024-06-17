import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/CardGrid.css';

const CardGrid = ({ cards, onCardClick }) => {
    const [shuffledCards, setShuffledCards] = useState([]);

    useEffect(() => {
        setShuffledCards(shuffleArray(cards));
    }, [cards]);

    const shuffleArray = (array) => {
        let newArray = array.slice();
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    return (
        <div className="card-grid">
            {shuffledCards.map((card, index) => (
                <Card key={index} image={card.image} text={card.text} onClick={() => onCardClick(card)} />
            ))}
        </div>
    );
};

export default CardGrid;
