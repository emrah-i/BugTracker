import { useState } from "react";
import TeamTable from "./team-table";

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
    
    return (<div className="my-5 mx-5">
              <TeamTable title={"My Team"} teamMembers={teamMembers} />
            </div>)
}

export default MyTeam;