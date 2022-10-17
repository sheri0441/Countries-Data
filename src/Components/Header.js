
const Header = () => {
    const changeMode = () => {
        document.getElementsByTagName('html')[0].classList.toggle('dark');

    }


    return(
        <header className= 'fixed top-0 w-full mx-auto max-w-screen-2xl shadow-[0px_5px_5px_0px_rgb(0,0,0,0.25)]  p-6   flex justify-between items-center bg-whiteBG dark:bg-VDGrayBG z-50'  >

            <div className='mr-auto text-lg md:text-2xl my-auto font-extrabold text-blackTX dark:text-whiteN'>
                <h1>Where in the world?</h1>
            </div>

            <div className='ml-auto hover:bg-slate-200 p-1 rounded-md font-semibold dark:hover:bg-darkG'>

                <button className='flex items-center text-blackTX dark:text-whiteN' onClick={changeMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-4 lg:w-6 fill-VDGrayBG dark:fill-whiteN mr-1'  viewBox="0 0 512 512"><title>Moon</title><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
                    Dark Mode
                </button>
            </div>

        </header>
    )
}

export default Header;