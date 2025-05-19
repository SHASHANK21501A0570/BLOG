import "./topbar.css"
import "./my.jpg"
import {Link} from 'react-router-dom'
export default function Topbar() {
  const user=false;
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-whatsapp"></i>
      </div>
      <div className="topCenter">
       <ul className="Toplist">
        <li className="topListItem">
          <Link className="link" to="/" >HOME</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to="/" >ABOUT</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to="/" >CONTACT</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to="/" >READ</Link>
        </li>
        <li className="topListItem">
        <Link className="link" to="/write" >WRITE</Link>
        </li>
        <li className="topListItem">
        {user && "LOGOUT"}
        </li>
       </ul>
      </div>
      <div className="topRight">
        {
          user?(

            <img 
        className="topImg"
        src="https://media.licdn.com/dms/image/D5603AQHdAlD1ZLuSQw/profile-displayphoto-shrink_800_800/0/1694180112386?e=2147483647&v=beta&t=8IC89FmPSzJuN6AWcTzVnQhNK7--uJM20phBtnF9tOU" 
        alt=" "/>

          ):
          (
            <ul className="Toplist">
              <li className="topListItem">
            <Link className="link" to="/login" >LOGIN</Link>
            </li>
            <li className="topListItem">
            <Link className="link" to="/register" >REGISTER</Link>
            </li>
            </ul>
          )
        }
        
      </div>
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
    </div>
  )
}
