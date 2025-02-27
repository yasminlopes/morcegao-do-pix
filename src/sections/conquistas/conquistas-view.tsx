"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


export default function Conquistas() {
    const conquistas = [
      { id: 1, nome: "Madrugador", descricao: "Complete 5 desafios antes das 8h", progresso: 60, icone: "🌅" },
      { id: 2, nome: "Mestre da Constância", descricao: "Mantenha uma streak de 30 dias", progresso: 40, icone: "🔥" },
      { id: 3, nome: "Filantropo", descricao: "Doe R$1000 em desafios não cumpridos", progresso: 75, icone: "🤝" },
      { id: 4, nome: "Mente Sã", descricao: "Complete 20 desafios de meditação", progresso: 90, icone: "🧘" },
      { id: 5, nome: "Poliglota", descricao: "Estude 5 idiomas diferentes", progresso: 20, icone: "🌎" },
    ]
  
    return (
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Suas Conquistas</CardTitle>
            <CardDescription>Acompanhe seu progresso e desbloqueie recompensas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {conquistas.map((conquista) => (
                <Card key={conquista.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{conquista.icone}</span>
                      <CardTitle>{conquista.nome}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{conquista.descricao}</p>
                    <Progress value={conquista.progresso} className="h-2" />
                    <p className="text-xs text-right mt-1">{conquista.progresso}%</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }