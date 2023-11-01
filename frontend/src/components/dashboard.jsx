
function Dashboard() {
    return(<div className="flex justify-between w-full h-min p-5 bg-fifth-color shadow-lg">
             <div>
                <p><b>User: </b>Demo Admin</p>
             </div>
             <a className="nav-link" href="/profile"><i className="nav-icon fa-solid fa-user"></i> Profile</a>
           </div>)
}

export default Dashboard;