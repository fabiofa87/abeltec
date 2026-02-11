import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.abeltecrefrigeracao.com';

const getNeighborhoodSlugs = () => {
    const neighborhoodDataPath = path.resolve(__dirname, '../src/data/neighborhoodsData.ts');
    const fileContent = fs.readFileSync(neighborhoodDataPath, 'utf-8');
    const keyMatches = [...fileContent.matchAll(/^\s*"([^"]+)":\s*\{/gm)];

    return keyMatches.map((match) => match[1]);
};

const generateSitemap = () => {
    const staticPages = [
        '',
        '/maquina-de-lavar'
    ];

    const neighborhoodPages = getNeighborhoodSlugs().map((slug) => `/bairros/${slug}`);

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
