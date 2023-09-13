import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./style/FormTodo.css";

const FormTodo = ({
  createTask,
  setUpdateInfo,
  updateInfo,
  updateTask,
  isClose,
  setIsClose,
}) => {
  const { handleSubmit, reset, register } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const handleCloseForm = () => {
    setIsClose(!isClose);
  };

  const submit = (data) => {
    if (updateInfo) {
      updateTask("/todos", updateInfo.id, data);
      setUpdateInfo();
    } else {
      createTask("/todos", data);
    }
    reset({
      title: "",
      description: "",
    });
  };

  return (
    <div
      onClick={handleCloseForm}
      className={`form__container ${isClose && 'open-form'}`}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        className="form__task"
        onSubmit={handleSubmit(submit)}
      >
        <h2 className="form__title">Task</h2>
        <div className="group__task">
          <input
            className="input__task"
            {...register("title")}
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="group__task">
          <input
            className="input__task"
            {...register("description")}
            type="text"
            id="description"
            placeholder="Description"
          />
        </div>
        <button className="btn__task">
          {updateInfo ? "Update a new task" : "Add a new task"}
        </button>
      </form>
    </div>
  );
};

export default FormTodo;
