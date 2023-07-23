'use client'

import { makeROleAdmin } from "@/hooks/blogApi";
import useUsers from "@/hooks/useUsers";
import Image from "next/image";

const page = () => {
    const { allUsers, refetchUsers } = useUsers();
    console.log("users", allUsers);
    const handleUserRole = (id) => {
        makeROleAdmin(id);
        refetchUsers();
    }
    return (
        <div className="p-4 w-full rounded-md bg-slate-100">
            <div>
                <h3 className="font-bold text-2xl mb-8">Manage Users</h3>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {
                    allUsers.map(singleUser => {
                        const { email, image, name, _id } = singleUser;
                        return (
                            <div key={singleUser._id}>
                                <div className="rounded-md p-4 text-center bg-white shadow-md hover:shadow-xl">
                                    <Image src={image} className="rounded-md mx-auto mb-5" alt="User Image" height={60} width={60} />
                                    <div className="space-y-3">
                                        <h3>{name}</h3>
                                        <p>{email}</p>
                                        <p className="text-bold text-purple">{singleUser?.role}</p>
                                        <button
                                            disabled={singleUser?.role == "admin"}
                                            onClick={() => handleUserRole(_id)}
                                            className="btn py-1 px-3 font-bold bg-slate-200 text-purple hover:text-white hover:bg-purple">Make Admin</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;