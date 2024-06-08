import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Form from "../Components/Form";
import Preloader from "../Components/Preloader";

const Home = () => {
  const [countryList, setCountryList] = useState();
  const [filterList, setFilterList] = useState(countryList);
  const [search, setSearch] = useState("");
  const [Region, setRegion] = useState("");

  useEffect(() => {
    if (search.length > 0 || Region.length > 0) {
      const filterBySearchAndRegion = countryList?.filter((country) => {
        if (
          country.name.toLowerCase().includes(search.toLowerCase()) &&
          country.region.toLowerCase().includes(Region.toLowerCase())
        ) {
          return true;
        }
      });

      setFilterList(filterBySearchAndRegion);
    }
    if (search.length === 0 && Region.length === 0) {
      setFilterList(countryList);
    }
  }, [search, Region]);

  useEffect(() => {
    async function data() {
      let res = await fetch(`https://countryinfoapi.com/api/countries`);
      let data = await res.json();
      setCountryList(data);
      setFilterList(data);
    }
    data();
  }, []);
  window.scrollTo(0, 0);

  return !countryList ? (
    <Preloader />
  ) : (
    <div className="px-5 pt-20 pb-14">
      <Form setRegion={setRegion} setSearch={setSearch} />
      <div className="flex flex-wrap justify-center gap-5 lg:gap-y-6 lg:gap-x-5 mt-5 md:mt-9">
        {filterList &&
          filterList.map((a, index) => {
            return <Card content={a} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Home;
