
function Nav() {
    return(<nav className="flex flex-col items-center w-1/5 h-screen bg-third-color text-black py-5 top-0 sticky">
                <i className="fa-solid fa-spider text-4xl mb-1"></i> 
                <p className="font-semibold text-xl">Bug Tracker</p>
                <div className="flex flex-col items-start gap-3 mt-10 h-full text-lg">
                    <a className="nav-link" href="/"><i className="nav-icon fa-solid fa-house"></i> Dashboard</a>
                    <a className="nav-link" href="/users"><i className="nav-icon fa-solid fa-user-group"></i>My Team</a>
                    <a className="nav-link" href="/my-tickets"><i class="nav-icon fa-solid fa-user-tag"></i> My Tickets</a>
                    <a className="nav-link" href="/new-ticket"><i class="nav-icon fa-solid fa-ticket-simple"></i> New Ticket</a>
                    <a className="nav-link" href="/my-tickets"><i class="nav-icon fa-solid fa-layer-group"></i> All Tickets</a>
                    <a className="nav-link" href="/users"><i className="nav-icon fa-solid fa-sitemap"></i>All Teams</a>
                    <a className="nav-link" href="/users"><i className="nav-icon fa-solid fa-users"></i>All Users</a>
                    <a className="nav-link" href="/manage"><i class="nav-icon fa-solid fa-users-gear"></i> Manage Users</a>
                    <a className="nav-link mt-auto" href="/logout"><i className="nav-icon fa-solid fa-arrow-right-from-bracket"></i> Log Out</a>
                </div>
           </nav>)
}

export default Nav