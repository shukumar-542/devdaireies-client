'use client'
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const BlogChart = () => {



    const [popularPostsOfPython, setPopularPostsOfPython] = useState([]);
    const [popularPostsOfGo, setPopularPostsOfGo] = useState([]);
    const [popularPostsOfPHP, setPopularPostsOfPHP] = useState([]);
    const [popularPostsOfJS, setPopularPostsOfJS] = useState([]);
    const [totalBlog, setTotalBlog] = useState([]);

    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('https://devdaireies-server-shiningsudipto.vercel.app/blog/approved');
                const fetchedData = response.data;
                setTotalBlog(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };
        fetchPopularBlogs();
    }, []);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('https://devdaireies-server-shiningsudipto.vercel.app/blogs/javascript');
                const fetchedData = response.data;
                setPopularPostsOfJS(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('https://devdaireies-server-shiningsudipto.vercel.app/blogs/php');
                const fetchedData = response.data;
                setPopularPostsOfPHP(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('https://devdaireies-server-shiningsudipto.vercel.app/blogs/go');
                const fetchedData = response.data;
                setPopularPostsOfGo(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);
    useEffect(() => {
        const fetchPopularBlogs = async () => {
            try {
                const response = await axios.get('https://devdaireies-server-shiningsudipto.vercel.app/blogs/python');
                const fetchedData = response.data;
                setPopularPostsOfPython(fetchedData);
            } catch (error) {
                console.error('Error fetching popular blogs:', error);
            }
        };

        fetchPopularBlogs();
    }, []);

    const jsBlogCount = popularPostsOfJS.length;
    const pythonBlogCount = popularPostsOfPython.length;
    const phpBlogCount = popularPostsOfPHP.length;
    const goBlogCount = popularPostsOfGo.length;
    const blogCount = totalBlog.length;

    console.log(jsBlogCount, pythonBlogCount, phpBlogCount, goBlogCount, blogCount);

    const data = [
        {
            name: "Category",
            javascript: `${jsBlogCount}`,
            python: `${pythonBlogCount}`,
            php: `${phpBlogCount}`,
            go: `${goBlogCount}`,
            totalBlog: `${blogCount}`
        },
    ];

    return (
        <div className="mt-10">
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
                <Bar dataKey="javascript" fill="#EFD81D" />
                <Bar dataKey="python" fill="#366C9C" />
                <Bar dataKey="php" fill="#4D588E" />
                <Bar dataKey="go" fill="#70C8D6" />
                {/* <Bar dataKey="totalBlog" fill="#82ca9d" /> */}
            </BarChart>
        </div>
    );
};

export default BlogChart;