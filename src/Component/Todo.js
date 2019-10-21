import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleError, reloadTodo } from '../State/Todos'

export const ToDos = () => {
  const dispatch = useDispatch()
  const reloadCounter = useSelector(state => state.todos.reloadCounter)
  const hasError = useSelector(state => state.todos.hasError)
  
  useEffect(
    () => {
      let url = reloadCounter > 0 ? '/todos.json' : 'http://tata.com/todos.json'

      fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        if (hasError) {
          dispatch(toggleError())
        }
        dispatch(addTodo(json.todos))
      })
      .catch(() => {
        if (!hasError) {
          dispatch(toggleError())
        }
      })
    },
    [dispatch, reloadCounter],
  );

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
        hasError ? <div>Une erreur est survenu <button onClick={() => dispatch(reloadTodo())}>Recharger</button></div> :
        todos.map((todo, key) =>
        <div key={`todo-${todo.id}`}>{todo.name}</div>
        )
      }
    </>
  )
}
