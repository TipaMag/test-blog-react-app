import * as Axios from "axios"

const instance = Axios.create({
    baseURL: 'https://bloggy-api.herokuapp.com/'
})


export const postsAPI = {
    getPosts() {
        return instance.get('posts')
    },
    getPost(postId) {
        return instance.get(`posts/${postId}/?_embed=comments`)
    },
    addPost(newPost) {
        return instance.post('posts', newPost)
    },
    updatePost(postId, postData) {
        return instance.put(`posts/${postId}`, postData)
    },
    deletePost(postId) {
        return instance.delete(`posts/${postId}`)
    },
    addComment(commentData) {
        return instance.post('comments', commentData)
    },
}