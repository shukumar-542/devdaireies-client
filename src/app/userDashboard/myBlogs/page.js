import MySingleBlog from "../components/MySingleBlog";

const page = () => {
    return (
        <div className="bg-slate-100 mb-6 p-6 rounded-md w-full">
            <h1 className="font-bold text-2xl p-4">Published Blogs</h1>
            <MySingleBlog />
        </div>
    );
};

export default page;