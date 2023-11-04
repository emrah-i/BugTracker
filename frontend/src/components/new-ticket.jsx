import { useState } from "react"

function NewTicket() {

    const [ inputOption, setInputOption ] = useState('text')

    const fakeProjectNames = [
        "GreenThumb",
        "ArtisanBreadClub",
        "CodeCollab",
        "FitTrack",
        "MindSpa",
        "BudgetMaster",
        "PetRescue",
        "QuickTutor",
        "EcoTravel",
        "HomeChef"
    ];    
    
    const fakeTeam = [
        "Alex Johnson",
        "Chris Smith",
        "Jamie Lee",
        "Morgan Blake",
        "Pat Taylor",
        "Sam Rivera",
        "Taylor Brown",
        "Jordan Casey"
      ]
      

    return (<div className="bg-main-color mx-5 mt-5 pt-3 pb-5 px-5 shadow-md rounded-lg">
                <p className="heading border-gray-200 border-solid border-b-2 pb-3">New Ticket</p>
                <form className="flex flex-col gap-3 w-2/3 mx-auto">
                    {/* Allow choice between current projects and new projects */}
                    <div className="flex justify-around">
                        <label>
                        <input type="radio" name="inputType" value="text" defaultChecked onClick={()=>setInputOption('text')} /> New Project
                        </label>
                        <label className="text-left">
                        <input type="radio" name="inputType" value="dropdown" onClick={()=>setInputOption('dropdown')} /> Existing Projects
                        </label>
                    </div>
                    <div className="flex justify-around">
                        <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50" disabled={!(inputOption === 'text')} type="text" placeholder="Project"></input>
                        <select className="w-2/5 shadow-md py-1.5 pl-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" disabled={(inputOption === 'text')} type="text" placeholder="Project">
                            <option selected disabled >Select a project</option>
                            {fakeProjectNames.map((element)=>{
                                return <option>{element}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea className="w-full shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-lg" maxLength={1600} type="text"></textarea>
                    </div>
                    <div>
                        <label className="mr-3">Type:</label>
                        <select className="w-2/5 shadow-md py-1.5 pl-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project">
                            <option selected disabled >Select a project</option>
                            <option>Bug</option>
                            <option>Feature Request</option>
                            <option>Issue</option>
                            <option>New Project</option>
                        </select>
                    </div>
                    <div>
                        <label className="mr-3">Priority:</label>
                        <select className="w-2/5 shadow-md py-1.5 pl-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project">
                            <option selected disabled >Select a priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                        </select>
                    </div>
                    <div>
                        <label className="mr-3">Status:</label>
                        <select className="w-2/5 shadow-md py-1.5 pl-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project">
                            <option selected disabled >Select a status</option>
                            <option>New Ticket</option>
                            <option>In Development</option>
                            <option>Code Review</option>
                            <option>Testing</option>
                            <option>Deployed</option>
                            <option>Closed</option>
                        </select>
                    </div>
                    <div>
                        <label className="mr-3">Contributers :</label>
                        <select className="w-2/5 mr-3 shadow-md py-1.5 pl-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project">
                            <option selected disabled >Select a team member</option>
                            {fakeTeam.map((element)=>{
                                return <option>{element}</option>
                            })}
                        </select>
                        <button className="shadow-md bg-sec-color text-main-color rounded-lg py-1 px-2 hover:rounded-xl duration-300" type="button">Add</button>
                    </div>
                </form>
            </div>)
}

export default NewTicket