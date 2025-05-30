import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/posts"
import "./home.css"

import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function Home() {
  const [posts,setPosts]=useState([]);
  const location=useLocation();
  console.log(location)
  useEffect( () =>{
    const fetchPosts=async()=>{
      const res=await axios.get("/posts")
      setPosts(res.data);
    }
    fetchPosts()
  },[]);
  return (
    <>
    <Header/>
    <div className="home">
      <Posts posts={posts}/>
      <Sidebar/>
    </div>
    </>
  )
}
