import React from "react";

const Store = React.createContext({
  count: 0,
  user: {
    name: '',
    userId: '',
    phone: ''
  }
});

export default Store;
