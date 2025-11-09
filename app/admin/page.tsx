"use client"
import { Card } from "@/components/ui/card"
import { Users, FileText, Pill, TrendingUp, ActivitySquare, Clock } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function AdminDashboard() {
  const chartData = [
    { name: "Lun", consultas: 24 },
    { name: "Mar", consultas: 18 },
    { name: "Mié", consultas: 32 },
    { name: "Jue", consultas: 28 },
    { name: "Vie", consultas: 35 },
    { name: "Sab", consultas: 15 },
    { name: "Dom", consultas: 8 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">Panel de Control</h2>
        <p className="text-muted-foreground mt-2 text-sm md:text-base">Resumen de la actividad del sistema</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card className="p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Total de Pacientes</p>
              <p className="text-2xl md:text-3xl font-bold text-primary mt-1">1,234</p>
              <p className="text-xs text-muted-foreground mt-2">+25 este mes</p>
            </div>
            <div className="flex-shrink-0">
              <Users className="w-12 h-12 text-primary/20" />
            </div>
          </div>
        </Card>

        <Card className="p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Consultas Realizadas</p>
              <p className="text-2xl md:text-3xl font-bold text-accent mt-1">3,456</p>
              <p className="text-xs text-muted-foreground mt-2">+180 esta semana</p>
            </div>
            <div className="flex-shrink-0">
              <FileText className="w-12 h-12 text-accent/20" />
            </div>
          </div>
        </Card>

        <Card className="p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Recetas Emitidas</p>
              <p className="text-2xl md:text-3xl font-bold text-secondary mt-1">892</p>
              <p className="text-xs text-muted-foreground mt-2">+52 este mes</p>
            </div>
            <div className="flex-shrink-0">
              <Pill className="w-12 h-12 text-secondary/20" />
            </div>
          </div>
        </Card>

        <Card className="p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Tasa de Ocupación</p>
              <p className="text-2xl md:text-3xl font-bold mt-1">94%</p>
              <p className="text-xs text-muted-foreground mt-2">Salas disponibles</p>
            </div>
            <div className="flex-shrink-0">
              <ActivitySquare className="w-12 h-12 text-destructive/20" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <Card className="p-4 md:p-6 overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Consultas por Día</h3>
        </div>
        <div className="overflow-x-auto">
          <ResponsiveContainer width="100%" height={300} minWidth={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
              />
              <Bar dataKey="consultas" fill="var(--color-primary)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="overflow-hidden">
        <div className="p-4 md:p-6 border-b border-border flex items-center gap-2">
          <Clock className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold">Actividad Reciente</h3>
        </div>
        <div className="divide-y divide-border">
          {[
            { action: "Nueva consulta registrada", user: "Dra. María García", time: "Hace 2 horas" },
            { action: "Receta emitida", user: "Dr. Juan Martínez", time: "Hace 4 horas" },
            { action: "Paciente registrado", user: "Sistema", time: "Hace 6 horas" },
            { action: "Código QR generado", user: "Dra. Patricia López", time: "Hace 1 día" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-muted/50 transition"
            >
              <div>
                <p className="font-medium text-sm">{item.action}</p>
                <p className="text-xs text-muted-foreground">{item.user}</p>
              </div>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
