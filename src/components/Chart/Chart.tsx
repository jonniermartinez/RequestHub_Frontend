import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
const data = [
  {
    id: 109,
    creation_time: '2023-10-20T00:43:21',
    subject: 'Devolución de pedido',
    message: 'Quiero devolver el pedido',
    pqr_type: 4,
    state: 'open',
    pqr_owner: 64,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
  {
    id: 103,
    creation_time: '2023-10-20T00:38:44',
    subject: 'Devolución de dinero',
    message:
      'xDeseo se me haga la devolución del dinero porque son la peor tienda que he conocido que porquería de servicio 😒',
    pqr_type: 4,
    state: 'reviwing',
    pqr_owner: 63,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
  {
    id: 102,
    creation_time: '2023-10-21T00:38:11',
    subject: 'Pedido incompleto.',
    message: 'Me faltó un articulo del pedido',
    pqr_type: 2,
    state: 'reviwing',
    pqr_owner: 63,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
  {
    id: 104,
    creation_time: '2023-10-21T00:38:52',
    subject: 'Solicitud de retracto',
    message: 'Ya no quiero el pedido',
    pqr_type: 2,
    state: 'reviwing',
    pqr_owner: 63,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
  {
    id: 107,
    creation_time: '2023-10-19T00:39:04.227312',
    subject: 'Inconformidad atención',
    message: 'La atención pesima en servicio al cliente',
    pqr_type: 4,
    state: 'reviwing',
    pqr_owner: 63,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
  {
    id: 106,
    creation_time: '2023-10-19T00:39:03.049986',
    subject: 'Cambio de color',
    message: 'Deseo se cambio de color a mi prenda',
    pqr_type: 2,
    state: 'reviwing',
    pqr_owner: 63,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
  {
    id: 105,
    creation_time: '2023-10-19T00:38:52.400001',
    subject: 'Solicitud de cambio',
    message: 'Deseo se me cambie el pedido ',
    pqr_type: 2,
    state: 'reviwing',
    pqr_owner: 63,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
  {
    id: 110,
    creation_time: '2023-10-19T01:36:55.196856',
    subject: 'Cambio de talla',
    message: 'No me queda la prenda',
    pqr_type: 1,
    state: 'open',
    pqr_owner: 65,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
  {
    id: 108,
    creation_time: '2023-10-19T00:42:54.84353',
    subject: 'Servicio en tiendas',
    message: 'El servicio en tiendas es excelente',
    pqr_type: 2,
    state: 'open',
    pqr_owner: 64,
    id_profile: '2d11eba4-24c5-46b2-b34b-3d78f171a850',
  },
];
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
