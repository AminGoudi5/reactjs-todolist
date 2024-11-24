import TodoCard from "./TodoCard"


const TodoList = (props) => {
  const { todos } = props

  return (
    <ul className="main">
      {todos.map((todos, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todos}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList