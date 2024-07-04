import { PieChart, Pie, Legend, Cell } from "recharts";
import Box from "@mui/material/Box";
import {statusMap} from '../utils';

function getStatusDataForPieChart(payload) {
  let statusCount = {
    2: 0,
    4: 0,
    3: 0,
    11: 0,
    5: 0,
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  payload.forEach((item) => {
    if (statusCount.hasOwnProperty(item.currentStatus)) {
      statusCount[item.currentStatus]++;
    }
  });

  // Manual fix: Since statuses 5 and 11 are same, let's merge them.
  statusCount[5] += statusCount[11];
  delete statusCount[11];

  const pieChartData = Object.keys(statusCount).map((status) => ({
    name: statusMap[status] + " (" + statusCount[status] + ")",
    raw: statusMap[status],
    value: statusCount[status],
    color: getRandomColor(),
  }));

  return pieChartData;
}

const ChartComponent = ({ data }) => {
  const fData = getStatusDataForPieChart(data);
  return (
    <Box flexGrow={1}>
      <PieChart width={730} height={300}>
        <Pie
          data={fData}
          dataKey="value"
          nameKey="name"
          labelLine={true}
          label={({ name, value, raw }) => `${raw}`}
          fill="#8884d8"
        >
          {fData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          margin={{ top: 0, left: 0 }}
        />
      </PieChart>
    </Box>
  );
};

export default ChartComponent;
