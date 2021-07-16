import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jun",
    bukct: 20,
  },
  {
    name: "July",
    bukct: 40,
  },
  {
    name: "Aug",
    bukct: 60,
  },
  {
    name: "Sep",
    bukct: 100,
  },
  {
    name: "Oct",
    bukct: 70,
  },
  {
    name: "Nov",
    bukct: 100,
  },
  {
    name: "Dec",
    bukct: 120,
  },
  {
    name: "Jan",
    bukct: 140,
  },
  {
    name: "Feb",
    bukct: 120,
  },
  {
    name: "Mar",
    bukct: 100,
  },
  {
    name: "Apr",
    bukct: 140,
  },
  {
    name: "May",
    bukct: 160,
  },
];

const Chart = () => {
  return (
    <div style={{ width: "100%", height: "80%" }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="bukct"
            stroke=" #789de0"
            fill="#bdc0d1"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
