import React from 'react';
import '../styles/Card.css';

const Card = ({ image, text, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={image} alt={text} />
            <p>{text}</p>
        </div>
    );
};

export default Card;
