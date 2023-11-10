import { useState } from "react";

function TeamTable(props) {

    const { teamMembers, title } = props;

    const [copied, setCopied] = useState(Array(teamMembers.length).fill(false));

    async function copyText(email, index) {

      navigator.clipboard.writeText(email)

      setCopied(prevState=>{
        prevState[index] = true;
        return [...prevState];
      });

      await new Promise(r => setTimeout(r, 1000));

      setCopied(prevState=>{
        prevState[index] = false;
        return [...prevState];
      })

    }

    return(<div className="bg-main-color shadow-md rounded-lg py-3 px-5">
                <p className="text-xl font-semibold mb-3">{title}</p>
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
                                        <td className="relative">
                                        <div className="group flex">
                                            <p onClick={()=>{copyText(element.email, index)}}>{element.email}</p>
                                            <p className="absolute justify-self-center group-hover:opacity-100 opacity-0 bg-opacity-80 duration-150 -top-2 text-xs text-white bg-black py-1 px-2 rounded-lg z-10">{copied[index] ? "✔ Copied" : "Copy to clipboard"}</p>
                                        </div>
                                        </td>
                                        <td>{element.availableHours}</td>
                                        <td><button type="button" className="bg-sec-color text-white text-sm py-1 px-2 rounded hover:rounded-md hover:bg-third-color hover:opacity-90 duration-200">Go to Account</button></td>
                                    </tr>)
                            })}
                    </tbody>
                </table>
            </div>)
}

export default TeamTable