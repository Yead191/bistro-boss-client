import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaBook, FaDollarSign, FaTruck, FaUsers } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Sector, ResponsiveContainer, Legend } from 'recharts';
import { Helmet } from 'react-helmet-async';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: stats } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats')
            return res.data
        }
    })



    const { data: chartData = [] } = useQuery({
        queryKey: ['chartData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })
    // console.log(chartData);

    //custom shape bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    //pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    const pieChartData = chartData.map(chart => {
        return { name: chart.category, value: chart.revenue }
    })

    return (
        <div className='my-8 w-11/12 mx-auto'>
            <Helmet>
                <title>Admin Home | Bistro Boss</title>
            </Helmet>
            <h1 style={{ fontVariant: 'small-caps' }} className='text-xl'>Hi, Welcome Back</h1>
            <h1 style={{ fontVariant: 'small-caps' }} className='text-3xl text-[#2e1f9e] lg:text-4xl'>{user?.displayName}</h1>
            <div className='my-12 lg:w-10/12 mx-auto'>
                <div className="stats shadow w-full flex flex-col md:flex-row">
                    <div className="stat  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] ">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className='text-4xl'></FaDollarSign>
                        </div>
                        <div className="stat-title text-white">Revenue</div>
                        <div className="stat-value text-white">{stats?.revenue}</div>
                        <div className="stat-desc text-white ">2025</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-4xl '></FaUsers>
                        </div>
                        <div className="stat-title text-white">Total Users</div>
                        <div className="stat-value text-white">{stats?.users}</div>
                        <div className="stat-desc ">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                        <div className="stat-figure text-secondary">
                            <FaBook className='text-4xl'></FaBook>
                        </div>
                        <div className="stat-title text-white">Menu Items</div>
                        <div className="stat-value text-white">{stats?.menuItems}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                        <div className="stat-figure text-secondary">
                            <FaTruck className='text-4xl'></FaTruck>
                        </div>
                        <div className="stat-title text-white">Orders</div>
                        <div className="stat-value text-white">{stats?.orders}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-5 items-center lg:h-[400px] my-8 w-full lg:w-10/12 mx-auto">
                <div className="lg:w-1/2 flex-1">

                    <ResponsiveContainer width="100%" aspect={2}>
                        <BarChart
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="lg:w-1/2 flex-1 ">
                    <ResponsiveContainer width="100%" height="100%" aspect={1}>
                        <PieChart>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius="50%" // Dynamic radius
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                            <Legend  align="center" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>


        </div>
    );
};

export default AdminHome;