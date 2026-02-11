import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-card shadow-[var(--shadow-card)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="bg-[image:var(--gradient-hero)] p-2 rounded-lg" aria-label="Ir para a página inicial da ABELTEC">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
            </Link>
            <div>
              <p className="text-xl font-bold text-foreground">ABELTEC</p>
              <p className="text-sm text-muted-foreground">Refrigeração Especializada</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center gap-4 text-sm">
              <Link className="text-muted-foreground hover:text-foreground transition-colors" to="/">
                Home
              </Link>
              <Link className="text-muted-foreground hover:text-foreground transition-colors" to="/maquina-de-lavar">
                Máquina de Lavar
              </Link>
            </nav>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              Atendimento 24h
            </div>
            <a href="tel:+5521987636363">
            <Button variant="whatsapp" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Ligar Agora - (21) 98763-6363
            </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;