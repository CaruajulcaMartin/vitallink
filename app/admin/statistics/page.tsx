"use client"

import { Card } from "@/components/ui/card"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts"

export default function StatisticsPage() {
    const monthlyData = [
        { month: "Ene", consultas: 120, recetas: 45, pacientes: 85 },
        { month: "Feb", consultas: 135, recetas: 52, pacientes: 92 },
        { month: "Mar", consultas: 148, recetas: 58, pacientes: 105 },
        { month: "Abr", consultas: 162, recetas: 65, pacientes: 118 },
        { month: "May", consultas: 175, recetas: 72, pacientes: 130 },
        { month: "Jun", consultas: 189, recetas: 78, pacientes: 142 },
    ]

    const specialtyData = [
        { name: "Cardiología", value: 240 },
        { name: "Dermatología", value: 185 },
        { name: "Oftalmología", value: 160 },
        { name: "Pediatría", value: 135 },
        { name: "Otros", value: 280 },
    ]

    const COLORS = ["var(--color-primary)", "var(--color-accent)", "var(--color-secondary)", "#8b5cf6", "#ec4899"]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold">Estadísticas</h2>
                <p className="text-muted-foreground mt-2">Análisis de datos y tendencias del sistema</p>
            </div>

            {/* Monthly Trend */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tendencia Mensual</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }} />
                        <Legend />
                        <Line type="monotone" dataKey="consultas" stroke="var(--color-primary)" strokeWidth={2} />
                        <Line type="monotone" dataKey="recetas" stroke="var(--color-accent)" strokeWidth={2} />
                        <Line type="monotone" dataKey="pacientes" stroke="var(--color-secondary)" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </Card>

            {/* Specialties Distribution */}
            <div className="grid lg:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Consultas por Especialidad</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={specialtyData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, value }) => `${name}: ${value}`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {specialtyData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </Card>

                {/* Top Doctors */}
                <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Médicos Más Activos</h3>
                    <div className="space-y-3">
                        {[
                            { name: "Dra. María García", consultations: 45, satisfaction: "98%" },
                            { name: "Dr. Juan Martínez", consultations: 42, satisfaction: "96%" },
                            { name: "Dra. Patricia López", consultations: 38, satisfaction: "97%" },
                            { name: "Dr. Luis Fernández", consultations: 35, satisfaction: "95%" },
                        ].map((doctor, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <div>
                                    <p className="font-medium text-sm">{doctor.name}</p>
                                    <p className="text-xs text-muted-foreground">{doctor.consultations} consultas</p>
                                </div>
                                <span className="text-xs font-semibold text-primary">{doctor.satisfaction}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}
