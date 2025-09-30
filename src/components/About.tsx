import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Star, MessageCircle } from "lucide-react";
import appliancesImage from "@/assets/appliances.jpg";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Mais de <span className="text-primary">20 Anos</span> de
                <br />Experiência em Refrigeração
              </h2>
              <p className="text-xl text-muted-foreground">
                A Abeltec é especializada em assistência técnica de geladeiras, freezers e máquinas de lavar. 
                Com vasta experiência no mercado, oferece atendimento personalizado e soluções eficientes para sua casa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 bg-[image:var(--gradient-card)]">
                <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
              </Card>
              
              <Card className="text-center p-6 bg-[image:var(--gradient-card)]">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </Card>
              
              <Card className="text-center p-6 bg-[image:var(--gradient-card)]">
                <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">24h</div>
                <div className="text-sm text-muted-foreground">Atendimento Emergencial</div>
              </Card>
              
              <Card className="text-center p-6 bg-[image:var(--gradient-card)]">
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Por que escolher a ABELTEC?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                  <span><strong>Experiência comprovada:</strong> Mais de 20 anos no mercado de assistência técnica</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                  <span><strong>Atendimento personalizado:</strong> Cada cliente recebe atenção individual</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                  <span><strong>Garantia nos serviços:</strong> Até 1 ano de garantia em todos os reparos</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></div>
                  <span><strong>Peças originais:</strong> Utilizamos apenas peças de qualidade e originais</span>
                </li>
              </ul>
            </div>

            <Button variant="whatsapp" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              <a href="https://wa.me/5521987636363" target="_blank" rel="noopener noreferrer">
                Falar com a Abeltec no WhatsApp
              </a>
            </Button>
          </div>

          <div className="relative">
            <img 
              src={appliancesImage} 
              alt="Eletrodomésticos atendidos pela ABELTEC - Geladeiras, freezers e máquinas de lavar" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <Card className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4">
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">Atendimento Especializado</div>
                    <div className="text-sm text-muted-foreground">Todas as marcas e modelos</div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-accent text-accent mr-1" />
                    <span className="font-semibold text-accent">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;