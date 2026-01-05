import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const bairros = [
	"Méier",
	"Tijuca",
	"Grajaú",
	"Ipanema",
	"Leblon",
	"Copacabana",
	"Barra da Tijuca",
	"Recreio",
	"Jacarépaguá",
];

const allBairros = [
	"Abolição", "Água Santa", "Alto da Boa Vista", "Andaraí", "Anil", "Bancários", "Barra da Tijuca", "Benfica",
	"Bento Ribeiro", "Bonsucesso", "Botafogo", "Brás de Pina", "Cachambi", "Cacuia", "Campinho", "Cascadura",
	"Catete", "Catumbi", "Cavalcanti", "Centro", "Cidade Nova", "Cidade Universitária", "Cocotá", "Coelho Neto",
	"Colégio", "Copacabana", "Cosme Velho", "Del Castilho", "Deodoro", "Encantado", "Engenho da Rainha",
	"Engenho de Dentro", "Engenho Novo", "Estácio", "Flamengo", "Freguesia (Ilha do Governador)",
	"Freguesia (Jacarepaguá)", "Galeão", "Gardênia Azul", "Gávea", "Glória", "Grajaú", "Higienópolis",
	"Honório Gurgel", "Humaitá", "Ilha do Governador", "Inhaúma", "Ipanema", "Irajá", "Jacarepaguá",
	"Jardim Guanabara", "Joá", "Lagoa", "Laranjeiras", "Leblon", "Leme", "Lins de Vasconcelos", "Madureira",
	"Maracanã", "Marechal Hermes", "Maria da Graça", "Méier", "Moneró", "Olaria", "Oswaldo Cruz", "Pechincha",
	"Penha", "Penha Circular", "Piedade", "Pilares", "Portuguesa", "Praça da Bandeira", "Praça Seca",
	"Quintino Bocaiúva", "Ramos", "Recreio dos Bandeirantes", "Riachuelo", "Ribeira", "Rio Comprido", "Rocha",
	"Rocha Miranda", "Sampaio", "São Conrado", "São Cristóvão", "São Francisco Xavier", "Tanque", "Taquara",
	"Tauá", "Tijuca", "Todos os Santos", "Tomás Coelho", "Turiaçu", "Urca", "Vaz Lobo", "Vicente de Carvalho",
	"Vila da Penha", "Vila Isabel", "Vila Militar", "Vila Valqueire", "Zumbi"
];

const Bairros = () => {
	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4">
						<span className="text-primary">Bairros Atendidos</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Atendemos os principais bairros do Rio de Janeiro com assistência técnica especializada em geladeiras.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
					{bairros.map((bairro, idx) => (
						<div key={idx} className="bg-[image:var(--gradient-card)] shadow-[var(--shadow-card)] rounded-xl p-8 text-center flex flex-col items-center justify-center">
							<h3 className="text-xl font-semibold text-foreground mb-2">{bairro}</h3>
							<p className="text-muted-foreground text-sm">Conserto de Geladeiras {bairro}</p>
						</div>
					))}
				</div>

				<div className="max-w-3xl mx-auto">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-center justify-center text-muted-foreground hover:text-primary">
								Ver lista completa de todos os bairros atendidos
							</AccordionTrigger>
							<AccordionContent>
								<div className="flex flex-wrap justify-center gap-2 text-sm text-white py-4">
									{allBairros.map((bairro, idx) => (
										<span key={idx} className="bg-primary px-2 py-1 rounded-md">
											{bairro}
										</span>
									))}
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default Bairros;
