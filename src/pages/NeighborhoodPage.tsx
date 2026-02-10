import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, CheckCircle, MapPin } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { getNeighborhoodData } from "@/data/neighborhoodsData";

const NeighborhoodPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Use the new data source
    const neighborhoodData = slug ? getNeighborhoodData(slug) : null;
    const bairroName = neighborhoodData?.name || "";

    useEffect(() => {
        if (!neighborhoodData) {
            navigate("/404");
        }
    }, [neighborhoodData, navigate]);

    if (!neighborhoodData) return null;

    return (
        <>
            <Helmet>
                <title>Conserto de Geladeira em {bairroName} - Chegamos em {neighborhoodData.avgArrival} | ABELTEC</title>
                <meta
                    name="description"
                    content={`Mora em ${bairroName}? ${neighborhoodData.description} Chegamos em ${neighborhoodData.avgArrival}! Técnicos especializados na região. Atendimento 24h.`}
                />
                <meta name="geo.region" content="BR-RJ" />
                <meta name="geo.placename" content={`Rio de Janeiro - ${bairroName}`} />
                {/* Coordinates could be dynamic if we had a database, but sticking to RJ center is acceptable for now or removing tailored coords */}
                <meta name="geo.position" content="-22.9068;-43.1729" />
                <meta name="ICBM" content="-22.9068, -43.1729" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": `Conserto de Geladeira em ${bairroName}`,
                        "provider": {
                            "@type": "LocalBusiness",
                            "name": "ABELTEC Refrigeração"
                        },
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": bairroName
                        },
                        "description": neighborhoodData.description,
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    {/* Hero Section */}
                    <section className="py-20 bg-[image:var(--gradient-hero)] text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/40 z-0"></div>
                        <div className="container mx-auto px-4 relative z-10">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                                Conserto de Geladeira em <span className="text-accent">{bairroName}</span>
                            </h1>
                            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-body leading-relaxed">
                                {neighborhoodData.description}
                            </p>

                            {/* Urgent info badges */}
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
                                    <Clock className="w-5 h-5 text-accent" />
                                    <span className="text-sm font-semibold">Chegada em {neighborhoodData.avgArrival}</span>
                                </div>
                                {neighborhoodData.zones.length > 0 && (
                                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/20">
                                        <MapPin className="w-5 h-5 text-accent" />
                                        <span className="text-sm font-semibold">Atendendo {neighborhoodData.zones[0]}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="whatsapp" size="xl">
                                    <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                                    <a
                                        href={`https://wa.me/5521987636363?text=Olá,%20sou%20de%20${bairroName}%20e%20preciso%20de%20conserto%20na%20geladeira`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        WhatsApp - Técnico em {bairroName}
                                    </a>
                                </Button>
                                <a href="tel:+5521987636363">
                                    <Button variant="cta" size="xl">
                                        <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                                        Ligar Agora
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Local Presence Section - NEW for SEO */}
                    {neighborhoodData.mainStreets.length > 0 && (
                        <section className="py-12 bg-muted/20 border-b">
                            <div className="container mx-auto px-4">
                                <div className="max-w-4xl mx-auto text-center">
                                    <h2 className="text-2xl font-bold mb-6 font-heading text-primary">Atendimento Prioritário na Região</h2>
                                    <p className="mb-6 text-muted-foreground">
                                        Nossas equipes circulam diariamente pelas principais vias de {bairroName}, garantindo agilidade no deslocamento.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {neighborhoodData.mainStreets.map((street, idx) => (
                                            <span key={idx} className="bg-background border px-3 py-1 rounded-md text-sm text-foreground/80 shadow-sm flex items-center gap-2">
                                                <MapPin className="w-3 h-3 text-primary" />
                                                {street}
                                            </span>
                                        ))}
                                        {neighborhoodData.landmarks.map((landmark, idx) => (
                                            <span key={`lm-${idx}`} className="bg-background border px-3 py-1 rounded-md text-sm text-foreground/80 shadow-sm flex items-center gap-2">
                                                <MapPin className="w-3 h-3 text-secondary" />
                                                Próximo ao {landmark}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    <section className="py-16 bg-background">
                        <div className="container mx-auto px-4">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center p-6 border rounded-xl shadow-sm transition-transform hover:-translate-y-1">
                                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
                                    <h3 className="text-xl font-semibold mb-2 font-heading">Atendimento com Urgência</h3>
                                    <p className="text-muted-foreground font-body">Equipe dedicada rodando na região de {bairroName}. Tempo médio de chegada: {neighborhoodData.avgArrival}.</p>
                                </div>
                                <div className="text-center p-6 border rounded-xl shadow-sm transition-transform hover:-translate-y-1">
                                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
                                    <h3 className="text-xl font-semibold mb-2 font-heading">Peças Originais</h3>
                                    <p className="text-muted-foreground font-body">Trabalhamos com peças originais e de alta qualidade.</p>
                                </div>
                                <div className="text-center p-6 border rounded-xl shadow-sm transition-transform hover:-translate-y-1">
                                    <Phone className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
                                    <h3 className="text-xl font-semibold mb-2 font-heading">Plantão 24h</h3>
                                    <p className="text-muted-foreground font-body">Atendimento a qualquer hora, inclusive domingos e feriados.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-muted/30">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <h2 className="text-3xl font-bold text-center mb-8 font-heading">Dúvidas Frequentes em {bairroName}</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Vocês atendem no bairro {bairroName}?</AccordionTrigger>
                                    <AccordionContent>
                                        Sim! Temos técnicos especializados {neighborhoodData.zones.length > 0 ? `na ${neighborhoodData.zones[0]} ` : ""}
                                        posicionados estrategicamente perto de {bairroName} para garantir um atendimento no mesmo dia.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>O orçamento é gratuito?</AccordionTrigger>
                                    <AccordionContent>
                                        Sim, realizamos o orçamento gratuitamente no local. Você só paga se aprovar o serviço.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Qual o tempo de garantia?</AccordionTrigger>
                                    <AccordionContent>
                                        Oferecemos garantia estendida de até 1 ano em nossos serviços, proporcionando total segurança e tranquilidade para você.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>Quais formas de pagamento são aceitas?</AccordionTrigger>
                                    <AccordionContent>
                                        Aceitamos dinheiro, PIX, e cartões de crédito e débito. Parcelamos serviços maiores conforme necessidade.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>Trabalham com quais marcas?</AccordionTrigger>
                                    <AccordionContent>
                                        Somos especialistas em todas as principais marcas nacionais e importadas, incluindo Brastemp, Electrolux, Consul, LG, Samsung e Bosch.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default NeighborhoodPage;

