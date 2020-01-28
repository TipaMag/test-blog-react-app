import React from 'react'
import {CommentWrap, CommentBody} from './Comment.styles'

const Post = ({body}) => {
   return (
      <CommentWrap>
         <CommentBody>{body}</CommentBody>
      </CommentWrap>
   )
}

export default Post