import React, { useState, useRef } from "react";

const all_projects = [
    "Recipe Finder",
    "E-commerce Platform",
    "Weather App",
    "Bug Tracker",
    "Online Learning Platform",
    "Travel Blog Platform"
  ]

const all_types = [
    "Bugs",
    "Feature Request",
    "Issues",
    "New Project",
    ]

const all_priorities = [
    "Low",
    "Medium",
    "High",
    "Critical"
    ]

const all_people = [
    "Ethan Turner",
    "Olivia King",
    "Ava Taylor",
    "Noah Wilson",
    "Isabella Brown",
    "Liam Smith",
    "Sophia Johnson",
    "Jacob Davis",
    "Emma Martinez",
    "Mia Hernandez",
    "Lucas Clark",
    "Amelia Wright"
  ]

function ClosedFilters() {

    const current = new Date()
    const [ closedEndDate, setClosedEndDate ] = useState(current.toISOString().split('T')[0])
    const [ createdEndDate, setCreatedEndDate ] = useState(current.toISOString().split('T')[0])
    const filters = useRef(null)

    return(<div className="flex flex-col items-center w-full gap-3 mt-3">
                <button className="py-1 px-2 rounded-md shadow bg-third-color hover:rounded-lg duration-200" type="button">Search</button>
                <p className="cursor-pointer text-sm underline text-gray-400 select-none" onClick={()=>filters.current.classList.toggle('active')}>Show Filters</p>
                <form className="filters flex-col justify-between w-full duration-300 overflow-hidden" ref={filters}>
                    <div className="flex justify-between gap-3 w-full">
                        <div className="flex-grow">
                            <p className="font-semibold mb-0.5">Project</p>
                            <div className="flex flex-col border-2 border-gray-200 py-1 px-2 rounded h-40 overflow-y-auto">
                            {all_projects.map(element=>{
                                return <div>
                                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                                            <label for="option1"> {element}</label>
                                        </div>})}
                            </div>
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold mb-0.5">Type</p>
                            <div className="flex flex-col border-2 border-gray-200 py-1 px-2 rounded h-40 overflow-y-auto">
                            {all_types.map(element=>{
                                return <div>
                                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                                            <label for="option1"> {element}</label>
                                        </div>})}
                            </div>
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold mb-0.5">Priority</p>
                            <div className="flex flex-col border-2 border-gray-200 py-1 px-2 rounded h-40 overflow-y-auto">
                            {all_priorities.map(element=>{
                                return <div>
                                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                                            <label for="option1"> {element}</label>
                                        </div>})}
                            </div>
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold mb-0.5">Contributors</p>
                            <div className="flex flex-col border-2 border-gray-200 py-1 px-2 rounded h-40 overflow-y-auto">
                            {all_people.map(element=>{
                                return <div>
                                            <input type="checkbox" id="option1" name="option1" value="Option1" />
                                            <label for="option1"> {element}</label>
                                        </div>})}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <label><b>Created After: </b></label>
                            <input type="date" max={createdEndDate} />
                            <br/>
                            <label><b>Created Before: </b></label>
                            <input type="date" onChange={(event)=>setCreatedEndDate(event.target.value)} max={new Date().toISOString().split('T')[0]} defaultValue={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div>
                            <label><b>Closed After: </b></label>
                            <input type="date" max={closedEndDate} />
                            <br/>
                            <label><b>Closed Before: </b></label>
                            <input type="date" onChange={(event)=>setClosedEndDate(event.target.value)} max={new Date().toISOString().split('T')[0]} defaultValue={new Date().toISOString().split('T')[0]} />
                        </div>
                    </div>
                </form>
            </div>)
}

export default ClosedFilters;