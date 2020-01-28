import React from 'react'
import Post from './Post/Post'
import {Container, PostsList} from './Posts.styles'
import AddPostReduxForm from './AddPostForm/PostForm'


const Posts = ({posts, addPost, onDeletePost}) => {
   
   let onAddNewPost = (values) => {
      addPost(values)
   }

   return (
      <Container>
         <AddPostReduxForm onSubmit={onAddNewPost} />
         <PostsList>
            {posts.map(item =>
               <Post key={item.id}
               postId={item.id}
               title={item.title}
               body={item.body}
               onDeletePost={onDeletePost}/>)
            }
         </PostsList>
      </Container>
   )
}

export default Posts