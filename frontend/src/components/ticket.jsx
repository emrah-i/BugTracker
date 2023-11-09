
const ticket = {
    "title": "Unexpected Error on Login Page",
    "created": "2023-11-05",
    "project": "Project Phoenix",
    "author": "Jane Doe",
    "type": "Bug",
    "priority": "High",
    "status": "Open",
    "contributors": ["John Smith", "Alice Johnson"]
};

let ticketHistory = [
    {
        "dateTime": "2023-11-05T09:30:00Z",
        "update": "Ticket created",
        "updatedBy": "Jane Doe"
    },
    {
        "dateTime": "2023-11-06T10:15:00Z",
        "update": "Priority set to High",
        "updatedBy": "Jane Doe"
    },
    {
        "dateTime": "2023-11-07T11:00:00Z",
        "update": "Status changed to In Progress",
        "updatedBy": "John Smith"
    },
    {
        "dateTime": "2023-11-08T14:45:00Z",
        "update": "Contributor Alice Johnson added",
        "updatedBy": "Jane Doe"
    },
    {
        "dateTime": "2023-11-09T16:30:00Z",
        "update": "Status changed to Resolved",
        "updatedBy": "Alice Johnson"
    }
];


function Ticket() {
    return (<div className="flex flex-col mx-5 pb-5">
                <div className="bg-main-color shadow-md rounded-lg mt-5 py-3 px-5">
                    <p className="heading border-gray-200 border-solid border-b-2 pb-3 mb-3">Ticket Details</p>
                    <p><span className="font-semibold">Title: </span> {ticket.title}</p>
                    <p><span className="font-semibold">Created: </span> {ticket.created}</p>
                    <p><span className="font-semibold">Project: </span> {ticket.project}</p>
                    <p><span className="font-semibold">Author: </span> {ticket.author}</p>
                    <p><span className="font-semibold">Type: </span> {ticket.type}</p>
                    <p><span className="font-semibold">Priority: </span> {ticket.priority}</p>
                    <p><span className="font-semibold">Status: </span> {ticket.status}</p>
                    <p><span className="font-semibold">Contributors: </span> 
                        {ticket.contributors.map((element, index, array)=>{
                            return array.length === 1 ? element : index === array.length - 1 ? ` and ${element}` : ` ${element},`;
                        })}
                    </p>
                    <div className="flex justify-evenly py-3">
                        <button type="button" className="bg-gray-500 text-white py-1 px-2 rounded-md duration-200 hover:rounded-lg hover:scale-105">Edit</button>
                        <button type="button" className="bg-red-500 text-white py-1 px-2 rounded-md duration-200 hover:rounded-lg hover:scale-105">Remove</button>
                        <button type="button" className="bg-green-600 text-white py-1 px-2 rounded-md duration-200 hover:rounded-lg hover:scale-105">Change Status</button>
                    </div>
                </div>
                <div className="bg-main-color shadow-md rounded-lg mt-5 py-3 px-5">
                    <p className="heading pb-3">Ticket History</p>
                    <table className="bg-main-color w-full">
                        <colgroup>
                            <col className="w-fit"></col>
                            <col className="w-fit"></col>
                            <col className="w-fit"></col>
                        </colgroup>
                        <thead className="text-sm font-thin">
                            <tr className="font-medium border-gray-200 border-solid border-t-2">
                                <td><button className="organize-buttons pointer-events-none" type="button">Change </button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button">User</button></td>
                                <td><button className="organize-buttons pointer-events-none" type="button">Datetime </button></td>
                            </tr>
                        </thead>
                        <tbody>
                            {ticketHistory.map((element, index, array)=>{
                                let parent = index === array.length - 1 ? "border-b-2" : null;
                                return (<tr key={index} className={`table-row-parent ${parent} relative duration-300`} >
                                            <td>{element.update}</td>
                                            <td>{element.updatedBy}</td>
                                            <td>{new Date(element.dateTime).toDateString()}, {new Date(element.dateTime).toLocaleTimeString('en-us', {hour: "2-digit", minute: "2-digit"})}</td>
                                        </tr>)
                                })}
                        </tbody>
                    </table>
                </div>
            </div>)
}

export default Ticket;