import React, { useState, useEffect } from 'react'
import { PageHeader, Card, Button, Icon } from 'antd'
import db from '../firebase'
import { Link } from '@reach/router'


const Post = props => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect( () => {     
    
    // bring the post from fbdb using its id
    let post = db
      .collection('users')
      .doc(props.uid)
      .collection('posts')
      .doc(props.id)

    // get the full document, convert it to a JS object and
    // use setState
    post.get().then( doc => {
      let { title, content } = doc.data()
      setTitle(title)
      setContent(content)
    })

  }, [])

  return (

    <div className='post_container'>

      <div className='page_header_container'>

        <PageHeader 
          style={{ border: '1px solid lightgray' }}
          title={ title }
        />

      </div>

    <div className='article_container'>
  
      <Card style={{ marginTop: '16px' }} >

        <div className='article_component'> 
        {
          content.split('\n').map( (line, i) => {
            return (
              <p key={i} className={`article_p_${i}`} style={{textAlign: 'justify'}}> 
                { line } 
              </p>
            )
          })
        }
        </div>
      </Card>
    </div>
  </div>
  )
}

export default Post