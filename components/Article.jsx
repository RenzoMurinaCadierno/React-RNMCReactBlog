import React, { useState, useEffect } from 'react'
import { Card, Icon, Popconfirm } from 'antd'
import { Link } from '@reach/router'
import db from '../firebase'
// import regeneratorRuntime from "regenerator-runtime"
import "regenerator-runtime/runtime"

const Article = props => {

  const [posts, setPosts] = useState( [] )

  let content = props.content.length > 200 ? 
    props.content.substring(0, 200) + ' ...' : 
    props.content

  const deletePost = () => {
    console.log('deleting post...')
    db
      .collection('users')
      .doc(props.user.uid)
      .collection('posts')
      .doc(props.id)
      .delete()
  }

  // on-place delete method 
  return (

    <div className='article_container'>

      <Card 
        title={ props.title } 
        extra={
          <>
          {
            props.user 
            &&
            <>
              <Popconfirm
                title='Sure to delete this post?'
                onConfirm={ deletePost }
                okType='danger' okText='Delete'
                cancelText='Cancel' 
                icon={ <Icon type="warning" style={{ color: 'orange' }}/> }
              >
                <span title='Delete'>
                  <Icon 
                    type="delete" 
                    style={{ color: 'darkred', marginLeft: '15px', cursor: 'pointer' }}/>
                </span>
              </Popconfirm>
                  
              <Link to={`/edit/${props.id}`} style={{ marginLeft: '15px'}}> 
                <span title='Edit'>
                  <Icon type="edit" style={{ color: '#0275d8' }}/> 
                </span>
              </Link>
            </>
          }
            <Link to={`${props.id}`} style={{ marginLeft: '15px'}}> 
              <span title='Read article'>
                <Icon type="read" style={{ color: 'black', fontSize: '1.2em' }}/> 
              </span>
            </Link>
          </>
        } 
        style={{ marginTop: '16px' }} 
      >
        {
          content.split('\n').map( (line, i) => {
            return (
              <p key={i} style={{textAlign: 'justify'}}> 
                { line } 
              </p>
            )
          })
        }

      </Card>

    </div>
  )
}

export default Article