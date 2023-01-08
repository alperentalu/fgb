import React from "react";

const Store = React.createContext({
  count: 0,
  userLoggedIn: false,
  user: {
    name: '',
    userId: '',
    phone: ''
  }
});

export default Store;
