
function MyTeam() {

    const teamMembers = [
        {
          name: "Alex Johnson",
          title: "Lead Developer",
          email: "alex.johnson@example.com",
          availableHours: "9am - 5pm EST",
          account: "@alexdev"
        },
        {
          name: "Chris Smith",
          title: "QA Engineer",
          email: "chris.smith@example.com",
          availableHours: "10am - 6pm EST",
          account: "@chrissmith"
        },
        {
          name: "Jamie Lee",
          title: "Project Manager",
          email: "jamie.lee@example.com",
          availableHours: "8am - 4pm EST",
          account: "@jlee_pm"
        },
        {
          name: "Morgan Blake",
          title: "UI/UX Designer",
          email: "morgan.blake@example.com",
          availableHours: "11am - 7pm EST",
          account: "@morgan_uiux"
        },
        {
          name: "Pat Taylor",
          title: "DevOps Engineer",
          email: "pat.taylor@example.com",
          availableHours: "9am - 5pm EST (Remote)",
          account: "@devopspat"
        },
        {
          name: "Sam Rivera",
          title: "Software Tester",
          email: "sam.rivera@example.com",
          availableHours: "9am - 5pm EST",
          account: "@testingsam"
        },
        {
          name: "Taylor Brown",
          title: "Front-end Developer",
          email: "taylor.brown@example.com",
          availableHours: "Busy - Next availability at 3pm EST",
          account: "@taylor_frontend"
        },
        {
          name: "Jordan Casey",
          title: "Back-end Developer",
          email: "jordan.casey@example.com",
          availableHours: "On vacation - Back on Monday 9am EST",
          account: "@backendjordan"
        }
    ];
    
    return (<div className="bg-main-color shadow-md rounded-lg mx-5 mt-5 py-3 px-5">
                <p className="text-xl font-semibold mb-3">My Team</p>
                <table className="bg-main-color w-full">
                    <colgroup>
                        <col className="w-1/5"></col>
                        <col className="w-1/5"></col>
                        <col className="w-1/5"></col>
                        <col className="w-1/5"></col>
                        <col className="w-1/5"></col>
                    </colgroup>
                    <thead className="text-sm font-thin">
                        <tr className="table-heading border-gray-200 border-solid border-t-2">
                            <td>Name</td>
                            <td>Title</td>
                            <td>Email</td>
                            <td>Availability</td>
                            <td>Account</td>
                        </tr>
                    </thead>
                    <tbody>
                        {teamMembers.map((element, index, array)=>{
                            let parent = index === array.length - 1 ? "border-b-2" : null;
                            return (<tr key={index} className={`table-row-parent ${parent} relative duration-300`} >
                                        <td>{element.name}</td>
                                        <td>{element.title}</td>
                                        <td>{element.email}</td>
                                        <td>{element.availableHours}</td>
                                        <td><button type="button" className="bg-sec-color text-white text-sm py-1 px-2 rounded hover:rounded-md hover:bg-third-color hover:opacity-90 duration-200">Go to Account</button></td>
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

export default MyTeam;