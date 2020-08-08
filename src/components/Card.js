import React from 'react'



const Card = (props) => {
    return (
        <div>
            <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white md:p-4 sm:p-0'>
                <div className='px-6 py-4'>
                    <img className='w-full h-48 object-cover rounded-lg hover:border' src={props.image} alt=''></img>

                    <div className='flex flex-row justify-between mt-4 h-6'>
                        <div className='font-bold text-sm text-gray-800 font-serif'>{props.name}</div>
                        <div className='font-bold text-sm text-gray-800 font-serif text-center'>{props.date}</div>
                    </div>

                    <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>{props.description}</div>

                    <ul className='md:mt-10 sm:mt-0'>
                        <li className='text-sm'>{props.startHour}-{props.endHour}</li>
                        <li className='text-sm'><strong>{props.venue}</strong>, {props.city}</li>
                        <li className='text-teal-500 font-semibold text-sm'>{props.price}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
