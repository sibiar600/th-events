import React from 'react'

const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center mt-12 mb-4 md:mx-24 sm:mx-8 bg-gray-100'>
                <div>
                    <img src={require('../images/logo.png')} alt="" />
                </div>

                <div >
                    <ul className='flex flex-row text-xs'>
                        <li className='text-teal-500 font-bold mr-3 hover:shadow-lg'>EN</li>
                        <li className='text-gray-500 font-bold mr-3 hover:shadow-lg'>日本人</li>
                        <li className='text-gray-500 font-bold mr-3 hover:shadow-lg'>中文</li>
                        <li className='text-gray-500 font-bold hover:shadow-lg'>한국인</li>
                    </ul>
                </div>
            </div>
            <div className='h-px bg-gray-300 md:mx-24 sm:mx-8'></div>

        </>
    )
}

export default Header
