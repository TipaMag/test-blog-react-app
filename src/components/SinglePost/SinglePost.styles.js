import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-flow: column wrap;
   border: 1px solid #ccc;
   padding: 10px;
`
export const BackLink = styled.div`
   a {
      display: inline-block;
      text-decoration: none;
      padding: 3px 5px;
      color: #fff;
      background-color: #ccc;
   }
`
export const Title = styled.h5`
   margin: 5px 0;
   cursor: pointer;
   &:hover {
      background-color: #ccc;
   }
`
export const TitleInput = styled.input`
   margin: 5px 0;
   padding: 5px;
`
export const Body = styled.p`
   margin: 0;
   cursor: pointer;
   &:hover {
      background-color: #ccc;
   }
`
export const BodyTextarea = styled.textarea`
   resize: none;
   padding: 5px;
`
export const CommentList = styled.ul`
   padding: 0;
   list-style: none;
`