import { useState, useEffect, useRef } from "react";

const projects = [
    {
        ticket: 'PRJ-001',
        project: 'Recipe Finder',
        type: 'Bugs',
        status: 'In Progress',
        priority: 'Medium',
        contributors: ['John Doe', 'Emrakh Ibragimov'],
        date: 'May 30, 2023'
    },
    {
        ticket: 'PRJ-002',
        project: 'E-commerce Platform',
        type: 'Feature Request',
        status: 'Code Review',
        priority: 'Medium',
        contributors: ['Jane Doe', 'John Doe', 'Emrakh Ibragimov'],
        date: 'Sep 04, 2023'
    },
    {
        ticket: 'PRJ-003',
        project: 'Weather App',
        type: 'Feature Request',
        status: 'In Development',
        priority: 'Medium',
        contributors: ['Emrakh Ibragimov', 'Jane Doe', 'John Doe'],
        date: 'Oct 25, 2023'
    },
    {
        ticket: 'PRJ-004',
        project: 'Recipe Finder',
        type: 'Feature Request',
        status: 'In Progress',
        priority: 'Low',
        contributors: ['John Doe'],
        date: 'Oct 03, 2023'
    },
    {
        ticket: 'PRJ-005',
        project: 'Bug Tracker',
        type: 'Bugs',
        status: 'Design',
        priority: 'Low',
        contributors: ['John Doe'],
        date: 'Oct 01, 2023'
    },
    {
        ticket: 'PRJ-006',
        project: 'Online Learning Platform',
        type: 'Feature Request',
        status: 'In Progress',
        priority: 'Low',
        contributors: ['John Doe', 'Emrakh Ibragimov', 'Jane Doe'],
        date: 'Feb 07, 2023'
    },
    {
        ticket: 'PRJ-007',
        project: 'Online Learning Platform',
        type: 'Bugs',
        status: 'In Progress',
        priority: 'High',
        contributors: ['John Doe', 'Emrakh Ibragimov'],
        date: 'May 18, 2023'
    },
    {
        ticket: 'PRJ-008',
        project: 'Recipe Finder',
        type: 'Bugs',
        status: 'Code Review',
        priority: 'Low',
        contributors: ['Jane Doe', 'Emrakh Ibragimov', 'John Doe'],
        date: 'Jan 18, 2023'
    },
    {
        ticket: 'PRJ-009',
        project: 'Bug Tracker',
        type: 'Enhancements',
        status: 'Code Review',
        priority: 'Low',
        contributors: ['John Doe', 'Emrakh Ibragimov', 'Jane Doe'],
        date: 'May 16, 2023'
    },
    {
        ticket: 'PRJ-010',
        project: 'Travel Blog Platform',
        type: 'Enhancements',
        status: 'Design',
        priority: 'Critical',
        contributors: ['Emrakh Ibragimov', 'John Doe', 'Jane Doe'],
        date: 'Apr 09, 2023'
    }
];

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

const all_statuses = [
    "New Ticket",
    "Re-opened",
    "Development",
    "Code Review",
    "Testing",
    "Code Review",
    "Deployed",
    "Closed"
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
  

function OpenTickets() {

    const [ openTicketsSort, setOpenTicketsSort ] = useState('none')
    const [ tickets, setTickets ] = useState(projects.slice(0,1))
    const [ selectedTicket, setSelectedTicket ] = useState(null)
    const filters = useRef(null)

    function sortArray(array, field, reverse = false) {
        return [...array].sort((a, b) => {
            return reverse ? b[field].localeCompare(a[field]) : a[field].localeCompare(b[field]);
        });
    }

    useEffect(()=>{
        let sortedArray;
        const sortField = openTicketsSort.replace('rev-', '');

        switch (sortField) {
            case 'ticket':
            case 'project':
            case 'type':
            case 'status':
            case 'priority':
            case 'date':
                sortedArray = sortArray(tickets, sortField, openTicketsSort.startsWith('rev-'));
                break;
            default:
                sortedArray = [...tickets].sort(() => Math.random() - 0.5);
                break;
        }

        setTickets(sortedArray);
        setSelectedTicket(null)

    }, [openTicketsSort])

    function changeSort(field) {
        setOpenTicketsSort(prevSort => {
            if (prevSort === field) return `rev-${field}`;
            if (prevSort === `rev-${field}`) return 'none';
            return field;
        });
    }

    return (<div className="flex flex-col mx-5 pb-5">
                <div className="bg-main-color shadow-md rounded-lg mt-5 py-3 px-5">
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3">All Open Tickets</p>
                    <div className="flex flex-col items-center w-full gap-3 mt-3">
                        <button className="py-1 px-2 rounded-md shadow bg-third-color hover:rounded-lg duration-200" type="button">Search</button>
                        <p className="cursor-pointer text-sm underline text-gray-400 select-none" onClick={()=>filters.current.classList.toggle('active')}>Show Filters</p>
                        <form>
                            <div className="filters flex justify-between gap-3 w-full duration-300 overflow-hidden" ref={filters}>
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
                                    <p className="font-semibold mb-0.5">Status</p>
                                    <div className="flex flex-col border-2 border-gray-200 py-1 px-2 rounded h-40 overflow-y-auto">
                                    {all_statuses.map(element=>{
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
                            <div>
                                <label>Date After:</label>
                                <input type="date" />
                                <label>Date Before:</label>
                                <input type="date" defaultValue={new Date()} />
                            </div>
                        </form>
                    </div>
                    <table className="bg-main-color w-full">
                        <colgroup>
                            <col className="w-fit"></col>
                            <col className="w-fit"></col>
                            <col className="w-fit"></col>
                            <col className="w-fit"></col>
                            <col className="w-fit"></col>
                            <col className="w-fit"></col>
                            <col className="w-fit"></col>
                        </colgroup>
                        <thead className="text-sm font-thin">
                            <tr className="font-medium border-gray-200 border-solid border-t-2">
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('ticket')} >Ticket {openTicketsSort === 'ticket' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-ticket' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('project')} >Project {openTicketsSort === 'project' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-project' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('type')} >Type {openTicketsSort === 'type' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-type' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('status')} >Status {openTicketsSort === 'status' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-status' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('priority')} >Priority {openTicketsSort === 'priority' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-priority' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button" >Contributors</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('date')} >Date Created {openTicketsSort === 'date' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-date' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((element, index, array)=>{
                                let parent = index === array.length - 1 ? "border-b-2" : null;
                                parent = element === selectedTicket ? parent + " active" : parent;
                                return (<tr key={index} className={`table-row-parent ${parent} relative duration-300`} onClick={()=>{setSelectedTicket(tickets[index])}} >
                                            <td>{element.ticket}</td>
                                            <td>{element.project}</td>
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

export default OpenTickets;