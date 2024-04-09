import React from 'react'

import HeroSectionImages from './HeroSectionImages'
import HeroSectionHeader from './HeroSectionHeader'

const HeroSection = () => {
  return (
    <div className=' flex flex-col gap-5 w-full justify-center items-start py-4'>
        <div className=' flex flex-col justify-center items-center px-10 gap-3'>
            <HeroSectionHeader />
        </div>


        <div className='flex items-center w-full h-96 bg-light rounded-3xl'>
            <HeroSectionImages />
        </div>
    </div>
  )
}

export default HeroSection