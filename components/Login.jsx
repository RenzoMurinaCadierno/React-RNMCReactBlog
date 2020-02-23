import React, { useState } from 'react'
import { PageHeader, Input, Button } from 'antd'
import { auth } from '../firebase'
import { navigate } from '@reach/router'

// asd@gmail.com
// testing

const Login = props => {
// testing@gmail.com
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChange = e => setEmail(e.target.value)
  const passwordChange = e => setPassword(e.target.value)

  // same as firebase.auth(), but we exported it as auth
  const logIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then( res => {
        console.log('logged in!')
        setEmail('')
        setPassword('')
        navigate(`/blogs/${res.user.uid}/posts`)
      })
      .catch(err => {
        console.log('error in signup:', err)
        // NOTE : clear fields if there is an error
      })
    
    setEmail('')
    setPassword('')
  }

  return (
    <div className='signup_container'>

      <PageHeader
        className='page_header_container'
        style={{ border: '1px solid lightgray', marginBottom: '10px' }}
        title={ 'Login' }
      />

      <div className='input_container'>

        <h2 className='input_title'> Email </h2>

        <Input 
          className='input_value'
          placeholder='Email' 
          onChange={ emailChange }
        />

        <h2 className='input_title' style={{ marginTop: '10px' }}> 
          Password
        </h2>

        <Input.Password 
          className='input_value'
          placeholder='Password' 
          onChange={ passwordChange }
        />
      </div>

      <div className='registration_container'>

        <a href='/signup' className='registration_link'>
          Do not have an account? Sign up here.
        </a> 

        <Button 
          className='registration_button' 
          type='primary' 
          size='large'
          onClick={ logIn }
        > 
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login