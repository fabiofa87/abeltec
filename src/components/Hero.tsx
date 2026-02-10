import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Star, Clock } from "lucide-react";
import heroImage from "@/assets/hero-technician.png";

const Hero = () => {
  return (
    <section className="py-20 bg-[image:var(--gradient-hero)] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-accent font-semibold">4.9/5 - Mais de 500 clientes atendidos</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight font-heading">
                Assistência Técnica em
                <span className="text-accent"> Geladeiras</span> e
                <span className="text-accent"> Máquinas</span>
              </h1>

              <p className="text-xl text-white/90 max-w-lg font-body">
                Especializada em freezers e geladeiras Frost Free com mais de 20 anos de experiência.
                Atendimento rápido, garantia nos serviços com peças originais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <Card className="bg-white/10 backdrop-blur border-white/20 p-4 transition-transform hover:-translate-y-1">
                <Clock className="w-8 h-8 text-accent mx-auto mb-2" aria-hidden="true" />
                <div className="text-lg font-semibold font-heading">Atendimento</div>
                <div className="text-sm text-white/80 font-body">24 Horas</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20 p-4 transition-transform hover:-translate-y-1">
                <Star className="w-8 h-8 text-accent mx-auto mb-2" aria-hidden="true" />
                <div className="text-lg font-semibold font-heading">Garantia por escrito</div>
                <div className="text-sm text-white/80 font-body">Até 1 ano</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20 p-4 transition-transform hover:-translate-y-1">
                <MessageCircle className="w-8 h-8 text-accent mx-auto mb-2" aria-hidden="true" />
                <div className="text-lg font-semibold font-heading">Orçamento</div>
                <div className="text-sm text-white/80 font-body">Gratuito</div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" size="xl" className="flex-1 sm:flex-none">
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                <a href="https://wa.me/5521987636363" target="_blank" rel="noopener noreferrer">
                  WhatsApp - Orçamento
                </a>
              </Button>
              <a href="tel:+5521987636363">
                <Button variant="cta" size="xl" className="flex-1 sm:flex-none">
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Ligar Agora
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="ABELTEC - Assistência Técnica especializada em geladeiras, máquinas de lavar, fogão - Emergência 24hrs"
              className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-contain bg-white/5 backdrop-blur"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;