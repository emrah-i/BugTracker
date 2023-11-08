import { useParams, useNavigate } from "react-router-dom";

const user = {
    name: "Isabella Brown",
    title: "QA Engineer",
    email: "isabella.brown@devcorp.com",
    availableHours: "9am - 5pm EST",
  }

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

function Profile() {
    const { accountId } = useParams();
    const navigate = useNavigate()

    return (<div className="flex flex-col gap-5 mx-5 my-5">
                <div className="flex flex-col gap-1 bg-white shadow-md py-3 px-5 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                        <i className="text-7xl fa-solid fa-circle-user"></i>
                        <p>{user.name}</p>
                    </div>
                    <p><b>Role: </b>{user.title}</p>
                    <p><b>Email: </b>{user.email}</p>
                    <p><b>Available Hours: </b>{user.availableHours}</p>
                    <button className="flex items-center gap-2 w-fit bg-gray-500 text-white shadow rounded-md py-1 px-2 duration-200 hover:rounded-lg" type="button" onClick={()=>{navigate('/settings')}} ><i className="fa-solid fa-gear"></i> Settings</button>
                </div>
                <div className="bg-main-color shadow-md rounded-lg py-3 px-5">
                    <p className="heading">{user.name.split(' ')[0]}'s Tickets</p>
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
                                let parent = index === array.length - 1 ? "border-b-2" : null;
                                return (<tr key={index} className={`table-row-parent ${parent} relative duration-300`} >
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
            </div>)
}

export default Profile;