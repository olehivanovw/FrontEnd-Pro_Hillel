import ContactAPI from "../../api/ContactAPI";

export const ACTION_CONTACT_CREATE = 'ACTION_CONTACT_CREATE'
export const ACTION_CONTACT_REMOVE = 'ACTION_CONTACT_REMOVE'
export const ACTION_CONTACT_EDIT = 'ACTION_CONTACT_EDIT'
export const ACTION_CONTACT_UPDATE = 'ACTION_CONTACT_UPDATE'
export const ACTION_SET_LIST = 'ACTION_SET_LIST'

export function create (contact) {
  return { type: ACTION_CONTACT_CREATE, payload: contact }
}

export function remove (id) {
  return { type: ACTION_CONTACT_REMOVE, payload: id }
}

export function edit (contact) {
  return { type: ACTION_CONTACT_EDIT, payload: contact }
}

export function update (contact) {
  return { type: ACTION_CONTACT_UPDATE, payload: contact }
}

export function setList (list) {
  return { type: ACTION_SET_LIST, payload: list }
}

export function statusContact (contact) {
  const newContact = {...contact, done: !contact.done}

  return saveContact(newContact)
}

export function getServerContacts () {
  return (dispatch) => {
    ContactAPI.getContact()
      .then((newList) => {
        dispatch(setList(newList))
      })
  }
}

export function saveContact (contact) {
  return (dispatch) => {
    if (contact.id) {
      ContactAPI.updateContact(contact.id, contact)
        .then(() => {
          dispatch(update(contact))
          dispatch(edit({}))
        })
    } else {
      ContactAPI.createContact(contact)
        .then((newTodo) => {
          dispatch(create(newTodo))
        })
    }
  }
}

export function removeContact (contact) {
  return (dispatch) => {
    ContactAPI.deleteContact(contact.id)
      .then(() => {
        dispatch(remove(contact.id))
      })
  }
}