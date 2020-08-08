import React from 'react'

const EventsList = () => {
    return (
        <>
            <div className='h-auto flex justify-center'>

                <div className='w-4/5'>
                    {/* header */}
                    <div className='flex justify-between items-center mt-12'>
                        <h1 className='text-3xl text-teal-500 ml-10 font-serif'>Tokyo Events Calendar</h1>
                        <div className='flex '>
                            <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-100 font-bold px-6 rounded mr-3'>By Price</button>
                            <button className='bg-gray-200 text-xs text-gray-600 uppercase tracking-widest hover:bg-gray-100 font-bold px-6 py-3 rounded mr-10'>By Event Type</button>
                        </div>

                    </div>


                    {/* main container */}
                    <div className='mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center relative'>

                        {/* cards */}
                        <div className='card mb-4 bg-white rounded-lg hover:rounded-lg hover:shadow-2xl p-4'>
                            <div className='px-6 py-4'>
                                <div className='flex flex-row justify-between'>
                                    <div className='font-bold text-lg text-gray-800 font-serif'>Hinode Matsuri</div>
                                    <div className='font-bold text-lg text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify'>The Hinode Matsuri, or Sunrise Festival, is the annual spring festival of Musashi-Mitake-jinja Shrine. The name of this important festival comes from a ceremony held by Buddhist mountain priests upon reaching the peak of the mountain.</div>

                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/7582884598_b02823726b_o-1280x600.jpg' alt=''></img>
                                <ul className='mt-4'>
                                    <li>08:00 - 17:00</li>
                                    <li><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold'>Free</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-white rounded-lg hover:rounded-lg hover:shadow-2xl p-4'>
                            <div className='px-6 py-4'>
                                <div className='flex flex-row justify-between'>
                                    <div className='font-bold text-lg text-gray-800 font-serif'>Hinode Matsuri</div>
                                    <div className='font-bold text-lg text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6  font-light text-justify'>The Hinode Matsuri, or Sunrise Festival, is the annual spring festival of Musashi-Mitake-jinja Shrine. The name of this important festival comes from a ceremony held by Buddhist mountain priests upon reaching the peak of the mountain.</div>

                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/kawasaki-la-cittadella-770x513.jpg' alt=''></img>
                                <ul className='mt-4'>
                                    <li>08:00 - 17:00</li>
                                    <li><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-white rounded-lg hover:rounded-lg hover:shadow-2xl p-4'>
                            <div className='px-6 py-4'>
                                <div className='flex flex-row justify-between'>
                                    <div className='font-bold text-lg text-gray-800 font-serif'>Hinode Matsuri</div>
                                    <div className='font-bold text-lg text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify'>The Hinode Matsuri, or Sunrise Festival, is the annual spring festival of Musashi-Mitake-jinja Shrine. The name of this important festival comes from a ceremony held by Buddhist mountain priests upon reaching the peak of the mountain.</div>

                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/7582884598_b02823726b_o-1280x600.jpg' alt=''></img>
                                <ul className='mt-4'>
                                    <li>08:00 - 17:00</li>
                                    <li><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold'>Free</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-white rounded-lg hover:rounded-lg hover:shadow-2xl p-4'>
                            <div className='px-6 py-4'>
                                <div className='flex flex-row justify-between'>
                                    <div className='font-bold text-lg text-gray-800 font-serif'>Hinode Matsuri</div>
                                    <div className='font-bold text-lg text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6  font-light text-justify'>The Hinode Matsuri, or Sunrise Festival, is the annual spring festival of Musashi-Mitake-jinja Shrine. The name of this important festival comes from a ceremony held by Buddhist mountain priests upon reaching the peak of the mountain.</div>

                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/kawasaki-la-cittadella-770x513.jpg' alt=''></img>
                                <ul className='mt-4'>
                                    <li>08:00 - 17:00</li>
                                    <li><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-white rounded-lg hover:rounded-lg hover:shadow-2xl p-4'>
                            <div className='px-6 py-4'>
                                <div className='flex flex-row justify-between'>
                                    <div className='font-bold text-lg text-gray-800 font-serif'>Hinode Matsuri</div>
                                    <div className='font-bold text-lg text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6 font-light text-justify'>The Hinode Matsuri, or Sunrise Festival, is the annual spring festival of Musashi-Mitake-jinja Shrine. The name of this important festival comes from a ceremony held by Buddhist mountain priests upon reaching the peak of the mountain.</div>

                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/08/7582884598_b02823726b_o-1280x600.jpg' alt=''></img>
                                <ul className='mt-4'>
                                    <li>08:00 - 17:00</li>
                                    <li><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold'>Free</li>
                                </ul>
                            </div>
                        </div>

                        <div className='card mb-4 bg-white rounded-lg hover:rounded-lg hover:shadow-2xl p-4'>
                            <div className='px-6 py-4'>
                                <div className='flex flex-row justify-between'>
                                    <div className='font-bold text-lg text-gray-800 font-serif'>Hinode Matsuri</div>
                                    <div className='font-bold text-lg text-gray-800 font-serif text-center'>8 May</div>
                                </div>

                                <div className='mb-6 mt-6  font-light text-justify'>The Hinode Matsuri, or Sunrise Festival, is the annual spring festival of Musashi-Mitake-jinja Shrine. The name of this important festival comes from a ceremony held by Buddhist mountain priests upon reaching the peak of the mountain.</div>

                                <img className='w-full h-48 object-cover rounded-lg hover:border' src='https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2017/07/kawasaki-la-cittadella-770x513.jpg' alt=''></img>
                                <ul className='mt-4'>
                                    <li>08:00 - 17:00</li>
                                    <li><strong>Musashi Mitake Shrine</strong>, Ome</li>
                                    <li className='text-teal-500 font-semibold'>1000 Yen</li>
                                </ul>
                            </div>
                        </div>


                    </div>

                </div>
            </div >

        </>
    )
}

export default EventsList
