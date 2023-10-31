import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/signup"
import Login from "./components/login";

function App() {
    return(<Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>)
}

export default App;