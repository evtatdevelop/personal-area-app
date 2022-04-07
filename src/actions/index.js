const contactsLoaded = (contacts) => {
  return {
    type: 'CONTACTS_LOADED',
    payload: contacts
  }
}

const contactsFiltred = (filtred) => {
  return {
    type: 'CONTACTS_FILTRED',
    payload: filtred
  }
}

const filtredClean = () => {
  return {
    type: 'FILTER_CLEAN'
  }
}

const delForm = (id) => {
  return {
    type: 'DEL_FORM',
    payload: id
  }
}

const editForm = (id) => {
  return {
    type: 'EDIT_FORM',
    payload: id
  }
}

const addForm = () => {
  return {
    type: 'ADD_FORM'
  }
}

const formsClean = () => {
  return {
    type: 'FORMS_CLEAN'
  }
}

const delContact = () => {
  return {
    type: 'DEL_CONTACT'
  }
}
const editContact = () => {
  return {
    type: 'EDIT_CONTACT'
  }
}
const addContact = () => {
  return {
    type: 'ADD_CONTACT'
  }
}

export {
  contactsLoaded,
  contactsFiltred,
  filtredClean,
  delForm,
  editForm,
  addForm,
  formsClean,
  delContact,
  editContact,
  addContact
}