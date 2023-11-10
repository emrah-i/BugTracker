import { useState } from "react";

const notificationsArray = [
    { title: "You were added to Project Alpha", date: "2023-11-08T10:00:00Z", viewed: false },
    { title: "Status of Project Alpha was changed", date: "2023-11-08T11:00:00Z", viewed: false },
    { title: "You were added to Project Beta", date: "2023-11-07T09:00:00Z", viewed: true },
    { title: "Status of Project Beta was changed", date: "2023-11-07T11:30:00Z", viewed: true },
    { title: "You were added to Project Gamma", date: "2023-11-06T08:45:00Z", viewed: false },
    { title: "Status of Project Gamma was changed", date: "2023-11-06T10:15:00Z", viewed: false },
    { title: "You were added to Project Delta", date: "2023-11-05T14:00:00Z", viewed: true },
    { title: "Status of Project Delta was changed", date: "2023-11-05T16:30:00Z", viewed: true },
    { title: "You were added to Project Epsilon", date: "2023-11-04T12:00:00Z", viewed: false },
    { title: "Status of Project Epsilon was changed", date: "2023-11-04T13:30:00Z", viewed: false }
];

function Notifications() {

    const [ notifications, setNotifications ] = useState(notificationsArray)
    const current = new Date()

    function toggleSeen(index, viewed) {
        setNotifications(prevState=>
            {let newState = [...prevState]
            newState[index].viewed = !viewed
            return newState})
    } 
            
    return (<div className="relative flex flex-col gap-5 mx-5 my-5">
                <div className="flex flex-col bg-white shadow-md py-3 px-5 rounded-lg">
                    {notifications.map((element, index)=>{

                        const date = new Date(element.date)
                        const diffTime = Math.abs(current - date);
                        let days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                        let time = "days"
                    
                        if (days > 30) {
                            days = Math.floor(days / 30)
                            time = "months"
                        }
                        if (days > 12) {
                            days = Math.floor(days / 12)
                            time = "years"
                        }

                        return (<div key={index} className={`flex items-center border-b-2 ${index === 0 ? 'border-t-2' : null} border-gray-200 gap-5 px-5 py-3 h-fit duration-150 cursor-pointer ${element.viewed ? "hover:bg-gray-100" : "bg-gray-100"}`} onClick={()=>toggleSeen(index, element.viewed)} >
                                    <i className={`text-gray-400 text-xs ${element.viewed ? "fa-regular" : "fa-solid text-red-500"} fa-circle`}></i>
                                    <div className="flex flex-col justify-between gap-1.5 h-fit w-full pointer-event-none">
                                        <p className="m-0 w-2/3">{element.title}</p>
                                        <div className="flex justify-between">
                                            <p className="text-sm text-gray-400 ">{days}+ {time} ago</p>
                                            <p className="text-sm text-gray-400 ">({date.toDateString('en-us')}, {date.toLocaleTimeString('en-us', {hour: "2-digit", minute: '2-digit'})})</p>
                                        </div>
                                    </div>
                                </div>)
                    })}
                </div>
            </div>)
}

export default Notifications