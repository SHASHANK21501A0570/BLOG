import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Topbar from "./topbar/Topbar";
import { BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";

function App() {
  const user=false;
  return (
     
    <Router>
      <Topbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/register" element={user ?<Home/>:<Register/>}/>
      <Route path="/login" element={user ?<Home/>:<Login/>}/>
      <Route path="/write" element={user ?<Home/>:<Write/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
  </Router>
  
  );
}

export default App;
