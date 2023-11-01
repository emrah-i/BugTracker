import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Label } from 'recharts';

const data = [
    { name: 'New Tickets', Bugs: 4},
    { name: 'Development', Bugs: 3},
    { name: 'Code Review', Bugs: 4},
    { name: 'Testing', Bugs: 2},
    { name: 'Deployed', Bugs: 2},
    { name: 'Closed', Bugs: 4},
  ];

function Dashboard() {
    return (<div className='flex items-center justify-start m-5'>
                <div className='flex flex-col items-center justify-center bg-white rounded-lg p-3 shadow-md'>
                    <label>Bugs From Past Month</label>
                    <BarChart
                        width={600}
                        height={400}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 50 }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" tick={{ fontSize: 12}} />
                        <YAxis tick={{ fontSize: 14 }} />
                        <Tooltip contentStyle={{ fontSize: '14px' }} />
                        <Bar dataKey="Bugs" fill="#7371FC" />
                    </BarChart>
                </div>
            </div>)
}

export default Dashboard;