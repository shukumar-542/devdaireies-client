/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import fingerPrint from "../../../assets/Fingerprint.gif";
import { AuthContext } from "@/Context/AuthProvider";
import { updateProfile, getAuth } from 'firebase/auth';
import app from '../../Firebase/Firebase.config'
import Swal from 'sweetalert2';


const auth = getAuth(app)
const page = () => {
  const { createUserWithEMail, user, setUser } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPass, setShowPass] = useState(false);

  


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const pass = data.password
    const rePass = data.confirmPassword
    if (pass !== rePass) {
      Swal.fire({
        title: 'Password does not match!!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

      return;
    }

    createUserWithEMail(data.email, data.password)
      .then(result => {
        const user = result.user;
        updateUser(data.name, data.photo)
        setUser({ ...user, displayName: data.name, photoURL: data.photo })
        console.log(data.name);
        const useUserDb = {
          email: user.email,
          displayName: data.name,
          image: data.photo
        }
        // savedUser(useUserDb)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Create SuccessFully',
          showConfirmButton: false,
          timer: 1500
        })
        setError('')


      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage)
      })
  }
  // update users display name and photoURl
  const updateUser = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  return (
    <div className="container mx-auto flex items-center my-10 h-[100vh]">
      <div className="w-full">
        <Image className="w-full" src={fingerPrint} alt="finger print" />
      </div>
      <div className="w-full">
        <div className="mb-10 ">
          <p className="text-base text-center text-primaryDark">
            Welcome to Dev Dairies{" "}
          </p>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-title text-center ">
            Create Your First Account
          </h1>
        </div>
        <div className="mb-5">
          {error && (
            <div className="border border-red-500 bg-red-200 py-2 text-center rounded-md">
              <p className="text-red-600">{error}</p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label htmlFor="">Full Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300"
            />
          </div>
          <div>
            <label htmlFor="">Profile Picture</label>
            <input
              {...register("photo", { required: true })}
              type="file"
              className="w-full   border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300 file:py-2 file:px-3 file:border-none file:bg-primaryDark"
            />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                type={showPass ? "text" : "password"}
                className="w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300"
              />
              {showPass ? (
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-2 text-2xl text-textDarkGray cursor-pointer"
                >
                  <BsEyeSlashFill />
                </span>
              ) : (
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-2 text-2xl text-textDarkGray cursor-pointer "
                >
                  <BsEyeFill />
                </span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="">Confirm Password</label>
            <div className="relative">
              <input
                {...register("confirmPassword", { required: true })}
                type={showPass ? "text" : "password"}
                className="w-full py-2 px-3 border-2 border-slate-300 focus:border-primaryDark rounded-md outline-none duration-300 relative"
              />
              {showPass ? (
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-2 text-2xl text-textDarkGray cursor-pointer"
                >
                  <BsEyeSlashFill />
                </span>
              ) : (
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-2 text-2xl text-textDarkGray cursor-pointer "
                >
                  <BsEyeFill />
                </span>
              )}
            </div>
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="px-3 py-2 w-full bg-primaryDark text-textDarkBlue text-lg font-semibold rounded-md"
          />
        </form>
        <p className="mt-4 text-base text-textDarkBlue">
          Already have an account?{" "}
          <Link
            className="text-primaryDark hover:underline duration-300"
            href="/signin"
          >
            Sign In{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
