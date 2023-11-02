import { useState } from "react"

function SelectedTicket() {

    const [ selectedTicket, setSelectedTicket ] = useState(null)

    return (<div className="bg-main-color shadow-md rounded-lg mx-5 py-3 px-5">
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
            </div>)
}

export default SelectedTicket;