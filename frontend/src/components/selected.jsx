
function SelectedTicket(props) {

    const { selectedTicket } = props

    return (<div className="bg-main-color shadow-md rounded-lg mt-5 py-3 px-5">
                <p className="heading">Selected Ticket</p>
                <div className="flex bg-main-color border-gray-200 border-solid border-t-2">
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
                <div className="flex justify-evenly py-3">
                    <button type="button" className="bg-blue-500 text-white py-1 px-2 rounded-md duration-200 hover:rounded-lg hover:scale-105">Edit</button>
                    <button type="button" className="bg-red-500 text-white py-1 px-2 rounded-md duration-200 hover:rounded-lg hover:scale-105">Remove</button>
                    <button type="button" className="bg-green-600 text-white py-1 px-2 rounded-md duration-200 hover:rounded-lg hover:scale-105">Change Status</button>
                </div>
            </div>)
}

export default SelectedTicket;