import React from 'react'



const Card = (props) => {



    return (
        <div>
            <div className='card mb-4 bg-gray-100 rounded-lg hover:rounded-lg hover:shadow-2xl hover:bg-white md:p-4 sm:p-0'>
                <div className='px-6 py-4'>
                    <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/minatomiraibon-1280x600.jpg' alt=''></img>

                    <div className='flex flex-row justify-between mt-4 h-6'>
                        <div className='font-bold text-sm text-gray-800 font-serif'>Minato Mirai Bon Dance Festival</div>
                        <div className='font-bold text-sm text-gray-800 font-serif text-center'>{props.date}</div>
                    </div>

                    <div className='mb-6 mt-6 font-light text-justify text-sm md:h-40 sm:h-24'>Join the yukata-clad masses in the annual bon dance tradition at Rinko Park—in the shade of the skyscrapers on the Yokohama port waterfront. If the dancing tires you out, there’s also a beer garden and beautiful views of the illuminated Yokohama Bay Bridge to keep you occupied.</div>

                    <ul className='md:mt-10 sm:mt-0'>
                        <li className='text-sm'>08:00 - 17:00</li>
                        <li className='text-sm'><strong>Musashi Mitake Shrine</strong>, Ome</li>
                        <li className='text-teal-500 font-semibold text-sm'>1000 Yen</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
