export type TaxonomyLink = {
	label: string;
	slug: string;
};

export type TaxonomyGroup = {
	label: string;
	slug: string;
	items: TaxonomyLink[];
};

export const cearaZones: TaxonomyGroup[] = [
	{
		label: 'Centro',
		slug: 'fortaleza-centro',
		items: [
			{ label: 'Centro', slug: 'fortaleza-centro' },
			{ label: 'Benfica', slug: 'fortaleza-benfica' },
			{ label: 'Farias Brito', slug: 'fortaleza-farias-brito' },
			{ label: 'Jacarecanga', slug: 'fortaleza-jacarecanga' },
			{ label: 'Moura Brasil', slug: 'fortaleza-moura-brasil' },
		],
	},
	{
		label: 'Zona Leste (Aldeota e Cocó)',
		slug: 'fortaleza-zona-leste',
		items: [
			{ label: 'Aldeota', slug: 'fortaleza-aldeota' },
			{ label: 'Meireles', slug: 'fortaleza-meireles' },
			{ label: 'Cocó', slug: 'fortaleza-coco' },
			{ label: 'Praia de Iracema', slug: 'fortaleza-praia-de-iracema' },
			{ label: 'Mucuripe', slug: 'fortaleza-mucuripe' },
			{ label: 'Papicu', slug: 'fortaleza-papicu' },
			{ label: 'Varjota', slug: 'fortaleza-varjota' },
			{ label: 'Dionísio Torres', slug: 'fortaleza-dionisio-torres' },
			{ label: 'Praia do Futuro', slug: 'fortaleza-praia-do-futuro' },
			{ label: 'Guararapes', slug: 'fortaleza-guararapes' },
		],
	},
	{
		label: 'Zona Sul (Messejana e Sul)',
		slug: 'fortaleza-zona-sul',
		items: [
			{ label: 'Messejana', slug: 'fortaleza-messejana' },
			{ label: 'José Walter', slug: 'fortaleza-jose-walter' },
			{ label: 'Cidade dos Funcionários', slug: 'fortaleza-cidade-dos-funcionarios' },
			{ label: 'Cambeba', slug: 'fortaleza-cambeba' },
			{ label: 'Lagoa Redonda', slug: 'fortaleza-lagoa-redonda' },
			{ label: 'Oliveira Paiva', slug: 'fortaleza-oliveira-paiva' },
			{ label: 'Sapiranga', slug: 'fortaleza-sapiranga' },
			{ label: 'Parque Manibura', slug: 'fortaleza-parque-manibura' },
		],
	},
	{
		label: 'Zona Oeste',
		slug: 'fortaleza-zona-oeste',
		items: [
			{ label: 'Barra do Ceará', slug: 'fortaleza-barra-do-ceara' },
			{ label: 'Antônio Bezerra', slug: 'fortaleza-antonio-bezerra' },
			{ label: 'Vila Velha', slug: 'fortaleza-vila-velha' },
			{ label: 'Carlito Pamplona', slug: 'fortaleza-carlito-pamplona' },
			{ label: 'Álvaro Weyne', slug: 'fortaleza-alvaro-weyne' },
			{ label: 'Quintino Cunha', slug: 'fortaleza-quintino-cunha' },
		],
	},
	{
		label: 'Parangaba e Outros',
		slug: 'fortaleza-outros',
		items: [
			{ label: 'Parangaba', slug: 'fortaleza-parangaba' },
			{ label: 'Mondubim', slug: 'fortaleza-mondubim' },
			{ label: 'Maraponga', slug: 'fortaleza-maraponga' },
			{ label: 'Bairro de Fátima', slug: 'fortaleza-bairro-de-fatima' },
			{ label: 'Montese', slug: 'fortaleza-montese' },
			{ label: 'Bom Jardim', slug: 'fortaleza-bom-jardim' },
			{ label: 'Conjunto Ceará', slug: 'fortaleza-conjunto-ceara' },
		],
	},
];

export const ceRegions: TaxonomyGroup[] = [
	{
		label: 'Região Metropolitana',
		slug: 'regiao-metropolitana',
		items: [
			{ label: 'Fortaleza', slug: 'fortaleza' },
			{ label: 'Caucaia', slug: 'caucaia' },
			{ label: 'Maracanaú', slug: 'maracanau' },
			{ label: 'Maranguape', slug: 'maranguape' },
			{ label: 'Aquiraz', slug: 'aquiraz' },
			{ label: 'Eusébio', slug: 'eusebio' },
			{ label: 'Pacatuba', slug: 'pacatuba' },
			{ label: 'Horizonte', slug: 'horizonte' },
			{ label: 'Pacajus', slug: 'pacajus' },
			{ label: 'Cascavel', slug: 'cascavel' },
			{ label: 'Itaitinga', slug: 'itaitinga' },
			{ label: 'São Gonçalo do Amarante', slug: 'sao-goncalo-do-amarante' },
		],
	},
	{
		label: 'Região do Cariri',
		slug: 'regiao-cariri',
		items: [
			{ label: 'Juazeiro do Norte', slug: 'juazeiro-do-norte' },
			{ label: 'Crato', slug: 'crato' },
			{ label: 'Barbalha', slug: 'barbalha' },
			{ label: 'Brejo Santo', slug: 'brejo-santo' },
			{ label: 'Mauriti', slug: 'mauriti' },
			{ label: 'Missão Velha', slug: 'missao-velha' },
			{ label: 'Milagres', slug: 'milagres' },
		],
	},
	{
		label: 'Zona Norte (Sobral)',
		slug: 'zona-norte-sobral',
		items: [
			{ label: 'Sobral', slug: 'sobral' },
			{ label: 'Itapipoca', slug: 'itapipoca' },
			{ label: 'Camocim', slug: 'camocim' },
			{ label: 'Tianguá', slug: 'tiangua' },
			{ label: 'Granja', slug: 'granja' },
			{ label: 'Acaraú', slug: 'acarau' },
			{ label: 'Viçosa do Ceará', slug: 'vicosa-do-ceara' },
			{ label: 'Santa Quitéria', slug: 'santa-quiteria' },
		],
	},
	{
		label: 'Sertão Central e Inhamuns',
		slug: 'sertao-central-inhamuns',
		items: [
			{ label: 'Quixadá', slug: 'quixada' },
			{ label: 'Quixeramobim', slug: 'quixeramobim' },
			{ label: 'Crateús', slug: 'crateus' },
			{ label: 'Tauá', slug: 'taua' },
			{ label: 'Senador Pompeu', slug: 'senador-pompeu' },
			{ label: 'Canindé', slug: 'caninde' },
		],
	},
	{
		label: 'Litoral Leste e Jaguaribe',
		slug: 'litoral-leste-jaguaribe',
		items: [
			{ label: 'Aracati', slug: 'aracati' },
			{ label: 'Russas', slug: 'russas' },
			{ label: 'Limoeiro do Norte', slug: 'limoeiro-do-norte' },
			{ label: 'Morada Nova', slug: 'morada-nova' },
			{ label: 'Jaguaribe', slug: 'jaguaribe' },
			{ label: 'Quixeré', slug: 'quixere' },
		],
	},
];

export const topicTags: TaxonomyLink[] = [
	{ label: 'Política', slug: 'politica-ce' },
	{ label: 'Segurança Pública', slug: 'seguranca-publica' },
	{ label: 'Transporte e Mobilidade', slug: 'transporte-mobilidade' },
	{ label: 'Saúde', slug: 'saude' },
	{ label: 'Educação', slug: 'educacao' },
	{ label: 'Cultura e Carnaval', slug: 'cultura-carnaval' },
	{ label: 'Eleições 2026', slug: 'eleicoes-2026' },
];

export const allCeTagSlugs = [
	...cearaZones.flatMap((group) => [group.slug, ...group.items.map((item) => item.slug)]),
	...ceRegions.flatMap((group) => [group.slug, ...group.items.map((item) => item.slug)]),
	...topicTags.map((item) => item.slug),
];
