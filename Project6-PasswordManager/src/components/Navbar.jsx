import React from 'react'

const Navbar = () => {
  return (
    <nav className='container text-white bg-slate-800 flex px-4 justify-between items-center h-14'>
      <div className="mycontainer flex px-4 justify-between items-center h-14 py-5 w-[80vw]">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
          
        </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold cursor-pointer' href="Home">Home</a>
            <a className='hover:font-bold cursor-pointer' href="Contact">Contact</a>
            <a className='hover:font-bold cursor-pointer' href="About">About</a>
          </li>
        </ul> */}
        <button className='text-white bg-green-400 flex justify-center gap-1 items-center px-2 rounded-full py-1'>
          <img className='invert w-10 h-10 p-1' src="/icons/logo-github-128.webp" alt="" />
          <span className='font-bold'>Github</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar