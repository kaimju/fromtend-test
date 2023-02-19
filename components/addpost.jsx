import React from "react";

export const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.title.value, evt.target.body.value);
    evt.target.title.value = "";
    evt.target.body.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add User</h3>
      <input placeholder="title" name="title" />
      <input placeholder="body" name="body" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
