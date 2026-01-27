export const allBairros = [
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

export const toSlug = (text: string) => {
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

export const getBairroBySlug = (slug: string) => {
    return allBairros.find(b => toSlug(b) === slug);
};
