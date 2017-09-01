const initialState = {
  user: null,
  test: 0
}

const butterflyPinnerApp = (state = initialState, action) => {
  switch (action.type) {
    case ("LOGIN_USER"):
      return Object.assign({}, state, {
        user: action.user
      })
    case ("TEST_ACTION"):
      return Object.assign({}, state, {
        test: action.test
      })
    default:
      return state;
  }
}

export default butterflyPinnerApp;