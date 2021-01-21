import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

function CardList(props) {
    return (
        <div className="card-list">
            {props.cats.map((cat) => (
                <Card key={cat.id} cat={cat} />
            ))}
        </div>
    )
}

export default CardList;