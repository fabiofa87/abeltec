
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const DOMAIN = 'https://www.abeltecrefrigeracao.com';

const generateSitemap = () => {
    const staticUrls = [
        '/',
        '/meier',
        '/maquina-de-lavar'
    ];

    const neighborhoodUrls = allBairros.map(bairro => `/bairros/${toSlug(bairro)}`);
    const allUrls = [...staticUrls, ...neighborhoodUrls];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
    console.log(`Sitemap generated with ${allUrls.length} URLs`);
};

generateSitemap();
