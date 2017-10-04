const initialState = {
  uid: null,
  token: null
};

const butterflyPinnerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        uid: action.uid,
        token: action.token
      });
    default:
      return state;
  }
};

export default butterflyPinnerApp;
