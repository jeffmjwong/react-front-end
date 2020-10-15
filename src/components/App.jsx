import React, { useState, useEffect } from "react";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/a")
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => console.log(`Something went wrong! ${err}`))
  }, []);

  const showNodeVersion = () => {
    console.log(process.env.NODE_VERSION);
  }

  const showAbc = () => {
    console.log(process.env.ABC);
  }

  return (
    <div>
      <h2>Hello world!</h2>
      {cars.map(car => (
        <div>
          <p>
            {car.id} - {car.name}, {car.price}
          </p>
        </div>
      ))}

      <button onClick={showNodeVersion}>Click here to see node version</button>

      <button onClick={showAbc}>Click here to see ABC</button>
    </div>
  );
};

export default App;
