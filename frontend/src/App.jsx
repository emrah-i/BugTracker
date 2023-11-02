import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/signup"
import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import MyTeam from "./components/my-team";
import MyTickets from "./components/my-tickets";

function App() {
    return(<Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="my-team" element={<MyTeam />} />
                    <Route path="my-tickets" element={<MyTickets />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>)
}

export default App;