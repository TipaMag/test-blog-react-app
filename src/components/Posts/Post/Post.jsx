import React from 'react'
import {PostWrap, PostTitle, PostBody, PostControls} from './Post.styles'
import { NavLink } from 'react-router-dom'
import Buttom from './../../../elements/Button'


const Post = ({postId, title, body, onDeletePost}) => {
   
   return (
      <PostWrap>
         <PostTitle>{title}</PostTitle>
         <PostBody>{body}</PostBody>
         <PostControls>
            <NavLink to={`/post/${postId}`}>open post</NavLink>
            <Buttom onClick={() => onDeletePost(postId)}>delete post</Buttom>
         </PostControls>
      </PostWrap>
   )
}

export default Post