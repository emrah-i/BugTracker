import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/signup"
import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import NewTicket from "./components/new-ticket";
import ManageUsers from "./components/manage-users";
import NewUser from "./components/new-user";
import OpenTickets from "./components/open-tickets";
import Notifications from "./components/notifications";
import ClosedTickets from "./components/closed-tickets";

function App() {
    return(<Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="new-ticket" element={<NewTicket />} />
                    <Route path="open-tickets" element={<OpenTickets />} />
                    <Route path="closed-tickets" element={<ClosedTickets />} />
                    <Route path="new-user" element={<NewUser />} />
                    <Route path="manage-users" element={<ManageUsers />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>)
}

export default App;