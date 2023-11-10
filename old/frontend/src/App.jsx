import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/signup"
import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import NewTicket from "./components/new-ticket";
import NewUser from "./components/new-user";
import OpenTickets from "./components/open-tickets";
import Notifications from "./components/notifications";
import ClosedTickets from "./components/closed-tickets";
import AllUsers from './components/all-users';
import Settings from './components/settings';
import ChangePassword from './components/change-password';
import Ticket from './components/ticket';

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
                    <Route path="all-users" element={<AllUsers />} />
                    <Route path="profile/:accountId" element={<Profile />} />
                    <Route path="ticket/:ticketId" element={<Ticket />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="settings/change-password" element={<ChangePassword />} />
                    <Route path="admin/settings/:accountId" element={<Profile />} />
                </Route>
            </Routes>)
}

export default App;