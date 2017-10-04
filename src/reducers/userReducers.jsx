const initialState = {
  user: null,
  uid: null,
  token: null
};

const butterflyPinnerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        user: action.user,
        uid: action.uid,
        token: action.token
      });
    case 'LOGOUT_USER':
      return Object.assign({}, state, {
        user: null,
        uid: null,
        token: null
      });
    default:
      return state;
  }
};

export default butterflyPinnerApp;
