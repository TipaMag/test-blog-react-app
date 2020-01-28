import React, {useEffect} from 'react'
import { getPosts, addPost, deletePost } from '../../redux/posts-reducer'
import Posts from './Posts'
import { connect } from 'react-redux'

import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const PostsContainer = (props) => {
   useEffect(() => {
      props.getPosts()
   }, [])

   let onDeletePost = (postId) => {
      props.deletePost(postId)
   }
   return (
      <Posts {...props} addPost={props.addPost} onDeletePost={onDeletePost} />
   )
}

let mapStateToProps = (state) => ({
   posts: state.postsPage.postsData,
})
export default compose(
   connect(mapStateToProps, {
      getPosts,
      addPost,
      deletePost
   }),
   withRouter,
)(PostsContainer)