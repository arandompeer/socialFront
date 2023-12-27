import { useContext, useState } from "react"
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedvalue, setSelectedValue] = useState("unsplash");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSelectedValue = (e) => {
    setSelectedValue(e.target.value)
  }

  const handleButtonSearch = () => {
    fetchData(`${selectedvalue}/${searchValue}`)
    setSearchValue("");
    setSearchImage(searchValue);
  }
  const handleEnterSearch = e => {
    if(e.key === 'Enter') {
      fetchData(`${selectedvalue}/${searchValue}`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-purple-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
        <select id="platform" name="platform" autoComplete="platform-name" defaultValue={"Choose a platform"} className="bg-gray-50 border px-6 py-2.5 outline-none focus:border-purple-500 focus:ring-1
             disabled:bg-gray-400"
             onChange={handleSelectedValue}>
              <option value={"unsplash"} >Instagram</option>
              <option value={"flickr"} >Flickr</option>
            </select>
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
        className="bg-purple-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >Search</button>
    </div>
  )
}

export default SearchField