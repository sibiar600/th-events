import React from 'react'



const Footer = () => {

    return (
        <div className='mt-12 bg-gray-900'>
            <div className='md:w-3/4 sm:w-4/5 mx-auto'>
                <div className='pt-64 bg-gray-900'>
                    <ul className='bg-gray-900 ml-10'>
                        <li className='text-semibold text-gray-400 text-xl xs:text-sm'>Designed by Nono Umasy</li>
                        <li className='text-semibold text-gray-400 text-xl xs:text-sm'>Los Angeles, Tokyo, Lisbon</li>
                        <li className='text-semibold text-gray-400 text-xl xs:text-sm'>hello@tokyohoods</li>
                    </ul>

                    <div className='pt-12'>
                        <div className='flex justify-between'>
                            <div className='text-xs text-gray-600 mb-4 ml-10'>©2020 TokyoHoods</div>
                            <a href='/' className='text-xs text-gray-600 mb-4 mr-10'>Back to the Top</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer
