const Detail = (props) => {
  return (
    <p>
      <span className="font-semibold">{props.heading}:</span> {props.detail}
    </p>
  );
};

export default Detail;
