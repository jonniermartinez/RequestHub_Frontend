import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { pqrQuantity } from '@/utilities/getTotalPqrs';

interface ChartData {
  date: string;
  Sara: number;
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
    Sara: dataByDate[date],
  }));
};

const data = await pqrQuantity();

export default function Chart() {
  const chartData = createChartData(data);

  return (
    <div>
      <h2>Gráfico de Cantidad de Elementos por Fecha</h2>
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sara" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
