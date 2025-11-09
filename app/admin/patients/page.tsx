"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, QrCode, Edit, Trash2 } from "lucide-react"

export default function PatientManagementPage() {
  const patients = [
    { id: 1, name: "Juan Pérez García", email: "juan@demo.com", phone: "+34 612 345 678", status: "Activo" },
    { id: 2, name: "María López Rodríguez", email: "maria@demo.com", phone: "+34 623 456 789", status: "Activo" },
    { id: 3, name: "Carlos Martínez López", email: "carlos@demo.com", phone: "+34 634 567 890", status: "Inactivo" },
    { id: 4, name: "Ana García Fernández", email: "ana@demo.com", phone: "+34 645 678 901", status: "Activo" },
    { id: 5, name: "Luis Rodríguez Pérez", email: "luis@demo.com", phone: "+34 656 789 012", status: "Activo" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Gestión de Pacientes</h2>
          <p className="text-muted-foreground mt-2">Administra los datos de los pacientes del sistema</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Agregar Paciente</Button>
      </div>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Buscar paciente por nombre, email..." className="pl-10 border-border" />
        </div>
      </Card>

      {/* Patients Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Nombre</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Teléfono</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Estado</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-border hover:bg-muted/30 transition">
                  <td className="px-6 py-4 text-sm font-medium">{patient.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{patient.email}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{patient.phone}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        patient.status === "Activo" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                        <QrCode className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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
