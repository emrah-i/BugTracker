import { useEffect, useRef, useState } from "react";
import Charts from "./charts";

const projects = [
    {
        title: "Bug Tracker",
        type: "Feature Request",
        description: "Bug tracking app for teams to better collaborate on projects together.",
        contributors: ["Emrakh Ibragimov", "Jane Doe", "John Doe"],
        date: "Oct 31, 2023"
    },
    {
        title: "Sorting Visualizer",
        type: "Feature Request",
        description: "Allows user to visualize sorting algorithms",
        contributors: ["Emrakh Ibragimov"],
        date: "Oct 26, 2023"
    }
];

function Dashboard() {

    const [ selectedTicket, setSelectedTicket ] = useState(projects[0])

    return (<div className="flex flex-col ">
                <div className="bg-main-color shadow-md rounded-lg m-5 py-3 px-5">
                    <p className="text-xl font-semibold mb-3">My Tickets</p>
                    <table className="bg-main-color w-full">
                        <colgroup>
                            <col className="w-1/6"></col>
                            <col className="w-2/6"></col>
                            <col className="w-1/6"></col>
                            <col className="w-1/6"></col>
                        </colgroup>
                        <thead className="text-sm font-thin">
                            <tr className="table-heading border-gray-200 border-solid border-t-2">
                                <td>Ticket</td>
                                <td>Description</td>
                                <td>Contributers</td>
                                <td>Date Assigned</td>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((element, index, array)=>{
                                let parent = index === array.length - 1 ? "table-row-parent border-b-2" : "table-row-parent"
                                parent = element === selectedTicket ? parent + " bg-gray-100": parent;
                                const description = element.description.length > 60 ? element.description.slice(0, 60) + "..." : element.description
                                return (<tr key={index} className={parent} onClick={()=>setSelectedTicket(projects[index])} >
                                            <td>{element.title}</td>
                                            <td>{description}</td>
                                            <td className="flex flex-col">
                                                {element.contributors.map(element=><p>{element}</p>) }
                                            </td>
                                            <td>{element.date}</td>
                                        </tr>)
                                })}

                        </tbody>
                    </table>
                    <div className="flex w-min gap-1.5 justify-between items-center mt-3  mx-auto">
                        <button type="button" className="text-sm rounded-full py-0.5 px-2 bg-gray-200 disabled:opacity-60" disabled><i className="fa-solid fa-angle-left"></i></button>
                        <button type="button" className="text-sm rounded-full py-0.5 px-2 bg-third-color">1</button>
                        <button type="button" className="text-sm rounded-full py-0.5 px-2 bg-gray-200">2</button>
                        <button type="button" className="text-sm rounded-full py-0.5 px-2 bg-gray-200"><i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div className="bg-main-color shadow-md rounded-lg mx-5 py-3 px-5">
                    <p className="text-xl pb-3 mb-3 font-medium border-solid border-b-2 border-gray-200">Selected Ticket</p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Title:</span> {selectedTicket.title}</p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Type:</span> {selectedTicket.type}</p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Full Description:</span> {selectedTicket.description}</p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Contributers:</span> 
                    {selectedTicket.contributors.map((element, index, array)=>
                        {if (array.length === 1) {
                            return ` ${element}`
                        }
                        else if (index === array.length-1) {
                            return ` and ${element}`
                        } 
                        else {
                            return ` ${element},`
                        }
                        })}
                    </p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Date Assigned:</span> {selectedTicket.date}</p>
                </div>
                <Charts />
            </div>)
}

export default Dashboard;