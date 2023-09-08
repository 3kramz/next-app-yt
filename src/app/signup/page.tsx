"use client"
import Link from 'next/link';
import React from 'react';

const SignUp = () => {
const [user, setUser]=React.useState(
    {
        email:"",
        username:"",
        password:""
    }
    )

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input type="username" value={user.username} onChange={(e)=>{setUser({...user, username:e.target.value })}} id="email" className="border rounded w-full py-2 px-3" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" value={user.email} onChange={(e)=>{setUser({...user, email:e.target.value })}} id="email" className="border rounded w-full py-2 px-3" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input type="password" value={user.password}  onChange={(e)=>{setUser({...user, password:e.target.value })}}  id="password" className="border rounded w-full py-2 px-3" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
        <Link className='font-semibold' href="/login"> Visit Login Page</Link>
      </div>
    </div>
  );
};

export default SignUp;
