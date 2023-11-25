import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from 'recharts';
import { pqrQuantity } from '@/utilities/getTotalPqrs';

interface ChartData {
  date: string;
  pqr: number;
}

interface Props {
  data: {
    creation_time: string;
  }[];
}
const createChartData = (data: Props['data']): ChartData[] => {
  const dataByDate: Record<string, number> = {};
  data.forEach((item) => {
    const date = new Date(item.creation_time).toLocaleDateString('en-US'); // Convertir a formato de fecha (MM/DD/YYYY)
    if (!dataByDate[date]) {
      dataByDate[date] = 1;
    } else {
      dataByDate[date]++;
    }
  });

  return Object.keys(dataByDate).map((date) => ({
    date,
    pqr: dataByDate[date],
  }));
};

const data = await pqrQuantity();

export default function Chart() {
  const chartData = createChartData(data);

  return (
    <div>
      <h2>Pqr Quantity Chart by Date</h2>
      <AreaChart width={600} height={300} data={chartData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={false} />
        <YAxis tickSize={0} />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="pqr" fill="#8884d8" /> */}
        <Area
          hide={false}
          type="monotone"
          dataKey="pqr"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
}
