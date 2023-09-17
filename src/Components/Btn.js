import { Link } from "react-router-dom";

const Btn = (props) => {
  return (
    <Link
      className={`py-1 px-4 bg-whiteBG dark:bg-darkG rounded-sm shadow-md box-border flex w-fit ${props.class}`}
      to={props.link}
    >
      {props.children}
    </Link>
  );
};

export default Btn;
