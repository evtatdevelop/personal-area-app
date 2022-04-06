const initialState = {
  contacts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTS_LOADED':
      return {
        contacts: action.payload
      };
  
    default:
      return state;
  }
}

export default reducer;