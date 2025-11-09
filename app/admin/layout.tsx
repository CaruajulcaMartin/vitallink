import type React from "react"
import Link from "next/link"
import { MedicalIcon } from "@/components/medical-icon"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { href: "/admin", label: "Panel General", icon: "stats" as const },
    { href: "/admin/patients", label: "Gestión de Pacientes", icon: "patient" as const },
    { href: "/admin/consultations", label: "Consultas y Recetas", icon: "consultation" as const },
    { href: "/admin/statistics", label: "Estadísticas", icon: "stats" as const },
    { href: "/admin/settings", label: "Configuración", icon: "settings" as const },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Vitallink ID</h1>
              <p className="text-xs text-muted-foreground">Panel Administrativo</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">Dr. Carlos Rodríguez</p>
              <p className="text-xs text-muted-foreground">Administrador</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-muted rounded-full transition" title="Configuración">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-muted rounded-full transition" title="Cerrar sesión">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Server Component */}
        <aside className="hidden md:flex md:flex-col w-64 border-r border-border bg-card min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 transition text-foreground hover:text-primary font-medium text-sm group"
              >
                <MedicalIcon type={item.icon} className="w-5 h-5 group-hover:text-primary" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 bg-gradient-to-br from-background to-background/95">{children}</main>
      </div>
    </div>
  )
}
