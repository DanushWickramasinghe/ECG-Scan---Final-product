import React from "react";
import { useLocation } from "react-router-dom";
import Plot from "react-plotly.js";

const dataStyle = {
  position: "relative",
  top: "145px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  backgroundColor: "grey",
  maxWidth: "700px",
  margin: "0 auto",
};

function DataVisualization() {
  const location = useLocation();
  const data = location.state.data;

  if (!data) {
    return <div>No data available</div>;
  }

  // Assuming mat_data is an array of data you want to plot
  const mat_data = data.Visualizing_data;

  // Create an array to hold the subplots
  const subplots = [];
  for (let lead = 0; lead < 12; lead++) {
    const slicedData = mat_data[lead].slice(0, 1000);
    subplots.push(
      <Plot
        key={lead}
        data={[
          {
            //y: mat_data[lead],
            y: slicedData, // Use sliced data
            type: "line",
          },
        ]}
        layout={{
          width: 600, // Set the width in pixels
          height: 300, // Set the height in pixels
          title: `Lead ${lead + 1}`,
          yaxis: {
            title: "Amplitude (mV)",
          },
          grid: {
            enabled: true,
          },
        }}
        config={{ responsive: true }}
      />
    );
  }

  return (
    <div style={dataStyle}>
        <h1>Result</h1>
        <p>Predicted: {data.predicted}</p>
        <p>Real: {data.real[0]}</p>
        <p>Age: {data.Age}</p>
        <p>Sex: {data.Sex}</p>
        <div>{subplots}</div>
    </div>
  );
}

export default DataVisualization;

