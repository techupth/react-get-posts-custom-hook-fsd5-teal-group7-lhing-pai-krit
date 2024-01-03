import { useState,useEffect } from "react";
import axios from "axios";

export function usePostList()
{


    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);


   

    useEffect(() => {
        getPosts();
      }, []);
  
    const getPosts = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        console.log("aaaaa")
        const results = await axios("http://localhost:4000/posts");
        setPosts(results.data.data);
        console.log(posts)
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };
  
  

    
    return {posts, isError, isLoading};
}