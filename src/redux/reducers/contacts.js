import * as types from "../constants";

const initialState = {
  allContacts: {
    data: {},
    loading: false,
    error: ""
  },
  usContacts: {
    data: [],
    loading: false,
    error: ""
  }
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case types.GET_ALL_CONTACTS:
      return {
        ...state,
        allContacts: {
          ...state.allContacts,
          loading: true
        },
        usContacts: {
          data: [],
          loading: false,
          error: ""
        }
      };
    case types.GET_ALL_CONTACTS_SUCCED:
      return {
        ...state,
        allContacts: {
          ...state.allContacts,
          data: actions.payload.data,
          loading: false
        }
      };
    case types.GET_ALL_CONTACTS_FAILD:
      return {
        ...state,
        allContacts: {
          ...state.allContacts,
          loading: false,
          error: actions
        }
      };
    case types.GET_US_CONTACTS:
      return {
        ...state,
        usContacts: {
          data: [],
          error: "",
          loading: true
        }
      };
    case types.GET_US_CONTACTS_SUCCED:
      return {
        ...state,
        usContacts: {
          ...state.usContacts,
          data: actions.payload.data,
          loading: false
        }
      };
    case types.GET_US_CONTACTS_FAILD:
      return {
        ...state,
        usContacts: {
          ...state.usContacts,
          loading: false,
          error: actions.payload
        }
      };
    default:
      return state;
  }
}
