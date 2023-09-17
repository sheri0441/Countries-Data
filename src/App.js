import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CountryPage from "./Pages/CountryPage";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import Preloader from "./Components/Preloader";

function App() {
  const [dataFile, setDataFile] = useState(null);

  useEffect(() => {
    async function data() {
      let res = await fetch(`https://restcountries.com/v3.1/all`);
      let data = await res.json();
      setDataFile(data);
    }
    data();
  }, []);

  return (
    <>
      {!dataFile && <Preloader />}
      {dataFile && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home data={dataFile} />} />
              <Route
                path="country/:id"
                element={<CountryPage data={dataFile} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
