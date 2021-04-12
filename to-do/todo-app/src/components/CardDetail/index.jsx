import React, { useState } from 'react';
import cards from '../../constants/user';
import './index.scss';

const card = cards[0];

function CardDetails() {
  const [NameEdit, setNameEdit] = useState(false);

  return (
    <section className="card__container">
      {
      NameEdit
        ? (
          <div className={`card-name ${card.color}`}>
            <form>
              <input className={`${card.color}`} type="text" name="cardName" placeholder={`${card.name}`} />
              <button className="card-name--edit" type="button" onClick={() => setNameEdit(false)}>
                <i className="far fa-save" />
              </button>
            </form>
          </div>
        )
        : (
          <div className={`card-name ${card.color}`}>
            <p>{card.name}</p>
            <button className="card-name--edit" type="button" onClick={() => setNameEdit(true)}>
              <i className="far fa-edit" />
            </button>
          </div>
        )
    }
      {
        card.tasks && card.tasks.map((task) => (
          <div className="task__container">
            <p>{task.taskName}</p>
            <div>
              <p>{task.date}</p>
              <p>{task.hour}</p>
            </div>
          </div>
        ))
        }
      <button type="button" onClick={() => {}}>CREATE TASK</button>
    </section>
  );
}

export default CardDetails;
