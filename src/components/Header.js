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
                        <li ><a className='text-teal-500 font-bold mr-3 ' href='/'>EN</a></li>
                        <li ><a className='text-gray-500 font-bold mr-3 hover:text-teal-500' href='/'>日本人</a></li>
                        <li ><a className='text-gray-500 font-bold mr-3 hover:text-teal-500' href='/'>中文</a></li>
                        <li ><a className='text-gray-500 font-bold hover:text-teal-500' href='/'>한국인</a></li>
                    </ul>
                </div>
            </div>
            <div className='h-px bg-gray-300 md:mx-24 sm:mx-8'></div>

        </>
    )
}

export default Header
