import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';


const NavBar = () => {
  const {count} =useSelector((e)=>e.productCount);
  const {CountCard} = useSelector((e)=>e.userCount)
  return (
    <div className='w-full h-16 border-b-2 border-solid border-gray-94 border-gray-94 flex-wrap font-serif px-5 flex items-center justify-between'>
        <div className='flex justify-center items-center'>
       <div className='text-2xl md:hidden flex  justify-center items-center mr-5 '><RxHamburgerMenu/> </div>
        <h2 className='text-xl text-red-500 '>logo</h2>
       </div> 
        <div className=' gap-6 hidden sm:hidden md:flex'>
            <Link to={"/Home"}>Home</Link>
            <Link to={"/Users"}>Users</Link>
            <Link to={"/Products"}>Products</Link>
        </div>
        <div className='flex gap-5 text-lg'>
        <div className='absolute top-0 ml-3 mt-1 bg-blue-500 rounded-full px-1 text-white'>{count}</div>
        <div className='absolute top-0 ml-12 mt-1 text-white  bg-blue-500 rounded-full px-1 '>{CountCard}</div>
        
        <FaRegUserCircle/>
        <FaCartShopping/>
        </div>
    </div>
  )
}


export default NavBar