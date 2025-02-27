"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Social() {
    const amigos = [
      { id: 1, nome: "João Silva", nivel: 2, desafiosConcluidos: 45, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 2, nome: "Ana Oliveira", nivel: 3, desafiosConcluidos: 72, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 3, nome: "Carlos Santos", nivel: 1, desafiosConcluidos: 23, avatar: "/placeholder.svg?height=40&width=40" },
      { id: 4, nome: "Mariana Costa", nivel: 4, desafiosConcluidos: 98, avatar: "/placeholder.svg?height=40&width=40" },
    ]
  
    return (
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Ranking de Amigos</CardTitle>
            <CardDescription>Veja como você se compara aos seus amigos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {amigos.map((amigo, index) => (
                <div key={amigo.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                  <div className="flex items-center space-x-4">
                    <span className="font-bold text-lg">{index + 1}</span>
                    <Avatar>
                      <AvatarImage src={amigo.avatar} alt={amigo.nome} />
                      <AvatarFallback>{amigo.nome.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{amigo.nome}</h3>
                      <p className="text-sm text-muted-foreground">Nível {amigo.nivel}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{amigo.desafiosConcluidos} desafios</p>
                    <p className="text-sm text-muted-foreground">concluídos</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Desafios em Grupo</CardTitle>
            <CardDescription>Participe de desafios com seus amigos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">Maratona de Leitura</h3>
                <p className="text-sm text-muted-foreground mb-4">Leia 5 livros em 30 dias com seus amigos</p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>AO</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                  </div>
                  <Button>Participar</Button>
                </div>
              </div>
              <div className="p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold mb-2">Desafio Fitness</h3>
                <p className="text-sm text-muted-foreground mb-4">Pratique exercícios por 30 minutos diários durante uma semana</p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                  </div>
                  <Button>Participar</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }