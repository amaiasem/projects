import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

function NewTask() {
  const [startDate, setStartDate] = useState(new Date());

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
      <form className="task-details">
        <div>
          <i className="far fa-calendar" />
          <DatePicker
            className="date-picker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </form>
    </section>
  );
}

export default NewTask;
