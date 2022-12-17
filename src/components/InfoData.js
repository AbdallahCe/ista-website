import "./InfoStyles.css";

function InfoData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="imagee" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default InfoData;
