import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [search, setSearch] = useState('') 
    const dispatch = useDispatch()

    return (
        <div >
        <form 
        onSubmit={(e)=>{
            e.preventDefault()
            dispatch(setQuery(search))
            setSearch('')
            }} 
        className='flex p-10 bg-blue-300 gap-7'>
                <input 
                value = {search}
                onChange={(e)=>{setSearch(e.target.value)}}
                required
                type="text" 
                placeholder='Search for photos, videos and gifs ....'
                className='text-xl w-full rounded outline-none px-4 py-2' 
                />
                <button
                className=' cursor-pointer active:scale-95 text-xl rounded outline-none px-4 py-2'
                >Search</button>
        </form>
        </div>
    )
}

export default SearchBar
