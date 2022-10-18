

const Form = ({setSearch, setregion}) => {

    const searchCountry = (e) => {
        setSearch(e.target.value);
    }

    const selectRegion = (e) => {
        setregion(e.target.value);
    }


    return(
        <div className="mt-9 flex flex-col md:flex-row md:justify-between">
            <div className='md:w-1/2'>
                <label className="shadow-md rounded-md px-7 py-6 w-full relative block bg-whiteN dark:bg-darkG ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 absolute top-2/4 -translate-y-1/2 left-2 fill-gray-400" viewBox="0 0 512 512"><title>Search</title><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"/></svg>
                <input className='absolute top-2/4 -translate-y-1/2 right-0 w-[calc(100%-36px)] pointer-events-none placeholder:text-VDGrayBG dark:placeholder:text-whiteN focus:outline-none bg-whiteN dark:bg-darkG text-black dark:text-whiteN pl-1' onChange={searchCountry} placeholder="Search for country..."/>
            </label>
            </div>
            <div className="bg-whiteN mt-4 md:mt-0 px-6 dark:bg-darkG shadow-md rounded-md max-w-fit">
                <select className="pr-2 w-fit focus:outline-none py-3  bg-whiteN dark:bg-darkG text-black dark:text-whiteN border-none outline-none" onChange={selectRegion} name="filter">
                        <option value='' selected hidden disabled>Filter by Region</option>
                        <option value=''>All</option>
                        <option value='africa'>Africa</option>
                        <option value='america'>America</option>
                        <option value='asia'>Asia</option>
                        <option value='europe'>Europe</option>
                        <option value='oceania'>Oceania</option>
                </select>
            </div>
        </div>
    )
}

export default Form;