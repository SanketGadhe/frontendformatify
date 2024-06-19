import React from 'react'
import { IoClose } from "react-icons/io5";
const Create = () => {
  return (
    <div className='newproject px-3 py-2 bg-[#303d56]  bg-gradient-to-r from-[#303d56] to-[#16a0d3] z-30 absolute w-[40vw] left-[50%] -translate-x-[50%] text-white rounded-lg'>
        <div className="cretext text-xl font-bold flex justify-between items-center my-3">
            <div className="new">New Project</div>
            <div className="button cursor-pointer" onClick={()=>{
                document.querySelector('.newproject').classList.add('hidden')
            }}><IoClose/></div>
        </div>
        <div className="form py-3 border-t-[2px] ">
            <form action="" className='w-full'>
                <input type="text" className='px-3 py-1 text-xl font-medium w-full my-3 rounded-md text-black' placeholder='Project Name' />
            <div className="buttonsof flex justify-end items-center pt-2">
                <div className="float flex items-center gap-4">
                <button onClick={()=>{
                document.querySelector('.newproject').classList.add('hidden')
            }} className='px-3 py-1 text-xl  border-[1.3px] flex items-center justify-center shadow-lg border-black rounded-2xl bg-[#c33636] hover:bg-[#983131] transition-all'>Cancel</button>
                <input type="button" value="Create" className='px-3 py-1 text-xl  border-[1px] rounded-2xl cursor-pointer border-black bg-[#486b84] hover:bg-[#245460] '/></div>
            </div>
            </form>
        </div>
      
    </div>
  )
}

export default Create
