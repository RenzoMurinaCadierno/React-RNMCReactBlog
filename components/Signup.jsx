import React, { useState } from 'react'
import { PageHeader, Input, Button } from 'antd'
import { auth } from '../firebase'

const Signup = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChange = e => setEmail(e.target.value)
  const passwordChange = e => setPassword(e.target.value)

  // same as firebase.auth(), but we exported it as auth
  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
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
        title={ 'Signup' }
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

        <a href="/login" className='registration_link'>
          Have an account? Login here.
        </a> 

        <Button 
          className='registration_button' 
          type='primary' 
          size='large'
          onClick={ signUp }
        > 
          Signup 
        </Button>
      </div>
    </div>
  )
}

export default Signup