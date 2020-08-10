import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center mt-12 mb-4 md:mx-24 sm:mx-8 bg-gray-100'>
                <div>
                    <Link to='/'><img className='focus:outline-none' type='image' src={logo} alt="" /></Link>

                </div>

                <div className='w-1/2'>
                    <ul className='flex flex-start flex-wrap justify-around'>
                        <li>
                            <Link to='/' className='text-teal-500'>Home</Link>
                        </li>
                        <li>
                            <Link to='/stories' className='text-teal-500'>Stories</Link>
                        </li>
                        <li>
                            <Link to='/event' className='text-teal-500'>Event</Link>
                        </li>
                        <li>
                            <Link to='/hoods' className='text-teal-500'>Neighborhoods</Link>
                        </li>
                        <li>
                            <Link to='/locals' className='text-teal-500'>Locals</Link>
                        </li>
                    </ul>
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
