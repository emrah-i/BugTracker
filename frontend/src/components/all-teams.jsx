import TeamTable from "./team-table";

const devTeams = [
    {
      teamName: "Team Alpha",
      members: [
        {
          name: "Alex Johnson",
          title: "Lead Developer",
          email: "alex.johnson@teamalpha.com",
          availableHours: "9am - 5pm EST",
          account: "@alexdev"
        },
        {
          name: "Samantha Right",
          title: "Front-end Developer",
          email: "samantha.right@teamalpha.com",
          availableHours: "10am - 6pm EST",
          account: "@samantharight"
        },
        {
          name: "Michael Bay",
          title: "Back-end Developer",
          email: "michael.bay@teamalpha.com",
          availableHours: "8am - 4pm EST",
          account: "@michaelbackend"
        },
        {
          name: "Jessica Abigail",
          title: "UI/UX Designer",
          email: "jessica.abigail@teamalpha.com",
          availableHours: "11am - 7pm EST",
          account: "@jessicadesign"
        },
        {
          name: "Tom Hanks",
          title: "DevOps Engineer",
          email: "tom.hanks@teamalpha.com",
          availableHours: "9am - 5pm EST (Remote)",
          account: "@tomdevops"
        }
      ]
    },
    {
      teamName: "Team Beta",
      members: [
        {
          name: "Chris Smith",
          title: "QA Engineer",
          email: "chris.smith@teambeta.com",
          availableHours: "10am - 6pm EST",
          account: "@chrissmithqa"
        },
        {
          name: "Olivia Rodrigo",
          title: "Project Manager",
          email: "olivia.rodrigo@teambeta.com",
          availableHours: "9am - 5pm EST",
          account: "@oliviarodrigo"
        },
        {
          name: "Ethan Hawk",
          title: "Software Tester",
          email: "ethan.hawk@teambeta.com",
          availableHours: "8am - 4pm EST",
          account: "@ethantest"
        },
        {
          name: "Lara Croft",
          title: "Database Administrator",
          email: "lara.croft@teambeta.com",
          availableHours: "9am - 5pm EST",
          account: "@laradb"
        },
        {
          name: "Derek Shepherd",
          title: "Full Stack Developer",
          email: "derek.shepherd@teambeta.com",
          availableHours: "9am - 5pm EST",
          account: "@derekshepherd"
        }
      ]
    },
    {
      teamName: "Team Gamma",
      members: [
        {
          name: "Bob Marley",
          title: "Lead Developer",
          email: "bob.marley@teamgamma.com",
          availableHours: "9am - 5pm EST",
          account: "@bobdev"
        },
        {
          name: "Ariana Grande",
          title: "Front-end Developer",
          email: "ariana.grande@teamgamma.com",
          availableHours: "10am - 6pm EST",
          account: "@arianafrontend"
        },
        {
          name: "Bruce Wayne",
          title: "Security Specialist",
          email: "bruce.wayne@teamgamma.com",
          availableHours: "9am - 5pm EST",
          account: "@brucewayne"
        },
        {
          name: "Clark Kent",
          title: "Cloud Solutions Architect",
          email: "clark.kent@teamgamma.com",
          availableHours: "9am - 5pm EST",
          account: "@clarkcloud"
        },
        {
          name: "Diana Prince",
          title: "Product Manager",
          email: "diana.prince@teamgamma.com",
          availableHours: "8am - 4pm EST",
          account: "@dianaproduct"
        }
      ]
    }
  ];
  

function AllTeams() {
    return(<div className="flex flex-col gap-5 mx-5 my-5">
              <div className="bg-white shadow-md py-3 px-5 rounded-lg">
                <p><b>Note: </b>This depicts all teams under <u>your supervision</u>. This does not include every team in the organization.</p>
              </div>
              {devTeams.map(element=>{
                  return <TeamTable title={element.teamName} teamMembers={element.members} />
              })}
           </div>)
}

export default AllTeams;