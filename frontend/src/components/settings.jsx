
const user = {
    name: "Isabella Brown",
    title: "QA Engineer",
    email: "isabella.brown@devcorp.com",
    availableHours: "9am - 5pm EST",
  }

function Settings() {
    return (<div className="flex flex-col gap-5 mx-5 my-5">
                <div className="flex flex-col gap-2 bg-white shadow-md py-3 px-5 rounded-lg">
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3 mb-3">Your Account Settings</p>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg mb-5" type="button"> <i className="fa-solid fa-angle-left"></i> Account</button>
                    <form className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <label><b>Name:</b> </label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" defaultValue={user.name} disabled ></input>
                        </div>
                        <div className="flex items-center gap-3">
                            <label><b>Role:</b></label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" defaultValue={user.title} disabled ></input>
                        </div>
                        <div className="flex items-center gap-3">
                            <label><b>Email:</b></label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" defaultValue={user.email} disabled ></input>
                        </div>
                        <div className="flex items-center gap-3">
                            <label><b>Available Hours:</b></label>
                            <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" type="text" defaultValue={user.availableHours} disabled ></input>
                        </div>
                    </form>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg mt-5" type="button">Edit Information</button>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button">Change Password</button>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button">Change Security Question</button>
                    <button className="w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button">Setup TFA</button>
                    <button className="w-fit bg-red-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button">Delete Account</button>
                </div>
            </div>)
}

export default Settings