import React from 'react';
import './index.scss';

function Cards() {
  return (
    <section className="container__cards">
      <div className="card-item work">
        <h2>Work</h2>
      </div>
      <div className="card-item home">
        <h2>Home</h2>
      </div>
      <div className="card-item family">
        <h2>Family</h2>
      </div>
      <div className="card-item shopping">
        <h2>Shopping</h2>
      </div>
      <div className="card-item new">
        <h2>Add a card</h2>
      </div>
    </section>
  );
}

export default Cards;
