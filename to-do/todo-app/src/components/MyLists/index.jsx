/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import loadTodos, { createNewTask, deleteTask } from '../../Redux/actions/toDoActionCreators';
import './index.scss';

function MyLists({ cards, actions }) {
  const [taskName, setTaskName] = useState('');

  function createTaskCleanInputs(cardID) {
    actions.createNewTask(cardID, taskName);
    setTaskName('');
  }

  function percentageDone(totalTasks, doneTasks) {
    return (doneTasks / totalTasks) * 100;
  }

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
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
                  <div className="tasks__progress">
                    <label htmlFor="file">Done: </label>
                    <progress id="file" value={percentageDone(card.tasks.length, card.done)} max="100" />
                  </div>
                </div>
                <div className="list__content">

                  <ul className="blue2">
                    {
                    card && card.tasks.map((task) => (
                      <li>
                        <div>
                          <div className="check__icon">
                            {
                            task.done
                              ? <i className="fas fa-check" />
                              : <div />
                          }
                          </div>
                          <button type="button">
                            <p>{task.taskName}</p>
                          </button>
                        </div>
                        <button type="button" onClick={() => actions.deleteTask(card.name, task.taskName)}>
                          <i className="fas fa-times" />
                        </button>
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
                      type="button"
                      onClick={() => createTaskCleanInputs(card._id)}
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
    createNewTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ cards }) {
  return {
    cards: cards.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTodos, createNewTask, deleteTask }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLists);
