import React from 'react';
import './card.styles.css';

function Card(props) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.cat.id}?set=set4`} alt="profile" style={{width: 100}}/>
            <h3> {props.cat.name} </h3>
        </div>
    )
}

export default Card;