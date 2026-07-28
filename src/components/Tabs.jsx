import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'
const Tabs = () => {
    const tab = ['photos', 'videos', 'gifs'];
    const activeTab= useSelector((state) => state.search.activeTab) ;
    const dispatch = useDispatch()
  return (
    <div className='flex gap-10 p-12'>
      {tab.map((e,i)=>{
        return (
            <button 
            className ={`${(activeTab == e) ? 'bg-blue-300' : 'bg-gray-400'} transition rounded cursor-pointer active:scale-95 px-4 py-2 uppercase`}
            onClick={()=>{dispatch(setActiveTabs(e))}} 
            key={i}>
            {e}
            </button>
        )
      })}
    </div>
  )
}

export default Tabs
