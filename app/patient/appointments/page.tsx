"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, User, CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AppointmentsPage() {
    const appointments = [
        {
            id: 1,
            doctor: "Dr. Carlos López",
            specialty: "Cardiología",
            date: "2025-11-15",
            time: "10:00 AM",
            location: "Consultorio 101",
            status: "confirmed",
        },
        {
            id: 2,
            doctor: "Dra. María García",
            specialty: "Medicina General",
            date: "2025-11-22",
            time: "2:30 PM",
            location: "Consultorio 205",
            status: "pending",
        },
        {
            id: 3,
            doctor: "Dr. Juan Martínez",
            specialty: "Oftalmología",
            date: "2025-12-05",
            time: "4:00 PM",
            location: "Consultorio 301",
            status: "confirmed",
        },
    ]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Mis Consultas</h2>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">
                    Visualiza tus citas programadas y próximas consultas
                </p>
            </div>

            {/* Appointments List */}
            <div className="space-y-4">
                {appointments.map((apt) => (
                    <Card key={apt.id} className="p-4 md:p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1 space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <User className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-base md:text-lg">{apt.doctor}</p>
                                        <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span className="truncate">{apt.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        <span>{apt.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground col-span-2 md:col-span-2">
                                        <MapPin className="w-4 h-4" />
                                        <span className="truncate">{apt.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {apt.status === "confirmed" ? (
                                    <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" />
                                        Confirmada
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        Pendiente
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
