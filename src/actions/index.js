const contactsLoaded = (contacts) => {
  return {
    type: 'CONTACTS_LOADED',
    payload: contacts
  }
}


export {
  contactsLoaded
}