import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Signin() {
  const schema = yup
    .object({
      email: yup.string().email("Invalid Email"),
      password: yup.string().min(8, "Password must have 8 characters"),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className='bg-gradient-to-t from-slate-900 to bg-slate-800 text-white h-screen overflow-auto min-h-[500px]'>
      <div className='flex justify-center items-center h-full'>
        <div className='max-w-sm w-full mx-auto px-8 py-8 rounded-lg  border-slate-500 sm:border-2 sm:shadow-xl'>
          <h1 className='text-3xl  font-bold mb-6'>Welcome back! ✨</h1>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor='email'>
                  Email Address
                  <span className='text-xs ml-6 text-rose-500'>{errors.email?.message}</span>
                </label>
                <input id='email' className='form-input w-full' type='email' {...register("email")} />
              </div>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor='password'>
                  Password
                  <span className='text-xs ml-6 text-rose-500'>{errors.password?.message}</span>
                </label>
                <input id='password' className='form-input w-full' type='password' autoComplete='on' {...register("password")} />
              </div>
            </div>
            <div className='flex items-center justify-between mt-6'>
              <div className='mr-1'>
                <Link className='text-sm underline hover:no-underline' to='/reset-password'>
                  Forgot Password?
                </Link>
              </div>
              <button type='submit' className='btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3'>
                Sign In
              </button>
            </div>
          </form>
          {/* Footer */}
          <div className='pt-5 mt-6 border-t border-slate-200'>
            <div className='text-sm'>
              Don’t you have an account?{" "}
              <Link className='font-medium text-indigo-500 hover:text-indigo-600' to='/signup'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signin;
