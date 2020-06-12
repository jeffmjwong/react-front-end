import React, { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://jeffs.xyz:11002/a")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(`Something went wrong! ${err}`))
  }, []);

  return (
    <div>
      <h2>Hello world!</h2>
      {users.map(user => (
        <div>
          Id: {user.id}, Name: {user.name}
        </div>
      ))}
    </div>
  );
};

export default App;
