import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Productpage from './Pages/Productpage';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';


function App() {
  const [dataFile, setdataFile] = useState(null)

  useEffect(()=> {
    async function data () {
          let res = await fetch(`https://restcountries.com/v3.1/all`);
          let data = await res.json();
          setdataFile(data);
    };

    console.log('useeffect is working');
    data()
  }, [])



  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home data={dataFile} />} />
        <Route path='product/:id' element={<Productpage data={dataFile} />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
