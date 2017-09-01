export const loginUser = (user) => {
  return(
    {
      type: 'LOGIN_USER',
      user
    }
  );
};

export const testAction = (test) => {
  return {
    type: 'TEST_ACTION',
    test
  }
}
