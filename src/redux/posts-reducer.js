import { postsAPI } from "../api/api"
import { reset } from 'redux-form'

const SET_POSTS = 'posts/SET_POSTS'
const SET_POST = 'posts/SET_POST'

let initialState = {
   postsData: [],
   postData: {}
}

const postsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_POSTS:
         return {
            ...state,
            postsData: action.posts
         }
      case SET_POST:
         return {
            ...state,
            postData: action.post
         }
      default:
         return state
   }
}

export const setPosts = (posts) => ({
   type: SET_POSTS,
   posts
})
export const setPost = (post) => ({
   type: SET_POST,
   post
})

export const getPosts = () => async (dispatch) => {
   let response = await postsAPI.getPosts()
   if (response.data) {
      dispatch(setPosts(response.data))
   }
}
export const getPost = (postId) => async (dispatch) => {
   let response = await postsAPI.getPost(postId)
   if (response.data) {
      dispatch(setPost(response.data))
   }
}
export const addPost = (formData) => async (dispatch) => {
   let response = await postsAPI.addPost(formData)
   if (response.status === 201) {
      dispatch(getPosts())
      dispatch(reset('addPostForm'))
   }
}
export const deletePost = (postId) => async (dispatch) => {
   let response = await postsAPI.deletePost(postId)
   if (response.status === 200) {
      dispatch(getPosts())
   }
}
export const editPost = (postId, formData) => async (dispatch) => {
   let response = await postsAPI.updatePost(postId, formData)
   if (response.status === 200) {
      dispatch(getPost(postId))
   }
}
export const addComment = (postId, formData) => async (dispatch) => {
   let commentData = {postId: +postId, body: formData.body}
   let response = await postsAPI.addComment(commentData)
   if (response.status === 201) {
      dispatch(getPost(postId))
      dispatch(reset('addCommentForm'))
   }
}

export default postsReducer