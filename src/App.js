import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CountryPage from "./Pages/CountryPage";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="country/:id" element={<CountryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
