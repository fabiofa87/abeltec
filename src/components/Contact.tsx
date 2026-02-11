import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Star
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-[image:var(--gradient-hero)] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Precisa de assistência técnica? Fale conosco agora mesmo e receba atendimento especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur border-white/20 text-center p-6">
            <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Telefone</h3>
            <p className="text-white/80 text-sm mb-4">(21) 98763-6363</p>
            <a href="tel:+5521987636363">
              <Button variant="whatsapp" size="sm">
                Ligar
              </Button>
            </a>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-center p-6">
            <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <p className="text-white/80 text-sm mb-4">Atendimento rápido</p>
            <a href="https://wa.me/5521987636363" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="sm">
                Conversar
              </Button>
            </a>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-center p-6">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Localização</h3>
            <p className="text-white/80 text-sm mb-4">Rio de Janeiro - RJ</p>
            <a
              href="https://share.google/h7XO36W8dZnaR3maF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="sm">
                Ver no Maps
              </Button>
            </a>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20 text-center p-6">
            <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Horário</h3>
            <p className="text-white/80 text-sm mb-4">24 horas por dia</p>
            <a href="tel:+5521987636363">
              <Button variant="destructive" size="sm">
                Emergência
              </Button>
            </a>
          </Card>
        </div>

        <Card className="bg-white/10 backdrop-blur border-white/30 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white font-bold">Solicite seu Orçamento Por Telefone</CardTitle>
            <p className="text-white text-lg">Atendimento rápido e profissional para sua geladeira e máquina de lavar</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">1</div>
                <div className="text-lg font-semibold">Entre em Contato</div>
                <div className="text-sm text-white/80">WhatsApp ou telefone</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">2</div>
                <div className="text-lg font-semibold">Diagnóstico</div>
                <div className="text-sm text-white/80">Avaliação gratuita</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="text-lg font-semibold">Reparo</div>
                <div className="text-sm text-white/80">Serviço com garantia escrita</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="xl">
                <MessageCircle className="w-5 h-5 mr-2" />
                <a href="https://wa.me/5521987636363" target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
              <a href="tel:+5521987636363">
                <Button variant="destructive" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center space-x-2 text-accent">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm">Mais de 500 clientes satisfeitos</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;