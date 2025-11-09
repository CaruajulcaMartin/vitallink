"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Menu, X, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
    { href: "/admin", label: "Panel General" },
    { href: "/admin/patients", label: "Gestión de Pacientes" },
    { href: "/admin/consultations", label: "Consultas y Recetas" },
    { href: "/admin/statistics", label: "Estadísticas" },
    { href: "/admin/settings", label: "Configuración" },
]

export function AdminHeaderClient() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <header className="border-b border-border bg-card shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Heart className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">Vitallink ID</h1>
                            <p className="text-xs text-muted-foreground">Panel Administrativo</p>
                        </div>
                    </div>

                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="md:hidden p-2 hover:bg-muted rounded-lg transition"
                        aria-label="Toggle menu"
                    >
                        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-sm font-semibold text-foreground">Dr. Carlos Rodríguez</p>
                            <p className="text-xs text-muted-foreground">Administrador</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="rounded-full bg-transparent" title="Configuración">
                                <Settings className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full bg-transparent" title="Cerrar sesión">
                                <LogOut className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <aside
                className={`${sidebarOpen ? "block" : "hidden"
                    } md:hidden w-full border-r border-border bg-card min-h-[calc(100vh-73px)] fixed top-16 left-0 right-0 z-40`}
            >
                <nav className="p-4 space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition text-foreground hover:text-primary font-medium text-sm"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    )
}
