import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Store from '../context/GlobalContext'

function Login() {
  const {dispatch, state} = useContext(Store)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    console.log(state)
  },[])
  const submitLogin = () => {
    if(username && password) {
      const user = {
        name: 'Alp Eren',
        userId: 10,
        phone: '5422573278'
      }
      const loggedIn = true
      dispatch({type: 'setUser', user})
      dispatch({type: 'login', loggedIn})
    }
  }
  return (
    <div className='d-flex align-items-center'>
        <div className='card'>
          <div className="card-header">
            Hoş Geldiniz
          </div>
          <div className='card-body'>
            <div className='d-flex flex-column align-items-start mt-2'>
            <label>Username</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
            </div>
            <div className='d-flex flex-column align-items-start mt-2'>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
            </div>
            <div>
              <button onClick={submitLogin} className='btn btn-primary mt-2'>Giriş</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login