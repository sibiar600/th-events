import React from 'react'
import LocalCard from '../molecules/LocalCard'
import H1 from '../atoms/H1'

const LocalList = (props) => {
    return (
        <>
            <div className='w-1/2 mx-auto m-12'>
                <H1 h1={'Locals'} />
                <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-2 relative'>
                    <LocalCard imagetall={'https://source.unsplash.com/wJ-yzQDAMXs/900x1600'} h3='Yuru,36' subtitle='Student' />
                    <LocalCard imagetall={'https://source.unsplash.com/nF8YIvklCKk/900x1600'} h3='Nozomi, 42' subtitle='Accountant' />
                    <LocalCard imagetall={'https://source.unsplash.com/ySQbhCdm6YE/900x1600'} h3='Yu, 32' subtitle='Travel Blogger' />
                    <LocalCard imagetall={'https://source.unsplash.com/O9Lw87Nbbog/900x1600'} h3='Suzu,36' subtitle='Model' />
                    <LocalCard imagetall={'https://source.unsplash.com/aWQDj2SmhMU/900x1600'} h3='Haruka, 42' subtitle='Translator' />
                    <LocalCard imagetall={'https://source.unsplash.com/jrwMaf2-YjY/900x1600'} h3='Yuri, 32' subtitle='Cook Instructor' />
                    <LocalCard imagetall={'https://source.unsplash.com/0Q0e2tEO8W8/900x1600'} h3='Yuki,36' subtitle='React Programmer' />
                    <LocalCard imagetall={'https://source.unsplash.com/rWJpKloM-Ew/900x1600'} h3='Shi, 42' subtitle='Nodejs Expert' />
                    <LocalCard imagetall={'https://source.unsplash.com/BDEgoMaNtZQ/900x1600'} h3='Janet, 32' subtitle='Mongodb Pro' />
                    <LocalCard imagetall={'https://source.unsplash.com/wJ-yzQDAMXs/900x1600'} h3='Yuru,36' subtitle='Student' />
                    <LocalCard imagetall={'https://source.unsplash.com/nF8YIvklCKk/900x1600'} h3='Nozomi, 42' subtitle='Accountant' />
                    <LocalCard imagetall={'https://source.unsplash.com/ySQbhCdm6YE/900x1600'} h3='Yu, 32' subtitle='Travel Blogger' />
                </div>
            </div>


        </>
    )
}

export default LocalList
