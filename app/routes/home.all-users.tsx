import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";

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
  
  

function AllUsers() {

    const [ search, setSearch ] = useState(devTeamMembers)
    const [ usersSort, setUsersSort ] = useState('none')
    const [ selectedUser, setSelectedUser ] = useState(null)
    const navigate = useNavigate()

    function sortArray(array, field, reverse = false) {
        return [...array].sort((a, b) => {
            return reverse ? b[field].localeCompare(a[field]) : a[field].localeCompare(b[field]);
        });
    }

    useEffect(()=>{
        let sortedArray;
        const sortField = usersSort.replace('rev-', '');
        
        switch (sortField) {
            case 'name':
            case 'title':
            case 'team':
            case 'email':
                sortedArray = sortArray(search, sortField, usersSort.startsWith('rev-'));
                break;
            default:
                sortedArray = devTeamMembers;
                break;
        }

        setSearch(sortedArray);

    }, [usersSort])

    function changeSort(field) {
        setUsersSort(prevSort => {
            if (prevSort === field) return `rev-${field}`;
            if (prevSort === `rev-${field}`) return 'none';
            return field;
        });
    }

    function filterSearch(val) {
      const keywords = val.toLowerCase()
      setSearch(devTeamMembers.filter((element)=>element.name.toLowerCase().includes(keywords) || element.title.toLowerCase().includes(keywords) || element.email.toLowerCase().includes(keywords)))
    }

    return (<div className="flex flex-col gap-5 mx-5 my-5">
                <div className="flex flex-col bg-white shadow-md py-3 px-5 rounded-lg">
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3 m-0">Search Users</p>
                    <form className="flex flex-col items-center w-full my-5" onSubmit={(e)=>e.preventDefault()}>
                        <input className="rounded-full py-1.5 px-3 border-gray-300 text-black bg-gray-100 opacity-85 w-1/4 focus:w-1/3 focus:outline-0 active:outline-0 border-0 custom-transition shadow" type="text" placeholder="Search by name, role, or email" onChange={(e)=>filterSearch(e.target.value)}></input>
                    </form>
                    <table className="bg-main-color w-full">
                        <colgroup>
                            <col className="w-1/4"></col>
                            <col className="w-1/4"></col>
                            <col className="w-1/4"></col>
                            <col className="w-2/12"></col>
                        </colgroup>
                        <thead className="text-sm font-thin">
                            <tr className="font-medium border-gray-200 border-solid border-t-2">
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('name')} >Name {usersSort === 'name' ? <i className="fa-solid fa-sort-up"></i> : usersSort === 'rev-name' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('title')} >Role {usersSort === 'title' ? <i className="fa-solid fa-sort-up"></i> : usersSort === 'rev-title' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('email')} >Email {usersSort === 'email' ? <i className="fa-solid fa-sort-up"></i> : usersSort === 'rev-email' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('email')} >Account</button></td>
                            </tr>
                        </thead>
                        <tbody>
                            {search.length !== 0 ? search.map((element, index, array)=>{
                                let parent = index === array.length - 1 ? "border-b-2" : null;
                                return (<tr key={index} className={`table-row-parent ${parent} duration-300`} >
                                            <td>{element.name}</td>
                                            <td>{element.title}</td>
                                            <td>{element.email}</td>
                                            <td className="flex justify-center"><button className="cursor-pointer py-1 px-2 bg-third-color shadow duration-200 rounded-md hover:rounded-lg" type="button" onClick={()=>navigate(`/profile/${index}`)}>Go to account</button></td>
                                        </tr>)
                            }) : <tr className='table-row-parent duration-300'><td className="font-medium" colSpan={4}>No users</td></tr>}
                        </tbody>
                    </table>
                </div>
                {selectedUser ? <div className="flex flex-col bg-white shadow-md py-3 px-5 rounded-lg">
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3">Selected User</p>
                    <div>
                        {selectedUser.name}
                        {selectedUser.title}
                        {selectedUser.team}
                        {selectedUser.projects}
                    </div>
                </div> : null}
            </div>)
}

export default AllUsers;