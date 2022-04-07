const contactsLoaded = (contacts) => ({type: 'CONTACTS_LOADED', payload: contacts})

const contactsFiltred = (filtred) => ({type: 'CONTACTS_FILTRED', payload: filtred})

const filtredClean = () => ({type: 'FILTER_CLEAN'})

const delForm = (id) => ({type: 'DEL_FORM', payload: id})

const editForm = (id) => ({type: 'EDIT_FORM', payload: id})

const addForm = () => ({type: 'ADD_FORM'})

const formsClean = () => ({type: 'FORMS_CLEAN'})

const delContact = () => ({type: 'DEL_CONTACT'})

const editContact = () => ({type: 'EDIT_CONTACT'})

const addContact = () => ({type: 'ADD_CONTACT'})

const loadingOn = () => ({type: 'LOADING'})

const login = () => ({type: 'LOGIN'})

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
  addContact,
  loadingOn,
  login
}