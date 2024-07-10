import React from 'react'
import { useDispatch } from 'react-redux'

const UsercardComponent = ({image,firstName,lastName,phone,email, jobrole,companyName,companyAddress,companycity,companydept,Education}) => {
 
 const dispatch = useDispatch();
    const handleEvent = ()=>
  {
    dispatch({type:"countUsers"});
  }
    return (
    
    
    <div className=' w-96    h-4/5  p-2 text-sm font-serif shadow-md text-slate-500  rounded-3xl bg-blue-200 '>
        <img className=' w-36 h-28 mx-24 bg-cover overflow-hidden' src={image} alt="" />
        <div className='flex'>
        <h1 className='text-3xl mr-2 mx-20 '>{firstName}</h1>
        <h1 className='text-3xl '>{lastName}</h1>
        </div>
        <div className='flex  items-center justify-center font-mono   text-slate-400'>
            <span className='w-44 '>Ph:{phone}</span>
            <span>{email}</span>
        </div> 

     <div className='p-1 m-1'>     
    <span className='mr-4'> {jobrole}  at</span>
    <span >{companyName}</span>
    </div>

<div className=' px-4'>
    <span className=''>{companyAddress},</span>
     <span className='mr-3'>{companycity}</span>
    <span>dept:{companydept}</span>
</div>

<div className='flex flex-col m-1 px-6'>
    <span>current:{jobrole}</span>
    <span>Education:{Education}</span>
</div>

<div className='m-3'>
    <button onClick={handleEvent} className='p-3 bg-slate-200 rounded-lg shadow-md cursor-pointer'>Add to Profile </button>
</div>
    </div>
    
    
    
  )
}

export default UsercardComponent;