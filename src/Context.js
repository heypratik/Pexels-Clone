import React, {useState, useEffect} from 'react'
import axios from './components/axios'

const Context = React.createContext()

function ContextProvider ({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [query, setQuery]= useState('nature')
    const [selectedObj, setObj] = useState()
    const [selectedObjName, setObjName] = useState('')
    const [Loaded, setLoaded] = useState(false)

    function changeQuery(query_string) {
        setQuery(query_string)
        setLoaded(false)
        setAllPhotos([])
        
    }

    function ImgSelected(newItem) {
        setObj(newItem)
        setLoaded(false)
        setAllPhotos([])
        setObjName(newItem.alt)
    }


    useEffect(function() {
        async function fetchData() {
            const request = await axios.get(`search?query=${query}&per_page=25`, {headers: {'Authorization' : "563492ad6f91700001000001674746512bc74d168d90099a3093ec6c"}})
            setAllPhotos(request.data.photos)
            setLoaded(true)
            return request
        }
        fetchData()
    }, [query])

  return (
    <Context.Provider value={{allPhotos, changeQuery, query, ImgSelected, selectedObj, selectedObjName, Loaded}}>
        {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}