'use client'
import useAuth from "@/hooks/useAuth";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Category",
        javascript: 4000,
        python: 2800,
        php: 2400,
        go: 2000
    },
];
const BlogChart = () => {

    const { popularPostsOfPython } = useAuth();
    console.log("chart", popularPostsOfPython);

    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="javascript" fill="#8884d8" />
                <Bar dataKey="python" fill="#82ca9d" />
                <Bar dataKey="php" fill="#82ca9d" />
                <Bar dataKey="go" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default BlogChart;