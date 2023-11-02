import { useEffect, useRef, useState } from "react";
import Charts from "./charts";

const projects = [
    {
        title: "Bug Tracker",
        type: "Feature Request",
        status: "Code Review",
        priority: "Critical",
        author: "Emrakh Ibragimov",
        description: "Bug tracking app for teams to better collaborate on projects together.",
        contributors: ["Emrakh Ibragimov", "Jane Doe", "John Doe"],
        date: "Oct 31, 2023",
        created: "Oct 26, 2023"
    },
    {
        title: "Sorting Visualizer",
        type: "Bugs",
        status: "Code review",
        priority: "Medium",
        author: "Emrakh Ibragimov",
        description: "Allows user to visualize sorting algorithms",
        contributors: ["Emrakh Ibragimov"],
        date: "Oct 26, 2023",
        created: "Oct 16, 2023"
    }
];

function Dashboard() {

    const [ selectedTicket, setSelectedTicket ] = useState(projects[0])

    return (<div className="flex flex-col ">
                <div className="flex justify-between gap-5 mx-5 mt-5">
                    <div className="dashboard-box"><p className="text-4xl font-medium">15</p> <p>All Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">5</p> <p>Currently Open Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">10</p> <p>Closed Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">2</p> <p>Your Total Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">1</p> <p>Notifications</p></div>
                </div>
                <div className="bg-main-color shadow-md rounded-lg m-5 py-3 px-5">
                    <p className="text-xl font-semibold mb-3">Tickets</p>
                    <table className="bg-main-color w-full">
                        <colgroup>
                            <col className="w-1/6"></col>
                            <col className="w-1/6"></col>
                            <col className="w-1/6"></col>
                            <col className="w-1/6"></col>
                            <col className="w-1/6"></col>
                            <col className="w-1/6"></col>
                        </colgroup>
                        <thead className="text-sm font-thin">
                            <tr className="table-heading border-gray-200 border-solid border-t-2">
                                <td>Ticket</td>
                                <td>Type</td>
                                <td>Status</td>
                                <td>Priority</td>
                                <td>Contributers</td>
                                <td>Date Assigned</td>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((element, index, array)=>{
                                let parent = index === array.length - 1 ? "table-row-parent border-b-2" : "table-row-parent"
                                parent = element === selectedTicket ? parent + " bg-gray-100": parent;
                                return (<tr key={index} className={parent} onClick={()=>setSelectedTicket(projects[index])} >
                                            <td>{element.title}</td>
                                            <td>{element.type}</td>
                                            <td>{element.status}</td>
                                            <td>{element.priority}</td>
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
                    <div className="flex bg-main-color">
                        <div className="w-1/2">
                            <p className="selected-ticket"><span>Title:</span> {selectedTicket.title}</p>
                            <p className="selected-ticket"><span>Type:</span> {selectedTicket.type}</p>
                            <p className="selected-ticket"><span>Priority:</span> {selectedTicket.priority}</p>
                            <p className="selected-ticket"><span>Status:</span> {selectedTicket.status}</p>
                            <p className="selected-ticket"><span>Contributers:</span> 
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
                            <p className="selected-ticket"><span>Date Assigned:</span> {selectedTicket.date}</p>
                        </div>
                        <div className="w-1/2">
                            <p className="selected-ticket"><span>Ticket Author:</span> {selectedTicket.author}</p>
                            <p className="selected-ticket"><span>Created:</span> {selectedTicket.created}</p>
                            <p className="selected-ticket"><span>Description:</span> {selectedTicket.description}</p>
                            {/* const description = element.description.length > 60 ? element.description.slice(0, 60) + "..." : element.description */}
                        </div>
                    </div>
                </div>
                <Charts />
            </div>)
}

export default Dashboard;