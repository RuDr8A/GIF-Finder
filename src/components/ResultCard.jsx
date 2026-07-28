import React from 'react'

const ResultCard = ({ item }) => {
  return (
    // Adjusted width and added min-width so it looks good on smaller screens too
    <div className='relative w-[18vw] min-w-[250px] h-72 rounded-lg shadow-xl overflow-hidden flex flex-col hover:scale-105 transition duration-300'>
      
      {/* 1. Conditionally render a Video or an Image based on your normalized 'type' */}
      {item.type === 'Video' ? (
        <video 
            src={item.src} 
            poster={item.thumbnail} // Shows the image before play is clicked
            autoPlay loop muted 
            className='w-full h-full object-cover bg-black'
        />
      ) : (
        <img 
            src={item.thumbnail} 
            alt={item.title} 
            className='w-full h-5/6 object-cover bg-gray-900'
        />
      )}

      {/* 2. Display the Title */}
      <div id = "bottom" className='py-6 w-full flex items-center justify-between p-2 absolute bottom-0'>
         {/* Fixed: text-blck -> text-white, and added 'truncate' so long titles don't break the layout */}
        <h1 className='text-white  truncate text-lg font-medium capitalize'>{item.title}</h1>
        <button className='bg-red-700 px-3 py-1 font-medium cursor-pointer rounded'>Save</button>
      </div>
      
    </div>
  )
}

export default ResultCard