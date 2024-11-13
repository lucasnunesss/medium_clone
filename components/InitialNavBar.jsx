import React from 'react'

const InitialNavBar = () => {
  return (
    <nav className='border border-black p-5 flex justify-between'>
        <h1 className='font-extrabold text-3xl tracking-tighter mt-2'>Medium</h1>

        <div className='p-2 flex gap-5 text-sm'>
          <button>Sign In</button>
          <button className='bg-[#000000] rounded-full tracking-tighter p-2'><span className=' text-white '>Get Started</span></button>
        </div>
    </nav>
  )
}

export default InitialNavBar