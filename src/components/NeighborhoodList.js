import React from 'react'
import Title from './Title'
import Search from './Search'

const EventsList = () => {

    return (
        <>
            <div className='h-auto flex justify-center bg-gray-100'>
                <div className='md:w-3/4 sm:w-full'>
                    <div className='flex md:justify-between mt-24 flex-wrap'>
                        <Title title={'Neighborhoods'} />
                    </div>
                    <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-center relative mx-10'>

                        <div className='relative card bg-black rounded-lg hover:rounded-lg  hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Kichijoji</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/layMbSJ3YOE' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Nakano</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/hwLAI5lRhdM' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Shin-Ogikubo</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/02kTeRPbndQ' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Nishi-Ogikubo</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/khQY5Eu-aa0' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <div href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Mitaka</div>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/c8ioq1LH_mI' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Asagaya</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/WyuxUIyEP4A' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Koenji</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/GsSHHOA0RLY' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Shimokitazawa</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/3wciQ0Mg59Y' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Musashino</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/CsMNgdHXzFs' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Shinjuku</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/k2cmXS5ktp4' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Nakameguro</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/5MerlCpd0aM' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Asakusa</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/DpPutJwgyW8' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Yoyogi</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/3wciQ0Mg59Y' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Sasazuka</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/CsMNgdHXzFs' alt=''></img>
                            </div>
                        </div>

                        <div className='card bg-black rounded-lg hover:rounded-lg hover:shadow-2xl'>
                            <div>
                                <a href='/' className='absolute text-white font-bold z-10 pl-2 pt-1'>Hatagaya</a>
                                <img className='w-full h-24 object-cover rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:opacity-100 opacity-75' src='https://source.unsplash.com/k2cmXS5ktp4' alt=''></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

export default EventsList
