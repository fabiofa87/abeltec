import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Duplicated from src/data/bairros.ts to avoid TS compilation issues in this script
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
    "Vila da Penha", "Vila Isabel", "Vila Militar", "Vila Valqueire", "Zumbi", "Jardim Botanico"
];

const toSlug = (text) => {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");
};

const BASE_URL = 'https://www.abeltecrefrigeracao.com';

const generateSitemap = () => {
    const staticPages = [
        '',
        '/maquina-de-lavar'
    ];

    const neighborhoodPages = allBairros.map(bairro => `/bairros/${toSlug(bairro)}`);

    const allRoutes = [...staticPages, ...neighborhoodPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');

    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`✅ Sitemap generated at ${sitemapPath} with ${allRoutes.length} URLs`);
};

generateSitemap();
