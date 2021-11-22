import {gql} from '@apollo/client'

export const CreatePost=gql`
  mutation createPost($title: String, $des: String){
      createPost(post:{title: $title, des: $des}){
          id,
          title
      }
  }
`