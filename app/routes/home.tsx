import Nav from "../components/nav";
import TopNav from "../components/topnav";
import { Outlet } from "@remix-run/react";
import React from "react";


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