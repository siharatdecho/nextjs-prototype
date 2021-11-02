import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search'
import SearchBarStyle from '../../styles/SearchBar.module.css'

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
        <div className={SearchBarStyle.search}>
            <div>
                <input className={SearchBarStyle.inputText} type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className={SearchBarStyle.searchIcon}>
                    <SearchIcon />
                </div>
            </div>
            {filteredData.length != 0 && (
                <div className={SearchBarStyle.dataResult}>
                    {
                        filteredData.map((value, index) => {
                            return <div><a className={SearchBarStyle.link}>{value.first_name}</a></div>
                        })
                    }
                </div>
            )}
        </div>
    )
}
