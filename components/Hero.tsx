"use client";

import Image from 'next/image'
import { CustomBotton } from '.'

const Hero = () => {

const handleScroll = () => {

    }
return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Hacé realidad el sueño de tu primer 0km.
            </h1>
            <p className='hero__subtitle'>
            En Escobar VW
hay un Volkswagen para vos. Seguimos avanzando juntos.
            </p>

            <CustomBotton 
            title= "Explorar Planes"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>

        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="" />
            </div>

        </div>
    </div>
  )
}

export default Hero