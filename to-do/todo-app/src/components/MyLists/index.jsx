/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import loadTodos, {
  createNewTask, deleteTask, checkTask, updateCardColor, updateCardName
} from '../../Redux/actions/toDoActionCreators';
import './index.scss';

function MyLists({ cards, actions }) {
  const [taskName, setTaskName] = useState('');
  const [cardName, setCardName] = useState('');

  function createTaskCleanInputs(cardID) {
    actions.createNewTask(cardID, taskName);
    setTaskName('');
  }

  function updateNameResetInput(cardID) {
    actions.updateCardName(cardID, cardName);
    setCardName('');
  }

  function percentageDone(tasks) {
    let doneTasks = tasks.map((task) => (task.done ? 1 : 0));
    doneTasks = doneTasks.reduce((acc, current) => acc + current);

    return ((doneTasks / tasks.length) * 100).toFixed();
  }

  function updateTask(cardID, selectedTask) {
    const updateDoneTask = { ...selectedTask, done: !selectedTask.done };
    actions.checkTask(cardID, updateDoneTask);
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
                <div className="card__info">
                  <div className="card__title">
                    <h3>{card.name}</h3>
                    <button type="button" className="card__menu">
                      <i className="fas fa-bars" />
                    </button>
                    <div className={`drop-down__menu ${card.color}`}>
                      <div className="color__menu">
                        <p>Change color:</p>
                        <div>
                          <button
                            className="color--change blue"
                            type="button"
                            aria-label="save-color"
                            onClick={() => actions.updateCardColor(card._id, 'blue')}
                          />
                          <button
                            className="color--change yellow"
                            type="button"
                            aria-label="save-color"
                            onClick={() => actions.updateCardColor(card._id, 'yellow')}
                          />
                          <button
                            className="color--change red"
                            type="button"
                            aria-label="save-color"
                            onClick={() => actions.updateCardColor(card._id, 'red')}
                          />
                          <button
                            className="color--change purple"
                            type="button"
                            aria-label="save-color"
                            onClick={() => actions.updateCardColor(card._id, 'purple')}
                          />
                        </div>
                        <div className="card-name--change">
                          <label htmlFor="card-name">Change card name:</label>
                          <div>
                            <input
                              type="text"
                              placeholder={card.name}
                              onChange={(event) => setCardName(event.target.value)}
                              value={cardName}
                            />
                            <button
                              type="button"
                              onClick={() => updateNameResetInput(card._id)}
                            >
                              OK

                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tasks__progress">
                    <label htmlFor="file">Done: </label>
                    <progress id="file" value={percentageDone(card.tasks)} max="100" />
                    <p>{`${percentageDone(card.tasks)}%`}</p>
                  </div>
                </div>
                <div className="list__content">

                  <ul>
                    {
                    card && card.tasks.map((task) => (
                      <li>
                        <div>
                          <button type="button" className="check__icon" onClick={() => updateTask(card._id, task)}>
                            {
                            task.done
                              ? <i className="fas fa-check" />
                              : <div />
                          }
                          </button>
                          <p className={task.done ? 'task done' : 'task'}>{task.taskName}</p>
                        </div>
                        <button type="button" onClick={() => actions.deleteTask(card._id, task._id)}>
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
    deleteTask: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    updateCardColor: PropTypes.func.isRequired,
    updateCardName: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ cards }) {
  return {
    cards: cards.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      loadTodos, createNewTask, deleteTask, checkTask, updateCardColor, updateCardName
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyLists);
