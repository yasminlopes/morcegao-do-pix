'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { userLevels } from '@/models/levels';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PerfilView({ userName, setUserName, userLevel, setUserLevel }) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Perfil do Usuário</CardTitle>
          <CardDescription>Gerencie suas informações e preferências</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nome">Nome</Label>
              <Input id="nome" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nivel">Nível Atual</Label>
              <Select value={userLevel.toString()} onValueChange={(value) => setUserLevel(parseInt(value))}>
                <SelectTrigger id="nivel">
                  <SelectValue placeholder="Selecione seu nível" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(userLevels).map(([key, value]) => (
                    <SelectItem key={key} value={key}>{value}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notificacoes">Notificações</Label>
              <Select defaultValue="todas">
                <SelectTrigger id="notificacoes">
                  <SelectValue placeholder="Configurar notificações" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas</SelectItem>
                  <SelectItem value="importantes">Apenas importantes</SelectItem>
                  <SelectItem value="nenhuma">Nenhuma</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tema">Tema</Label>
              <Select defaultValue="sistema">
                <SelectTrigger id="tema">
                  <SelectValue placeholder="Escolha o tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="claro">Claro</SelectItem>
                  <SelectItem value="escuro">Escuro</SelectItem>
                  <SelectItem value="sistema">Sistema</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="privacidade">Privacidade</Label>
              <Select defaultValue="amigos">
                <SelectTrigger id="privacidade">
                  <SelectValue placeholder="Configurar privacidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="publico">Público</SelectItem>
                  <SelectItem value="amigos">Apenas amigos</SelectItem>
                  <SelectItem value="privado">Privado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Salvar Alterações</Button>
          </form>
        </CardContent>
      </Card>
    )
  }