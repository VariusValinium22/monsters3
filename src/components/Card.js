import React from 'react';
import './Card.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2> {props.monster.name} </h2>
        <p> { props.monster.email } </p>
        <p> { props.monster.address.city } </p>
        <p> { props.monster.company.name } </p>
        <p> { props.monster.phone } </p>
    </div>
);


