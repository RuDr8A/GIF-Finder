import React from 'react'
import { fetchPhotos, fetchVideos, fetchGIFs } from './api/mediaApi';

const App = () => {
  return (
    <div className='h-screen w-full text-white bg-gray-700 flex items-center justify-center gap-4'>
      <button 
        className='bg-blue-500 px-4 py-2 rounded'
        onClick={async () => {
          // Await the function and store the returned data
          const data = await fetchPhotos('cat');
          console.log("Data received in App component:", data);
        }}
      >
        Get Photos 
      </button>

      <button 
        className='bg-blue-500 px-4 py-2 rounded'
        onClick={async () => {
          // Await the function and store the returned data
          const data = await fetchVideos('cat');
          console.log("Data received in App component:", data);
        }}
      >
        Get Videos
      </button>

       <button 
        className='bg-blue-500 px-4 py-2 rounded'
        onClick={async () => {
          // Await the function and store the returned data
          const data = await fetchGIFs('cat');
          console.log("Data received in App component:", data);
        }}
      >
        Get GIFs
      </button>
    </div>
  )
}

export default App