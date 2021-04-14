import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function NewTask() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <section className="new-task__container">
      <div className="new-task__title">
        <Link className="go-back" to="/">
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
            cols="50"
            onChange={(value) => setDescription(value.target.value)}
            value={description}
          >
            Add a description
          </textarea>
          <button type="submit">CREATE TASK</button>
        </form>
      </div>
    </section>
  );
}

export default NewTask;
