'use client';

import { useEffect, useState } from 'react'; // Importar useState e useEffect
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, ListTodo, Wallet, Zap } from 'lucide-react';
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import BatConfetti from '@/components/bat-confetti/bat-confetti';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export default function Dashboard() {
  const [isConfettiActive, setIsConfettiActive] = useState(false); // Estado para controlar o confete

  const chartData = [
    { name: "Jan", desafios: 4, valor: 200 },
    { name: "Fev", desafios: 3, valor: 150 },
    { name: "Mar", desafios: 5, valor: 250 },
    { name: "Abr", desafios: 6, valor: 300 },
    { name: "Mai", desafios: 4, valor: 200 },
    { name: "Jun", desafios: 7, valor: 350 },
  ];

  const categoriasData = [
    { name: 'Saúde', value: 400 },
    { name: 'Educação', value: 300 },
    { name: 'Finanças', value: 300 },
    { name: 'Produtividade', value: 200 },
    { name: 'Lazer', value: 100 },
  ];

  useEffect(() => {
    // Ativar o confete ao iniciar o Dashboard
    setIsConfettiActive(true);

    // Opcional: Desativar o confete após um certo tempo
    const timer = setTimeout(() => {
      setIsConfettiActive(false);
    }, 5000); // Desativa após 5 segundos

    return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado
  }, []);

  return (
    <div className="space-y-4">
      {/* Renderiza o componente BatConfetti */}
      <BatConfetti isActive={isConfettiActive} />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Recebido
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.450,00</div>
            <p className="text-xs text-muted-foreground">
              +20.1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Desafios Concluídos
            </CardTitle>
            <ListTodo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">29</div>
            <p className="text-xs text-muted-foreground">
              +7 em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conclusão
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">
              +5% em relação ao mês passado
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Streak Atual</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 dias</div>
            <p className="text-xs text-muted-foreground">Mantenha o ritmo!</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="desafios"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="valor"
                  stroke="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Categorias de Desafios</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoriasData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoriasData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center">
              {categoriasData.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center mx-2">
                  <div
                    className="w-3 h-3 mr-1"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-xs">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
