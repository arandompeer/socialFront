import React from 'react'

const Jumbutron = ({ children }) => {
  return (
    <div className=" flex items-center py-10">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-purple-600 text-center text-5xl font-bold mb-5'>Tagz</h1>
        <div></div>
        {children}
      </div>
    </div>
  )
}

export default Jumbutron