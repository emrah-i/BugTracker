import { useState, useRef } from "react"

function NewUser() {

    const [ inputOption, setInputOption ] = useState('text')
    const [ superiors, setSuperiors ] = useState([])
    const selectContributors = useRef(null)

    function removeSuperior(ind) {

        setSuperiors(prevState => {
            const newState = prevState.filter(item => item !== ind)
            return [...newState];
        });
    }

    return (<div className="bg-main-color mx-5 mt-5 pt-3 pb-5 px-5 shadow-md rounded-lg">
                <p className="heading border-gray-200 border-solid border-b-2 pb-3">New User</p>
                <form className="flex flex-col gap-5 w-2/3 mx-auto mt-5">
                    <div className="flex justify-around">
                        <label>
                        <input className="active:ring-0" type="radio" name="inputRoleType" value="text" defaultChecked onClick={()=>setInputOption('text')} /> New Role
                        </label>
                        <label className="text-left">
                        <input type="radio" name="inputRoleType" value="dropdown" onClick={()=>setInputOption('dropdown')} /> Existing Role
                        </label>
                    </div>
                    <div className="flex justify-around">
                        <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" disabled={!(inputOption === 'text')} type="text" placeholder="Role"></input>
                        <select defaultValue={'none'} className="w-2/5 shadow-md py-1.5 pl-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" disabled={(inputOption === 'text')} type="text">
                            <option value={'none'} disabled >Select a role</option>
                        </select>
                    </div>
                    <div>
                        <label className="mr-3">First Name:</label>
                        <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" placeholder="Enter first name" type="text"></input>
                    </div>
                    <div>
                        <label className="mr-3">Last Name:</label>
                        <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" placeholder="Enter last name" type="text"></input>
                    </div>
                    <div>
                        <label className="mr-3">Email:</label>
                        <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" placeholder="Enter email address" type="email"></input>
                    </div>
                    <div>
                        <label className="mr-3">Placeholder Password:</label>
                        <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" placeholder="Enter password" type="text"></input>
                    </div>
                    <div>
                        <label className="mr-3">Superiors:</label>
                        <select defaultValue={'none'} className="w-2/5 mr-3 shadow-md py-2 px-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project" ref={selectContributors} >
                            <option value={'none'} disabled >Select a team member</option>
                            {/* {fakeTeam.map((element, index)=>{
                                return <option key={index}>{element}</option>
                            })} */}
                        </select>
                        <button className="shadow-md bg-sec-color text-main-color rounded-lg py-1 px-2 hover:rounded-xl duration-300" type="button" >Add</button>
                    </div>
                    {superiors.length !== 0 && <div className="flex flex-col gap-2">
                        {superiors.map((element, index)=>{
                            return <div key={index} className="flex justify-between items-center w-fit bg-gray-100 py-1 px-2 rounded-lg shadow"><p className="pr-3">{element}</p><button type="button" onClick={()=>removeSuperior(element)} ><i className="pl-3 text-red-500 text-lg fa-solid fa-xmark"></i></button></div>
                        })}
                    </div>}
                    <button className="shadow-md mx-auto w-fit bg-sec-color text-main-color rounded-lg py-1 px-2 hover:rounded-xl duration-300" type="button">Create User</button>
                </form>
            </div>)
}

export default NewUser;