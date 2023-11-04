
function NewTicket() {
    return (<div className="bg-main-color mx-5 mt-5 py-3 px-5 shadow-md rounded-lg">
                <form className="flex flex-col">
                    <p className="heading">New Ticket</p>
                    {/* Allow choice between current projects and new projects */}
                    <label>
                    <input type="radio" name="inputType" value="text" checked onclick="toggleInputType('text')" /> Text Input
                    </label>
                    <label>
                    <input type="radio" name="inputType" value="dropdown" onclick="toggleInputType('dropdown')" /> Dropdown
                    </label>
                    <input type="text" placeholder="Project"></input>
                    <input type="text"></input>
                    <input type="text"></input>
                </form>
            </div>)
}

export default NewTicket