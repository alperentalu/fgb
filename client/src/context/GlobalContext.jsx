import React from "react";

const Store = React.createContext({
  userLoggedIn: false,
  user: {
    name: '',
    userId: '',
    phone: ''
  }
});

export default Store;
