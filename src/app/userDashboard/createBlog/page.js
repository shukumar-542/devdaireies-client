'use client'
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {

    const { user } = useAuth();
    console.log(user);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // TODO
    // img hosting url and token
    const imageHostingToken = 'b651d2d36b1c44e61a2b3f64e039910a';
    const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        console.log(data);
        fetch(imageHostingURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { title, author, email, description, image, category, subcategory, tags, } = data;
                    const newItem = { title, author: user?.displayName, email: user?.email, description, image, category, subcategory, tags, date: new Date(), image: imgURL, 'status': 'Pending' }
                    console.log(newItem);
                    // TODO
                    // posting url need to set
                    axios.post('http://localhost:5000/blog', newItem)
                        .then(data => {
                            console.log('posted to the database', data.data);
                            if (data.data.insertedId) {
                                reset();
                                console.log('Blog added');
                            }
                        })
                }
                console.log(imgResponse);
            })

        console.log(data)
    };


    return (
        <div className="w-full">
            <h3 className="text-3xl font-bold text-fuchsia-500 text-center mt-8 mb-4">Create A Blog</h3>
            <div className="">
                <div className=" lg:w-1/2 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text"
                                {...register("title", { required: true })}
                                placeholder="Title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Featured Image</span>
                            </label>
                            <input type="file"
                                {...register("image", { required: true })}
                                className="file-input file-input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Content</span>
                            </label>
                            <textarea type="text"
                                {...register("description", { required: true })}
                                placeholder="Your Content" className="textarea textarea-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                {...register("category", { required: true })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>JavaScript</option>
                                <option>Python</option>
                                <option>PHP</option>
                                <option>Go</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text"
                                {...register("subcategory", { required: true })}
                                placeholder="Sub-category" className="input input-bordered" />
                        </div>
                        {/* Tags */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tag</span>
                            </label>
                            <select
                                {...register("tags", { required: true })} className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>JavaScript</option>
                                <option>Python</option>
                                <option>PHP</option>
                                <option>Go</option>
                                <option>ReactJS</option>
                                <option>MongoDB</option>
                                <option>NodeJS</option>
                                <option>ExpressJS</option>
                                <option>Data Science</option>
                                <option>DJango</option>
                                <option>web development</option>
                                <option>responsive design</option>
                                <option>database</option>
                                <option>cloud computing</option>
                                <option>scalability</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("author")}
                                className="input input-bordered"
                                readOnly
                                defaultValue={user?.displayName || ""}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Email</span>
                            </label>
                            <input
                                type="text"
                                {...register("email")}
                                className="input input-bordered"
                                readOnly
                                defaultValue={user?.email || ""}
                            />
                        </div>
                        <button className="w-full">Publish Blog</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default page;