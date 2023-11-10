import { useState, useRef } from "react";

function NewTicket() {

    const [ inputOption, setInputOption ] = useState('text')
    const [ contributors, setContributors ] = useState([])
    const [ descriptionChars, setDescriptionChars ] = useState(0)
    const selectContributors = useRef(null)

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

    function addContributor() {
        const ind = selectContributors.current.value;
    
        if (ind === 'none' || contributors.includes(ind)) {
            return;
        }
    
        setContributors(prevState => {
            return [...prevState, ind];
        });
    }

    function removeContributor(ind) {

        setContributors(prevState => {
            const newState = prevState.filter(item => item !== ind)
            return [...newState];
        });
    }

    return (<div className="bg-main-color mx-5 my-5 pt-3 pb-5 px-5 shadow-md rounded-lg">
                <p className="heading border-gray-200 border-solid border-b-2 pb-3">New Ticket</p>
                <form className="flex flex-col gap-5 w-2/3 mx-auto mt-5">
                    <div className="flex justify-around">
                        <label className="flex gap-1 items-center">
                        <input className="h-4 w-4" type="radio" name="inputType" value="text" defaultChecked onClick={()=>setInputOption('text')} /> New Project
                        </label>
                        <label className="flex gap-1 items-center">
                        <input className="h-4 w-4" type="radio" name="inputType" value="dropdown" onClick={()=>setInputOption('dropdown')} /> Existing Projects
                        </label>
                    </div>
                    <div className="flex justify-around">
                        <input className="w-2/5 shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-full disabled:opacity-50 placeholder:text-gray-500" disabled={!(inputOption === 'text')} type="text" placeholder="Project"></input>
                        <select defaultValue={'none'} className="w-2/5 shadow-md py-1.5 pl-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" disabled={(inputOption === 'text')} type="text" placeholder="Project">
                            <option value={'none'} disabled >Select a project</option>
                            {fakeProjectNames.map((element, index)=>{
                                return <option key={index}>{element}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea className="w-full shadow-md py-1.5 px-3 text-black bg-gray-100 rounded-lg" maxLength={3200} type="text" onChange={(event)=>{setDescriptionChars(event.target.value.length)}}></textarea>
                        <p className="text-xs">Length: <span>{descriptionChars}</span> / 3200</p>
                    </div>
                    <div>
                        <label className="mr-3">Type:</label>
                        <select defaultValue={'none'} className="w-2/5 shadow-md py-2 px-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project">
                            <option value={'none'} disabled >Select a ticket type</option>
                            <option>Bug</option>
                            <option>Feature Request</option>
                            <option>Issue</option>
                            <option>New Project</option>
                        </select>
                    </div>
                    <div>
                        <label className="mr-3">Priority:</label>
                        <select defaultValue={'none'} className="w-2/5 shadow-md py-2 px-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project">
                            <option value={'none'} disabled >Select a priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                            <option>Critical</option>
                        </select>
                    </div>
                    <div>
                        <label className="mr-3">Status:</label>
                        <select defaultValue={'none'} className="w-2/5 shadow-md py-2 px-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project">
                            <option value={'none'} disabled >Select a status</option>
                            <option>New Ticket</option>
                            <option>In Development</option>
                            <option>Code Review</option>
                            <option>Testing</option>
                            <option>Deployed</option>
                            <option>Closed</option>
                        </select>
                    </div>
                    <div>
                        <label className="mr-3">Contributers:</label>
                        <select defaultValue={'none'} className="w-2/5 mr-3 shadow-md py-2 px-3 border-r-8 border-gray-100 text-black bg-gray-100 rounded-full disabled:opacity-50" type="text" placeholder="Project" ref={selectContributors} >
                            <option value={'none'} disabled >Select a team member</option>
                            {fakeTeam.map((element, index)=>{
                                return <option key={index}>{element}</option>
                            })}
                        </select>
                        <button className="shadow-md bg-sec-color text-main-color rounded-lg py-1 px-2 hover:rounded-xl duration-300" type="button" onClick={addContributor}>Add</button>
                    </div>
                    {contributors.length !== 0 && <div className="flex flex-col gap-2">
                        {contributors.map((element, index)=>{
                            return <div key={index} className="flex justify-between items-center w-fit bg-gray-100 py-1 px-2 rounded-lg shadow"><p className="pr-3">{element}</p><button type="button" onClick={()=>removeContributor(element)} ><i className="pl-3 text-red-500 text-lg fa-solid fa-xmark"></i></button></div>
                        })}
                    </div>}
                    <button className="shadow-md mx-auto w-fit bg-sec-color text-main-color rounded-lg py-1 px-2 hover:rounded-xl duration-300" type="button" onClick={addContributor}>Submit Ticket</button>
                </form>
            </div>)
}

export default NewTicket