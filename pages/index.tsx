import React from 'react';
import '../styles/globals.css';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-indigo-600 text-center mb-4">
        Welcome to My Next.js App! (Pages Router)
      </h1>
      <p className="text-lg text-gray-700 text-center">
        This is the home page rendered by the Pages Router, and Tailwind CSS is working!
      </p>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6 block mx-auto">
        Click Me!
      </button>
    </div>
  );
};

export default Home;