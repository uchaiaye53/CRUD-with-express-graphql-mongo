const Post = require("./post")
//resolver
const resolvers = {
    Query:{
        hello:()=>{
            return "hello world"
        },
        getUser:()=>{
            return{
                name:"Tina",
                age:23
            }
        },
        getAllPost:async()=>{
            return await Post.find();
        },
    },
    Mutation:{
        createPost:async(parent,args,context,info)=>{
            const {title,des} = args.post
            const post = await new Post({title,des}).save()
            return post

        },
        updatePost:async(parent,args,context,info)=>{
            const {id} = args
            const {title,des} = args.post
            const post = await Post.findByIdAndUpdate(id,{title,des},{new:true})
            return post
        },
        deletePost:async(parent,args,context,info)=>{
            const {id} = args
            await Post.findOneAndDelete(id)
            return "deleted"
        }
    }
}

module.exports = resolvers;

