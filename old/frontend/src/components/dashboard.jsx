import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate()

    return (<div className="flex flex-col mx-5">
                <div className="flex justify-between gap-5 mt-5">
                    <div className="dashboard-box"><p className="text-4xl font-medium">5</p> <p>All Open Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">2</p> <p>Your Open Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">10</p> <p>All Closed Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">15</p> <p>Your Closed Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">1</p> <p>Notifications</p></div>
                </div>
                <div className="bg-main-color shadow-md rounded-lg mt-5 py-3 px-5">
                    <p className="heading">My Tickets</p>
                    <table className="bg-main-color w-full mt-3">
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
                                <td><button className="organize-buttons pointer-events-none" type="button">Ticket </button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button">Type </button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button">Status </button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button">Priority </button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button">Contributors </button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button">Date </button></td>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((element, index, array)=>{
                                let parent = index === array.length - 1 ? "border-b-2" : null;
                                return (<tr key={index} className={`table-row-parent ${parent} relative duration-300`} onClick={()=>navigate(`/ticket/${index}`)} >
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
                <Charts />
            </div>)
}

export default Dashboard;