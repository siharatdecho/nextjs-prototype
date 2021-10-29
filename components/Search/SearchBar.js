import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search'
//import './SearchBar.css'

export default function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([])
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.first_name.toLowerCase().includes(searchWord.toLowerCase())
        })

        setFilteredData(newFilter)
    }

    return (
        <div className="search">
            <div className="">
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {
                        filteredData.map((value, index) => {
                            return <div><a>{value.first_name}</a></div>
                        })
                    }
                </div>
            )}
        </div>
    )
}
