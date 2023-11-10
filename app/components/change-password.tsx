import { useNavigate } from "react-router-dom";
import React from "react";

const user = {
    name: "Isabella Brown",
    title: "QA Engineer",
    email: "isabella.brown@devcorp.com",
    availableHours: "9am - 5pm EST",
  }

function ChangePassword() {
    const navigate = useNavigate()

    return (<div className="flex flex-col gap-5 mx-5 my-5">
                <div className="flex flex-col gap-2 bg-white shadow-md py-3 px-5 rounded-lg">
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3 mb-3">Change Password</p>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg mb-5" type="button" onClick={()=>navigate('/settings')}> <i className="fa-solid fa-angle-left"></i> Settings</button>
                    <form className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <label><b>Current Password:</b> </label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="password" placeholder="Enter current password" ></input>
                        </div>
                        <div className="flex items-center gap-3">
                            <label><b>New Password:</b></label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="password" placeholder="Enter new password" ></input>
                        </div>
                        <div className="flex items-center gap-3">
                            <label><b>Confirm Password:</b></label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="password" placeholder="Confirm current password" ></input>
                        </div>
                        <button className='w-fit bg-green-600 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg mt-5' type="button">Submit Changes</button>
                    </form>
                </div>
            </div>)
}

export default ChangePassword;