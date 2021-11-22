const express = require("express")
const {ApolloServer} = require("apollo-server-express")
const mongoose = require("mongoose")
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

const URL = "mongodb://localhost:27017/express"

mongoose.connect(URL,{
    useUnifiedTopology: true,
    useNewUrlParser:true
},()=>console.log("DB connected"))



const startServer = async() =>{
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs, resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app})
    app.listen(4000,() => console.log("server connected to port 4000"))
}

startServer()