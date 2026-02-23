export const allBairros = [
    "Abolição", "Acari", "Água Santa", "Alto da Boa Vista", "Andaraí", "Anil", "Bancários", "Bangu", "Barra da Tijuca", "Benfica",
    "Bento Ribeiro", "Bonsucesso", "Botafogo", "Brás de Pina", "Cachambi", "Cacuia", "Campinho", "Campo Grande", "Cascadura",
    "Catete", "Catumbi", "Cavalcanti", "Centro", "Charitas", "Cidade Nova", "Cidade Universitária", "Cocotá", "Coelho Neto",
    "Colégio", "Copacabana", "Cosme Velho", "Cruz Vermelha", "Curicica", "Del Castilho", "Deodoro", "Encantado", "Engenho da Rainha",
    "Engenho de Dentro", "Engenho Novo", "Estácio", "Flamengo", "Freguesia (Ilha do Governador)",
    "Freguesia (Jacarepaguá)", "Galeão", "Gardênia Azul", "Gávea", "Glória", "Grajaú", "Higienópolis",
    "Honório Gurgel", "Humaitá", "Icaraí", "Ilha do Governador", "Inhaúma", "Ipanema", "Irajá", "Itanhangá", "Jacaré", "Jacarepaguá",
    "Jardim Guanabara", "Joá", "Jurujuba", "Lagoa", "Lapa", "Laranjeiras", "Leblon", "Leme", "Lins de Vasconcelos", "Madureira",
    "Maracanã", "Marechal Hermes", "Maria da Graça", "Méier", "Moneró", "Olaria", "Oswaldo Cruz", "Pechincha",
    "Penha", "Penha Circular", "Piedade", "Pilares", "Portuguesa", "Praça da Bandeira", "Praça Seca",
    "Praia de São Francisco", "Praia do Dendê", "Quintino Bocaiúva", "Ramos", "Recreio dos Bandeirantes", "Riachuelo", "Ribeira", "Rio Comprido", "Rocha",
    "Rocha Miranda", "Sampaio", "Santa Teresa", "Santo Cristo", "São Conrado", "São Cristóvão", "São Francisco Xavier", "Sulacap", "Tanque", "Taquara",
    "Tauá", "Tijuca", "Todos os Santos", "Tomás Coelho", "Triagem", "Turiaçu", "Urca", "Usina", "Vargem Grande", "Vargem Pequena", "Vaz Lobo", "Vicente de Carvalho",
    "Vila da Penha", "Vila Isabel", "Vila Militar", "Vila Valqueire", "Zumbi", "Jardim Botanico"
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
