import {gql} from '@apollo/client'

export const GetAllPost = gql`
{
  getAllPost{
    id,
    title,
    des
  }
}`