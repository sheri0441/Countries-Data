import { useState } from "react";
import Card from "../Components/Card";
import Form from "../Components/Form";

const Home = ({ data }) => {
  const [countryList, setCountryList] = useState(data);

  const filterCountry = (search, region) => {
    const filterBySearchAndRegion = data.filter((country) => {
      if (
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        country.region.toLowerCase().includes(region.toLowerCase())
      ) {
        return true;
      }
    });

    setCountryList(filterBySearchAndRegion);
  };

  window.scrollTo(0, 0);

  return (
    <div className="px-5 pt-20 pb-14">
      <Form filterCountry={filterCountry} />
      <div className="flex flex-wrap justify-center gap-5 lg:gap-y-6 lg:gap-x-5 mt-5 md:mt-9">
        {countryList &&
          countryList.map((a, index) => {
            return <Card content={a} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Home;
