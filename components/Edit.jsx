import React, { useState, useEffect } from 'react'
import { PageHeader, Input, Button } from 'antd'
import db from '../firebase'
import { navigate } from '@reach/router'

const { TextArea } = Input

const Edit = props => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect( () => {     
    
    let post = db
      .collection('users')
      .doc(props.user.uid)
      .collection('posts')
      .doc(props.id)

    post.get().then( doc => {
      let { title, content } = doc.data()
      setTitle(title)
      setContent(content)
    })

  }, [])

  const titleChange = e => setTitle(e.target.value)
  const contentChange = e => setContent(e.target.value)

  const editPost = () => {

    let ref = db              // select only that post
      .collection('users')    // if it belongs to the user
      .doc(props.user.uid)    // owner
      .collection('posts')
      .doc(props.id)

    let info = { title, content }     

    ref
      .update(info)                
      .then(console.log('Updated successfully!', info.id))       
              
    navigate(`/blogs/${props.user.uid}/posts`)         
  }

  return (
  <>
    <div className='create_container'>
      <div className='page_header_container'>

        <PageHeader 
          style={{ border: '1px solid lightgray', marginBottom: '10px' }}
            title='Edit post'
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
        <Button type='primary' size='large' onClick={ editPost } > 
          Edit 
        </Button>
      </div>
    </div>
  </>
  )
}

export default Edit