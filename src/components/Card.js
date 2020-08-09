import React from 'react'



const Card = ({ image, name, date, description, time, venue, city, price }) => {
    return (
        <>
            <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white md:p-4 sm:p-0'>
                <div className='px-6 py-4'>
                    <img className='w-full h-48 object-cover rounded-lg' src={image} alt=''></img>

                    <a href='/' className='flex flex-row justify-between mt-4 h-6'>
                        <div className='font-bold text-sm text-teal-500 font-serif'>{name}</div>
                        <div className='font-bold text-sm text-gray-800 font-serif text-center'>{date}</div>
                    </a>

                    <div className='mt-10 font-light text-justify text-sm md:h-32 sm:h-24'>{description}</div>

                    <ul className='md:mt-12 sm:mt-0'>
                        <li className='text-sm'>{time}</li>
                        <li><a className='text-sm text-teal-500 font-bold' href='/'>{venue}</a>, <a className='text-sm' href='/'>{city}</a></li>
                        <li className='font-semibold text-sm'>{price}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Card
