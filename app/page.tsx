

import { Hero, CustomFilter, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {

  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width'
      id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4x1 font-extrabold'>
            Catalogo de planes 
          </h1>
          <p>Explorá los planes que se ajusten a tu medida</p>

          <div className='home__filters'>
            <SearchBar/>
            <div className='home__filter-container'>
              <CustomFilter title='fuel'/>
              <CustomFilter title='año'/>
            </div>
          </div>

        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map( (car) => (<CarCard car={car}/>) )}
            </div>
          </section>
        ): (
          <div className='home__error-container'>
            <h2 className='text-black text-x1'>no tenemos resultados</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
