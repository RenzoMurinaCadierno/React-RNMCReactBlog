import React, { useState } from 'react'
import { Menu, Icon } from 'antd'
import { Link, navigate } from '@reach/router'
import { auth } from '../firebase'

const Navigation = props => {

  const [user, setUser] = useState( false )

  auth.onAuthStateChanged( user => {
    if (user) {
      setUser(user)         // set the returned user object
      navigate(`/blogs/${user.uid}/posts`)
    } else {
      console.log('no user signed in ')
    }
  })

  const signOut = async () => {
    
    await auth.signOut()
      .then( () => {
        console.log('logged out')
        setUser(false)
    })
      .catch( () => {
        console.log('error')
      })

    navigate('/login')
  }

  return (

    <div className='app_navigation'>

      <Menu mode="horizontal">
        {
          user
          &&
          <Menu.Item key="posts">
            <Link to={`/blogs/${user.uid}/posts`}> 
              <Icon type="home" /> Posts 
            </Link> 
          </Menu.Item>
        }
        { 
          user   // if the user is signed in, render create menu
          &&      
            <Menu.Item key="create">
              <Link to='/create'> <Icon type="plus" /> Create </Link> 
            </Menu.Item>
        }
        {
          user 
          ?
            <a onClick={ signOut } style={{ float: 'right '}}> 
              <Icon type="logout" /> Log out 
            </a>
          :
            <Link to='/login' style={{ float: 'right '}}> 
              <Icon type="login" /> Log in 
            </Link> 
        }
      </Menu>
    </div>
  )
}

export default Navigation