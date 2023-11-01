import Nav from "./nav";
import { Outlet } from "react-router-dom";

function Home() {
    return (<div className="w-screen flex">
              <Nav />
              <Outlet />
            </div>);
}

export default Home;