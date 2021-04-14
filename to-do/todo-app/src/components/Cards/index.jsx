import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadTodos from '../../Redux/actions/toDoActionCreators';
import './index.scss';

function Cards({ cards, actions }) {
  useEffect(() => {
    actions.loadTodos();
  }, []);
  return (
    <section className="container__cards">
      {
        cards && cards.map((card) => (
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

Cards.propTypes = {
  cards: PropTypes.shape([]).isRequired,
  actions: PropTypes.shape({
    loadTodos: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ cards }) {
  return {
    cards: cards.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTodos }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
