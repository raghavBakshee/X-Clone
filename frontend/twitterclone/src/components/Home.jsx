import React from 'react'

//import Feed from './Feed'
import RightSidebar from './RightSidebar'
import LeftSidebar from './LeftSidebar'
import {Outlet} from 'react-router-dom'


const Home = () => {

  return (
    <div className='flex justify-between w-[90%] mx-auto'>
        <LeftSidebar/>
        <Outlet/>
        <RightSidebar/>
    </div>
  )
}

export default Home