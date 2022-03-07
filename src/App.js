import './App.css';
// H should be caps in Header
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodos;
  if(localStorage.getItem('todosKey')===null){
    initTodos =[]
  }
  else{
    initTodos = JSON.parse(localStorage.getItem('todosKey'))
  }

  const [todos, setTodos] = useState(initTodos)
  useEffect(() => {
    localStorage.setItem("todosKey", JSON.stringify(todos))
  }, [todos])
  

  const addTodo = (title, desc)=>{
    console.log("adding a todo "+title+desc);
    let sno;
    todos.length===0?sno=1:sno=todos[todos.length-1].sno+1
    const newTodo={
      sno:sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,newTodo])  // way of adding ele in existing array
  }

  const onDelete = (todo) => {
    console.log("heyy! I am on Delete " + todo);
    // Deleting this way in  react does not work....solution - react state hook 
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1)  - this way object will not be deleted from DOM - react doesn't work like this..but angular does.
    setTodos(todos.filter((e) => {
      return e !== todo
    }))
  }

  // const [todos, setTodos] = useState([])
  // useEffect(() => {
  //   localStorage.setItem("todosKey", JSON.stringify(todos))
  // }, [todos])
  

  // const addTodo = (title, desc)=>{
  //   console.log("adding a todo "+title+desc);
  //   let sno;
  //   todos.length===0?sno=1:sno=todos[todos.length-1].sno+1
  //   const newTodo={
  //     sno:sno,
  //     title: title,
  //     desc: desc
  //   }
  //   setTodos([...todos,newTodo])  // way of adding ele in existing array
  // }

  // const onDelete = (todo) => {
  //   console.log("heyy! I am on Delete " + todo);
  //   // Deleting this way in  react does not work....solution - react state hook 
  //   // let index = todos.indexOf(todo);
  //   // todos.splice(index, 1)  - this way object will not be deleted from DOM - react doesn't work like this..but angular does.
  //   setTodos(todos.filter((e) => {
  //     return e !== todo
  //   }))
  // }
// ====================
  // const addTodo = (title, desc)=>{
  //   console.log("adding a todo "+title+desc);
  //   let sno;
  //   todos.length===0?sno=1:sno=todos[todos.length-1].sno+1
  //   const newTodo={
  //     sno:sno,
  //     title: title,
  //     desc: desc
  //   }
  //   setTodos([...todos,newTodo])  // way of adding ele in existing array
  //   localStorage.setItem("todosKey", JSON.stringify(todos))
  // }

  // const onDelete = (todo) => {
  //   console.log("heyy! I am on Delete " + todo);
  //   // Deleting this way in  react does not work....solution - react state hook 
  //   // let index = todos.indexOf(todo);
  //   // todos.splice(index, 1)  - this way object will not be deleted from DOM - react doesn't work like this..but angular does.
  //   setTodos(todos.filter((e) => {
  //     return e !== todo
  //   }))
  //   localStorage.setItem("todosKey", JSON.stringify(todos))
  // }

  // return (
  //   <>
  //   <Router>
  //     {/* these are not html but jsx */}
  //     {/* <Header title={45} searchBar={true} /> */}
  //     <Header title="My Todos List" searchBar={false} />
  //     <AddTodo addTodo={addTodo} />
  //     <Todos todos={todos} onDelete={onDelete} />
  //     <Footer />
  //   </Router>
  //   </>
  // );

  return (
    <>
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
