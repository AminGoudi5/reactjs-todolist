import React from 'react'

const TodoInput = (props) => {
    const { handleAddTodo, todoValue, setTodoValue } = props
    
    const handleKeyDown=(e)=>{
        if(e.key==='Enter'){
            handleAddTodo(todoValue)
            setTodoValue('')
        }
    }
    
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} 
            onKeyDown={handleKeyDown}
            type="text" placeholder='Enter Todo ...' />
            <button onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}

export default TodoInput