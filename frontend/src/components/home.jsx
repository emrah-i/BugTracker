import Nav from "./nav";
import { Outlet } from "react-router-dom";
import TopNav from "./topnav";

function Home() {
    return (<div className="w-screen flex">
              <Nav />
              <div className="w-full flex flex-col bg-gray-200 w-screen h-screen"> 
                <TopNav />
                <Outlet />
              </div>
            </div>);
}

export default Home;