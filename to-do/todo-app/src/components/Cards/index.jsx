import React from 'react';
import './index.scss';

const cards = [
  { name: 'Work', color: 'blue' },
  { name: 'Home', color: 'yellow' },
  { name: 'Family', color: 'purple' },
  { name: 'Shopping', color: 'red' }
];

function Cards() {
  return (
    <section className="container__cards">
      {
        cards.map((card) => (
          <a href="/" className={`card-item ${card.color}`}>
            <h2>{card.name}</h2>
          </a>
        ))
      }
      {/* <a href="/" className="card-item blue">
        <h2>{cards[0]}</h2>
      </a>
      <a href="/" className="card-item yellow">
        <h2>Home</h2>
      </a>
      <a href="/" className="card-item purple">
        <h2>Family</h2>
      </a>
      <a href="/" className="card-item red">
        <h2>Shopping</h2>
      </a> */}
      <a href="/" className="card-item new">
        <h2>New card +</h2>
      </a>
    </section>
  );
}

export default Cards;
