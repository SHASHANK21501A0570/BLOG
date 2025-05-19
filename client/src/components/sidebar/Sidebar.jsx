import "./sidebar.css"
import  { useEffect, useState } from 'react';
import axios from "axios";
export default function Sidebar() {
  const [cats,setCats]=useState([]);
  useEffect(()=>{
    const getCats=async()=>
    {
      const res=await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="pp" src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-465.jpg"
        alt=""/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi odit harum nesciunt nostrum, dolores illum.</p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          {
            cats.map((c)=>(
              <li className="sidebarListItem">{c.name}</li>
            ))}
          
     
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
     
      <i className="sidebarIcon fa-brands fa-square-twitter"></i>
      <i className="sidebarIcon fa-brands fa-square-whatsapp"></i>
      <i className="tsidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}
