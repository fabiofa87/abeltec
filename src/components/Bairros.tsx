import { Link } from "react-router-dom";
import { allBairros, toSlug } from "@/data/bairros";

const Bairros = () => {
	return (
		<section id="bairros" className="py-20 bg-background relative overflow-hidden">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4 font-heading">
						<span className="text-primary">Bairros Atendidos</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
						Atendemos os principais bairros do Rio de Janeiro com assistência técnica especializada em geladeiras.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{allBairros.map((bairro, idx) => (
						<Link
							key={idx}
							to={`/bairros/${toSlug(bairro)}`}
							className="group relative bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 rounded-xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
							<h3 className="text-xl font-semibold text-foreground mb-2 font-heading group-hover:text-primary transition-colors">{bairro}</h3>
							<p className="text-muted-foreground text-sm font-body">Conserto de Geladeiras {bairro}</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Bairros;
