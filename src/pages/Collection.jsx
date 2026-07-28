import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import NavBar from '../components/NavBar'
import { clearCollection } from '../redux/features/collectionSlice'
import { toast, Bounce } from 'react-toastify';

const Collection = () => {

    const dispatch = useDispatch();

    
    const collection = useSelector(state => state.collection.items);

    const handleClear = () => {
        
        if (collection.length > 0) {
            
            dispatch(clearCollection()); 
            
            toast.error('All collection cleared', {
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
        } else {
            toast.error('Already empty', {
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
    }

  return (
    <> 
        <NavBar/>
        
        
        <div className='flex justify-between items-center p-3'>
            {collection.length > 0 ? 
            <h2 className="text-xl font-bold">Your Collection</h2> :
            <h2 className="text-xl font-bold text-gray-400">Collection is Empty</h2>
            }
            
            <button 
                className='bg-red-600 font-medium rounded px-3 py-2 cursor-pointer active:scale-95 transition'
                
                onClick={handleClear}
            >
                Clear Collection
            </button>
        </div>
        
        <div className="p-10 w-full flex flex-wrap gap-10 overflow-auto justify-start">
        
            {collection.map((item) => {
                return <CollectionCard key={item.id} item={item} />
            })}
        </div>
    </>
  )
}

export default Collection