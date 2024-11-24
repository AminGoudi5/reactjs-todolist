import { useEffect, useState } from "react"
import TodoInput from "./Components/TodoInput"
import TodoList from "./Components/TodoList"


function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')


  function persitsData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo]
    if (newTodo !== '') {
      persitsData(newTodoList)
      setTodos(newTodoList)
    }

  }

  function handleDeletTodo(index) {
    const newTodoList = todos.filter((todo, todoindex) => {
      return todoindex !== index
    })
    persitsData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeletTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])
  return (
    <>
    <h1 className="header">What Todo?</h1>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodo={handleAddTodo} />
      <TodoList handleEditTodo={handleEditTodo} handleDeletTodo={handleDeletTodo} todos={todos} />
    </>
  )
}

export default App
