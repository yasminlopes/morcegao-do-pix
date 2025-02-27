"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"


export default function DesafiosAnteriores() {
    const desafios = [
      { id: 1, descricao: "Ir à academia", valor: 50, data: "2024-03-01", concluido: true, prioridade: "alta", categoria: "Saúde" },
      { id: 2, descricao: "Meditar por 15 minutos", valor: 30, data: "2024-03-02", concluido: false, prioridade: "média", categoria: "Saúde" },
      { id: 3, descricao: "Ler 30 páginas", valor: 40, data: "2024-03-03", concluido: true, prioridade: "baixa", categoria: "Educação" },
      { id: 4, descricao: "Estudar inglês", valor: 60, data: "2024-03-04", concluido: true, prioridade: "alta", categoria: "Educação" },
      { id: 5, descricao: "Fazer yoga", valor: 35, data: "2024-03-05", concluido: false, prioridade: "média", categoria: "Saúde" },
    ]
  
    return (
      <Card>
        <CardHeader>
          <CardTitle>Desafios Anteriores</CardTitle>
          <CardDescription>Histórico dos seus últimos desafios</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {desafios.map((desafio) => (
              <div key={desafio.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    desafio.prioridade === "alta" ? "bg-red-500" :
                    desafio.prioridade === "média" ? "bg-yellow-500" : "bg-green-500"
                  }`} />
                  <div>
                    <h3 className="font-semibold">{desafio.descricao}</h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{desafio.data}</span>
                      <Badge variant="secondary">{desafio.categoria}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">R$ {desafio.valor},00</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    desafio.concluido ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                  }`}>
                    {desafio.concluido ? "Concluído" : "Não concluído"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }