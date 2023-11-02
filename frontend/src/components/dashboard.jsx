import Charts from "./charts";

function Dashboard() {
    return (<div className="flex flex-col ">
                <div className="bg-main-color shadow-md rounded-lg m-5 py-3 px-5">
                    <p className="text-xl font-semibold mb-3">My Tickets</p>
                    <table className="bg-main-color w-full">
                        <colgroup>
                            <col className="w-1/6"></col>
                            <col className="w-2/6"></col>
                            <col className="w-1/6"></col>
                            <col className="w-1/6"></col>
                        </colgroup>
                        <thead className="text-sm font-thin">
                            <tr className="table-heading border-gray-200 border-solid border-t-2">
                                <td>Ticket</td>
                                <td>Description</td>
                                <td>Contributers</td>
                                <td>Date Assigned</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row-parent">
                                <td>Bug Tracker</td>
                                <td>Bug tracking app for teams to better collaborate</td>
                                <td className="flex flex-col">
                                    <p>Emrakh Ibragimov</p>
                                    <p>Jane Doe</p>
                                    <p>John Doe</p>
                                </td>
                                <td>Oct 31, 2023</td>
                            </tr>
                            <tr className="table-row-parent border-b-2 flex-grow">
                                <td>Sorting Visualizer</td>
                                <td>Allows user to visualize sorting algorithms</td>
                                <td className="flex flex-col">
                                    <p>Emrakh Ibragimov</p>
                                </td>
                                <td>Oct 26, 2023</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex w-min gap-1.5 justify-between items-center mt-3  mx-auto">
                        <button type="button" className="text-sm rounded-full py-0.5 px-2 bg-gray-200 disabled:opacity-60" disabled><i className="fa-solid fa-angle-left"></i></button>
                        <button type="button" className="text-sm rounded-full py-0.5 px-2 bg-third-color">1</button>
                        <button type="button" className="text-sm rounded-full py-0.5 px-2 bg-gray-200">2</button>
                        <button type="button" className="text-sm rounded-full py-0.5 px-2 bg-gray-200"><i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div className="bg-main-color shadow-md rounded-lg mx-5 py-3 px-5">
                    <p className="text-xl pb-3 mb-3 font-medium border-solid border-b-2 border-gray-200">Selected Ticket</p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Title:</span> Bug Tracker</p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Full Description:</span> Bug tracking app for teams to better collaborate</p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Contributers:</span> Emrakh Ibragimov, Jane Doe, John Doe</p>
                    <p className="text-sm px-3 my-2"><span className="font-semibold">Date Assigned:</span> Oct 31, 2023</p>
                </div>
                <Charts />
            </div>)
}

export default Dashboard;