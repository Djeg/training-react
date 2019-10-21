import reducer, * as todos from './Todos'

test('the add todos reducer', () => {
  expect(todos.ADD_TODO).toEqual('todos/addTodo')

  const fetchData = {
    "todos": [
      {
        "name": "Learning React",
        "done": false,
        "id": 1
      },
      {
        "name": "Learning Redux",
        "done": false,
        "id": 2
      }
    ]
  }

  const state1 = reducer(todos.INITIAL_STATE, todos.addTodo(fetchData.todos))
  expect(state1.data).toEqual(fetchData.todos)
})

test('the toggle error reducer', () => {
  expect(todos.TOGGLE_ERROR).toEqual('todos/toggleError')

  const state1 = reducer(todos.INITIAL_STATE, todos.toggleError())
  expect(state1.hasError).toEqual(true)

  const state2 = reducer(state1, todos.toggleError())
  expect(state2.hasError).toEqual(false)
})
