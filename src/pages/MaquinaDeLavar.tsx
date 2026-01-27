import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, WashingMachine, CheckCircle, Shield } from "lucide-react";

const MaquinaDeLavar = () => {
    return (
        <>
            <Helmet>
                <title>Conserto de Máquina de Lavar - Assistência Técnica RJ | ABELTEC</title>
                <meta
                    name="description"
                    content="Sua máquina de lavar parou? Conserto de Lava e Seca e Máquinas de Lavar de todas as marcas (Brastemp, Electrolux, Samsung, LG). Peças originais e garantia."
                />
                <meta name="geo.region" content="BR-RJ" />
                <meta name="geo.placename" content="Rio de Janeiro" />
                <meta name="geo.position" content="-22.9068;-43.1729" />
                <meta name="ICBM" content="-22.9068, -43.1729" />
            </Helmet>

            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <section className="py-20 bg-[image:var(--gradient-hero)] text-white text-center">
                        <div className="container mx-auto px-4">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                                    <WashingMachine className="w-16 h-16 text-accent" />
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Conserto de <span className="text-accent">Máquina de Lavar</span>
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                                Assistência técnica especializada em Lavadoras e Lava e Seca.
                                Todas as marcas e modelos.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="whatsapp" size="xl">
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    <a href="https://wa.me/5521987636363?text=Preciso%20de%20conserto%20para%20minha%20máquina%20de%20lavar" target="_blank" rel="noopener noreferrer">
                                        Orçamento pelo WhatsApp
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
                                <div className="text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Todas as Marcas</h3>
                                    <p className="text-muted-foreground">Especialistas em Brastemp, Electrolux, Consul, LG e Samsung.</p>
                                </div>
                                <div className="text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Garantia Total</h3>
                                    <p className="text-muted-foreground">Até 1 ano de garantia no serviço e peças originais.</p>
                                </div>
                                <div className="text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">Atendimento Rápido</h3>
                                    <p className="text-muted-foreground">Agende sua visita técnica para o mesmo dia.</p>
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

export default MaquinaDeLavar;
