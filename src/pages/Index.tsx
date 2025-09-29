import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ABELTEC - Assistência Técnica Geladeiras e Máquinas de Lavar - 24h</title>
        <meta 
          name="description" 
          content="Técnico especializado em conserto de geladeiras, freezers e máquinas de lavar. Atendimento 24h, garantia 6 meses, peças originais. Orçamento gratuito." 
        />
        <meta name="keywords" content="técnico geladeira, conserto geladeira, troca de motor geladeira,
        conserto geladeira electrolux,
        conserto geladeira zona norte,
        conserto de geladeira brastemp,
        conserto de freezer, conserto de máquina de lavar, conserto de geladeira 24 horas,
        conserto de geladeira zona sul, conserto de geladeira barra,
        conserto de geladeira perto de mim, conserto de geladeira hoje, conserto geladeira emergência,
         assistência técnica, máquina lavar, freezer, refrigeração, Abel, ABELTEC" />
        <link rel="canonical" href="https://www.abeltecrefrigeracao.com" />
        
        <meta property="og:title" content="ABELTEC - Assistência Técnica Geladeiras 24h" />
        <meta property="og:description" content="Mais de 20 anos de experiência em conserto de eletrodomésticos. Atendimento 24h com garantia." />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="/hero-technician.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ABELTEC Refrigeração",
            "description": "Assistência técnica especializada em geladeiras, freezers e máquinas de lavar",
            "serviceArea": "Região Metropolitana",
            "telephone": "XX XXXXX-XXXX",
            "openingHours": "Mo-Su 00:00-24:00",
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Refrigeração",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conserto de Geladeiras"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reparo de Máquinas de Lavar"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
