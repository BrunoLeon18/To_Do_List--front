import { useState } from "react";
import './style/Card.css'

const Card = ({ task, deleteTask, setUpdateInfo, setIsClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = () => {
    deleteTask("/todos", task.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(task);
    setIsClose(false)
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <article className="card__container">
      <h4 className="card__title">{task.title}</h4>
      <div className="card__task">
        <div className="card__check">
          <input className="card__input" type="checkbox" id="check" onClick={handleChecked} />
          <p className="card__label">{task.description}</p>
        </div>
        <div className="card__btn-contain">
        <button className='card__btn trash' onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="card__btn edit" onClick={handleUpdate}>
          <i className="bx bx-edit-alt"></i>
        </button>
        </div>
      </div>
      <p>{isChecked ? (task.completed = true) : ""}</p>
    </article>
  );
};

export default Card;
