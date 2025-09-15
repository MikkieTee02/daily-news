import { notFound } from 'next/navigation';
import React from 'react'

interface Post  {
    id: number,
    title:String,
    description: String,
    imageURL: String,
}



const getData = async () : Promise<Post[] | { posts: Post[]}> => {
    const res = await fetch("  http://localhost:3000/api/post" , {cache:"no-store"});
    if (!res.ok) 
        return notFound();
    return res.json();
    
}

const demo = async () => {

    const data = await getData();
    const posts: Post [] = Array.isArray(data)? data : data.posts || [];
  return (
    <div>
      
    </div>
  )
}

export default demo
