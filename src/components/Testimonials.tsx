import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "José Victor Moraes Barros",
    location: "Rio de Janeiro",
    rating: 5,
    text: "Excelente atendimento! Profissionais de qualidade! Me deram suporte em um domingo às 20 horas! Pelo horário me atenderam na segunda no primeiro horário! Usaram peças originais! Serviço de qualidade! Deixou o ambiente limpo após o serviço!",
    service: "Atendimento Emergencial",
    timeAgo: "1 mês atrás"
  },
  {
    name: "Heloísa Carneiro", 
    location: "Rio de Janeiro",
    rating: 5,
    text: "Excelente atendimento! O Sr. Lopes detectou o problema da minha geladeira de primeira, por telefone, sem cobrar nada. Muito profissional e competente.",
    service: "Diagnóstico por Telefone",
    timeAgo: "2 semanas atrás"
  },
  {
    name: "Guilherme Pimentel",
    location: "Rio de Janeiro", 
    rating: 5,
    text: "Quero parabenizar o atendimento, encontrei o contato no Google e foi uma benção! Simplesmente solucionou o problema da minha geladeira por telefone, me fazendo economizar tempo e dinheiro desnecessários.",
    service: "Solução por Telefone",
    timeAgo: "3 semanas atrás"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-accent text-accent" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 20 anos de experiência e centenas de clientes satisfeitos em toda a região metropolitana
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="text-sm font-semibold">4.9/5 baseado em 75 avaliações do Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                <blockquote className="text-card-foreground mb-4 line-clamp-4">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location} • {testimonial.timeAgo}
                  </div>
                  <div className="text-xs text-primary font-medium mt-1">
                    {testimonial.service}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-2">
              + de 2.000 clientes atendidos
            </h3>
            <p className="text-muted-foreground text-sm">
              Garantia de 6 meses • Peças originais • Atendimento 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;