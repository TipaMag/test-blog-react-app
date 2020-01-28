import React, {useEffect} from 'react'
import { getPost, editPost, addComment } from '../../redux/posts-reducer'
import SinglePost from './SinglePost'
import { connect } from 'react-redux'

import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const SinglePostContainer = (props) => {
   let postId = props.match.params.postId
   useEffect(() => {
      props.getPost(postId)
   }, [])
   return (
      <SinglePost {...props} 
         postId={postId} 
         editPost={props.editPost}
         addComment={props.addComment}/>
   )
}

let mapStateToProps = (state) => ({
   post: state.postsPage.postData,
})
export default compose(
   connect(mapStateToProps, {
      getPost,
      editPost,
      addComment
   }),
   withRouter,
)(SinglePostContainer)