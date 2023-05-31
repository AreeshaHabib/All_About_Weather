import React from 'react'
import logo from "../assets/logo.png"
function Header() {
     return (
          <div className="bg-gray-800/[0.8] bg-gradient-to-tr from-black-600 to-gray-200 shadow-xl shadow-gray-800 h-20 flex justify-around items-center rounded-b-lg">
               <h1 className="text-white md:text-4xl text-2xl">All About weather
               </h1>
               <img className="h-10 w-10 md:h-16 md:w-16 " src={logo} alt="logo" />
          </div>
     )
}

export default Header