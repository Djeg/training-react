import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleError } from '../State/Todos'

export const ToDos = () => {
  const dispatch = useDispatch()
  const hasError = useSelector(state => state.todos.hasError)
  
  useEffect(() => {
    const fetchDatas = async () => {
      if (hasError) {
        return;
      }

      try {
        const response = await fetch(process.env.REACT_APP_TODO_URL)
        const json = await response.json()
        dispatch(addTodo(json.todos))
      } catch {
        dispatch(toggleError())
      }
    }
    fetchDatas();
  }, [dispatch, hasError])

  return (
    <>
      <h3>ToDo List</h3>
      <ToDo />
    </>
  )
}

export const ToDo = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.data)
  const hasError = useSelector(state => state.todos.hasError)

  return (
    <>
      {
        hasError ? <div>Une erreur est survenu <button onClick={() => dispatch(toggleError())}>Recharger</button></div> :
        todos.map((todo, key) =>
        <div key={`todo-${todo.id}`}>{todo.name}</div>
        )
      }
    </>
  )
}
