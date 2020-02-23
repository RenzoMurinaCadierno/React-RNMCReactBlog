import React, { useState } from 'react'
import { Router, navigate } from "@reach/router"
import { auth } from '../firebase'
import Navigation from './Navigation'
import Post from './Post'
import Signup from './Signup'
import Login from './Login'
import Posts from './Posts'
import Create from './Create'
import Edit from './Edit'

function App(props) {

  const [user, setUser] = useState( false )

  auth.onAuthStateChanged( user => {
    if (user) {
      setUser(user)         // set the returned user object
      navigate(`/blogs/${user.uid}/posts`)
    } else {
      console.log('no user signed in ')
    }
  })

  return (

    <div className='app_container'>

      <Navigation user={ user }/>

      <Router>
        <Login path='login' default />
        <Signup path='signup' />
        <Posts path='blogs/:uid/posts' user={ user }/>
        <Create path='create' user={ user } />
        <Edit path='edit/:id' user={ user } />
        <Post path='blogs/:uid/posts/:id' user={ user } />
      </Router>
    </div>
  )
}

export default App