import TicketsTable from "./tickets-table";
import SelectedTicket from "./selected";

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
    },
    {
        title: "E-commerce Platform",
        type: "Feature Request",
        status: "In Progress",
        priority: "High",
        author: "Jane Doe",
        description: "Online shopping platform with a user-friendly interface and payment gateway integration.",
        contributors: ["Jane Doe", "Emrakh Ibragimov"],
        date: "Oct 29, 2023",
        created: "Oct 10, 2023"
    },
    {
        title: "Weather App",
        type: "Enhancements",
        status: "Testing",
        priority: "Low",
        author: "John Doe",
        description: "Application to fetch and display real-time weather updates based on location.",
        contributors: ["John Doe", "Jane Doe"],
        date: "Oct 27, 2023",
        created: "Oct 15, 2023"
    },
    {
        title: "Travel Blog Platform",
        type: "Bugs",
        status: "In Development",
        priority: "Medium",
        author: "Emrakh Ibragimov",
        description: "A platform for travel enthusiasts to share their experiences and adventures.",
        contributors: ["Emrakh Ibragimov", "John Doe"],
        date: "Oct 28, 2023",
        created: "Oct 12, 2023"
    },
    {
        title: "Recipe Finder",
        type: "Feature Request",
        status: "Design",
        priority: "Medium",
        author: "Jane Doe",
        description: "Allows users to search and save recipes based on ingredients they have.",
        contributors: ["Jane Doe"],
        date: "Oct 30, 2023",
        created: "Oct 20, 2023"
    },
    {
        title: "Online Learning Platform",
        type: "Enhancements",
        status: "Planning",
        priority: "High",
        author: "John Doe",
        description: "Platform that offers various courses and learning materials online.",
        contributors: ["John Doe", "Emrakh Ibragimov"],
        date: "Oct 25, 2023",
        created: "Oct 1, 2023"
    }
];


function MyTickets() {
    return (<div className="flex flex-col mx-5">
                <TicketsTable projects={projects} />
            </div>)
}

export default MyTickets;