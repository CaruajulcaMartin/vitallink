import Link from "next/link"
import { Heart, Calendar, Pill, QrCode, Apple, Dumbbell, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Vitallink ID</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Características
            </a>
            <a href="#guide" className="text-muted-foreground hover:text-foreground transition">
              Guía de Uso
            </a>
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Ingresar</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
              Tu Historial Médico en un Solo Lugar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Consulta tu historial médico, recetas y citas en un solo lugar. Acceso seguro mediante QR y credenciales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/login">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 h-auto">
                  Ingresar a la Plataforma
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 text-base px-8 py-6 h-auto bg-transparent"
              >
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-balance">Consejos de Salud</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Health Tip Cards */}
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Apple className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Alimentación Saludable</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mantén una dieta equilibrada con frutas, verduras y proteína. Hidratación adecuada es clave.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md hover:border-accent/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Dumbbell className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Ejercicio Regular</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                30 minutos de actividad física diaria mejora tu salud cardiovascular y bienestar mental.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md hover:border-secondary/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Cuidado Preventivo</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Realiza revisiones médicas periódicas y vacúnate según el calendario recomendado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section id="guide" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-balance">Guía de Uso de la Plataforma</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Feature Cards */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Mi Historial Clínico</h4>
              <p className="text-sm text-muted-foreground">
                Accede a tu historial completo de consultas y diagnósticos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Mis Consultas</h4>
              <p className="text-sm text-muted-foreground">Visualiza tus citas programadas y próximas consultas.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Pill className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Mis Recetas</h4>
              <p className="text-sm text-muted-foreground">Descarga y consulta tus recetas médicas electrónicas.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Mi Código QR</h4>
              <p className="text-sm text-muted-foreground">Genera y escanea tu código QR para acceso rápido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-b border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Accede a tu historial médico de forma segura y conveniente.
          </p>
          <Link href="/login">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-shadow">
              Ingresar Ahora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="font-medium">&copy; 2025 Vitallink ID. Todos los derechos reservados.</p>
          <p className="mt-2">Plataforma segura de gestión de historiales médicos | Privacidad Garantizada</p>
        </div>
      </footer>
    </div>
  )
}
