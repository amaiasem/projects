/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import loadTodos, { createNewTask } from '../../Redux/actions/toDoActionCreators';
import './index.scss';

function MyLists({ cards, actions }) {
  const [taskName, setTaskName] = useState('');

  function createTaskCleanInputs(cardName) {
    actions.createNewTask(cardName, taskName);
    setTaskName('');
  }

  useEffect(() => {
    actions.loadTodos();
  }, []);

  return (
    <section className="todo">
      <header>
        <h1>My Lists</h1>
        <div className="profile__container">
          <p>Logout</p>
          <div className="profile-picture" />
        </div>
      </header>
      <div className="my-lists__container">
        {
            cards && cards.map((card) => (
              <div className={`list__container ${card.color}`}>
                <div className="list__title">
                  <h3>{card.name}</h3>
                </div>
                <div className="list__content">

                  <ul className="blue2">
                    {
                    card && card.tasks.map((task) => (
                      <li>
                        <input
                          id={task.taskName}
                          value={task.taskName}
                          type="checkbox"
                        />
                        <label htmlFor={task.taskName}>
                          {task.taskName}
                        </label>
                      </li>
                    ))
                    }
                  </ul>
                  <div className="new-task__container">
                    <input
                      type="text"
                      placeholder="New task"
                      onChange={(event) => setTaskName(event.target.value)}
                      value={taskName}
                    />
                    <button
                      className="blue"
                      type="button"
                      onClick={() => createTaskCleanInputs(card.name)}
                    >
                      Add

                    </button>
                  </div>
                </div>
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
    loadTodos: PropTypes.func.isRequired,
    createNewTask: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ cards }) {
  return {
    cards: cards.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTodos, createNewTask }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLists);
