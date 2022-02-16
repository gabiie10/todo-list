import './feed.css';
import axios  from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import HeaderMain   from "../../components/HeaderMain/HeaderMain";

const Feed=()=>{
    const [post,setPost]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/cadastro")
        .then((response)=>{
            
            setPost(response.data);
        })
    },[])
    
    
    function deletePost(id){
       
        axios.delete(`http://localhost:5000/cadastro/${id}`)
        setPost(post.filter(post=>post.id !== id))
    }



    return(
        <div>
         <HeaderMain/>
         <main>
             <div className="cards">
             {post.map((post,key)=>{
                return(          
                    <div className="card" key={key}>
                       
                        <header>
                            <h2>{post.title}</h2>
                            
                        </header>
                        <p>{post.description}</p>
                        <div className="btns">
                            <div className="btn-edit">
                                <Link to={{pathname:`/edit/${post.id}`}}> <button>edit</button></Link>                               
                            </div>
                            
                            <div className="btn-delete">
                        <button onClick={()=>deletePost(post.id)}>delete</button>     </div>
                        </div>
                    </div> 
               ); 
            })}
 
             </div>
         </main>
        </div>
    )
}
export default Feed;