import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[image:var(--gradient-hero)] p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">A</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">ABELTEC</h3>
                <p className="text-xs text-secondary-foreground/80">Refrigeração Especializada</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Mais de 20 anos oferecendo soluções em assistência técnica para geladeiras, freezers e máquinas de lavar.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>• Reparo de Geladeiras</li>
              <li>• Conserto de Freezers</li>
              <li>• Máquinas de Lavar</li>
              <li>• Manutenção Preventiva</li>
              <li>• Instalação de Equipamentos</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 shrink-0" />
                <span>(21) 98763-6363</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2 shrink-0" />
                <ul className="ml-1 space-y-1">
                  <li>Zona Norte</li>
                  <li>Zona Sul</li>
                  <li>Barra da Tijuca</li>
                  <li>Recreio</li>
                  <li>Jacarépaguá</li>
                  <li>E Muitos outros</li>
                </ul>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-2 shrink-0" />
                <span>24 horas - 7 dias por semana</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Garantias</h4>
            <Card className="bg-blue-100 p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-800">Até 1 ano</div>
                <div className="text-xs text-blue-600">de garantia em todos os serviços</div>
              </div>
            </Card>
            <div className="text-xs text-secondary-foreground/80">
              <p>• Peças originais</p>
              <p>• Mão de obra especializada</p>
              <p>• Atendimento 24h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 ABELTEC Refrigeração. Todos os direitos reservados. | 
            Especializada em assistência técnica de eletrodomésticos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;