import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Productpage from './Pages/Productpage';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import Preloader from './Components/Preloader';


function App() {
  const [dataFile, setdataFile] = useState(null);
  const [Proload, setProload] = useState('');

  useEffect(()=> {
    async function data () {
          let res = await fetch(`https://restcountries.com/v3.1/all`);
          let data = await res.json();
          setdataFile(data);
    };

    console.log('useeffect is working');
    data()
  }, [])

  useEffect(() => {
    setProload('hidden')
  }, [dataFile])


  return (
    <>
      <Preloader form={Proload} />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home data={dataFile} />} />
          <Route path='country/:id' element={<Productpage data={dataFile} />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
