import Nav from "./nav";
import { Outlet } from "react-router-dom";
import TopNav from "./topnav";

function Home() {

  return (<div className="relative w-screen flex">
            <Nav />
            <div className="flex flex-col bg-gray-100 w-screen"> 
              <TopNav />
              <Outlet />
            </div>
          </div>);
}

export default Home;