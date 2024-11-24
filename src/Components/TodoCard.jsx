import React, { useState } from 'react'

const TodoCard = (props) => {
  const { children, handleDeletTodo, index, handleEditTodo } = props
  const [done, setDone] = useState(false)
  function handleDoneTask() {
    setDone(!done)
  }

  return (
    <li className='todoItem' style={{ backgroundColor: done ? 'green' : 'white' }}>
      {children}
      <div className="actionsContainer">
        <button onClick={() => { handleEditTodo(index) }}>
          <img width="26" height="26" src="https://img.icons8.com/metro/26/edit.png" alt="edit" />
        </button>
        <button onClick={() => { handleDeletTodo(index) }}>
          <img width="26" height="26" src="https://img.icons8.com/ios/50/trash.png" alt="trash" />
        </button>
        <input checked={done} onChange={handleDoneTask} type="checkbox" name="done" id="" />
      </div>
    </li>
  )
}

export default TodoCard