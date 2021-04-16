/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { createNewTask } from '../../Redux/actions/toDoActionCreators';
import './index.scss';

function NewTask({ match: { params }, actions }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const cardName = params.name;

  function createTaskCleanInputs() {
    actions.createNewTask(cardName, taskName, description);
    setTaskName('');
    setDescription('');
  }

  return (
    <section className="new-task__container">
      <div className="new-task__title">
        <Link className="go-back" to={`/card-details/${cardName}`}>
          <i className="fas fa-long-arrow-alt-left" />
        </Link>
        <h2>
          Create
          <br />
          New Task
        </h2>
        <form className="task-name">
          <input
            type="text"
            placeholder="Task Name"
            onChange={(event) => setTaskName(event.target.value)}
            value={taskName}
          />
          <textarea
            name="textarea"
            rows="10"
            cols="40"
            onChange={(value) => setDescription(value.target.value)}
            value={description}
          >
            Add a description
          </textarea>
          <button type="button" onClick={() => createTaskCleanInputs()}>CREATE TASK</button>
        </form>
      </div>
    </section>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ createNewTask }, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(NewTask);
