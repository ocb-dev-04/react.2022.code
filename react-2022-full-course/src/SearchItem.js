import React from 'react'

const SearchItem = ({
    search,
    setSearch,
}) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'></label>
            <input
                id='search'
                type='text'
                role='searchbox'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Items...' />
        </form>
    )
}

export default SearchItem