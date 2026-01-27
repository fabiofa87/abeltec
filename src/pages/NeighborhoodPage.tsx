import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { getBairroBySlug } from "@/data/bairros";

const NeighborhoodPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const bairro = slug ? getBairroBySlug(slug) : null;

    useEffect(() => {
        if (!bairro) {
            navigate("/404");
        }
    }, [bairro, navigate]);

    if (!bairro) return null;

    return (
        <>
            <Helmet>
                <title>Conserto de Geladeira em {bairro} - Chegamos em 30 min | ABELTEC</title>
                <meta
                    name="description"
                    content={`Mora em ${bairro} e sua geladeira parou? Chegamos em 30 minutos! Técnicos especializados na região. Atendimento 24h. Peças originais e garantia.`}
                />
                <meta name="geo.region" content="BR-RJ" />
                <meta name="geo.placename" content={`Rio de Janeiro - ${bairro}`} />
                {/* Coordinates could be dynamic if we had a database, but sticking to RJ center is acceptable for now or removing tailored coords */}
                <meta name="geo.position" content="-22.9068;-43.1729" />
                <meta name="ICBM" content="-22.9068, -43.1729" />
            </Helmet>

            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <section className="py-20 bg-[image:var(--gradient-hero)] text-white text-center">
                        <div className="container mx-auto px-4">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Conserto de Geladeira em <span className="text-accent">{bairro}</span>
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                                Atendimento prioritário para o bairro {bairro} e adjacências.
                                Seu técnico está a poucos minutos de distância.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="whatsapp" size="xl">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    <a
                                        href={`https://wa.me/5521987636363?text=Olá,%20sou%20de%20${bairro}%20e%20preciso%20de%20conserto%20na%20geladeira`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        WhatsApp - Técnico em {bairro}
                                    </a>
                                </Button>
                                <a href="tel:+5521987636363">
                                    <Button variant="cta" size="xl">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Ligar Agora
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-background">
                        <div className="container mx-auto px-4">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center p-6 border rounded-xl shadow-sm">
                                    <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Atendimento com Urgência</h3>
                                    <p className="text-muted-foreground">Equipe dedicada rodando na região de {bairro}.</p>
                                </div>
                                <div className="text-center p-6 border rounded-xl shadow-sm">
                                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Peças Originais</h3>
                                    <p className="text-muted-foreground">Trabalhamos com peças originais e de alta qualidade.</p>
                                </div>
                                <div className="text-center p-6 border rounded-xl shadow-sm">
                                    <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Plantão 24h</h3>
                                    <p className="text-muted-foreground">Atendimento a qualquer hora, inclusive domingos.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default NeighborhoodPage;
