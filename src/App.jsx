import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-cener mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'> AI Image Enhancer</h1>
      <p className='text-lg text-gray-600'>upload your image and let ai enhance to in seconds
      </p>
      </div>
      <Home />
      <div className='text-lg text-gray-500 mt-6'>
        <p>powerded by picwash</p>

      </div>
      Footer
    </div>
  )
}

export default App