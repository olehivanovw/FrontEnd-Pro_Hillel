export const ACTION_TODO_CREATE = 'ACTION_TODO_CREATE'
export const ACTION_TODO_REMOVE = 'ACTION_TODO_REMOVE'
export const ACTION_TODO_EDIT = 'ACTION_TODO_EDIT'
export const ACTION_TODO_UPDATE = 'ACTION_TODO_UPDATE'

export function create (todo) {
  return { type: ACTION_TODO_CREATE, payload: todo }
}

export function remove (id) {
  return { type: ACTION_TODO_REMOVE, payload: id }
}

export function edit (todo) {
  return { type: ACTION_TODO_EDIT, payload: todo }
}

export function update (todo) {
  return { type: ACTION_TODO_UPDATE, payload: todo }
}