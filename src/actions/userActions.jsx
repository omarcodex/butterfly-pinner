export const loginUser = args => {
  return {
    type: 'LOGIN_USER',
    user: args.user,
    uid: args.uid,
    token: args.token
  };
};
