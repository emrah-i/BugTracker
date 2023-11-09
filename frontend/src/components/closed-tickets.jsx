import { useState, useEffect } from "react";
import ClosedFilters from "./closed-filters";
import { useNavigate } from "react-router-dom";

const projects = [
    {
        ticket: 'PRJ-001',
        project: 'Recipe Finder',
        type: 'Bugs',
        priority: 'Medium',
        contributors: ['John Doe', 'Emrakh Ibragimov'],
        date: 'May 30, 2023',
        closedDate: 'Jun 15, 2023'
    },
    {
        ticket: 'PRJ-002',
        project: 'E-commerce Platform',
        type: 'Feature Request',
        priority: 'Medium',
        contributors: ['Jane Doe', 'John Doe', 'Emrakh Ibragimov'],
        date: 'Sep 04, 2023',
        closedDate: 'Oct 20, 2023'
    },
    {
        ticket: 'PRJ-003',
        project: 'Weather App',
        type: 'Feature Request',
        priority: 'Medium',
        contributors: ['Emrakh Ibragimov', 'Jane Doe', 'John Doe'],
        date: 'Oct 25, 2023',
        closedDate: 'Nov 10, 2023'
    },
    {
        ticket: 'PRJ-004',
        project: 'Recipe Finder',
        type: 'Feature Request',
        priority: 'Low',
        contributors: ['John Doe'],
        date: 'Oct 03, 2023',
        closedDate: 'Nov 17, 2023'
    },
    {
        ticket: 'PRJ-005',
        project: 'Bug Tracker',
        type: 'Bugs',
        priority: 'Low',
        contributors: ['John Doe'],
        date: 'Oct 01, 2023',
        closedDate: 'Oct 31, 2023'
    },
    {
        ticket: 'PRJ-006',
        project: 'Online Learning Platform',
        type: 'Feature Request',
        priority: 'Low',
        contributors: ['John Doe', 'Emrakh Ibragimov', 'Jane Doe'],
        date: 'Feb 07, 2023',
        closedDate: 'Mar 22, 2023'
    },
    {
        ticket: 'PRJ-007',
        project: 'Online Learning Platform',
        type: 'Bugs',
        priority: 'High',
        contributors: ['John Doe', 'Emrakh Ibragimov'],
        date: 'May 18, 2023',
        closedDate: 'Jun 02, 2023'
    },
    {
        ticket: 'PRJ-008',
        project: 'Recipe Finder',
        type: 'Bugs',
        priority: 'Low',
        contributors: ['Jane Doe', 'Emrakh Ibragimov', 'John Doe'],
        date: 'Jan 18, 2023',
        closedDate: 'Feb 01, 2023'
    },
    {
        ticket: 'PRJ-009',
        project: 'Bug Tracker',
        type: 'Enhancements',
        priority: 'Low',
        contributors: ['John Doe', 'Emrakh Ibragimov', 'Jane Doe'],
        date: 'May 16, 2023',
        closedDate: 'Jun 30, 2023'
    },
    {
        ticket: 'PRJ-010',
        project: 'Travel Blog Platform',
        type: 'Enhancements',
        status: 'Design',
        priority: 'Critical',
        contributors: ['Emrakh Ibragimov', 'John Doe', 'Jane Doe'],
        date: 'Apr 09, 2023',
        closedDate: 'May 24, 2023'
    }
];

function ClosedTickets() {

    const [ openTicketsSort, setOpenTicketsSort ] = useState('none')
    const [ tickets, setTickets ] = useState(projects.slice(0, 2))
    const [ selectedTicket, setSelectedTicket ] = useState(null)
    const navigate = useNavigate()

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
                sortedArray = projects.slice(0, 2);
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
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3">All Closed Tickets</p>
                    <ClosedFilters />
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
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('priority')} >Priority {openTicketsSort === 'priority' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-priority' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button" >Contributors</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('date')} >Date Created {openTicketsSort === 'date' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-date' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                                <td><button className="organize-buttons" type="button" onClick={()=>changeSort('date')} >Date Closed {openTicketsSort === 'date' ? <i className="fa-solid fa-sort-up"></i> : openTicketsSort === 'rev-date' ? <i className="fa-solid fa-sort-down"></i> :  <i className="fa-solid fa-sort"></i>}</button></td>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((element, index, array)=>{
                                let parent = index === array.length - 1 ? "border-b-2" : null;
                                parent = element === selectedTicket ? parent + " active" : parent;
                                return (<tr key={index} className={`table-row-parent ${parent} relative duration-300`} onClick={()=>navigate(`/ticket/${index}`)} >
                                            <td>{element.ticket}</td>
                                            <td>{element.project}</td>
                                            <td>{element.type}</td>
                                            <td>{element.priority}</td>
                                            <td className="flex flex-col">
                                                {element.contributors.map(element=><p>{element}</p>) }
                                            </td>
                                            <td>{element.date}</td>
                                            <td>{element.closedDate}</td>
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

export default ClosedTickets;