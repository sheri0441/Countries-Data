import { Link } from "react-router-dom";

const Card = ({ content }) => {
  return (
    <Link
      to={`/country/${content.cca3}`}
      className="block rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:scale-110 transition-all dark:bg-darkG bg-whiteN"
    >
      <img className="w-full h-40" src={content.flags.png} alt="" />
      <div className="px-6 py-8 text-left text-black dark:text-whiteN">
        <h3 className="text-lg my-2 font-extrabold">{content.name.common}</h3>
        <p>
          <b>Population:</b> {content.population.toLocaleString("en-US")}
        </p>
        <p>
          <b>Region:</b> {content.region}
        </p>
        <p>
          <b>Capital</b> {content.capital}
        </p>
      </div>
    </Link>
  );
};

export default Card;
