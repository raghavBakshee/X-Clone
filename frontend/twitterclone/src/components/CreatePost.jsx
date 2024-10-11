import React from 'react'
import Avatar from 'react-avatar'
const CreatePost = () => {
    return (
        <div className='w-[100%]'>
            <div>
                <div className='flex items-center justify-evenly border-b border-gray-200'>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
                        <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                    </div>
                </div>
                <div className='m-4'>
                    <div className='flex items-center'>
                        <div>
                            <Avatar src='https://pbs.twimg.com/profile_images/1760869429120835584/L-RB4uQ1_400x400.jpg' size="40" round={true} />
                        </div>
                        <input className='w-full outline-none border-none text-lg ml-2' type='text' placeholder="What is happening?! "/>
                    </div>
                    <div>
                        <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white border-none rounded-full'>Post</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreatePost