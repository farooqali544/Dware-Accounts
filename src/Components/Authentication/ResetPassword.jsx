import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <main className='bg-gradient-to-t from-slate-900 to bg-slate-800  text-white h-screen overflow-auto min-h-[500px]'>

      <div className='flex justify-center items-center h-full'>
        <div className='max-w-[420px] w-full mx-auto px-6 sm:px-8 py-8 rounded-lg  border-slate-500 sm:border-2 sm:shadow-xl'>
          <h1 className='text-3xl  font-bold mb-6'>Reset your Password ✨</h1>
          {/* Form */}
          <form>
            <div className='space-y-4'>
              <div>
                <label className='block text-sm font-medium mb-1' htmlFor='email'>
                  Email Address <span className='text-rose-500'>*</span>
                </label>
                <input id='email' className='form-input w-full' type='email' />
              </div>
            </div>
            <div className='flex justify-end mt-6'>
              <button className='btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap'>Send Reset Link</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ResetPassword;
