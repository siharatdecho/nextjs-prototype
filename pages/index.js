import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import SearchBar from '../components/Search/SearchBar'
import JsonData from '../data/data.json'

export default function Index() {
  return (
    <>
      <SearchBar placeholder="Search for..." data={JsonData} />
    </>
  )
}
