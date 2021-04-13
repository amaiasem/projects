import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function NewTask() {
  return (
    <section className="new-task__container">
      <div className="new-task__title">
        <Link className="go-back" to="/">
          <i className="fas fa-long-arrow-alt-left" />
        </Link>
        <h2>
          Create
          {' '}
          <br />
          New Task
        </h2>
        <form>
          <input type="text" placeholder="Task Name" />
        </form>
      </div>
    </section>
  );
}

export default NewTask;
