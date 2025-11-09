"use client"

import { Card } from "@/components/ui/card"
import { Pill, Calendar, AlertCircle, Download, CheckCircle2, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function PrescriptionsPage() {
    const prescriptions = [
        {
            id: 1,
            medication: "Metformina",
            dose: "500mg",
            frequency: "2 veces al día",
            doctor: "Dr. Carlos López",
            startDate: "2025-10-01",
            endDate: "2025-12-31",
            status: "active",
        },
        {
            id: 2,
            medication: "Lisinopril",
            dose: "10mg",
            frequency: "1 vez al día",
            doctor: "Dra. María García",
            startDate: "2025-09-15",
            endDate: "2026-03-15",
            status: "active",
        },
        {
            id: 3,
            medication: "Aspirina",
            dose: "100mg",
            frequency: "1 vez al día",
            doctor: "Dr. Juan Martínez",
            startDate: "2025-08-01",
            endDate: "2025-11-01",
            status: "expired",
        },
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Mis Recetas</h2>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">
                    Descarga y consulta tus recetas médicas electrónicas
                </p>
            </div>

            {/* Prescriptions List */}
            <div className="space-y-4">
                {prescriptions.map((rx) => (
                    <Card key={rx.id} className="p-4 md:p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="flex-1 space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                        <Pill className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-base md:text-lg">{rx.medication}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {rx.dose} - {rx.frequency}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <User className="w-4 h-4" />
                                        <span className="truncate">{rx.doctor}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span className="truncate">{rx.startDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <AlertCircle className="w-4 h-4" />
                                        <span className="truncate">{rx.endDate}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                                {rx.status === "active" ? (
                                    <Badge className="bg-green-100 text-green-800 flex items-center gap-1 w-fit">
                                        <CheckCircle2 className="w-3 h-3" />
                                        Activa
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="flex items-center gap-1 w-fit">
                                        <AlertCircle className="w-3 h-3" />
                                        Expirada
                                    </Badge>
                                )}
                                <Button variant="outline" size="sm" className="w-full sm:w-auto flex items-center gap-2 bg-transparent">
                                    <Download className="w-4 h-4" />
                                    <span className="hidden sm:inline">Descargar</span>
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
