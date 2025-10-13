import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card shadow-[var(--shadow-card)] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-[image:var(--gradient-hero)] p-2 rounded-lg">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-lg">A</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ABELTEC</h1>
              <p className="text-sm text-muted-foreground">Refrigeração Especializada</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
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