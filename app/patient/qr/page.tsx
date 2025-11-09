"use client"

import { Card } from "@/components/ui/card"
import { QrCode, Download, Copy, RotateCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QRPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Vitallink ID</h2>
                <p className="text-muted-foreground mt-2 text-sm md:text-base">
                    Genera y escanea tu código QR para acceso rápido a tu historial médico
                </p>
            </div>

            {/* QR Card */}
            <Card className="p-6 md:p-8">
                <div className="flex flex-col items-center space-y-6">
                    {/* QR Code */}
                    <div className="bg-white p-6 rounded-lg border-2 border-primary">
                        <QrCode className="w-48 h-48 md:w-64 md:h-64 text-foreground" />
                    </div>

                    {/* Patient Info */}
                    <div className="text-center space-y-2">
                        <p className="text-lg md:text-xl font-semibold">Juan Carlos Pérez</p>
                        <p className="text-sm text-muted-foreground">ID: 12345678</p>
                        <p className="text-sm text-muted-foreground">Válido hasta: 15 Nov 2026</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2 w-full sm:w-auto">
                            <Download className="w-4 h-4" />
                            Descargar QR
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto bg-transparent">
                            <Copy className="w-4 h-4" />
                            Copiar ID
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2 w-full sm:w-auto bg-transparent">
                            <RotateCw className="w-4 h-4" />
                            Regenerar
                        </Button>
                    </div>
                </div>
            </Card>

            {/* Info Section */}
            <Card className="p-6 space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-primary" />
                    ¿Cómo usar tu código QR?
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                        <span className="font-semibold text-foreground">1.</span>
                        <span>Muestra tu código QR al personal médico para acceso rápido a tu historial</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-semibold text-foreground">2.</span>
                        <span>Tu código QR es único y contiene información de tu perfil de salud</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-semibold text-foreground">3.</span>
                        <span>Puedes regenerar tu código QR en cualquier momento desde esta página</span>
                    </li>
                </ol>
            </Card>
        </div>
    )
}
