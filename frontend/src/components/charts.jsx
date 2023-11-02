import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, PieChart, Pie, Cell } from 'recharts';

const data = [
                { name: 'New Tickets', Tickets: 4},
                { name: 'Development', Tickets: 3},
                { name: 'Code Review', Tickets: 4},
                { name: 'Testing', Tickets: 2},
                { name: 'Deployed', Tickets: 2},
                { name: 'Closed', Tickets: 4},
            ];

const data2 = [
                { name: 'Bugs', value: 4 },
                { name: 'Feature Requests', value: 3 },
                { name: 'Issues', value: 2 },
            ];

const data3 = [
    { name: 'Low', value: 20 },
    { name: 'Medium', value: 30 },
    { name: 'High', value: 40 },
    { name: 'Critical', value: 10 },
    ];

const colors = ['#BEADFF', '#7371FC', '#5C5AC9', "#454397"];

const bugs_array = Object(data).map((element)=>{return element.Tickets})
const max = Math.max(...bugs_array) + 1

function Charts() {
    return (<div className='flex items-center justify-evenly mt-5 mb-10'>
                <div className='dashboard-chart'>
                    <label>Tickets by Status</label>
                    <BarChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{ top: 5, right: 40, left: 0, bottom: 50 }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-45} textAnchor="end" tick={{ fontSize: 12}} />
                        <YAxis tick={{ fontSize: 14 }} ticks={[...Array(max + 1).keys()]} domain={[0, max]} />
                        <Tooltip contentStyle={{ fontSize: '14px' }} />
                        <Bar dataKey="Tickets" radius={[7.5, 7.5, 0, 0]} fill="#7371FC" />
                    </BarChart>
                </div>
                <div className="dashboard-chart">
                    <label>Tickets by Type</label>
                    <PieChart width={400} height={400}>
                        <Pie
                        data={data2}
                        cx="25%"
                        cy="60%"
                        outerRadius={90}
                        dataKey="value"
                        fontSize={12}
                        stroke={5}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                        {
                            data.map((entry, index) => <Cell key={index} fill={colors[index]} />)
                        }
                        </Pie>
                        <Tooltip contentStyle={{ fontSize: '14px', borderRadius: '.5rem' }} />
                        <Legend iconSize={16} wrapperStyle={{ fontSize: '.7rem', marginLeft: "1rem" }}align='left' verticalAlign='right' layout='vertical' />
                    </PieChart>
                </div>
                <div className='dashboard-chart'>
                    <label>Tickets by Priority</label>
                    <PieChart width={400} height={400}>
                    <Pie
                        data={data3}
                        dataKey="value"
                        nameKey="name"
                        cx="40%"
                        cy="60%"
                        innerRadius={55}
                        outerRadius={90}
                        fontSize={12}
                        fill="#8884d8"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                        {
                        data.map((entry, index) => (
                            <Cell key={index} fill={colors[index % colors.length]} />
                        ))
                        }
                    </Pie>
                    <Tooltip contentStyle={{ fontSize: '14px', borderRadius: '.5rem' }} />
                    <Legend iconSize={16} wrapperStyle={{ fontSize: '.7rem', marginLeft: "1rem" }}align='left' verticalAlign='right' layout='vertical' />
                    </PieChart>
                </div>
            </div>)
}

export default Charts;