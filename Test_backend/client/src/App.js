import React, { useState } from 'react';

function App() {
  const [data, setData] = useState({ real_value: "", predicted_output: "" }); // Initialize data with empty strings

  const fetchResults = () => {
    fetch("/results")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };

  return (
    <div>
      <p>Real Value: {data.real_value}</p>
      <p>Predicted Output: {data.predicted_output}</p>
      <button onClick={fetchResults}>Generate</button>
    </div>
  );
}

export default App;


