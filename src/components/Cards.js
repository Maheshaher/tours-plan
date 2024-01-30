import { useState } from "react";
function Cards({ id, name, price, image, info, remove }) {
  const [readmore, setReadmore] = useState(false);
  const des = readmore ? info : `${info.substring(0, 180)}...`;
  let removeTour = remove;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <div className="img">
        <img src={image} className="img"></img>
      </div>
      <div className="pname">
        <p>{price}</p>
        <p>{name}</p>
      </div>
      <div className="info">
        <p>
          {des}
          <span onClick={readmoreHandler}>
            {readmore ? "Show less" : "Read more"}
          </span>
        </p>
      </div>
      <div className="remove-button">
        <button onClick={() => removeTour(id)}>Not Intrested</button>
      </div>
    </div>
  );
}

export default Cards;
