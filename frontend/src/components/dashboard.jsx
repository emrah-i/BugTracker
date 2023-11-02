import { useEffect, useRef, useState } from "react";
import Charts from "./charts";
import TicketsTable from "./tickets-table";

const projects = [
    {
        title: "Bug Tracker",
        type: "Feature Request",
        status: "Code Review",
        priority: "Critical",
        author: "Emrakh Ibragimov",
        description: "Bug tracking app for teams to better collaborate on projects together.",
        contributors: ["Emrakh Ibragimov", "Jane Doe", "John Doe"],
        date: "Oct 31, 2023",
        created: "Oct 26, 2023"
    },
    {
        title: "Sorting Visualizer",
        type: "Bugs",
        status: "Code review",
        priority: "Medium",
        author: "Emrakh Ibragimov",
        description: "Allows user to visualize sorting algorithms",
        contributors: ["Emrakh Ibragimov"],
        date: "Oct 26, 2023",
        created: "Oct 16, 2023"
    }
];

function Dashboard() {

    return (<div className="flex flex-col mx-5">
                <div className="flex justify-between gap-5 mt-5">
                    <div className="dashboard-box"><p className="text-4xl font-medium">15</p> <p>All Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">5</p> <p>Currently Open Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">10</p> <p>Closed Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">2</p> <p>Your Tickets</p></div>
                    <div className="dashboard-box"><p className="text-4xl font-medium">1</p> <p>Notifications</p></div>
                </div>
                <TicketsTable projects={projects} />
                <Charts />
            </div>)
}

export default Dashboard;