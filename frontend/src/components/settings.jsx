import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "./modal";

const user = {
    name: "Isabella Brown",
    title: "QA Engineer",
    email: "isabella.brown@devcorp.com",
    availableHours: "9am - 5pm EST",
  }

function Settings(props) {

    const navigate = useNavigate()
    const [ settingsChange, setSettingsChange ] = useState(true)
    const [ deleteView, setDeleteView ] = useState(false)

    return (<div className="relative flex flex-col gap-5 mx-5 my-5">
                <div className="flex flex-col gap-2 bg-white shadow-md py-3 px-5 rounded-lg">
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3 mb-3">Your Account Settings</p>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg mb-5" type="button" onClick={()=>navigate('/profile/0')}> <i className="fa-solid fa-angle-left"></i> Account</button>
                    <form className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <label><b>Name:</b> </label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" defaultValue={user.name} disabled={settingsChange} ></input>
                        </div>
                        <div className="flex items-center gap-3">
                            <label><b>Role:</b></label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" defaultValue={user.title} disabled={settingsChange} ></input>
                        </div>
                        <div className="flex items-center gap-3">
                            <label><b>Email:</b></label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" defaultValue={user.email} disabled={settingsChange} ></input>
                        </div>
                        <div className="flex items-center gap-3">
                            <label><b>Available Hours:</b></label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" defaultValue={user.availableHours} disabled={settingsChange} ></input>
                        </div>
                        <div className={`flex gap-3 ${settingsChange ? 'hidden' : null}`}>
                            <button className='w-fit bg-green-600 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg mt-5' type="button">Submit Changes</button>
                            <button className='w-fit bg-red-600 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg mt-5' type="button" onClick={()=>setSettingsChange(true)}>Cancel Changes</button>
                        </div>
                    </form>
                    <button className={`w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg mt-5 ${settingsChange ? null : 'hidden'}`} type="button" onClick={()=>setSettingsChange(false)}>Edit Information</button>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button" onClick={()=>navigate('change-password')}>Change Password</button>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button">Two Factor Authentification</button>
                    <button className="w-fit bg-red-600 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button" onClick={()=>setDeleteView(true)}>Delete Account</button>
                </div>
                <div className={`fixed top-0 left-0 flex justify-center items-center w-screen h-screen z-10 ${deleteView ? null : 'hidden'}`}>  
                    <div className="absolute bg-black opacity-50 w-full h-full">&nbsp;</div>
                    <div className="flex flex-col gap-2 justify-evenly items-center bg-white rounded-md shadow-md py-3 px-6 w-fit h-1/5 z-30">
                        <p className="text-center">If you would like to delete this user, please type:<br/> "Delete {user.name}"</p>
                        <input className="w-1/2 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" placeholder="Type the phrase" />
                        <div className="flex gap-3">
                            <button className="w-fit bg-red-600 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button">Delete</button>
                            <button className="w-fit bg-gray-600 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button" onClick={()=>setDeleteView(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>)
}

export default Settings