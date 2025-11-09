"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState<"patient" | "admin">("patient")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      // Demo login - in production, validate against backend
      if (userType === "patient") {
        router.push("/patient")
      } else {
        router.push("/admin")
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">Vitallink ID</span>
          </div>
          <p className="text-muted-foreground">Acceso seguro a tu información médica</p>
        </div>

        {/* User Type Selection */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
          <div className="mb-6">
            <label className="text-sm font-medium mb-3 block">Tipo de Usuario</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setUserType("patient")}
                className={`p-3 rounded-lg border-2 transition font-medium ${
                  userType === "patient"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-border"
                }`}
              >
                Paciente
              </button>
              <button
                onClick={() => setUserType("admin")}
                className={`p-3 rounded-lg border-2 transition font-medium ${
                  userType === "admin"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-border"
                }`}
              >
                Administrador
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium block mb-2">
                {userType === "patient" ? "Correo Electrónico" : "Correo Electrónico"}
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-border"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium block mb-2">
                {userType === "patient" ? "Número de Documento" : "Contraseña"}
              </label>
              <Input
                id="password"
                type="password"
                placeholder={userType === "patient" ? "Ej: 12345678" : "Tu contraseña"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-border"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 h-auto">
              Ingresar
            </Button>
          </form>

          {/* Demo Credentials */}
          {/* <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs font-semibold text-muted-foreground mb-2">Credenciales Demo:</p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Paciente:</span> patient@demo.com / 12345678
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Admin:</span> admin@demo.com / password123
            </p>
          </div> */}
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-primary hover:underline text-sm">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
