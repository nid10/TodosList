import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  // console.log(props.todos);  // props.todos can be easily logged on console obvio
  let myStyle = {
    minHeight: "68vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {/* {props.todos} // wont be visible on screen as it is a list of objects
            {props.todos[0].title}  // will return title string on screen */}
      {props.todos.length === 0
        ? "No Todos to display - Todos List is empty"
        : props.todos.map((todo) => {
            // return <TodoItem todo={todo} onDelete={props.onDelete} /> -correct when no need to pass arg
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={() => {
                    props.onDelete(todo);
                  }}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};
