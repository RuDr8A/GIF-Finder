import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection} from '../redux/features/collectionSlice' 
import { toast, Bounce } from 'react-toastify';

const ResultCard = ({ item }) => {

    const dispatch = useDispatch();
    
   
    const handleSave = (item) => {
        dispatch(addCollection(item))
        toast.success('Added to Collection ✅', {
            position: "top-center",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

  return (
    
    <div className='relative w-[18vw] min-w-[250px] h-72 rounded-lg shadow-xl overflow-hidden flex flex-col hover:scale-105 transition duration-300'>
      
      <a target='_blank' href={item.src} className='h-full'>
        {item.type === 'Video' ? (
            <video 
                src={item.src} 
                autoPlay loop muted 
                className='w-full h-full object-cover bg-black'
            />
        ) : (
            <img 
                src={item.thumbnail} 
                alt={item.title} 
                className='w-full h-full object-cover bg-gray-900'
            />
        )}
      </a>

      <div id="bottom" className='py-6 w-full flex items-center justify-between p-2 absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent'>
         
        <h1 className='text-white truncate text-lg font-medium capitalize w-2/3'>
            {item.title}
        </h1>
        
        <button 
            className='bg-red-700 px-3 py-1 font-medium text-white cursor-pointer rounded active:scale-95'
            onClick={() => { handleSave(item) }}
        >
            Save
        </button>
      </div>
      
    </div>
  )
}

export default ResultCard