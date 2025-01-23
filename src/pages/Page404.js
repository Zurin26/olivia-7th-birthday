import React from "react";
import {Link} from "react-router-dom";

export default function Page404() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-9xl font-bold text-gray-800'>404</h1>
        <p className='text-2xl font-medium text-gray-600 mt-4'>
          Page Not Found
        </p>
        <p className='text-gray-500 mt-2'>
          The page you're looking for doesn't exist.
        </p>
        <div className='mt-6'>
          <Link
            to='/'
            className='px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700'
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
