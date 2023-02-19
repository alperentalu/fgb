import React, { useEffect } from "react";
import axios from "axios";
function Client() {
  useEffect(() => {
    
    axios.post('http://localhost:3000/login',{"username": "exampleuser", "password": "examplepassword" }).then((res) => {
      console.log(res)
      axios.get("http://localhost:3000/api/protected", { headers: { Authorization: `Bearer ${res.data.token}`}});
    })

  }, []);
  return <div>Client</div>;
}

export default Client;
