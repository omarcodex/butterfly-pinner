const initialState = {
  user: null,
  token: null
};

const butterflyPinnerApp = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        user: action.user,
        token: action.token
      });
    default:
      return state;
  }
};

export default butterflyPinnerApp;
