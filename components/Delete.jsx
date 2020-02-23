import React, { useState, useEffect } from 'react'
import { PageHeader, Input, Button } from 'antd'
import db from '../firebase'
import { navigate } from '@reach/router'

const { TextArea } = Input

const Delete = props => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [failSafe, setFailSafe] = useState('Delete')

  useEffect( () => {     
    
    let post = db.collection('posts').doc(props.id)

    post.get().then( doc => {
      let { title, content } = doc.data()
      setTitle(title)
      setContent(content)
    })

  }, [])

  const deletePost = () => {
    if (failSafe === 'Delete') {
      setFailSafe('Click to confirm')
    } else {
      db.collection('posts').doc(props.id).delete().then(
        console.log('Deleted successfully!')
      )            
      navigate('/posts')    
    }
  }

  return (
  <>
    <div className='create_container'>
      <div className='page_header_container'>

        <PageHeader 
          style={{ border: '1px solid lightgray', marginBottom: '10px' }}
            title='Delete post'
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
          />
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
          />
        </div>

      </div>

      <div className='input_button'>
        <Button type='danger' size='large' onClick={ deletePost } > 
          { failSafe } 
        </Button>
      </div>
    </div>
  </>
  )
}

export default Delete