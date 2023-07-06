/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { AuthContext } from '@/Context/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import fingerPrint from '../../../assets/Fingerprint.gif';

const page = () => {
    const {loginUser, resetPassword} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const emailRef = useRef()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        loginUser(email, password)
        .then(res => {
            console.log(res)
        })
        .catch(err => setError(err.message))

     }
    //  password reset
    const handelPassReset = () => {
        const email = emailRef.current.value;
        setError('');
        if (!email) {
            return setError('Please input your email');
        }
        resetPassword(email)
            .then(() => {
                alert('Please chaek your email');
            })
            .catch((err) => {
                setError(err.message);
            });
    };
    return (
        <div className='container mx-auto flex items-center h-[100vh]'>
        <div className='w-full'>
            <Image className='w-full' src={fingerPrint} alt='finger print'/>
        </div>
        <div className='w-full'>
            <div className='mb-10 '>
                <p className='text-base text-center text-primaryDark'>Welcome to Dev Dairies  </p>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold font-title text-center '>Thanks for coming back</h1>
            </div>
            <div className='mb-5'>
                {error && (
                    <div className='border border-red-500 bg-red-200 py-2 text-center rounded-md'>
                        <p className='text-red-600'>{error}</p>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}  className='space-y-3'>
              
                <div>
                    <label htmlFor="">Email Address</label>
                    <input {...register('email', { required: true })} type="email" className='w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300' ref={emailRef} />
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
                <div className="flex items-center justify-between py-2">
						<div className="flex items-center ">
							<input
								type="checkbox"
								className="checkbox checkbox-info "
							/>
							<span className="pl-2 text-base text-gray-500">Remember me?</span>
						</div>
						<span onClick={handelPassReset} className='text-base cursor-pointer text-primaryDark underline'>
                        Forgot Password?
                        </span>
					</div>
                <input type="submit" value="Sign In" className='px-3 py-2 w-full bg-primaryDark text-textDarkBlue text-lg font-semibold rounded-md cursor-pointer' />
            </form>
            <p className='mt-4 text-base text-textDarkBlue'>Don't have an account? <Link className='text-primaryDark hover:underline duration-300' href='/signup'>Sign Up </Link></p>
        </div>
    </div>
    );
};

export default page;