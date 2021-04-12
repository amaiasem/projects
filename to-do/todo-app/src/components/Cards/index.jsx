import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import cards from '../../constants/user';

function Cards() {
  return (
    <section className="container__cards">
      {
        cards.map((card) => (
          <Link to={`/card-details/${card.name}`} className={`card-item ${card.color}`}>
            <h2>{card.name}</h2>
          </Link>
        ))
      }
      <a href="/card-details" className="card-item new">
        <h2>New card +</h2>
      </a>
    </section>
  );
}

export default Cards;
