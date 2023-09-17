import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Form from "../Components/Form";

const Home = ({ data }) => {
  const [search, setSearch] = useState("");
  const [Region, setRegion] = useState(null);
  const [countryList, setCountry] = useState(data);

  useEffect(() => {
    if (data && Region !== null) {
      const newList = data.filter((a) => {
        let country;
        if (
          a.name.common.toLowerCase().includes(search.toLowerCase()) &&
          a.region.toLowerCase().includes(Region)
        ) {
          country = a.name;
        }
        return country;
      });
      setCountry(newList);
    }
    console.log("effect");
  }, [data, search, Region]);

  window.scrollTo(0, 0);

  return (
    <div className="px-5 pt-20 pb-14">
      <Form setSearch={setSearch} Region={Region} setRegion={setRegion} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 md:mt-9 gap-5 lg:gap-12">
        {countryList &&
          countryList.map((a, index) => {
            return <Card content={a} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Home;
