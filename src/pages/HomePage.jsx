import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'

const HomePage = () => {
    const {query} = useSelector((store) => store.search)
  return (
    <div>
        <NavBar/>
        <SearchBar/>

        {(query != '') ? <div>
            <Tabs/>
            <ResultGrid/>
        </div> : ''}
      
    </div>
  )
}

export default HomePage
