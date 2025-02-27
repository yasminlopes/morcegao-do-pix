"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NovoDesafio() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Criar Novo Desafio</CardTitle>
          <CardDescription>Defina seu próximo desafio e a recompensa associada.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição do Desafio</Label>
              <Input id="descricao" placeholder="Ex: Ir à academia" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="categoria">Categoria</Label>
              <Select>
                <SelectTrigger id="categoria">
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saude">Saúde</SelectItem>
                  <SelectItem value="educacao">Educação</SelectItem>
                  <SelectItem value="financas">Finanças</SelectItem>
                  <SelectItem  value="produtividade">Produtividade</SelectItem>
                  <SelectItem value="lazer">Lazer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="valor">Valor do Pix (R$)</Label>
              <Input id="valor" type="number" placeholder="50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prioridade">Prioridade</Label>
              <Select>
                <SelectTrigger id="prioridade">
                  <SelectValue placeholder="Selecione a prioridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="baixa">Baixa</SelectItem>
                  <SelectItem value="media">Média</SelectItem>
                  <SelectItem value="alta">Alta</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="data">Data</Label>
              <Input id="data" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recorrencia">Recorrência</Label>
              <Select>
                <SelectTrigger id="recorrencia">
                  <SelectValue placeholder="Selecione a recorrência" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unica">Única vez</SelectItem>
                  <SelectItem value="diaria">Diária</SelectItem>
                  <SelectItem value="semanal">Semanal</SelectItem>
                  <SelectItem value="mensal">Mensal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Criar Desafio</Button>
          </form>
        </CardContent>
      </Card>
    )
  }
  