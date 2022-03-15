import React, { useState } from 'react'
import { fetchAllData } from '../../api/utils'
import Loader from '../loader'
import CharacterDetails from './detail'

const Characters = () => {
  const [search, setSearch] = useState()
  const [loading, setLoading] = useState()
  const [data, setData] = useState([])

  const handleSearch = async (ev) => {
    ev.preventDefault()
    setLoading(true)
    try {
      const data_ = await fetchAllData(search)
      setData(data_)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
    return false
  }

  return (
    <div className="container">
      <h2>The Star Wars Searching Tool</h2>
      <p>Search for your favorite characters</p>
      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(ev) => {
            setSearch(ev.target.value)
          }}
          className="search-field"
        />
        <button type="submit">Search</button>
      </form>
      {loading ? <Loader /> : <CharacterDetails people={data} />}
    </div>
  )
}

export default Characters
