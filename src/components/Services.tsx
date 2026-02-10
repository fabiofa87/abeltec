import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Snowflake,
  WashingMachine,
  Wrench,
  Shield,
  Clock,
  CheckCircle,
  Phone
} from "lucide-react";

const services = [
  {
    icon: Snowflake,
    title: "Geladeiras e Freezers",
    description: "Conserto completo de geladeiras, freezers e refrigeradores de todas as marcas",
    features: ["Troca de compressor", "Sistema de refrigeração", "Controles eletrônicos", "Vedações"]
  },
  {
    icon: WashingMachine,
    title: "Máquinas de Lavar",
    description: "Manutenção e reparo de máquinas de lavar roupas e lava e seca",
    features: ["Troca de bomba d'água", "Correias e rolamentos", "Controle eletrônico", "Sistema de drenagem", "Reforma mecânica"]
  },
  {
    icon: Wrench,
    title: "Não Vendemos Peças",
    description: "Focamos exclusivamente no serviço técnico especializado, não comercializamos peças",
    features: ["Serviço técnico apenas", "Mão de obra qualificada", "Diagnóstico preciso", "Atendimento personalizado"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Nossos Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Especialistas em assistência técnica de geladeiras e máquinas de lavar com garantia por escrito e qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-[image:var(--gradient-card)] shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-[image:var(--gradient-hero)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6 bg-[image:var(--gradient-card)]">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Até 1 ano de garantia</h3>
            <p className="text-muted-foreground text-sm">Todos os serviços com garantia completa</p>
          </Card>

          <Card className="text-center p-6 bg-[image:var(--gradient-card)]">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Atendimento 24h</h3>
            <p className="text-muted-foreground text-sm">Emergências e agendamentos</p>
          </Card>

          <Card className="text-center p-6 bg-[image:var(--gradient-card)]">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Peças Originais</h3>
            <p className="text-muted-foreground text-sm">Sempre utilizamos peças originais</p>
          </Card>
        </div>

        <div className="text-center">
          <a href="tel:+5521987636363">
            <Button variant="cta" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento Gratuito
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;