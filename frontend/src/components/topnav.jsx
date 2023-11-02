import { useRef } from "react";

function TopNav() {

    const dropdownMenu = useRef(null)
    const dropdownArrow = useRef(null)

    function expandDropdown() {
      dropdownArrow.current.classList.toggle('rotate-180')
      dropdownMenu.current.classList.toggle('opacity-0')
      dropdownMenu.current.classList.toggle('opacity-80')
      dropdownMenu.current.classList.toggle('h-0')
      dropdownMenu.current.classList.toggle('h-32')
      dropdownMenu.current.classList.toggle('pointer-events-none')
    }

    return(<div className="flex justify-between items-center w-full h-min py-3 px-8 bg-main-color shadow-md">
             <div>
                <p><b>User: </b>Demo Admin</p>
             </div>
             <div className="flex gap-2 text-gray-400 items-center bg-gray-100 rounded-3xl px-3 shadow">
                <input className="rounded-xl py-1 border-gray-300 text-black bg-gray-100 opacity-85 w-40 focus:w-60 focus:outline-0 active:outline-0 border-0 custom-transition" type="text" placeholder="Search"></input>
                <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
             </div>
             <div className="relative">
                <button type="button" className="flex gap-2 items-center"  onClick={expandDropdown}><i className="flex items-center pointer-events-none text-xl bg-third-color text-black h-min rounded-full py-0.5 px-2 fa-solid fa-user"></i><i className="flex items-center pointer-events-none fa-solid fa-angle-down duration-300" ref={dropdownArrow}></i></button>
                <ul className="flex flex-col justify-between items-start text-sm absolute bg-black text-white rounded p-3 right-0 list-none pointer-events-none h-0 opacity-0 duration-300" ref={dropdownMenu}>
                    <p><a href="/profile">Profile</a></p>
                    <p><a href="/notifications">Notifications</a></p>
                    <p><a href="/inbox">Inbox</a></p>
                    <p><a href="/settings">Settings</a></p>
                </ul>
             </div>
           </div>)
}

export default TopNav;