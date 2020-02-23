import React, { useState, useEffect } from 'react'
import { PageHeader, Input, Button } from 'antd'
import db from '../firebase'
import { navigate } from '@reach/router'

const { TextArea } = Input

const Create = props => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const titleChange = e => setTitle(e.target.value)
  const contentChange = e => setContent(e.target.value)

  const createPost = () => {

    let ref = db
      .collection('users')    // when a user creates a collection
      .doc(props.user.uid)    // add it to his own posts collection
      .collection('posts')    // by its uid

    let info = { title, content }     // payload to save to fb db

    ref
      .add(info)                      // add the payload to the collection
      .then(console.log('Created successfully!', info.id)) // fb functions are promises!
    
    setTitle('')                      // set title to ''
    setContent('')                    // set content to ''
    navigate(`/blogs/${props.user.uid}/posts`)                // go back to posts/
  }

  return (
  <>
    <div className='create_container'>
      <div className='page_header_container'>

        <PageHeader 
          style={{ border: '1px solid lightgray', marginBottom: '10px' }}
            title='Create post'
        />

      </div>
    </div>

    <div className='inputs_container'>

      <div className='input_container'>

        <div className='input_title'>
          <h2> Post title </h2>
        </div>

        <div className='input_value'>
          <Input 
            value={ title }
            placeholder='Post title' 
            onChange={ titleChange }/>
        </div>

      </div>

      <div className='input_container'>

        <div className='input_title'>
          <h2> Post Content </h2>
        </div>

        <div className='input_value'>
          <TextArea 
            rows={ 10 } 
            value={ content }
            placeholder='Post content' 
            onChange = { contentChange }
          />
        </div>

      </div>

      <div className='input_button'>
        <Button type='primary' size='large' onClick={ createPost } > 
          Create 
        </Button>
      </div>
    </div>
  </>
  )
}

export default Create