import React from 'react'

const Header = () => {
    return (
        <>
            <div className='py-6 flex justify-between items-center border-b my-12 mx-24 bg-gray-100'>

                <div>
                    <img src={require('../images/logo.png')} alt="" />
                </div>

                <div >
                    <ul className='flex flex-row text-xs'>
                        <li className='text-teal-500 font-bold mr-3'>EN</li>
                        <li className='text-gray-500 font-bold mr-3'>日本人</li>
                        <li className='text-gray-500 font-bold mr-3'>中文</li>
                        <li className='text-gray-500 font-bold'>한국인</li>
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Header
