"use client"

import { Card } from "@/components/ui/card"
import { Heart, Calendar, Pill, FileCheck } from "lucide-react"

export default function PatientDashboard() {
  const medicalHistory = [
    { date: "2025-09-15", doctor: "Dr. Carlos López", diagnosis: "Chequeo Anual", notes: "Presión arterial normal" },
    {
      date: "2025-08-10",
      doctor: "Dra. María García",
      diagnosis: "Consulta de Seguimiento",
      notes: "Colesterol controlado",
    },
    { date: "2025-07-20", doctor: "Dr. Juan Martínez", diagnosis: "Revisión General", notes: "Apto para actividades" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-balance">Mi Historial Clínico</h2>
        <p className="text-muted-foreground mt-2 text-sm md:text-base">
          Consulta tu historial completo de visitas médicas y diagnósticos
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Consultas Realizadas</p>
              <p className="text-2xl md:text-3xl font-bold text-primary mt-1">24</p>
            </div>
            <div className="flex-shrink-0">
              <Heart className="w-12 h-12 text-primary/20" />
            </div>
          </div>
        </Card>

        <Card className="p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Próxima Consulta</p>
              <p className="text-xl md:text-2xl font-bold mt-1">15 Nov</p>
            </div>
            <div className="flex-shrink-0">
              <Calendar className="w-12 h-12 text-accent/20" />
            </div>
          </div>
        </Card>

        <Card className="p-4 md:p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Recetas Activas</p>
              <p className="text-2xl md:text-3xl font-bold text-secondary mt-1">5</p>
            </div>
            <div className="flex-shrink-0">
              <Pill className="w-12 h-12 text-secondary/20" />
            </div>
          </div>
        </Card>
      </div>

      {/* Medical History Table */}
      <Card className="overflow-hidden">
        <div className="p-4 md:p-6 border-b border-border flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Historial de Visitas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium">Fecha</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium">Médico</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium">Diagnóstico</th>
                <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm font-medium hidden sm:table-cell">
                  Notas
                </th>
              </tr>
            </thead>
            <tbody>
              {medicalHistory.map((record, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/30 transition">
                  <td className="px-4 md:px-6 py-4 text-sm">{record.date}</td>
                  <td className="px-4 md:px-6 py-4 text-sm font-medium">{record.doctor}</td>
                  <td className="px-4 md:px-6 py-4 text-sm">{record.diagnosis}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">
                    {record.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
