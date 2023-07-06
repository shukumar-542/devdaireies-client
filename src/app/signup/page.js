/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { AuthContext } from '@/Context/AuthProvider';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import fingerPrint from '../../../assets/Fingerprint.gif';
const page = () => {
    const {registerUser, updateUser} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        setError('')
        const name = data.name;
        const email = data.email;
        const password = data.password;
        // host image
        const formData = new FormData();
        formData.append('file', data.photo[0]);
        formData.append('upload_preset', `${process.env.NEXT_PUBLIC_cloudDainary_preset}`);
        formData.append('cloud_name', `${process.env.NEXT_PUBLIC_cloudDainary_cloudName}`);
        axios
            .post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_cloudDainary_cloudName}/image/upload`, formData)
            .then((image) => {
                const photo = image.data.url;
                console.log(photo)
                if (data.password !== data.confirmPassword) {
                    return setError('Password Do not match');
                }
                registerUser(email, password)
                .then(res => {
                    updateUser(name, photo);
                    console.log(res)
                })
                .catch(err => setError(err.message))
            })
    }

    return (
            <div className='container mx-auto flex items-center h-[100vh]'>
            <div className='w-full'>
                <Image className='w-full' src={fingerPrint} alt='finger print'/>
            </div>
            <div className='w-full'>
                <div className='mb-10 '>
                    <p className='text-base text-center text-primaryDark'>Welcome to Dev Dairies  </p>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold font-title text-center '>Create Your First Account</h1>
                </div>
                <div className='mb-5'>
                    {error && (
                        <div className='border border-red-500 bg-red-200 py-2 text-center rounded-md'>
                            <p className='text-red-600'>{error}</p>
                        </div>
                    )}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                    <div>
                        <label htmlFor="">Full Name</label>
                        <input {...register('name', { required: true })} type="text" className='w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300' />
                    </div>
                    <div>
                        <label htmlFor="">Profile Picture</label>
                        <input {...register('photo', { required: true })} type="file" className='w-full   border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300 file:py-2 file:px-3 file:border-none file:bg-primaryDark' />
                    </div>
                    <div>
                        <label htmlFor="">Email Address</label>
                        <input {...register('email', { required: true })} type="email" className='w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300' />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <div className='relative'>
                         <input {...register('password', { required: true })} type={showPass? 'text': 'password'} className='w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300' />
                         {
                            showPass?
                        <span onClick={()=> setShowPass(!showPass)} className='absolute right-4 top-2 text-2xl text-textDarkGray cursor-pointer'>
                            <BsEyeSlashFill /> 
                         </span> : <span onClick={()=> setShowPass(!showPass)} className='absolute right-4 top-2 text-2xl text-textDarkGray cursor-pointer '>
                            <BsEyeFill />
                         </span>
                         }
                       </div>
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password</label>
                       <div className='relative'>
                         <input {...register('confirmPassword', { required: true })} type={showPass? 'text': 'password'} className='w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300 relative' />
                         {
                            showPass?
                        <span onClick={()=> setShowPass(!showPass)} className='absolute right-4 top-2 text-2xl text-textDarkGray cursor-pointer'>
                            <BsEyeSlashFill /> 
                         </span> : <span onClick={()=> setShowPass(!showPass)} className='absolute right-4 top-2 text-2xl text-textDarkGray cursor-pointer '>
                            <BsEyeFill />
                         </span>
                         }
                       </div>
                    </div>
                    <input type="submit" value="Sign Up" className='px-3 py-2 w-full bg-primaryDark text-textDarkBlue text-lg font-semibold rounded-md' />
                </form>
                <p className='mt-4 text-base text-textDarkBlue'>Already have an account? <Link className='text-primaryDark hover:underline duration-300' href='/signin'>Sign In </Link></p>
            </div>
        </div>
        
    );
};

export default page;