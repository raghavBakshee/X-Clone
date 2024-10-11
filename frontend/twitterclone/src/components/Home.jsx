import React from 'react'

import Feed from './Feed'
import RightSidebar from './RightSidebar'
import LeftSidebar from './LeftSidebar'

const Home = () => {
  return (
    <div className='flex justify-between w-[90%] mx-auto'>
        <LeftSidebar/>
        <Feed/>
        <RightSidebar/>
    </div>
  )
}

export default Home