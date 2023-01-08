export default function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "setCustom":
      return { ...state, count: action.value };
    case "setUser":
      return { ...state, user: action.user };
      case "login":
      return { ...state, userLoggedIn: action.loggedIn };
    default:
      throw new Error();
  }
}
