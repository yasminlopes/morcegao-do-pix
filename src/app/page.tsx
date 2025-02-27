'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { userLevels } from '@/models/levels';
import Conquistas from '@/sections/conquistas/conquistas-view';
import Dashboard from '@/sections/dashboard/dashboard';
import DesafiosAnteriores from '@/sections/desafios-anteriores/desafios-anteriores';
import NovoDesafio from '@/sections/desafios/novo/novo-desafio';
import PerfilView from '@/sections/perfil/perfil-view';
import Social from '@/sections/social/social-view';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, ListTodo, PlusCircle, Search, Trophy, User, Users } from 'lucide-react';
import { useState } from 'react';
import { BarChart } from 'recharts';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider } from "@/components/ui/sidebar"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [userLevel, setUserLevel] = useState(1)
  const [userName, setUserName] = useState("Yasmin Lopes")
  const [xp, setXp] = useState(750)
  const [nextLevelXp, setNextLevelXp] = useState(1000)

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <Sidebar className="w-64 border-r">
          <SidebarHeader>
            <h2 className="text-2xl font-bold p-4">Morcegão do Pix</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("dashboard")}>
                  <BarChart className="mr-2" />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("novo-desafio")}>
                  <PlusCircle className="mr-2" />
                  Novo Desafio
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("desafios-anteriores")}>
                  <ListTodo className="mr-2" />
                  Desafios Anteriores
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("conquistas")}>
                  <Trophy className="mr-2" />
                  Conquistas
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("social")}>
                  <Users className="mr-2" />
                  Social
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveTab("perfil")}>
                  <User className="mr-2" />
                  Perfil
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-secondary p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt={userName} />
                <AvatarFallback>{userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">{userName}</h2>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{userLevels[userLevel]}</Badge>
                  <Progress value={(xp / nextLevelXp) * 100} className="w-24" />
                  <span className="text-xs text-muted-foreground">{xp}/{nextLevelXp} XP</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="search"
                placeholder="Buscar desafios..."
                className="w-64"
              />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <div className="flex-1 overflow-auto p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="novo-desafio">Novo Desafio</TabsTrigger>
                <TabsTrigger value="desafios-anteriores">Desafios Anteriores</TabsTrigger>
                <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
                <TabsTrigger value="perfil">Perfil</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="dashboard">
                    <Dashboard />
                  </TabsContent>
                  <TabsContent value="novo-desafio">
                    <NovoDesafio />
                  </TabsContent>
                  <TabsContent value="desafios-anteriores">
                    <DesafiosAnteriores />
                  </TabsContent>
                  <TabsContent value="conquistas">
                    <Conquistas />
                  </TabsContent>
                  <TabsContent value="social">
                    <Social />
                  </TabsContent>
                  <TabsContent value="perfil">
                    <PerfilView userName={userName} setUserName={setUserName} userLevel={userLevel} setUserLevel={setUserLevel} />
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}