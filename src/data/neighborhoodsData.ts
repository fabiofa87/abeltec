import { toSlug, allBairros } from "./bairros";

export interface NeighborhoodData {
    slug: string;
    name: string;
    description: string;
    mainStreets: string[];
    avgArrival: string; // e.g. "20-30 min"
    landmarks: string[];
    zones: string[]; // e.g. "Zona Norte", "Zona Sul"
    isFallback: boolean;
}

// Fallback generic data
export const defaultNeighborhoodData: Omit<NeighborhoodData, 'slug' | 'name'> = {
    description: "Atendimento técnico especializado com rapidez e garantia. Nossos técnicos estão prontos para atender sua região com eficiência.",
    mainStreets: [],
    avgArrival: "45-60 min",
    landmarks: [],
    zones: []
};

const data: Record<string, Omit<NeighborhoodData, 'isFallback'>> = {
    "abolicao": {
        slug: "abolicao",
        name: "Abolição",
        description: "Atendemos o bairro da Abolição com agilidade, cobrindo toda a região próxima à Linha Amarela e adjacências. Seu conserto realizado com peças originais e garantia.",
        mainStreets: ["Avenida Dom Hélder Câmara", "Rua da Abolição", "Rua Cantilda Maciel"],
        avgArrival: "20-35 min",
        landmarks: ["Engenhão (próximo)", "Norte Shopping (próximo)"],
        zones: ["Zona Norte"]
    },
    "agua-santa": {
        slug: "agua-santa",
        name: "Água Santa",
        description: "Equipe técnica dedicada para a região de Água Santa. Resolvemos problemas em geladeiras de todas as marcas com rapidez, perto do pedágio da Linha Amarela.",
        mainStreets: ["Rua Paraná", "Rua Borja Reis", "Estrada do Bia"],
        avgArrival: "20-35 min",
        landmarks: ["Presídio Ary Franco", "Pedágio da Linha Amarela"],
        zones: ["Zona Norte"]
    },
    "alto-da-boa-vista": {
        slug: "alto-da-boa-vista",
        name: "Alto da Boa Vista",
        description: "Subimos o Alto da Boa Vista para atender sua residência com a mesma agilidade do asfalto. Técnicos experientes para chegar em qualquer ponto da estrada.",
        mainStreets: ["Estrada Nova da Tijuca", "Estrada das Furnas", "Avenida Edson Passos"],
        avgArrival: "30-50 min",
        landmarks: ["Floresta da Tijuca", "Pracinha do Alto"],
        zones: ["Zona Norte"]
    },
    "andarai": {
        slug: "andarai",
        name: "Andaraí",
        description: "Do Morro do Cruz ao Boulevard 28 de Setembro, cobrimos todo o Andaraí. Assistência técnica de confiança pertinho de você.",
        mainStreets: ["Rua Barão de Mesquita", "Rua Maxwell", "Rua Leopoldina Rêgo"],
        avgArrival: "20-30 min",
        landmarks: ["Sesc Tijuca", "Iguatemi Boulevard"],
        zones: ["Zona Norte"]
    },
    "anil": {
        slug: "anil",
        name: "Anil",
        description: "Atuamos no Anil e arredores de Jacarepaguá. Se sua geladeira parou, nossa equipe chega rápido pela Estrada de Jacarepaguá.",
        mainStreets: ["Estrada de Jacarepaguá", "Estrada do Engenho D'Água", "Rua Araticum"],
        avgArrival: "30-45 min",
        landmarks: ["ParkJacarepaguá", "Largo do Anil"],
        zones: ["Zona Oeste"]
    },
    "bancarios": {
        slug: "bancarios",
        name: "Bancários",
        description: "Atendimento especializado na Ilha do Governador, bairro dos Bancários. Técnicos locais prontos para resolver seu problema.",
        mainStreets: ["Estrada do Dendê", "Avenida Ilha das Enxadas"],
        avgArrival: "30-50 min",
        landmarks: ["Praia dos Bancários"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "barra-da-tijuca": {
        slug: "barra-da-tijuca",
        name: "Barra da Tijuca",
        description: "Nossa frota na Barra da Tijuca está posicionada estrategicamente para cobrir desde o Jardim Oceânico até o Recreio. Atendimento rápido em condomínios e residências.",
        mainStreets: ["Avenida das Américas", "Avenida Lúcio Costa", "Avenida Ayrton Senna", "Avenida Abelardo Bueno"],
        avgArrival: "30-45 min",
        landmarks: ["BarraShopping", "Cidade das Artes", "Terminal Alvorada"],
        zones: ["Zona Oeste"]
    },
    "benfica": {
        slug: "benfica",
        name: "Benfica",
        description: "Perto do CADEG e da Avenida Brasil, nossa equipe em Benfica garante atendimento relâmpago para conserto de geladeiras.",
        mainStreets: ["Rua São Luiz Gonzaga", "Avenida Dom Hélder Câmara", "Rua Prefeito Olímpio de Melo"],
        avgArrival: "20-30 min",
        landmarks: ["CADEG", "Fundação Leão XIII"],
        zones: ["Zona Norte"]
    },
    "bento-ribeiro": {
        slug: "bento-ribeiro",
        name: "Bento Ribeiro",
        description: "Técnicos circulando por Bento Ribeiro para atender sua chamada. Serviço de qualidade e preço justo na sua região.",
        mainStreets: ["Estrada Henrique de Melo", "Rua João Vicente", "Rua Carolina Machado"],
        avgArrival: "25-40 min",
        landmarks: ["Parque Madureira (acesso)", "Estação de Bento Ribeiro"],
        zones: ["Zona Norte"]
    },
    "bonsucesso": {
        slug: "bonsucesso",
        name: "Bonsucesso",
        description: "Agilidade no atendimento em Bonsucesso e adjacências. Conhecemos cada rua da região da Leopoladina para chegar rápido.",
        mainStreets: ["Avenida Teixeira de Castro", "Rua Cardoso de Morais", "Avenida Paris"],
        avgArrival: "20-30 min",
        landmarks: ["Praça das Nações", "UNISUAM"],
        zones: ["Zona Norte"]
    },
    "botafogo": {
        slug: "botafogo",
        name: "Botafogo",
        description: "Em Botafogo, a agilidade é nossa marca. Nossos técnicos circulam constantemente pela região, permitindo atendimentos de emergência com rapidez.",
        mainStreets: ["Praia de Botafogo", "Rua Voluntários da Pátria", "Rua São Clemente", "Rua Mena Barreto"],
        avgArrival: "20-30 min",
        landmarks: ["Botafogo Praia Shopping", "Cobal do Humaitá", "Metrô Botafogo"],
        zones: ["Zona Sul"]
    },
    "bras-de-pina": {
        slug: "bras-de-pina",
        name: "Brás de Pina",
        description: "Assistência técnica de confiança em Brás de Pina. Atendemos toda a região da Leopoldina com técnicos qualificados.",
        mainStreets: ["Rua Guaporé", "Avenida Meriti", "Rua Itabira"],
        avgArrival: "25-40 min",
        landmarks: ["Estação de Brás de Pina", "Largo do Bicão"],
        zones: ["Zona Norte"]
    },
    "cachambi": {
        slug: "cachambi",
        name: "Cachambi",
        description: "Vizinho ao Norte Shopping, o Cachambi é uma de nossas principais áreas de atuação. Chegamos em minutos para consertar sua geladeira.",
        mainStreets: ["Rua Cachambi", "Rua Honório", "Avenida Dom Hélder Câmara"],
        avgArrival: "15-30 min",
        landmarks: ["Norte Shopping", "Club Social do Cachambi"],
        zones: ["Zona Norte"]
    },
    "cacuia": {
        slug: "cacuia",
        name: "Cacuia",
        description: "Atendimento rápido na Estrada da Cacuia e arredores. Somos especialistas em refrigeração na Ilha do Governador.",
        mainStreets: ["Estrada da Cacuia", "Estrada do Galeão"],
        avgArrival: "30-45 min",
        landmarks: ["Cemitério da Cacuia", "Relógio da Cacuia"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "campinho": {
        slug: "campinho",
        name: "Campinho",
        description: "No cruzamento da Zona Norte com Jacarepaguá, o Campinho recebe atendimento prioritário. Técnicos prontos na Intendente Magalhães.",
        mainStreets: ["Estrada Intendente Magalhães", "Rua Domingos Lopes", "Rua Cândido Benício"],
        avgArrival: "20-35 min",
        landmarks: ["Mergulhão Clara Nunes", "Supermercados Presunic"],
        zones: ["Zona Norte"]
    },
    "cascadura": {
        slug: "cascadura",
        name: "Cascadura",
        description: "Atendemos o centro comercial de Cascadura e áreas residenciais. Rapidez e eficiência perto da estação e das principais vias.",
        mainStreets: ["Avenida Dom Hélder Câmara", "Rua Sidônio Paes", "Rua Nerval de Gouveia"],
        avgArrival: "20-35 min",
        landmarks: ["Estação de Cascadura", "Hospital Nossa Senhora da Penha"],
        zones: ["Zona Norte"]
    },
    "catete": {
        slug: "catete",
        name: "Catete",
        description: "Serviço tradicional e eficiente no Catete. Se sua geladeira deu defeito, conte com nossa equipe próxima ao Palácio.",
        mainStreets: ["Rua do Catete", "Rua Bento Lisboa", "Rua Pedro Américo"],
        avgArrival: "20-35 min",
        landmarks: ["Palácio do Catete", "Largo do Machado"],
        zones: ["Zona Sul"]
    },
    "catumbi": {
        slug: "catumbi",
        name: "Catumbi",
        description: "Próximo ao Túnel Santa Bárbara, atendemos o Catumbi com rapidez. Técnicos especializados para resolver seu problema hoje.",
        mainStreets: ["Rua do Catumbi", "Rua Itapiru"],
        avgArrival: "20-30 min",
        landmarks: ["Sambódromo", "Cemitério do Catumbi"],
        zones: ["Centro"]
    },
    "cavalcanti": {
        slug: "cavalcanti",
        name: "Cavalcanti",
        description: "Atendimento domiciliar em Cavalcanti. Nossa equipe cobre toda a região próxima à linha do trem com eficiência.",
        mainStreets: ["Rua Silva Vale", "Rua Padre Manuel da Nóbrega"],
        avgArrival: "25-40 min",
        landmarks: ["Estação de Cavalcanti"],
        zones: ["Zona Norte"]
    },
    "centro": {
        slug: "centro",
        name: "Centro",
        description: "Atendimento comercial e residencial no Centro do Rio. Rapidez para empresas e moradores da região central.",
        mainStreets: ["Avenida Rio Branco", "Avenida Presidente Vargas", "Rua do Riachuelo", "Rua da Lapa"],
        avgArrival: "20-40 min",
        landmarks: ["Arcos da Lapa", "Candelária", "Central do Brasil"],
        zones: ["Centro"]
    },
    "cidade-nova": {
        slug: "cidade-nova",
        name: "Cidade Nova",
        description: "Ao lado da Prefeitura, a Cidade Nova conta com nossa assistência técnica expressa. Conserto de geladeiras com garantia.",
        mainStreets: ["Avenida Presidente Vargas", "Rua Ulysses Guimarães"],
        avgArrival: "20-35 min",
        landmarks: ["Prefeitura do Rio", "Sambódromo"],
        zones: ["Centro"]
    },
    "cidade-universitaria": {
        slug: "cidade-universitaria",
        name: "Cidade Universitária",
        description: "Atendemos o Fundão e Cidade Universitária. Serviço técnico para residências e laboratórios na Ilha.",
        mainStreets: ["Avenida Brigadeiro Trompowsky", "Avenida Horácio Macedo"],
        avgArrival: "30-50 min",
        landmarks: ["UFRJ", "Hospital do Fundão"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "cocota": {
        slug: "cocota",
        name: "Cocotá",
        description: "Seus eletrodomésticos com defeito no Cocotá têm solução. Nossa equipe na Ilha do Governador chega rápido.",
        mainStreets: ["Estrada do Cacuia", "Rua Tenente Cleto Campelo"],
        avgArrival: "30-45 min",
        landmarks: ["Hospital Paulino Werneck", "Barcas de Cocotá"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "coelho-neto": {
        slug: "coelho-neto",
        name: "Coelho Neto",
        description: "Atendemos Coelho Neto em toda a extensão da Avenida Brasil e ruas internas. Qualidade e preço justo na Zona Norte.",
        mainStreets: ["Avenida dos Italianos", "Rua Ouseley", "Avenida Brasil"],
        avgArrival: "25-40 min",
        landmarks: ["Metrô Coelho Neto", "Fazenda Botafogo"],
        zones: ["Zona Norte"]
    },
    "colegio": {
        slug: "colegio",
        name: "Colégio",
        description: "Perto do Ceasa e do Metrô, o bairro do Colégio é área de atuação prioritária. Consertamos sua geladeira no mesmo dia.",
        mainStreets: ["Estrada do Barro Vermelho", "Avenida Pastor Martin Luther King Jr."],
        avgArrival: "20-35 min",
        landmarks: ["Metrô Colégio", "CEASA"],
        zones: ["Zona Norte"]
    },
    "copacabana": {
        slug: "copacabana",
        name: "Copacabana",
        description: "Atendemos toda a orla e ruas internas de Copacabana com prioridade. Sabemos que a maresia pode afetar eletrodomésticos, e nossos técnicos são especialistas em manutenção na região.",
        mainStreets: ["Avenida Atlântica", "Rua Barata Ribeiro", "Avenida Nossa Senhora de Copacabana", "Rua Tonelero", "Rua Pompeu Loureiro"],
        avgArrival: "30-40 min",
        landmarks: ["Copacabana Palace", "Forte de Copacabana", "Posto 6"],
        zones: ["Zona Sul"]
    },
    "cosme-velho": {
        slug: "cosme-velho",
        name: "Cosme Velho",
        description: "No sopé do Corcovado, atendemos o Cosme Velho com exclusividade. Técnicos prontos para subir a rua Cosme Velho e transversais.",
        mainStreets: ["Rua Cosme Velho", "Rua das Laranjeiras", "Ladeira dos Guararapes"],
        avgArrival: "25-40 min",
        landmarks: ["Estação do Trem do Corcovado", "Largo do Boticário"],
        zones: ["Zona Sul"]
    },
    "del-castilho": {
        slug: "del-castilho",
        name: "Del Castilho",
        description: "Ao redor do Nova América, Del Castilho conta com nossa cobertura total. Rapidez para resolver problemas na sua geladeira.",
        mainStreets: ["Avenida Dom Hélder Câmara", "Estrada Adhemar Bebiano"],
        avgArrival: "20-30 min",
        landmarks: ["Shopping Nova América", "Metrô Del Castilho"],
        zones: ["Zona Norte"]
    },
    "deodoro": {
        slug: "deodoro",
        name: "Deodoro",
        description: "Atendimento na região militar e residencial de Deodoro. Técnicos especializados com fácil acesso pela Avenida Brasil.",
        mainStreets: ["Avenida Duque de Caxias", "Estrada do Camboatá"],
        avgArrival: "30-45 min",
        landmarks: ["Vila Militar", "Estação de Deodoro"],
        zones: ["Zona Oeste"]
    },
    "encantado": {
        slug: "encantado",
        name: "Encantado",
        description: "Pequeno e acolhedor, o Encantado recebe nossa atenção especial na Zona Norte. Conserto rápido perto da Linha Amarela.",
        mainStreets: ["Rua Guilhermina", "Avenida Amaro Cavalcanti"],
        avgArrival: "20-35 min",
        landmarks: ["Saída 2 da Linha Amarela", "Largo do Encantado"],
        zones: ["Zona Norte"]
    },
    "engenho-da-rainha": {
        slug: "engenho-da-rainha",
        name: "Engenho da Rainha",
        description: "Atuamos fortemente no Engenho da Rainha. Se sua geladeira parou, chame quem entende e está perto de você.",
        mainStreets: ["Estrada Adhemar Bebiano", "Avenida Pastor Martin Luther King Jr."],
        avgArrival: "25-40 min",
        landmarks: ["Estação do Metrô Engenho da Rainha", "Supermercado Guanabara"],
        zones: ["Zona Norte"]
    },
    "engenho-de-dentro": {
        slug: "engenho-de-dentro",
        name: "Engenho de Dentro",
        description: "Ao redor do Engenhão, nossa equipe está pronta. Atendimento expresso para moradores do Engenho de Dentro.",
        mainStreets: ["Rua Adolfo Bergamini", "Rua Daniel Carneiro", "Rua Dr. Padilha"],
        avgArrival: "20-30 min",
        landmarks: ["Estádio Nilton Santos (Engenhão)", "Museu do Trem"],
        zones: ["Zona Norte"]
    },
    "engenho-novo": {
        slug: "engenho-novo",
        name: "Engenho Novo",
        description: "Conserto de geladeira no Engenho Novo é conosco. Cobrimos as ruas Barão do Bom Retiro e adjacências com agilidade.",
        mainStreets: ["Rua Barão do Bom Retiro", "Rua 24 de Maio"],
        avgArrival: "20-30 min",
        landmarks: ["Estação de Engenho Novo", "UPA do Engenho Novo"],
        zones: ["Zona Norte"]
    },
    "estacio": {
        slug: "estacio",
        name: "Estácio",
        description: "No berço do samba, o atendimento não atravessa. Chegamos rápido ao Estácio para consertar sua geladeira.",
        mainStreets: ["Rua Haddock Lobo", "Rua Estácio de Sá", "Avenida Paulo de Frontin"],
        avgArrival: "20-30 min",
        landmarks: ["Metrô Estácio", "Igreja do Estácio"],
        zones: ["Centro"]
    },
    "flamengo": {
        slug: "flamengo",
        name: "Flamengo",
        description: "Atendemos o Aterro e todas as ruas do Flamengo. Serviço de excelência para um dos bairros mais nobres da cidade.",
        mainStreets: ["Praia do Flamengo", "Rua Marquês de Abrantes", "Rua Senador Vergueiro", "Rua Paissandu"],
        avgArrival: "20-30 min",
        landmarks: ["Aterro do Flamengo", "Metrô Flamengo", "Largo do Machado"],
        zones: ["Zona Sul"]
    },
    "freguesia-ilha-do-governador": {
        slug: "freguesia-ilha-do-governador",
        name: "Freguesia (Ilha do Governador)",
        description: "Na ponta da Ilha, a Freguesia conta com nossos serviços especializados. Atendimento domiciliar com hora marcada.",
        mainStreets: ["Avenida Paranapuã", "Praia da Guanabara"],
        avgArrival: "35-50 min",
        landmarks: ["Praia da Freguesia"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "freguesia-jacarepagua": {
        slug: "freguesia-jacarepagua",
        name: "Freguesia (Jacarepaguá)",
        description: "Temos uma base forte na Freguesia de Jacarepaguá. Atendemos condomínios e residências com rapidez pela Linha Amarela ou Serra.",
        mainStreets: ["Estrada dos Três Rios", "Estrada do Bananal", "Estrada de Jacarepaguá", "Rua Araguaia"],
        avgArrival: "25-40 min",
        landmarks: ["Rios D'Or", "Quality Shopping"],
        zones: ["Zona Oeste"]
    },
    "galeao": {
        slug: "galeao",
        name: "Galeão",
        description: "Área de acesso à Ilha, o Galeão também é nossa área. Atendemos residências e empresas próximas ao aeroporto.",
        mainStreets: ["Estrada do Galeão"],
        avgArrival: "30-45 min",
        landmarks: ["Aeroporto Internacional", "Base Aérea"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "gardenia-azul": {
        slug: "gardenia-azul",
        name: "Gardênia Azul",
        description: "Técnicos na região da Gardênia Azul prontos para o serviço. Preço acessível e qualidade garantida.",
        mainStreets: ["Avenida Ayrton Senna", "Avenida das Lagoas"],
        avgArrival: "30-45 min",
        landmarks: ["Passarela da Gardênia"],
        zones: ["Zona Oeste"]
    },
    "gavea": {
        slug: "gavea",
        name: "Gávea",
        description: "Atendimento premium na Gávea. Nossos técnicos são discretos e eficientes, atendendo perto da PUC e do Shopping.",
        mainStreets: ["Rua Marquês de São Vicente", "Rua dos Oitis", "Avenida Padre Leonel Franca"],
        avgArrival: "25-40 min",
        landmarks: ["PUC-Rio", "Shopping da Gávea", "Jockey Club"],
        zones: ["Zona Sul"]
    },
    "gloria": {
        slug: "gloria",
        name: "Glória",
        description: "Da Marina à Rua do Russel, atendemos toda a Glória. Conserto de geladeira rápido e eficaz.",
        mainStreets: ["Rua do Russel", "Rua da Glória", "Rua Benjamin Constant"],
        avgArrival: "20-35 min",
        landmarks: ["Marina da Glória", "Hotel Glória", "Outeiro da Glória"],
        zones: ["Zona Sul"]
    },
    "grajau": {
        slug: "grajau",
        name: "Grajaú",
        description: "Bairro arborizado e tranquilo, o Grajaú tem nossa total atenção. Atendemos todas as ruas, do Largo do Verdun à Reserva.",
        mainStreets: ["Rua Barão de Mesquita", "Rua Borda do Mato", "Avenida Engenheiro Richard"],
        avgArrival: "20-35 min",
        landmarks: ["Largo do Verdun", "Reserva Florestal do Grajaú"],
        zones: ["Zona Norte"]
    },
    "higienopolis": {
        slug: "higienopolis",
        name: "Higienópolis",
        description: "Pequeno e bem localizado, Higienópolis recebe atendimento expresso. Conte com a ABELTEC na sua região.",
        mainStreets: ["Avenida dos Democráticos", "Rua Darke de Mattos"],
        avgArrival: "20-30 min",
        landmarks: ["Shopping Nova América (próximo)"],
        zones: ["Zona Norte"]
    },
    "honorio-gurgel": {
        slug: "honorio-gurgel",
        name: "Honório Gurgel",
        description: "Atuamos em Honório Gurgel com técnicos locais. Rapidez no conserto da sua geladeira perto da Avenida Brasil.",
        mainStreets: ["Estrada João Paulo", "Rua Ururaí"],
        avgArrival: "25-40 min",
        landmarks: ["Parque Madureira (extensão)"],
        zones: ["Zona Norte"]
    },
    "humaita": {
        slug: "humaita",
        name: "Humaitá",
        description: "Entre Botafogo e a Lagoa, o Humaitá é rota constante dos nossos técnicos. Chegamos rápido à Rua Humaitá e transversais.",
        mainStreets: ["Rua Humaitá", "Rua Macedo Sobrinho", "Largo dos Leões"],
        avgArrival: "20-30 min",
        landmarks: ["Cobal do Humaitá", "Largo dos Leões"],
        zones: ["Zona Sul"]
    },
    "ilha-do-governador": {
        slug: "ilha-do-governador",
        name: "Ilha do Governador",
        description: "Cobertura completa em toda a Ilha do Governador. Do Galeão à Ribeira, temos equipe pronta para lhe atender.",
        mainStreets: ["Estrada do Galeão", "Estrada da Cacuia", "Estrada do Dendê"],
        avgArrival: "30-50 min",
        landmarks: ["Ilha Plaza Shopping", "Aeroporto do Galeão"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "inhauma": {
        slug: "inhauma",
        name: "Inhaúma",
        description: "Tradicional bairro da Zona Norte, Inhaúma conta com nossa assistência rápida e garantida.",
        mainStreets: ["Estrada Adhemar Bebiano", "Avenida Itaóca", "Rua Padre Januário"],
        avgArrival: "20-35 min",
        landmarks: ["Metrô Inhaúma", "Cemitério de Inhaúma"],
        zones: ["Zona Norte"]
    },
    "jacarepagua": {
        slug: "jacarepagua",
        name: "Jacarepaguá",
        description: "Cobertura total em Jacarepaguá. Atendemos todas as sub-regiões com técnicos especializados em geladeiras domésticas e comerciais.",
        mainStreets: ["Estrada de Jacarepaguá", "Avenida Geremário Dantas", "Estrada do Gabinal"],
        avgArrival: "30-50 min",
        landmarks: ["Largo do Tanque", "Qualistage"],
        zones: ["Zona Oeste"]
    },
    "ipanema": {
        slug: "ipanema",
        name: "Ipanema",
        description: "Serviço de alta qualidade para o bairro de Ipanema. Nossos técnicos prezam pela pontualidade e discrição, garantindo o perfeito funcionamento da sua geladeira.",
        mainStreets: [
            "Rua Visconde de Pirajá",
            "Rua Prudente de Morais",
            "Avenida Vieira Souto",
            "Rua Teixeira de Melo"
        ],
        avgArrival: "25-40 min",
        landmarks: ["Lagoa Rodrigo de Freitas", "Parque da Catacumba"],
        zones: ["Zona Sul"]
    },
    "iraja": {
        slug: "iraja",
        name: "Irajá",
        description: "Atendemos o bairro de Irajá com prontidão. Se sua geladeira parou, nossa equipe no subúrbio chega rápido para realizar o conserto com garantia por escrito.",
        mainStreets: ["Avenida Monsenhor Félix", "Estrada da Água Grande", "Avenida Brasil"],
        avgArrival: "25-40 min",
        landmarks: ["Via Brasil Shopping", "Cemitério de Irajá"],
        zones: ["Zona Norte"]
    },
    "laranjeiras": {
        slug: "laranjeiras",
        name: "Laranjeiras",
        description: "Das Laranjeiras ao Parque Guinle, atendemos todo o bairro. Técnicos habituados às ruas da região para chegar rápido.",
        mainStreets: ["Rua das Laranjeiras", "Rua Pinheiro Machado", "Rua Alice"],
        avgArrival: "20-35 min",
        landmarks: ["Parque Guinle", "Palácio Guanabara", "Fluminense FC"],
        zones: ["Zona Sul"]
    },
    "lagoa": {
        slug: "lagoa",
        name: "Lagoa",
        description: "Atendimento rápido e especializado no bairro da Lagoa Rodrigo de Freitas. Nossos técnicos estão sempre circulando pela região para garantir o conserto da sua geladeira com agilidade e peças originais.",
        mainStreets: ["Avenida Epitácio Pessoa", "Avenida Borges de Medeiros", "Rua Fonte da Saudade"],
        avgArrival: "20-30 min",
        landmarks: ["Lagoa Rodrigo de Freitas", "Parque da Catacumba", "Clube de Regatas do Flamengo"],
        zones: ["Zona Sul"]
    },
    "leblon": {
        slug: "leblon",
        name: "Leblon",
        description: "Atendimento exclusivo no Leblon com técnicos experientes em equipamentos de linha premium. Agilidade e precisão para resolver seu problema.",
        mainStreets: ["Avenida Delfim Moreira", "Avenida Ataulfo de Paiva", "Rua Dias Ferreira", "Rua Humberto de Campos"],
        avgArrival: "25-40 min",
        landmarks: ["Shopping Leblon", "Praça Antero de Quental", "Mirante do Leblon"],
        zones: ["Zona Sul"]
    },
    "leme": {
        slug: "leme",
        name: "Leme",
        description: "No final da orla, o Leme tem atendimento garantido. Consertamos sua geladeira com a brisa do mar.",
        mainStreets: ["Avenida Atlântica", "Rua Gustavo Sampaio"],
        avgArrival: "30-45 min",
        landmarks: ["Pedra do Leme", "Forte Duque de Caxias"],
        zones: ["Zona Sul"]
    },
    "lins-de-vasconcelos": {
        slug: "lins-de-vasconcelos",
        name: "Lins de Vasconcelos",
        description: "Atendemos o Lins e toda a região do Grande Méier. Qualidade e confiança na porta da sua casa.",
        mainStreets: ["Rua Lins de Vasconcelos", "Rua Cabuçu", "Autoestrada Grajaú-Jacarepaguá"],
        avgArrival: "25-40 min",
        landmarks: ["Hospital Naval Marcílio Dias"],
        zones: ["Zona Norte"]
    },
    "madureira": {
        slug: "madureira",
        name: "Madureira",
        description: "O coração comercial da Zona Norte tem nossa total prioridade. Atendimento rápido em Madureira e arredores.",
        mainStreets: ["Estrada do Portela", "Rua Carolina Machado", "Rua Conselheiro Galvão"],
        avgArrival: "25-40 min",
        landmarks: ["Mercadão de Madureira", "Madureira Shopping", "Parque Madureira"],
        zones: ["Zona Norte"]
    },
    "maracana": {
        slug: "maracana",
        name: "Maracanã",
        description: "Ao redor do estádio, o bairro do Maracanã é vizinho de nossa base. Chegamos num pulo para o conserto.",
        mainStreets: ["Avenida Maracanã", "Rua São Francisco Xavier", "Radial Oeste"],
        avgArrival: "15-30 min",
        landmarks: ["Estádio do Maracanã", "UERJ"],
        zones: ["Zona Norte"]
    },
    "marechal-hermes": {
        slug: "marechal-hermes",
        name: "Marechal Hermes",
        description: "Bairro planejado e tranquilo, Marechal Hermes recebe nossos técnicos com frequência. Serviço de qualidade.",
        mainStreets: ["Rua General Savaget", "Estrada Intendente Magalhães"],
        avgArrival: "30-45 min",
        landmarks: ["Estação de Marechal Hermes", "Teatro Armando Gonzaga"],
        zones: ["Zona Norte"]
    },
    "maria-da-graca": {
        slug: "maria-da-graca",
        name: "Maria da Graça",
        description: "Próximo à Linha 2 do Metrô, Maria da Graça tem atendimento ágil. Conte conosco.",
        mainStreets: ["Rua Conde de Azambuja", "Avenida Dom Hélder Câmara"],
        avgArrival: "20-30 min",
        landmarks: ["Metrô Maria da Graça"],
        zones: ["Zona Norte"]
    },
    "meier": {
        slug: "meier",
        name: "Méier",
        description: "No coração da Zona Norte, nossa equipe no Méier oferece atendimento rápido e preços justos. Conhecemos bem a região para evitar trânsito e chegar logo.",
        mainStreets: ["Rua Dias da Cruz", "Rua Ana Barbosa", "Rua Hermengarda", "Rua Silva Rabelo"],
        avgArrival: "20-30 min",
        landmarks: ["Imperator", "Jardim do Méier", "Shopping do Méier"],
        zones: ["Zona Norte"]
    },
    "monero": {
        slug: "monero",
        name: "Moneró",
        description: "Residências no Moneró, na Ilha, contam com nosso suporte técnico especializado em refrigeração.",
        mainStreets: ["Estrada do Dendê", "Avenida do Magistério"],
        avgArrival: "35-50 min",
        landmarks: ["Corredor Esportivo"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "olaria": {
        slug: "olaria",
        name: "Olaria",
        description: "Perto do Olaria Atlético Clube, nossa equipe atende com rapidez. Conserto de geladeira na Leopoldina é aqui.",
        mainStreets: ["Rua Uranos", "Rua Leopoldina Rêgo", "Rua Ibiapina"],
        avgArrival: "20-35 min",
        landmarks: ["Olaria Atlético Clube", "Estação de Olaria"],
        zones: ["Zona Norte"]
    },
    "oswaldo-cruz": {
        slug: "oswaldo-cruz",
        name: "Oswaldo Cruz",
        description: "Berço do samba, Oswaldo Cruz tem atendimento de primeira. Técnicos prontos para resolver defeitos na sua geladeira.",
        mainStreets: ["Estrada do Portela", "Rua João Vicente"],
        avgArrival: "25-40 min",
        landmarks: ["Estação de Oswaldo Cruz", "Portela"],
        zones: ["Zona Norte"]
    },
    "pechincha": {
        slug: "pechincha",
        name: "Pechincha",
        description: "No Pechincha, chegamos rápido via Geremário Dantas ou Pau Ferro. Serviço de confiança em Jacarepaguá.",
        mainStreets: ["Estrada do Pau-Ferro", "Avenida Geremário Dantas", "Estrada do Capenha"],
        avgArrival: "25-40 min",
        landmarks: ["Center Shopping", "Castelo do Vinho"],
        zones: ["Zona Oeste"]
    },
    "penha": {
        slug: "penha",
        name: "Penha",
        description: "Aos pés da Igreja da Penha, nossa equipe atende com dedicação. Conserto garantido e rápido.",
        mainStreets: ["Avenida Brás de Pina", "Rua dos Romeiros", "Avenida Lobo Júnior"],
        avgArrival: "20-35 min",
        landmarks: ["Igreja da Penha", "Penha Shopping"],
        zones: ["Zona Norte"]
    },
    "penha-circular": {
        slug: "penha-circular",
        name: "Penha Circular",
        description: "Atuamos em toda a Penha Circular. Próximo ao Mello ou à Praça do Carmo, chegamos em minutos.",
        mainStreets: ["Avenida Brás de Pina", "Rua Guaporé", "Avenida Vicente de Carvalho"],
        avgArrival: "25-40 min",
        landmarks: ["Parque Ary Barroso", "Hospital Getúlio Vargas"],
        zones: ["Zona Norte"]
    },
    "piedade": {
        slug: "piedade",
        name: "Piedade",
        description: "Bairro tradicional, Piedade tem nossa total atenção. Atendemos perto da Gama Filho (antiga) e da Igreja.",
        mainStreets: ["Rua Clarimundo de Melo", "Avenida Dom Hélder Câmara", "Rua Goiás"],
        avgArrival: "20-35 min",
        landmarks: ["Estação de Piedade", "Igreja de Piedade"],
        zones: ["Zona Norte"]
    },
    "pilares": {
        slug: "pilares",
        name: "Pilares",
        description: "Em Pilares, somos referência em assistência técnica. Perto do Caprichosos ou da João Ribeiro, conte conosco.",
        mainStreets: ["Avenida João Ribeiro", "Avenida Dom Hélder Câmara"],
        avgArrival: "20-30 min",
        landmarks: ["Viaduto de Pilares", "Supermercados Guanabara"],
        zones: ["Zona Norte"]
    },
    "portuguesa": {
        slug: "portuguesa",
        name: "Portuguesa",
        description: "Na Ilha do Governador, a Portuguesa é um dos nossos focos. Atendimento rápido perto do Ilha Plaza.",
        mainStreets: ["Estrada do Galeão", "Rua República Árabe da Síria"],
        avgArrival: "30-45 min",
        landmarks: ["Ilha Plaza Shopping", "Associação Atlética Portuguesa"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "praca-da-bandeira": {
        slug: "praca-da-bandeira",
        name: "Praça da Bandeira",
        description: "Ponto estratégico da cidade, a Praça da Bandeira permite deslocamento rápido dos nossos técnicos até você.",
        mainStreets: ["Rua do Matoso", "Avenida Praça da Bandeira", "Rua Mariz e Barros"],
        avgArrival: "15-25 min",
        landmarks: ["Praça da Bandeira", "Leopoldina"],
        zones: ["Zona Norte", "Centro"]
    },
    "praca-seca": {
        slug: "praca-seca",
        name: "Praça Seca",
        description: "Na Praça Seca, atendemos com a agilidade do BRT. Técnicos experientes na região de Jacarepaguá.",
        mainStreets: ["Rua Cândido Benício", "Rua Barão", "Rua Capitão Menezes"],
        avgArrival: "25-40 min",
        landmarks: ["Praça Seca", "Estação BRT Praça Seca"],
        zones: ["Zona Oeste"]
    },
    "quintino-bocaiuva": {
        slug: "quintino-bocaiuva",
        name: "Quintino Bocaiúva",
        description: "Terra de Zico, Quintino tem nosso respeito e atendimento prioritário. Conserto de geladeira com quem entende.",
        mainStreets: ["Rua Clarimundo de Melo", "Rua da República", "Rua Elias da Silva"],
        avgArrival: "25-40 min",
        landmarks: ["Estação de Quintino", "Igreja de São Jorge"],
        zones: ["Zona Norte"]
    },
    "ramos": {
        slug: "ramos",
        name: "Ramos",
        description: "Famoso pelo Piscinão, Ramos é área de atuação diária. Atendemos a região da Leopoldina com excelência.",
        mainStreets: ["Rua Uranos", "Avenida Teixeira de Castro", "Rua Cardoso de Morais"],
        avgArrival: "20-35 min",
        landmarks: ["Piscinão de Ramos", "Estação de Ramos"],
        zones: ["Zona Norte"]
    },
    "recreio-dos-bandeirantes": {
        slug: "recreio-dos-bandeirantes",
        name: "Recreio dos Bandeirantes",
        description: "Atendimento especializado no Recreio, cobrindo toda a extensão da orla e áreas residenciais. Técnicos prontos para resolver qualquer defeito na sua geladeira.",
        mainStreets: ["Avenida das Américas", "Avenida Lúcio Costa", "Avenida Gláucio Gil", "Estrada do Pontal"],
        avgArrival: "35-50 min",
        landmarks: ["Recreio Shopping", "Parque Chico Mendes", "Praia do Recreio"],
        zones: ["Zona Oeste"]
    },
    "riachuelo": {
        slug: "riachuelo",
        name: "Riachuelo",
        description: "Pequeno, mas importante. O bairro do Riachuelo recebe nossa equipe técnica com rapidez pela Rua 24 de Maio.",
        mainStreets: ["Rua 24 de Maio", "Rua Ana Neri"],
        avgArrival: "20-30 min",
        landmarks: ["Estação de Riachuelo", "Senai"],
        zones: ["Zona Norte"]
    },
    "ribeira": {
        slug: "ribeira",
        name: "Ribeira",
        description: "Na ponta da Ilha, a Ribeira tem seu charme e nosso atendimento. Consertamos sua geladeira com vista para o mar.",
        mainStreets: ["Praia da Ribeira", "Rua Paramopama"],
        avgArrival: "35-50 min",
        landmarks: ["Praça da Ribeira"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "rio-comprido": {
        slug: "rio-comprido",
        name: "Rio Comprido",
        description: "Sob o viaduto ou nas ruas internas, atendemos o Rio Comprido com máxima urgência. Perto da Tijuca e Centro.",
        mainStreets: ["Avenida Paulo de Frontin", "Rua do Bispo", "Rua Estrela"],
        avgArrival: "20-30 min",
        landmarks: ["Hospital da Ordem Terceira", "Fundação Paulo de Frontin"],
        zones: ["Zona Norte", "Centro"]
    },
    "rocha": {
        slug: "rocha",
        name: "Rocha",
        description: "Entre Riachuelo e São Francisco Xavier, o Rocha é atendido rapidamente. Conte com nossa experiência.",
        mainStreets: ["Rua 24 de Maio", "Rua Ana Neri"],
        avgArrival: "20-30 min",
        landmarks: ["Estação do Rocha (antiga)"],
        zones: ["Zona Norte"]
    },
    "rocha-miranda": {
        slug: "rocha-miranda",
        name: "Rocha Miranda",
        description: "Atuamos em Rocha Miranda com foco na agilidade. Perto da Praça 8 ou do Parque, estamos prontos.",
        mainStreets: ["Estrada do Barro Vermelho", "Avenida dos Italianos", "Rua dos Topázios"],
        avgArrival: "25-40 min",
        landmarks: ["Praça 8 de Maio", "Parque Madureira (acesso)"],
        zones: ["Zona Norte"]
    },
    "sampaio": {
        slug: "sampaio",
        name: "Sampaio",
        description: "Atendimento expresso no Sampaio. Se sua geladeira pifou, ligue para quem chega rápido na sua casa.",
        mainStreets: ["Rua 24 de Maio", "Rua Sousa Barros"],
        avgArrival: "20-30 min",
        landmarks: ["Estação do Sampaio"],
        zones: ["Zona Norte"]
    },
    "sao-conrado": {
        slug: "sao-conrado",
        name: "São Conrado",
        description: "Atendimento VIP em São Conrado. Técnicos preparados para equipamentos de alta tecnologia em condomínios e residências.",
        mainStreets: ["Avenida Niemeyer", "Estrada da Gávea", "Avenida Prefeito Mendes de Morais"],
        avgArrival: "30-45 min",
        landmarks: ["Fashion Mall", "Praia de São Conrado", "Pedra da Gávea"],
        zones: ["Zona Sul"]
    },
    "sao-cristovao": {
        slug: "sao-cristovao",
        name: "São Cristóvão",
        description: "Bairro Imperial, São Cristóvão tem atendimento real. Rapidez perto da Quinta ou do Campo de São Cristóvão.",
        mainStreets: ["Campo de São Cristóvão", "Rua São Luiz Gonzaga", "Avenida do Exército"],
        avgArrival: "20-35 min",
        landmarks: ["Quinta da Boa Vista", "Feira de São Cristóvão", "BioParque"],
        zones: ["Zona Norte", "Centro"]
    },
    "sao-francisco-xavier": {
        slug: "sao-francisco-xavier",
        name: "São Francisco Xavier",
        description: "Perto do Maracanã e Tijuca, São Francisco Xavier é rota fácil para nossos técnicos. Atendimento imediato.",
        mainStreets: ["Rua São Francisco Xavier", "Viaduto Ana Neri"],
        avgArrival: "20-30 min",
        landmarks: ["Estação São Francisco Xavier", "Igreja São Francisco Xavier"],
        zones: ["Zona Norte"]
    },
    "tanque": {
        slug: "tanque",
        name: "Tanque",
        description: "No centro geográfico de Jacarepaguá, o Tanque recebe nossa equipe com agilidade. Conserto garantido.",
        mainStreets: ["Avenida Geremário Dantas", "Rua Cândido Benício", "Estrada do Cafundá"],
        avgArrival: "25-40 min",
        landmarks: ["Center Shopping Rio", "Largo do Tanque"],
        zones: ["Zona Oeste"]
    },
    "taquara": {
        slug: "taquara",
        name: "Taquara",
        description: "Grande centro de Jacarepaguá, a Taquara é atendida por completo. Do Rio Grande à Nelson Cardoso, cobrimos tudo.",
        mainStreets: ["Estrada dos Bandeirantes", "Avenida Nelson Cardoso", "Rua Apiacás"],
        avgArrival: "30-45 min",
        landmarks: ["Terminal Taquara", "UPA Taquara"],
        zones: ["Zona Oeste"]
    },
    "taua": {
        slug: "taua",
        name: "Tauá",
        description: "Mais um bairro da Ilha onde somos especialistas. O Tauá conta com a ABELTEC para conserto de geladeiras.",
        mainStreets: ["Estrada do Dendê", "Avenida Paranapuã"],
        avgArrival: "30-45 min",
        landmarks: ["Igreja Santo Antônio", "Corredor Esportivo"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "tijuca": {
        slug: "tijuca",
        name: "Tijuca",
        description: "A Tijuca é um dos bairros mais tradicionais do Rio, e nossa equipe técnica conhece cada atalho para chegar rápido à sua residência. Seja perto da Praça Saens Peña ou no Alto da Boa Vista, garantimos atendimento ágil para sua geladeira.",
        mainStreets: ["Rua Conde de Bonfim", "Rua Haddock Lobo", "Rua Uruguai", "Rua Mariz e Barros", "Rua São Francisco Xavier"],
        avgArrival: "25-35 min",
        landmarks: ["Shopping Tijuca", "Praça Saens Peña", "Maracanã"],
        zones: ["Zona Norte"]
    },
    "todos-os-santos": {
        slug: "todos-os-santos",
        name: "Todos os Santos",
        description: "Vizinho ao Méier, Todos os Santos é área nobre da Zona Norte e de nossa atuação. Serviço de qualidade garantida.",
        mainStreets: ["Rua José Bonifácio", "Rua Getúlio"],
        avgArrival: "20-35 min",
        landmarks: ["Norte Shopping (próximo)", "Estação do Méier (próxima)"],
        zones: ["Zona Norte"]
    },
    "tomas-coelho": {
        slug: "tomas-coelho",
        name: "Tomás Coelho",
        description: "Atendemos Tomás Coelho com eficiência. Técnicos prontos para chegar pela Avenida João Ribeiro ou suburbana.",
        mainStreets: ["Avenida João Ribeiro", "Estrada Adhemar Bebiano"],
        avgArrival: "25-40 min",
        landmarks: ["Estação de Tomás Coelho"],
        zones: ["Zona Norte"]
    },
    "turiacu": {
        slug: "turiacu",
        name: "Turiaçu",
        description: "Em Madureira e Turiaçu, a ABELTEC está presente. Conserto de geladeiras com quem conhece a região.",
        mainStreets: ["Rua Conselheiro Galvão", "Estrada do Portela"],
        avgArrival: "25-40 min",
        landmarks: ["Parque Madureira"],
        zones: ["Zona Norte"]
    },
    "urca": {
        slug: "urca",
        name: "Urca",
        description: "Aos pés do Pão de Açúcar, a Urca exige atendimento de qualidade. Chegamos rápido para consertar sua geladeira.",
        mainStreets: ["Avenida Pasteur", "Rua Cândido Gaffrée"],
        avgArrival: "25-40 min",
        landmarks: ["Pão de Açúcar", "Praia Vermelha", "Mureta da Urca"],
        zones: ["Zona Sul"]
    },
    "vaz-lobo": {
        slug: "vaz-lobo",
        name: "Vaz Lobo",
        description: "No cruzamento de Vaz Lobo, nossa equipe se desloca rápido para lhe atender. Assistência técnica de confiança.",
        mainStreets: ["Avenida Monsenhor Félix", "Avenida Vicente de Carvalho"],
        avgArrival: "25-40 min",
        landmarks: ["Largo de Vaz Lobo", "Cine Vaz Lobo (antigo)"],
        zones: ["Zona Norte"]
    },
    "vicente-de-carvalho": {
        slug: "vicente-de-carvalho",
        name: "Vicente de Carvalho",
        description: "Perto do Carioca Shopping e Metrô, Vicente de Carvalho é atendido com prioridade. Chame a ABELTEC.",
        mainStreets: ["Avenida Vicente de Carvalho", "Avenida Meriti"],
        avgArrival: "20-35 min",
        landmarks: ["Carioca Shopping", "Metrô Vicente de Carvalho"],
        zones: ["Zona Norte"]
    },
    "vila-da-penha": {
        slug: "vila-da-penha",
        name: "Vila da Penha",
        description: "Bairro residencial e boêmio, a Vila da Penha recebe tratamento especial. Conserto rápido na Oliveira Belo ou Meriti.",
        mainStreets: ["Avenida Oliveira Belo", "Avenida Meriti", "Avenida Brás de Pina"],
        avgArrival: "20-35 min",
        landmarks: ["Largo do Bicão", "Carioca Shopping (próximo)"],
        zones: ["Zona Norte"]
    },
    "vila-isabel": {
        slug: "vila-isabel",
        name: "Vila Isabel",
        description: "Terra de Noel, Vila Isabel tem calçadas musicais e nosso atendimento afinado. Chegamos rápido pela 28 de Setembro.",
        mainStreets: ["Boulevard 28 de Setembro", "Rua Teodoro da Silva", "Rua Torres Homem"],
        avgArrival: "20-35 min",
        landmarks: ["UERJ", "Praça Barão de Drummond", "Shopping Boulevard"],
        zones: ["Zona Norte"]
    },
    "vila-militar": {
        slug: "vila-militar",
        name: "Vila Militar",
        description: "Atendimento na região da Vila Militar. Técnicos credenciados e experientes para resolver seu problema.",
        mainStreets: ["Avenida Duque de Caxias", "Estrada São Pedro de Alcântara"],
        avgArrival: "30-50 min",
        landmarks: ["Estação de Vila Militar", "Transolímpica"],
        zones: ["Zona Oeste"]
    },
    "vila-valqueire": {
        slug: "vila-valqueire",
        name: "Vila Valqueire",
        description: "O 'bairro das flores' na Zona Oeste tem atendimento exclusivo. Vila Valqueire conta com a qualidade ABELTEC.",
        mainStreets: ["Estrada Intendente Magalhães", "Rua das Rosas", "Rua Luiz Beltrão"],
        avgArrival: "25-40 min",
        landmarks: ["Praça do Valqueire", "Base Aérea dos Afonsos"],
        zones: ["Zona Oeste"]
    },
    "zumbi": {
        slug: "zumbi",
        name: "Zumbi",
        description: "Pequeno e tranquilo, o Zumbi na Ilha recebe nossa visita técnica com agilidade. Conserto de geladeiras no local.",
        mainStreets: ["Estrada do Rio Jequiá", "Praia do Zumbi"],
        avgArrival: "35-50 min",
        landmarks: ["Jequiá Iate Clube"],
        zones: ["Zona Norte", "Ilha do Governador"]
    },
    "jardim-botanico": {
        slug: "jardim-botanico",
        name: "Jardim Botânico",
        description: "Ao lado do parque, o bairro do Jardim Botânico respira ar puro e tem eletrodomésticos funcionando bem com nossa ajuda.",
        mainStreets: ["Rua Jardim Botânico", "Rua Pacheco Leão"],
        avgArrival: "25-40 min",
        landmarks: ["Jardim Botânico do Rio", "Parque Lage"],
        zones: ["Zona Sul"]
    }
};

export const getNeighborhoodData = (slug: string): NeighborhoodData | null => {
    const normalizedSlug = toSlug(slug);
    const specificData = data[normalizedSlug];

    if (specificData) {
        return {
            ...specificData,
            isFallback: false,
        };
    }

    // If the slug exists in the curated neighborhoods list but has no dedicated copy yet,
    // keep the page accessible with generic content and mark as fallback.
    const originalName = allBairros.find((bairro) => toSlug(bairro) === normalizedSlug);
    if (!originalName) {
        return null;
    }

    return {
        slug: normalizedSlug,
        name: originalName,
        ...defaultNeighborhoodData,
        isFallback: true,
    };
};
