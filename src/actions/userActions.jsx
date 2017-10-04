export const loginUser = args => {
  return {
    type: 'LOGIN_USER',
    user: args.user,
    token: args.token
  };
};
