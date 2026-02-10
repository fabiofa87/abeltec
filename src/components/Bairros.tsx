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
	"Recreio dos Bandeirantes",
	"Jacarépaguá",
	"Ilha do Governador"
];

import { allBairros } from "@/data/bairros";

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
					{allBairros.map((bairro, idx) => (
						<div key={idx} className="bg-[image:var(--gradient-card)] shadow-[var(--shadow-card)] rounded-xl p-8 text-center flex flex-col items-center justify-center">
							<h3 className="text-xl font-semibold text-foreground mb-2">{bairro}</h3>
							<p className="text-muted-foreground text-sm">Conserto de Geladeiras {bairro}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Bairros;
