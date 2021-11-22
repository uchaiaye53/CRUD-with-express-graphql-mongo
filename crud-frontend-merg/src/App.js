import { useMutation, useQuery } from '@apollo/client';
import { CreatePost } from './graphql/Mutation';
import { GetAllPost } from './graphql/Query';

function App() {

  const {loading, eror, data} = useQuery(GetAllPost)
  const [createPost,{err}] = useMutation(CreatePost)
  if(loading) return "loading"
  if(eror) return "eror happened"

  const addPost = ()=>{
    CreatePost({
      variables:{
        title:"BNG",
        des:"my bng"
      }
    })  
  }

  return( 
    <div className="App">

      {
        data.getAllPost.map((data)=>( 
          <p key={data.title}>
            {data.title} and.... {data.des}
          </p>
        ))
      }
      <br/>

      <button onClick={()=>addPost()}>ADD POST</button>
      
    </div>
  );
  
}

export default App;
