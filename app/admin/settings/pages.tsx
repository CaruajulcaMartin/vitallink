"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, Save } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-bold">Configuración</h2>
                <p className="text-muted-foreground mt-2">Administra la configuración del sistema</p>
            </div>

            {/* General Settings */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Información General</h3>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium block mb-2">Nombre de la Institución</label>
                        <Input defaultValue="Hospital Central de Salud" className="border-border" />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-2">Email de Contacto</label>
                        <Input type="email" defaultValue="contacto@hospital.com" className="border-border" />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-2">Teléfono</label>
                        <Input defaultValue="+34 123 456 789" className="border-border" />
                    </div>
                    <div>
                        <label className="text-sm font-medium block mb-2">Dirección</label>
                        <Input defaultValue="Calle Principal 123, Ciudad" className="border-border" />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                        <Save className="w-4 h-4" />
                        Guardar Cambios
                    </Button>
                </div>
            </Card>

            {/* System Settings */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Configuración del Sistema</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Notificaciones por Email</p>
                            <p className="text-sm text-muted-foreground">Enviar notificaciones a pacientes y médicos</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Autenticación de Dos Factores</p>
                            <p className="text-sm text-muted-foreground">Requerir 2FA para acceso de administrador</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Modo de Mantenimiento</p>
                            <p className="text-sm text-muted-foreground">Desactivar acceso de usuarios durante mantenimiento</p>
                        </div>
                        <input type="checkbox" className="w-4 h-4" />
                    </div>
                </div>
            </Card>

            {/* Danger Zone */}
            <Card className="p-6 border-destructive/20 bg-destructive/5">
                <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold text-destructive">Zona de Peligro</h3>
                            <p className="text-sm text-destructive/70 mt-1">Acciones irreversibles - procede con cuidado</p>
                        </div>
                        <Button
                            variant="outline"
                            className="border-destructive text-destructive hover:bg-destructive/10 bg-transparent"
                        >
                            Borrar Todos los Datos
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
