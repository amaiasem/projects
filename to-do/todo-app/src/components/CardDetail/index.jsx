/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { loadCard } from '../../Redux/actions/toDoActionCreators';
import './index.scss';

function CardDetails({ match: { params }, card, actions }) {
  const [NameEdit, setNameEdit] = useState(false);
  const cardName = params.name;

  useEffect(() => {
    actions.loadCard(cardName);
  }, []);

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
              <p>{task.description}</p>
            </div>
          </div>
        ))
        }
      <Link className="task--create" to={`/card-details/${card.name}/new-task`}>
        <p>CREATE TASK</p>
      </Link>
    </section>
  );
}

CardDetails.propTypes = {
  card: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  }).isRequired,
  actions: PropTypes.shape({
    loadCard: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ cards }) {
  return {
    card: cards.card
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadCard }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
