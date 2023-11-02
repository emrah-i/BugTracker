
function TicketsTable(props) {

    const { projects, title, selectedTicket, setSelectedTicket } = props

    return (<div className="bg-main-color shadow-md rounded-lg mt-5 py-3 px-5">
                <p className="text-xl font-semibold mb-3">{title}</p>
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
                            let parent = index === array.length - 1 ? "border-b-2" : null;
                            parent = element === selectedTicket ? parent + " active" : parent;
                            return (<tr key={index} className={`table-row-parent ${parent} relative duration-300`} onClick={()=>{setSelectedTicket(projects[index])}} >
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
            </div>)
}

export default TicketsTable