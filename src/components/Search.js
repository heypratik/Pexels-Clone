import React, { useEffect, useState, useContext } from 'react'
import axios from './axios'
import {Context} from '../Context'
import { FaSearch } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../components/Search.css'

function Search() {
    const {changeQuery, query} = useContext(Context)

    const [searchBg, setSearchBg] = useState({})

    const [searchValue, setSearchValue] = useState('')

    const {Loaded} = useContext(Context)

    console.log(Loaded)


    function handleChange(event) {
      setSearchValue(event.target.value)
    }

    function changeInput(event) {
      event.preventDefault()
      changeQuery(searchValue)
    }


    useEffect(function() {
        async function fetchData() {
            const request = await axios.get("search?query=nature", {headers: {'Authorization' : "563492ad6f91700001000001674746512bc74d168d90099a3093ec6c"}})
            const ranNum = Math.floor(Math.random() *15)
            const imgSrc = request.data.photos[ranNum].src.large2x
            const author = request.data.photos[ranNum].photographer
            const authorUrl = request.data.photos[ranNum].photographer_url
            setSearchBg({imgSrc: imgSrc, author: author, url: authorUrl})
            return request
        }
        fetchData()
    }, [])
    

  return (

    <div className='search-bg' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 50%), rgba(0 0 0 / 50%)), url(${searchBg.imgSrc})` }}>
        <h1 className='title'>The best free stock photos, royalty free <br></br>images and videos shared by creators.</h1>
        <form>
        <div className="input-icons">
        <input className='serach-bar' onChange={handleChange} value={searchValue} type="text" placeholder="Search for free photos" name="search"></input>
        <button className="search-icon" onClick={changeInput}><FaSearch /></button>
        </div>
        </form>
        {Loaded ? <p className="author">Photo by <a href={searchBg.url}><b>{searchBg.author}</b></a></p> : <Skeleton width="200px" height="20px"/>}
    </div>
  )
}

export default Search