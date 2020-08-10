import React from 'react'
import NeighborhoodCard from '../molecules/NeighborhoodCard'
import H1 from '../atoms/H1'
import LocalCard from '../molecules/LocalCard'

const Home = () => {
    return (
        <>
            <div className='md:w-3/4 sm:w-full mx-auto m-12'>
                <H1 h1={'Neighborhoods'} />
                <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-2 justify-center relative'>
                    <NeighborhoodCard whitetitle={'Kichijoji'} imagewide={'https://source.unsplash.com/layMbSJ3YOE'} />
                    <NeighborhoodCard whitetitle={'Nakano'} imagewide={'https://source.unsplash.com/hwLAI5lRhdM'} />
                    <NeighborhoodCard whitetitle={'Shin-Ogikubo'} imagewide={'https://source.unsplash.com/02kTeRPbndQ'} />
                    <NeighborhoodCard whitetitle={'Nishi-Ogikubo'} imagewide={'https://source.unsplash.com/khQY5Eu-aa0'} />
                    <NeighborhoodCard whitetitle={'Mitaka'} imagewide={'https://source.unsplash.com/c8ioq1LH_mI'} />
                    <NeighborhoodCard whitetitle={'Asagaya'} imagewide={'https://source.unsplash.com/WyuxUIyEP4A'} />
                </div>
            </div>

            <div className='w-3/4 mx-auto m-12'>
                <H1 h1={'Locals'} />
                <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-2 relative'>
                    <LocalCard imagetall={'https://source.unsplash.com/wJ-yzQDAMXs/900x1600'} h3='Yuru,36' subtitle='Student' />
                    <LocalCard imagetall={'https://source.unsplash.com/nF8YIvklCKk/900x1600'} h3='Nozomi, 42' subtitle='Accountant' />
                    <LocalCard imagetall={'https://source.unsplash.com/ySQbhCdm6YE/900x1600'} h3='Yu, 32' subtitle='Travel Blogger' />
                    <LocalCard imagetall={'https://source.unsplash.com/O9Lw87Nbbog/900x1600'} h3='Suzu,36' subtitle='Model' />
                </div>
            </div>
        </>
    )
}

export default Home
