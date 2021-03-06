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

const login = ({idToken, expiresIn}) => {
  const expDate = new Date(new Date().getTime() + expiresIn * 1000)
  localStorage.setItem('idToken', idToken)
  localStorage.setItem('expDate', expDate)
  return {type: 'LOGIN', payload: idToken}
}

const autoLogin = () => {
  const idToken = localStorage.getItem('idToken');
  if ( !idToken ) return {type: 'LOGOUT'}
  else {
    const expDate = new Date(localStorage.getItem('expDate'))
    if ( expDate <= new Date() ) return {type: 'LOGOUT'}
    else {
      localStorage.setItem('idToken', idToken)
      localStorage.setItem('expDate', expDate)
      return {type: 'LOGIN', payload: idToken}
    }
  }  
}

const logout = () => {
  localStorage.removeItem('idToken')
  localStorage.removeItem('expDate')
  return {type: 'LOGOUT'}
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
  addContact,
  loadingOn,
  login,
  logout,
  autoLogin
}