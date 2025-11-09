import Link from "next/link"
import type React from "react"
import { PatientHeader } from "@/components/patient-header"
import { MedicalIcon } from "@/components/medical-icon"

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { href: "/patient", label: "Mi Historial Clínico", icon: "history" as const },
    { href: "/patient/appointments", label: "Mis Consultas", icon: "appointment" as const },
    { href: "/patient/prescriptions", label: "Mis Recetas", icon: "prescription" as const },
    { href: "/patient/qr", label: "Mi Código QR", icon: "qr" as const },
  ]

  return (
    <div className="min-h-screen bg-background">
      <PatientHeader menuItems={menuItems} />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-r border-border bg-card min-h-[calc(100vh-73px)] md:relative md:static">
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
