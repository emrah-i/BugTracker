import { NavLink } from "react-router-dom"
import { useRef, useState } from "react"

function Nav() {

    const poke = useRef(null)
    const [ clickable, setClickable ] = useState(true)

    function pokeSpider() {

        if (!clickable) {
            return
        }

        setClickable(false)
        poke.current.classList.toggle('opacity-0')
        setTimeout(()=>{
            setClickable(true)
            poke.current.classList.toggle('opacity-0')
        }, 750)
    }

    return(<nav className="flex flex-col items-center w-1/5 h-screen bg-third-color text-black py-5 top-0 sticky">
                <div className="flex flex-col relative justify-center items-center cursor-pointer duration-200 hover:scale-105 hover:text-white" onClick={pokeSpider}>
                    <i className="fa-solid fa-spider text-4xl mb-1"></i> 
                    <p className="font-semibold text-xl">Bug Tracker</p>
                    <p className="poke opacity-0" ref={poke} >﹡poke﹡</p>
                </div>
                <div className="flex flex-col items-start gap-3 mt-10 h-full text-lg">
                    <NavLink className="nav-link" activeClassName="active" to="/"><i className="nav-icon fa-solid fa-house"></i> Dashboard</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/notifications"><i className="nav-icon fa-solid fa-bell"></i> Notifications</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/projects"><i className="nav-icon fa-solid fa-bars-progress"></i> Projects</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/new-ticket"><i className="nav-icon fa-solid fa-ticket-simple"></i> New Ticket</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/open-tickets"><i className="nav-icon fa-solid fa-envelope-open"></i> Open Tickets</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/closed-tickets"><i className="nav-icon fa-solid fa-envelope"></i> Closed Tickets</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/new-user"><i className="nav-icon fa-solid fa-user-plus"></i> New User</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/all-users"><i className="nav-icon fa-solid fa-users"></i> All Users</NavLink>
                    <NavLink className="nav-link mt-auto" activeClassName="active" to="/logout"><i className="nav-icon fa-solid fa-arrow-right-from-bracket"></i> Log Out</NavLink>
                </div>
           </nav>)
}

export default Nav