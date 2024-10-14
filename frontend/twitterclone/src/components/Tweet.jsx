import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
const Tweet = () => {
    return (
        <div>
            <div>
                <div className='flex p-4'>
                    <Avatar src='https://pbs.twimg.com/profile_images/1760869429120835584/L-RB4uQ1_400x400.jpg' size="40" round={true} />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'> John Abraham</h1>
                            <p className='text-gray-500  text-sm ml-1'>@john_abraham . 1m</p>
                        </div>
                        <div>
                            <p>Hello Developers, let's grow together.</p>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center'>
                                <div>
                                    <FaRegComment size="20px" />
                                </div>

                                <p className='ml-1'>0</p>
                            </div>
                            <div className='flex items-center'>
                                <CiHeart size="24px" />
                                <p className='ml-1'>0</p>
                            </div>
                            <div className='flex items-center'>
                                <CiBookmark size="24px" />
                                <p className='ml-1'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet