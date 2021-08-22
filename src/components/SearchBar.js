import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/SearchBar.css'

const SearchBar = () => {

    const[search,setSearch] = useState('')

    return (
        <>
            <div class="search__container">
                <input class="search__input" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value) }/>
                <div className='searchIcon'>
                    <Link to={`/travel/${search}`}>
                     <i class="fas fa-search fa-lg" style={{cursor:'pointer',color:'azure'}}/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SearchBar
