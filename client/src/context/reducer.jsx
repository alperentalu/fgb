export default function reducer(state, action) {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user };
      case "login":
      return { ...state, userLoggedIn: action.loggedIn };
    default:
      throw new Error();
  }
}
