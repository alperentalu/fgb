import React, { useEffect } from "react";
import axios from "axios";
function Client() {
  useEffect(() => {
    
    // axios.get('http://localhost:3000/api/protected',{ headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImV4YW1wbGV1c2VyIiwicGFzc3dvcmQiOiJleGFtcGxlcGFzc3dvcmQifSwiaWF0IjoxNjc2ODQ0MjkxLCJleHAiOjE2NzY4NDc4OTF9.3av-rd9LJnPpl44K0gAJACzMzWbnE0dV1B6btT3U17U'}}).then((res) => {
    //   console.log(res)
    // })
    axios.get('http://localhost:3000/api/protected')
    // axios.post("http://localhost:3000/alp", {}, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImV4YW1wbGV1c2VyIiwicGFzc3dvcmQiOiJleGFtcGxlcGFzc3dvcmQifSwiaWF0IjoxNjc2ODQ0MjkxLCJleHAiOjE2NzY4NDc4OTF9.3av-rd9LJnPpl44K0gAJACzMzWbnE0dV1B6btT3U17U'}});
  }, []);
  return <div>Client</div>;
}

export default Client;
