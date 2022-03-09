import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Signup() {
  const schema = yup
    .object({
      firstName: yup.string().required("Required Field"),
      lastName: yup.string().required("Required Field"),
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
    <main className='bg-gradient-to-t from-slate-900 to bg-slate-800  text-white h-screen overflow-auto min-h-[600px]'>
      <div className='flex justify-center items-center h-full'>
        <div className='max-w-[400px] mx-auto px-6 py-8 rounded-lg w-full border-slate-500 sm:border-2 sm:shadow-xl'>
          <h1 className='text-3xl text-slate-100 font-bold mb-6'>Create your Account ✨</h1>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor='first-name'>
                  First Name <span className='text-rose-500'>*</span>
                  <span className='text-xs ml-6 text-rose-500'>{errors.firstName?.message}</span>
                </label>
                <input id='first-name' className='form-input w-full' type='text' {...register("firstName")} />
              </div>

              <div>
                <label className='block text-sm font-medium mb-1' htmlFor='last-name'>
                  Last Name <span className='text-rose-500'>*</span>
                  <span className='text-xs ml-6 text-rose-500'>{errors.lastName?.message}</span>
                </label>

                <input id='last-name' className='form-input w-full' type='text' {...register("lastName")} />
              </div>

              <div>
                <label className='block text-sm font-medium mb-1' htmlFor='email'>
                  Email Address <span className='text-rose-500'>*</span>
                  <span className='text-xs ml-6 text-rose-500'>{errors.email?.message}</span>
                </label>

                <input id='email' className='form-input w-full' {...register("email")} />
              </div>

              <div>
                <label className='block text-sm font-medium mb-1' htmlFor='password'>
                  Password <span className='text-rose-500'>*</span>
                  <span className='text-xs ml-6 text-rose-500'>{errors.password?.message}</span>
                </label>

                <input id='password' className='form-input w-full' type='password' autoComplete='on' {...register("password")} />
              </div>
            </div>
            <div className='flex items-center justify-between mt-6'>
              <div className='mr-1'>
                <label className='flex items-center'>
                  <input type='checkbox' className='form-checkbox' />
                  <span className='text-sm ml-2'>Email me about product news.</span>
                </label>
              </div>
              <button type='submit' className='btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap'>
                Sign Up
              </button>
            </div>
          </form>
          {/* Footer */}
          <div className='pt-5 mt-6 border-t border-slate-200'>
            <div className='text-sm'>
              Have an account?
              <Link className='font-medium text-indigo-500 hover:text-indigo-600' to='/'>
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        {/* <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />
          <img className="absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block" src={AuthDecoration} width="218" height="224" alt="Authentication decoration" />
        </div> */}
      </div>
    </main>
  );
}

export default Signup;
