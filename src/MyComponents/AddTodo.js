import React, { useState } from 'react';
export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            return alert("Title and Description can not be blank")
        }
        props.addTodo(title,desc)
    }
  return (
    <div className="container my-3">
        <h3>Add a Todo Item</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Todo Title:</label>
          <input
            type="text"
            value={title} onChange={(e)=>{setTitle(e.target.value)}}
            id="title"
            className="form-control"
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Todo Description:</label>
          <input
            type="password"
            value={desc} onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="password"
            placeholder="Add description"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success my-2">Add Todo</button>
      </form>
    </div>
  );
};

// once you click on Add Todo button, page will reload.
