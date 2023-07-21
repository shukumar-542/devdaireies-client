/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { AuthContext } from '@/Context/AuthProvider';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import fingerPrint from '../../../assets/Fingerprint.gif';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";



const page = () => {
    const {signUserWithEmailPass} = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const emailRef = useRef()
    const { register, handleSubmit,reset,formState: { errors }} = useForm();
    const onSubmit = (data) => {
        signUserWithEmailPass(data.email, data.password)
            .then(result => {
                const user = result.user;
                // savedUser(user)
                // setSuccess('user Logged in successfully')
                Swal.fire({
                    title: 'Login Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                console.log(user);
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })

     }
    //  password reset
    // const handelPassReset = () => {
    //     const email = emailRef.current.value;
    //     setError('');
    //     if (!email) {
    //         return setError('Please input your email');
    //     }
    //     resetPassword(email)
    //         .then(() => {
    //             alert('Please chaek your email');
    //         })
    //         .catch((err) => {
    //             setError(err.message);
    //         });
    // };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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
            <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center items-center flex-col space-y-2'>

                <div className="form-control w-1/2 ">
                    <input placeholder="Enter Email" {...register("email", { required: true })} className="input input-bordered " />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="form-control w-1/2 relative">
                    <input placeholder="Enter Password" type={passwordVisible ? "text" : "password"}{...register("password", { required: true })} className="input input-bordered " />
                    <span onClick={togglePasswordVisibility} className="absolute right-4 top-4">
                        {passwordVisible ? <AiFillEye className="text-gray-500 text-xl"/> : <AiFillEyeInvisible  className="text-gray-500 text-xl"></AiFillEyeInvisible>}
                    </span>
                    {errors.password && <span className="text-red-500">Password is required</span>}

                </div>
                {errors.exampleRequired && <span>This field is required</span>}

                <input className=' px-3 py-2 w-full bg-primaryDark text-textDarkBlue text-lg font-semibold rounded-md cursor-pointer' type="submit" />
                {/* <p>Don't Have an Account? <Link href={} className='text-blue-600 underline'>Register</Link></p> */}
            <p className='mt-4 text-base text-textDarkBlue'>Don't have an account? <Link className='text-primaryDark hover:underline duration-300' href='/signup'>Sign Up </Link></p>
            </form>
        </div>
    </div>
    );
};

export default page;