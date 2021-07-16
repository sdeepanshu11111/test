import Slider from "./slider";
import Chart from "./chart";

const Center = () => {
  return (
    <div className="center">
      <h1>Dashboard</h1>

      <div className="chart">
        <div className="chartUpper">
          <h2>Investment</h2>

          <div className="chartBtn">
            <button>Year</button>
            <button>Month</button>
            <button>Week</button>
          </div>
        </div>
        <Chart />
      </div>

      <Slider />

      <div className="blank"></div>
    </div>
  );
};

export default Center;
