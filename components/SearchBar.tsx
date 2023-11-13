"use client"

import SearchPlan from "./SearchPlan"
import { useState } from 'react'


const SearchBar = () => {

  const [plan, setPlan ] = useState('');

    const handleSearch = () => {

    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchPlan
            plan={plan}
            setPlan={setPlan}
            />
        </div>
    </form>
  )
}

export default SearchBar