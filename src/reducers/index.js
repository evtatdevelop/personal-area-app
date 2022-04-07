const initialState = {
  contacts: [],
  filtered: [],
  currentContact: {},
  delForm: false,
  editForm: false,
  addForm: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CONTACTS_LOADED':
      return {
        ...state,
        contacts: action.payload,
        filtered: action.payload
      };

    case 'CONTACTS_FILTRED':
      return {
        ...state,
        filtered: action.payload
      };

    case 'FILTER_CLEAN':
      return {
        ...state,
        filtered: [...state.contacts]
      };

    case 'DEL_FORM':
      return {
        ...state,
        delForm: true,
        currentContact: state.contacts.find(item => item.id === action.payload)
      };

    case 'EDIT_FORM':
      return {
        ...state,
        editForm: true,
        currentContact: state.contacts.find(item => item.id === action.payload)
      };

    case 'ADD_FORM':
      return {
        ...state,
        addForm: true,
      };

    case 'FORMS_CLEAN':
      return {
        ...state,
        delForm: false,
        editForm: false,
        addForm: false,
        currentContact: {}
      };

    case 'DEL_CONTACT':
      return {
        ...state,
        delForm: false,
        currentContact: {}
      };

    case 'EDIT_CONTACT':
      return {
        ...state,
        editForm: false,
        currentContact: {}
      };

    case 'ADD_CONTACT':
      return {
        ...state,
        addForm: false
      };
  
    default:
      return state;
  }
}

export default reducer;