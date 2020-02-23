import React, { useState, useEffect } from 'react'
import { PageHeader } from 'antd'
import Article from './Article'
import _ from 'loadsh'
import db from '../firebase'

function Posts(props) {

  const [posts, setPosts] = useState( [] )

  // on-place delete method
  useEffect( () => {

    let queriedPosts

    // access the from the user uid only if user is available.
    // if it is not, grab it from props 
    let id = props?.user.uid ? props?.user.uid : props.uid

    // get the user's posts
    queriedPosts = db.collection('users').doc(id).collection('posts')

    // async the snapshot of the collection from the db
    queriedPosts.onSnapshot( async posts => {

      // wait for it to load and map all documents
      let renderedPosts = await posts.docs.map( post => {
      
        // for each of them construct the post
        let data = post.data()
        let { id } = post
        
        // return the post object
        return { id, ...data }
      })

      // once all posts are constructed, update the state
      setPosts(renderedPosts)   
    })

  }, [])
  
  return(
    <div className='posts_container'>

      <div className='page_header_container'>

        <PageHeader 
          style={{ border: '1px solid lightgray' }}
          title='Posts'
        />

      </div>

      <div className='articles_container'>
        {
          // vanilla JS :
          posts.map( (post, i) => 

            <Article 
              key={i} id={post.id} 
              title={ post.title.charAt(0).toUpperCase() + post.title.substring(1) } 
              content={ post.content }
              user={ props.user }
              uid={ props.uid }
            /> 
          )

          // loadash :
          // _.map(api, article => {
          //   return <Post title={ article.title } content={ article.content }/>
          // })
        }

      </div>
    </div>
  )
}

export default Posts