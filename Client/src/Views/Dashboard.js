import React from "react";
import DeathStats from "./DeathStats";
import ECGchart from "./ECGchart";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <ECGchart className="ecg-chart" />
      <DeathStats className="bar-chart" />
    </div>
  );
};

export default Dashboard;
