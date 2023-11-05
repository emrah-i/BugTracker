import { useState } from "react";

const devTeamMembers = [
    {
      name: "Ethan Turner",
      title: "Lead Developer",
      team: "Core Platform Team",
      email: "ethan.turner@devcorp.com",
      availableHours: "9am - 5pm EST",
    },
    {
      name: "Olivia King",
      title: "Front-end Developer",
      team: "UI/UX Team",
      email: "olivia.king@devcorp.com",
      availableHours: "10am - 6pm EST",
    },
    {
      name: "Ava Taylor",
      title: "Back-end Developer",
      team: "Core Platform Team",
      email: "ava.taylor@devcorp.com",
      availableHours: "8am - 4pm EST",
    },
    {
      name: "Noah Wilson",
      title: "Full Stack Developer",
      team: "Innovation Team",
      email: "noah.wilson@devcorp.com",
      availableHours: "11am - 7pm EST",
    },
    {
      name: "Isabella Brown",
      title: "QA Engineer",
      team: "Quality Assurance Team",
      email: "isabella.brown@devcorp.com",
      availableHours: "9am - 5pm EST",
    },
    {
      name: "Liam Smith",
      title: "Database Administrator",
      team: "Data Services Team",
      email: "liam.smith@devcorp.com",
      availableHours: "9am - 5pm EST",
    },
    {
      name: "Sophia Johnson",
      title: "DevOps Engineer",
      team: "Operations Team",
      email: "sophia.johnson@devcorp.com",
      availableHours: "Remote - Flexible Hours",
    },
    {
      name: "Jacob Davis",
      title: "UX Designer",
      team: "UI/UX Team",
      email: "jacob.davis@devcorp.com",
      availableHours: "9am - 5pm EST",
    },
    {
      name: "Emma Martinez",
      title: "Project Manager",
      team: "Project Management Office",
      email: "emma.martinez@devcorp.com",
      availableHours: "8am - 4pm EST",
    },
    {
      name: "Mia Hernandez",
      title: "Security Analyst",
      team: "Cybersecurity Team",
      email: "mia.hernandez@devcorp.com",
      availableHours: "On-call - Varies",
    },
    {
      name: "Lucas Clark",
      title: "Software Tester",
      team: "Quality Assurance Team",
      email: "lucas.clark@devcorp.com",
      availableHours: "9am - 5pm EST",
    },
    {
      name: "Amelia Wright",
      title: "System Integrator",
      team: "Operations Team",
      email: "amelia.wright@devcorp.com",
      availableHours: "10am - 6pm EST",
    }
  ];
  
  

function ManageUsers() {

    const [ search, setSearch ] = useState(devTeamMembers)

    return (<div className="flex flex-col gap-5 mx-5 my-5">
                <div className="flex flex-col bg-white shadow-md py-3 px-5 rounded-lg">
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3">Search Users</p>
                    <form className="flex flex-col items-center w-full">
                        <input className="rounded-full py-1.5 px-3 border-gray-300 text-black bg-gray-100 opacity-85 w-1/4 focus:w-2/5 focus:outline-0 active:outline-0 border-0 custom-transition shadow" type="text" placeholder="Search users by id or name"></input>
                        <button className="mt-3 py-1 px-2 rounded-md shadow bg-third-color hover:rounded-lg duration-200" type="button">Search</button>
                    </form>
                    {search.length !== 0 ? <table className="bg-main-color w-full mt-3">
                        <colgroup>
                            <col className="w-1/5"></col>
                            <col className="w-1/5"></col>
                            <col className="w-1/5"></col>
                            <col className="w-1/5"></col>
                            <col className="w-1/5"></col>
                        </colgroup>
                        <thead className="text-sm font-thin">
                            <tr className="font-medium border-gray-200 border-solid border-t-2">
                                <td><button className="organize-buttons" type="button">Name <i className="fa-solid fa-sort"></i></button></td>
                                <td><button className="organize-buttons" type="button">Title <i className="fa-solid fa-sort"></i></button></td>
                                <td><button className="organize-buttons" type="button">Team <i className="fa-solid fa-sort"></i></button></td>
                                <td><button className="organize-buttons" type="button">Email <i className="fa-solid fa-sort"></i></button></td>
                                <td><button className="organize-buttons" type="button">Availability <i className="fa-solid fa-sort"></i></button></td>
                            </tr>
                        </thead>
                        <tbody>
                            {search.map((element, index, array)=>{
                                let parent = index === array.length - 1 ? "border-b-2" : null;
                                return (<tr key={index} className={`table-row-parent ${parent} relative duration-300`} >
                                            <td>{element.name}</td>
                                            <td>{element.title}</td>
                                            <td>{element.team}</td>
                                            <td>{element.email}</td>
                                            <td>{element.availableHours}</td>
                                        </tr>)
                            })}
                        </tbody>
                    </table> : null}
                </div>
            </div>)
}

export default ManageUsers;