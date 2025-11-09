"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText } from "lucide-react"

export default function ConsultationsPage() {
    const consultations = [
        {
            id: 1,
            patient: "Juan Pérez García",
            doctor: "Dra. María García",
            date: "2025-11-10",
            type: "Consulta General",
            prescription: "Sí",
        },
        {
            id: 2,
            patient: "María López Rodríguez",
            doctor: "Dr. Luis Fernández",
            date: "2025-11-08",
            type: "Dermatología",
            prescription: "No",
        },
        {
            id: 3,
            patient: "Carlos Martínez López",
            doctor: "Dra. Patricia López",
            date: "2025-11-05",
            type: "Cardiología",
            prescription: "Sí",
        },
        {
            id: 4,
            patient: "Ana García Fernández",
            doctor: "Dr. Juan Martínez",
            date: "2025-11-03",
            type: "Oftalmología",
            prescription: "No",
        },
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold">Consultas y Recetas</h2>
                    <p className="text-muted-foreground mt-2">Visualiza y gestiona todas las consultas y recetas del sistema</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Nueva Consulta</Button>
            </div>

            {/* Search */}
            <Card className="p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="Buscar consulta por paciente, médico..." className="pl-10 border-border" />
                </div>
            </Card>

            {/* Consultations Table */}
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="border-b border-border bg-muted/50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium">Paciente</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Médico</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Fecha</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Tipo</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Receta</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consultations.map((consultation) => (
                                <tr key={consultation.id} className="border-b border-border hover:bg-muted/30 transition">
                                    <td className="px-6 py-4 text-sm font-medium">{consultation.patient}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{consultation.doctor}</td>
                                    <td className="px-6 py-4 text-sm">{consultation.date}</td>
                                    <td className="px-6 py-4 text-sm">{consultation.type}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${consultation.prescription === "Sí"
                                                    ? "bg-primary/10 text-primary"
                                                    : "bg-muted text-muted-foreground"
                                                }`}
                                        >
                                            {consultation.prescription}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 gap-1">
                                            <FileText className="w-4 h-4" />
                                            Ver
                                        </Button>
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
