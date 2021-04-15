import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import loadTodos from '../../Redux/actions/toDoActionCreators';
import './index.scss';

function MyLists({ cards, actions }) {
  useEffect(() => {
    actions.loadTodos();
  }, []);

  return (
    <section className="todo">
      <header>
        <h1>My Lists</h1>
        <div className="profile-picture" />
      </header>
      <div className="my-lists__container">
        {
            cards && cards.map((card) => (
              <div className={`list__container ${card.color}`}>
                <div>
                  <h3>{card.name}</h3>
                </div>
                <ul>
                  {
                      card && card.tasks.map((task) => (
                        <li>
                          <input
                            id={task.name}
                            value={task.name}
                            type="checkbox"
                          />
                          <label htmlFor={task.name}>{task.name}</label>
                        </li>
                      ))
                    }
                </ul>
              </div>
            ))
        }
      </div>
    </section>
  );
}

MyLists.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MyLists);
