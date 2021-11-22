const {gql} = require('apollo-server-express')
//query
const typeDefs = gql`

type user{
    name: String
    age: Int
}

type Post{
    id:ID
    title:String
    des:String
}

input PostInput{
    title:String
    des:String
}

type Query{
    hello:String
    getUser:user
    getAllPost:[Post]
}

type Mutation{
    createPost(post:PostInput):Post
    updatePost(id:String,post:PostInput):Post
    deletePost(id:String):String
}
`
module.exports = typeDefs;