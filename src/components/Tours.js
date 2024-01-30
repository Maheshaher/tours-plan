import Cards from "./Cards";

function Tours({ tours, removeTour }) {
  function removeHandler(id) {
    removeTour(id);
  }
  return (
    <div className="container">
      <div className="heading">
        <h2>Plan With CodeHelp</h2>
      </div>
      <div className="cards">
        {tours.map((value) => {
          return <Cards {...value} remove={removeHandler}></Cards>;
        })}
      </div>
    </div>
  );
}

export default Tours;
