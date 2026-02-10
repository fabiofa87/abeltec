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
          content="GELADEIRA PAROU? Atendimento 24h inclusive aos domingos e feriados no Rio de Janeiro. Conserto de geladeiras e máquinas de lavar com até 1 ano de garantia."
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

        <meta name="geo.region" content="BR-RJ" />
        <meta name="geo.placename" content="Rio de Janeiro" />
        <meta name="geo.position" content="-22.9068;-43.1729" />
        <meta name="ICBM" content="-22.9068, -43.1729" />

        <meta property="og:title" content="Conserto de Geladeiras Emergência - ABELTEC - Assistência Técnica Geladeiras 24h" />
        <meta property="og:description" content="Mais de 20 anos de experiência em conserto de geladeiras e máquinas de lavar. Atendimento 24h com garantia." />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="/hero-technician.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ElectronicsRepairShop",
            "name": "ABELTEC Refrigeração",
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Rio de Janeiro" },
              { "@type": "AdministrativeArea", "name": "Abolição" },
              { "@type": "AdministrativeArea", "name": "Água Santa" },
              { "@type": "AdministrativeArea", "name": "Alto da Boa Vista" },
              { "@type": "AdministrativeArea", "name": "Andaraí" },
              { "@type": "AdministrativeArea", "name": "Anil" },
              { "@type": "AdministrativeArea", "name": "Bancários" },
              { "@type": "AdministrativeArea", "name": "Barra da Tijuca" },
              { "@type": "AdministrativeArea", "name": "Benfica" },
              { "@type": "AdministrativeArea", "name": "Bento Ribeiro" },
              { "@type": "AdministrativeArea", "name": "Bonsucesso" },
              { "@type": "AdministrativeArea", "name": "Botafogo" },
              { "@type": "AdministrativeArea", "name": "Brás de Pina" },
              { "@type": "AdministrativeArea", "name": "Cachambi" },
              { "@type": "AdministrativeArea", "name": "Cacuia" },
              { "@type": "AdministrativeArea", "name": "Campinho" },
              { "@type": "AdministrativeArea", "name": "Cascadura" },
              { "@type": "AdministrativeArea", "name": "Catete" },
              { "@type": "AdministrativeArea", "name": "Catumbi" },
              { "@type": "AdministrativeArea", "name": "Cavalcanti" },
              { "@type": "AdministrativeArea", "name": "Centro" },
              { "@type": "AdministrativeArea", "name": "Cidade Nova" },
              { "@type": "AdministrativeArea", "name": "Cidade Universitária" },
              { "@type": "AdministrativeArea", "name": "Cocotá" },
              { "@type": "AdministrativeArea", "name": "Coelho Neto" },
              { "@type": "AdministrativeArea", "name": "Colégio" },
              { "@type": "AdministrativeArea", "name": "Copacabana" },
              { "@type": "AdministrativeArea", "name": "Cosme Velho" },
              { "@type": "AdministrativeArea", "name": "Del Castilho" },
              { "@type": "AdministrativeArea", "name": "Deodoro" },
              { "@type": "AdministrativeArea", "name": "Encantado" },
              { "@type": "AdministrativeArea", "name": "Engenho da Rainha" },
              { "@type": "AdministrativeArea", "name": "Engenho de Dentro" },
              { "@type": "AdministrativeArea", "name": "Engenho Novo" },
              { "@type": "AdministrativeArea", "name": "Estácio" },
              { "@type": "AdministrativeArea", "name": "Flamengo" },
              { "@type": "AdministrativeArea", "name": "Freguesia (Ilha do Governador)" },
              { "@type": "AdministrativeArea", "name": "Freguesia (Jacarepaguá)" },
              { "@type": "AdministrativeArea", "name": "Galeão" },
              { "@type": "AdministrativeArea", "name": "Gardênia Azul" },
              { "@type": "AdministrativeArea", "name": "Gávea" },
              { "@type": "AdministrativeArea", "name": "Glória" },
              { "@type": "AdministrativeArea", "name": "Grajaú" },
              { "@type": "AdministrativeArea", "name": "Higienópolis" },
              { "@type": "AdministrativeArea", "name": "Honório Gurgel" },
              { "@type": "AdministrativeArea", "name": "Humaitá" },
              { "@type": "AdministrativeArea", "name": "Ilha do Governador" },
              { "@type": "AdministrativeArea", "name": "Inhaúma" },
              { "@type": "AdministrativeArea", "name": "Ipanema" },
              { "@type": "AdministrativeArea", "name": "Irajá" },
              { "@type": "AdministrativeArea", "name": "Jacarepaguá" },
              { "@type": "AdministrativeArea", "name": "Jardim Guanabara" },
              { "@type": "AdministrativeArea", "name": "Joá" },
              { "@type": "AdministrativeArea", "name": "Lagoa" },
              { "@type": "AdministrativeArea", "name": "Laranjeiras" },
              { "@type": "AdministrativeArea", "name": "Leblon" },
              { "@type": "AdministrativeArea", "name": "Leme" },
              { "@type": "AdministrativeArea", "name": "Lins de Vasconcelos" },
              { "@type": "AdministrativeArea", "name": "Madureira" },
              { "@type": "AdministrativeArea", "name": "Maracanã" },
              { "@type": "AdministrativeArea", "name": "Marechal Hermes" },
              { "@type": "AdministrativeArea", "name": "Maria da Graça" },
              { "@type": "AdministrativeArea", "name": "Méier" },
              { "@type": "AdministrativeArea", "name": "Moneró" },
              { "@type": "AdministrativeArea", "name": "Olaria" },
              { "@type": "AdministrativeArea", "name": "Oswaldo Cruz" },
              { "@type": "AdministrativeArea", "name": "Pechincha" },
              { "@type": "AdministrativeArea", "name": "Penha" },
              { "@type": "AdministrativeArea", "name": "Penha Circular" },
              { "@type": "AdministrativeArea", "name": "Piedade" },
              { "@type": "AdministrativeArea", "name": "Pilares" },
              { "@type": "AdministrativeArea", "name": "Portuguesa" },
              { "@type": "AdministrativeArea", "name": "Praça da Bandeira" },
              { "@type": "AdministrativeArea", "name": "Praça Seca" },
              { "@type": "AdministrativeArea", "name": "Quintino Bocaiúva" },
              { "@type": "AdministrativeArea", "name": "Ramos" },
              { "@type": "AdministrativeArea", "name": "Recreio dos Bandeirantes" },
              { "@type": "AdministrativeArea", "name": "Riachuelo" },
              { "@type": "AdministrativeArea", "name": "Ribeira" },
              { "@type": "AdministrativeArea", "name": "Rio Comprido" },
              { "@type": "AdministrativeArea", "name": "Rocha" },
              { "@type": "AdministrativeArea", "name": "Rocha Miranda" },
              { "@type": "AdministrativeArea", "name": "Sampaio" },
              { "@type": "AdministrativeArea", "name": "São Conrado" },
              { "@type": "AdministrativeArea", "name": "São Cristóvão" },
              { "@type": "AdministrativeArea", "name": "São Francisco Xavier" },
              { "@type": "AdministrativeArea", "name": "Tanque" },
              { "@type": "AdministrativeArea", "name": "Taquara" },
              { "@type": "AdministrativeArea", "name": "Tauá" },
              { "@type": "AdministrativeArea", "name": "Tijuca" },
              { "@type": "AdministrativeArea", "name": "Todos os Santos" },
              { "@type": "AdministrativeArea", "name": "Tomás Coelho" },
              { "@type": "AdministrativeArea", "name": "Turiaçu" },
              { "@type": "AdministrativeArea", "name": "Urca" },
              { "@type": "AdministrativeArea", "name": "Vaz Lobo" },
              { "@type": "AdministrativeArea", "name": "Vicente de Carvalho" },
              { "@type": "AdministrativeArea", "name": "Vila da Penha" },
              { "@type": "AdministrativeArea", "name": "Vila Isabel" },
              { "@type": "AdministrativeArea", "name": "Vila Militar" },
              { "@type": "AdministrativeArea", "name": "Vila Valqueire" },
              { "@type": "AdministrativeArea", "name": "Zumbi" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "584",
              "bestRating": "5",
              "worstRating": "1"
            },
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
          })}
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
