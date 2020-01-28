import React, { useState, useEffect } from 'react'
import AddCommentReduxForm from './AddCommentForm/CommentForm'
import { NavLink } from 'react-router-dom'
import {Container, BackLink, Title, TitleInput, Body, BodyTextarea, CommentList } from './SinglePost.styles'
import Comment from './Comment/Comment'


const SinglePost = ({ postId, post, editPost, addComment }) => {

   let [title, setTitle] = useState(post.title)
   let [titleEditMode, setTitleEditMode] = useState(false)

   let [body, setBody] = useState(post.body)
   let [bodyEditMode, setBodyEditMode] = useState(false)
   useEffect(() => {
      setTitle(post.title)
      setBody(post.body)
   }, [post])

   const toggleTitleEditMode = () => {
      if (!titleEditMode) {
         setTitleEditMode(true)
      } else {
         setTitleEditMode(false)
         editPost(postId, { title, body })
      }
   }
   const toggleBodyEditMode = () => {
      if (!bodyEditMode) {
         setBodyEditMode(true)
      } else {
         setBodyEditMode(false)
         editPost(postId, { title, body })
      }
   }

   let onAddNewComment = (values) => {
      addComment(postId, values)
   }

   return (
      <Container>
         <BackLink>
            <NavLink to='/posts'>back to posts</NavLink>
         </BackLink>
         {!titleEditMode &&
            <Title onClick={toggleTitleEditMode}>{post.title}</Title>
         }
         {titleEditMode &&
            <TitleInput onChange={e => setTitle(e.target.value)} onBlur={toggleTitleEditMode} autoFocus={true} value={title}></TitleInput>
         }
         {!bodyEditMode &&
            <Body onClick={toggleBodyEditMode}>{post.body}</Body>
         }
         {bodyEditMode &&
            <BodyTextarea rows='7' onChange={e => setBody(e.target.value)} onBlur={toggleBodyEditMode} autoFocus={true} value={body}></BodyTextarea>
         }
         <CommentList>
            <span>comments:</span>
            {post.comments && post.comments.map(item =>
               <Comment key={item.id} body={item.body}/>)
            }
         </CommentList>
         <AddCommentReduxForm onSubmit={onAddNewComment} />
      </Container>
   )
}

export default SinglePost