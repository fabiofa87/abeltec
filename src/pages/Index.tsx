import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Bairros from "@/components/Bairros";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ABELTEC - Assistência Técnica Geladeiras e Máquinas de Lavar - 24h</title>
        <meta 
          name="description" 
          content="Técnico especializado em conserto de geladeiras, freezers e máquinas de lavar. Atendimento 24h, até 1 ano de garantia, peças originais. Orçamento gratuito." 
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
        <meta property="og:image" content="/hero-technician.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ElectronicsRepairShop",
            "name": "ABELTEC Refrigeração",
            "url": "https://www.abeltecrefrigeracao.com.br",
            "logo": "https://www.abeltecrefrigeracao.com.br/logo.png",
            "description": "Assistência técnica especializada em geladeiras, freezers e máquinas de lavar no Rio de Janeiro e Grande Rio.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+5521987636363",
              "contactType": "Atendimento ao cliente",
              "areaServed": "Rio de Janeiro"
            },
            "openingHours": "Mo-Su 00:00-24:00",
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Reparo e Manutenção",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conserto de Geladeiras",
                    "description": "Reparo e manutenção de geladeiras e freezers de todas as marcas, como Brastemp, Electrolux e Consul."
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conserto de Máquinas de Lavar",
                    "description": "Conserto e manutenção de máquinas de lavar roupa de diversas marcas e modelos."
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "75",
              "bestRating": "5",
              "worstRating": "1"
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Rio de Janeiro, RJ" },
              { "@type": "AdministrativeArea", "name": "Baixada Fluminense" },
              { "@type": "AdministrativeArea", "name": "Zona Norte do Rio de Janeiro" },
              { "@type": "AdministrativeArea", "name": "Zona Sul do Rio de Janeiro" },
              { "@type": "AdministrativeArea", "name": "Zona Oeste do Rio de Janeiro" },
              { "@type": "AdministrativeArea", "name": "Centro do Rio de Janeiro" }
            ]})}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <Services />
          <Bairros />
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
