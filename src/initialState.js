// eslint-disable-next-line
export default {
	cart: [],
	buyer: {
		fname: '',
		lname: '',
		dni: '',
		email: '',
		phone: '',
		state: '',
		city: '',
		adr: '',
		dpto: '',
		cp: '',
	},
	orders: [],
	products: [
		{
			id: 100,
			title: 'Bandeja con borde',
			type: 'MoldesResina',
			offer: false,
			price: 5050,
			description: 'Molde bandeja de 18x9cm para resina',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/band18x9.webp?alt=media&token=895bb310-137d-4fcb-8ff0-dc7428dd089d',
			isNew: false,
		},
		{
			id: 101,
			title: 'Combo ceniceros',
			type: 'MoldesResina',
			offer: false,
			price: 11000,
			description: `Moldes de silicona para resina ceniceros x6 formas 7cm:
						Cuadrado, Hoja, Corazón, Redondo, triangular, Hexágono`,
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/cenic-combo.webp?alt=media&token=15caddae-c32c-41dc-8bde-e25735292ce4',
			isNew: false,
		},
		{
			id: 102,
			title: 'Cenicero Corazon',
			type: 'MoldesResina',
			offer: false,
			price: 2800,
			description:
				'Molde de silicona para resina: cenicero con forma de corazon 8,5x8x1,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/cenic-corazon.webp?alt=media&token=01dd8b74-66a6-4912-9b33-ad4d0b091e84',
			isNew: false,
		},
		{
			id: 103,
			title: 'cenicero cuadrado',
			type: 'MoldesResina',
			offer: false,
			price: 2800,
			description:
				'molde de silicona para resina: cenicero con forma de cuadrado 8x8x1,8cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/cenic-cuadrado.webp?alt=media&token=7fb47b2b-7e5a-4752-aa00-2777fcf2a020',
			isNew: false,
		},
		{
			id: 104,
			title: 'Cenicero redondo',
			type: 'MoldesResina',
			offer: false,
			price: 2800,
			description:
				'Molde de silicona para resina: cenicero con forma redonda 7x1,8cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/cenic-redondo.webp?alt=media&token=52ad0809-01cd-42f9-9df7-963e2be79736',
			isNew: false,
		},
		{
			id: 105,
			title: 'Cenicero hexagonal',
			type: 'MoldesResina',
			offer: false,
			price: 2800,
			description:
				'Molde de silicona para resina: cenicero con forma hexagonal 8x7x1,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/cenic-hexagonal.webp?alt=media&token=6a062a5a-4ed0-4dcc-a8cb-37357a3dcb4c',
			isNew: false,
		},
		{
			id: 106,
			title: 'Cenicero triangular',
			type: 'MoldesResina',
			offer: false,
			price: 2800,
			description:
				'Molde de silicona para resina: ceniceros con forma triangular 8x1,7cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/cenic-triangulo.webp?alt=media&token=d70c65a3-5125-405a-b2f4-259ac99d449d',
			isNew: false,
		},
		{
			id: 107,
			title: 'Cenicero hoja',
			type: 'MoldesResina',
			offer: false,
			price: 2800,
			description:
				'Molde de silicona para resina: ceniceros con forma de hoja 8x8,5x1,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/cenic-chala.webp?alt=media&token=dc856dca-caef-4032-814a-35744c6ff890',
			isNew: false,
		},
		{
			id: 108,
			title: 'Circulo 29cm',
			type: 'MoldesResina',
			offer: false,
			price: 5150,
			description: 'Molde de silicona circulo de 29 cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/circ29cm.webp?alt=media&token=0ca31b30-193a-47c2-b605-d145b856354a',
			isNew: false,
		},
		{
			id: 109,
			title: 'Dijes en formas varias',
			type: 'MoldesResina',
			offer: false,
			price: 3200,
			description:
				'Molde de silicona para resina para dijes en varias formas (11 cavidades)',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavdijes.webp?alt=media&token=dfa0c56f-9949-4d33-b097-c7bcc67a671f',
			isNew: false,
		},
		{
			id: 110,
			title: 'Escudos con agujero',
			type: 'MoldesResina',
			offer: false,
			price: 3000,
			description:
				'Molde de silicona para resina con forma de escudos 8 cavidades de 3,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-escudosx8.webp?alt=media&token=e54242bd-4adc-4abc-ac88-807700f6da02',
			isNew: false,
		},
		// {
		// 	id: 111,
		// 	title: 'Expansores en 9 medidas',
		// 	type: 'MoldesResina',
		// 	offer: false,
		// 	price: 4150,
		// 	description:
		// 		'Molde de silicona para resina en forma de expansores con 18 cavidades en 9 medidas diferentes',
		// 	sells: 0,
		// 	image:
		// 		'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/expansores9.webp?alt=media&token=8f12f43c-470e-4571-bbda-d7083b5f593b',
		// 	isNew: false,
		// },
		{
			id: 112,
			title: 'Ninjacat',
			type: 'MoldesResina',
			offer: true,
			price: 1800,
			description:
				'Molde de silicona para resina tipo llavero con forma de gato ninjacat defensa personal',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-ninjacat.webp?alt=media&token=84493b81-787e-43aa-944c-d61dbc63764f',
			isNew: false,
		},
		{
			id: 113,
			title: 'Huesito x10',
			type: 'MoldesResina',
			offer: false,
			price: 4600,
			description:
				'Molde de silicona tipo llavero con forma de huesito x10 cavidades de 7x4cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-huesitox10.webp?alt=media&token=d82198d1-1458-41fd-b2ee-2cc2777787d3',
			isNew: false,
		},
		{
			id: 114,
			title: 'Huesito',
			type: 'MoldesResina',
			offer: true,
			price: 890,
			description: 'Molde de silicona tipo llavero con forma de huesito 7x4cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/huesimp.webp?alt=media&token=e1f8166d-9c6f-442c-b901-0387fd05bdf8',
			isNew: false,
		},
		{
			id: 115,
			title: 'Huesito x3 cavidades',
			type: 'MoldesResina',
			offer: true,
			price: 1820,
			description:
				'Molde de silicona para resina, tipo llavero, forma de huesito x3 cavidades 5x3cm ',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/huex3.webp?alt=media&token=b70c24aa-2927-4513-bf58-6fa1069c0071',
			isNew: false,
		},
		{
			id: 116,
			title: 'Llaveros circulos x8',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para resina tipo llaveros con forma circular de 5cm con 8 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavredx8.webp?alt=media&token=b9dbc58f-fd3c-4bf6-9cb7-0e4e453e2aa1',
			isNew: false,
		},
		{
			id: 117,
			title: 'Llaveros cuadrados 8 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para resina tipo llaveros cuadrados 5cm x 8 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavcuax8.webp?alt=media&token=c9d5d499-8450-432d-b5f3-33fd8c9a19f2',
			isNew: false,
		},
		{
			id: 118,
			title: 'Marcador 15x3',
			type: 'MoldesResina',
			offer: true,
			price: 1420,
			description: 'Molde de silicona forma de marcador 15x3cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/marc-15x3s.webp?alt=media&token=e6c8bb95-77a9-42c9-b840-bfe5b2f3c859',
			isNew: false,
		},
		{
			id: 119,
			title: 'Marcador triple 15x3cm',
			type: 'MoldesResina',
			offer: false,
			price: 2940,
			description:
				'Molde de silicona para resina forma de marcador 15x3cm x 3 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/marc-15x3-triple.webp?alt=media&token=c4fb3095-a8b4-4245-ba09-b23cd7676fe9',
			isNew: false,
		},
		{
			id: 120,
			title: 'Marcador 18x4',
			type: 'MoldesResina',
			offer: false,
			price: 1630,
			description: 'Molde de silicona forma de marcador 18x4cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/marc-18x4simple.webp?alt=media&token=fc672f63-011b-40ab-aadd-27d7992428b3',
			isNew: false,
		},
		{
			id: 121,
			title: 'Paleta de maquillaje',
			type: 'MoldesResina',
			offer: false,
			price: 2340,
			description:
				'Molde de silicona para paleta de maquillaje pintura de uñas 12,5cm x 9,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/palmaq.webp?alt=media&token=883fdba3-641f-4ff0-b36b-7c16fcd07cd2',
			isNew: false,
		},
		{
			id: 122,
			title: 'Pastillas x30 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 2200,
			description:
				'Molde de silicona para jabones con forma de pastillas 12x6mm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/30cav12x6mm.webp?alt=media&token=ef0d2567-f194-45b3-b697-fb9d38925582',
			isNew: false,
		},
		{
			id: 123,
			title: 'Jabones 2x1cm 30 cav',
			type: 'MoldesResina',
			offer: false,
			price: 3630,
			description: 'Molde de silicona con forma de pastillas 2x1cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/30cav-2x1cmjabon.webp?alt=media&token=95146304-7385-40e1-9422-3612794f1c9c',
			isNew: false,
		},
		{
			id: 124,
			title: 'Pastillas x40 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 1550,
			description: 'Molde de silicona con forma de pastillas de 7x4mm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/past-40cav-7x4mm.webp?alt=media&token=1c04f992-f708-44e0-afe5-95a109697299',
			isNew: false,
		},
		{
			id: 125,
			title: 'Puas x10 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 1640,
			description:
				'Molde de silicona para resina con forma de puas de guitarra 10 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/puasx10.webp?alt=media&token=64b70525-8e95-4154-ad18-d9f2e1bb8820',
			isNew: false,
		},
		{
			id: 127,
			title: 'Picador herb grinder',
			type: 'MoldesResina',
			offer: false,
			price: 2205,
			description:
				'Molde de silicona con forma de picador con puntas 5,5cm de diametro x 2,5cm de alto (estando cerrado)',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pica-grinder.webp?alt=media&token=d4e1dac5-fac8-49cb-9982-ae80a94ce527',
			isNew: false,
		},
		{
			id: 128,
			title: 'Picador 420',
			type: 'MoldesResina',
			offer: false,
			price: 2439,
			description:
				'Molde de silicona con forma de picador sin puntas 6,5cm de diametro x 2,5cm de alto (estando cerrado)',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pica420.webp?alt=media&token=f7ec42d5-29fe-4bdb-b236-74c329c83227',
			isNew: false,
		},
		{
			id: 129,
			title: 'Combo posavasos con borde',
			type: 'MoldesResina',
			offer: false,
			price: 6890,
			description:
				'Combo x3 moldes de silicona con formas posavasos con borde.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posasetx3.webp?alt=media&token=51c17a21-70e3-42f6-a4bd-7b7d624ba3ef',
			isNew: false,
		},
		{
			id: 130,
			title: 'Posavaso cuadrado',
			type: 'MoldesResina',
			offer: false,
			price: 2600,
			description: 'Molde de silicona posavaso con borde forma cuadrado',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posa-cuadrado-borde.webp?alt=media&token=79189935-6f72-4355-ba46-4425a735e383',
			isNew: false,
		},
		{
			id: 131,
			title: 'Posavasos redondo',
			type: 'MoldesResina',
			offer: false,
			price: 2600,
			description: 'Molde de silicona posavaso con borde forma circular',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posa-circ-borde.webp?alt=media&token=5eb48b38-e5d3-4664-a1be-eb4e12d547d3',
			isNew: false,
		},
		{
			id: 133,
			title: 'Tapa de agenda A5 doble',
			type: 'MoldesResina',
			offer: false,
			price: 5200,
			description:
				'Molde de silicona forma tapa de agenda A5 con anillado x 2 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/tapag-a5doble-anillado.webp?alt=media&token=fdceb76a-5f1d-4d2d-a191-56cd33d2d3a7',
			isNew: false,
		},
		{
			id: 134,
			title: 'Combo vela zig-zag',
			type: 'moldesvelas',
			offer: false,
			price: 5300,
			description: 'Moldes de silicona para velas forma zig zag curvo y recto',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/velzigzagcombo.webp?alt=media&token=4d3de793-6a01-47bc-b363-f569ef25e297',
			isNew: false,
		},
		{
			id: 135,
			title: 'Vela zig-zag curvo',
			type: 'moldesvelas',
			offer: false,
			price: 3300,
			description: 'Molde de silicona para velas forma zig-zag curvo',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/vel-zigzagcurvo.webp?alt=media&token=33628665-748c-4339-b3e2-83eb5711d4e6',
			isNew: false,
		},
		{
			id: 136,
			title: 'Vela zig-zag recta',
			type: 'moldesvelas',
			offer: false,
			price: 3300,
			description: 'Molde de silicona para velas forma zig-zag recta',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/vel-zigzagrecta.webp?alt=media&token=7833a22e-8b44-412f-b4ab-9c06fa6d60a9',
			isNew: false,
		},
		{
			id: 137,
			title: 'Posavasos hexagonal',
			type: 'MoldesResina',
			offer: false,
			price: 2600,
			description: 'Molde de silicona posavaso con borde forma hexagonal.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posa-hex-borde.webp?alt=media&token=e779431a-b24c-43a7-afce-163cab99dadd',
			isNew: false,
		},
		{
			id: 138,
			title: 'Ninjacat x4',
			type: 'MoldesResina',
			offer: false,
			price: 3900,
			description: 'Molde de silicona con forma de gato ninjacat x4',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/ninjacatx4.webp?alt=media&token=70b6a3b1-543a-42df-b3e6-621bd725f491',
			isNew: false,
		},
		{
			id: 139,
			title: 'Llaveros 3,5cm x12 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 3150,
			description: 'Molde de silicona tipo llavero. 12 cavidades 3,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavredx12x3cm.webp?alt=media&token=da19caf4-2ea0-49bf-884d-f8933e0844eb',
			isNew: false,
		},
		{
			id: 140,
			title: 'Llaveros con forma de corazon 5cm x 8 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para resina tipo llavero de 8 cavidades con forma de corazón 5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavcorx8.webp?alt=media&token=870e15a6-b5fc-47ad-b304-f2b21859167b',
			isNew: false,
		},
		{
			id: 141,
			title: 'Posavasos circulares x6 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 3490,
			description:
				'Molde de silicona para resina tipo posavasos de 8cm x 6 cavidades de forma circular',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posax6circ.webp?alt=media&token=4515b100-366b-402b-9810-c5d5eb4e18b1',
			isNew: false,
		},
		{
			id: 142,
			title: 'Posavasos x 3 formas',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para resina tipo posavasos de 8cm x 3 cavidades (circular, cuadrada y hexagonal)',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posax3sinborde.webp?alt=media&token=a3a7003c-c1ea-43cf-b0ea-4c2145a5d5cc',
			isNew: false,
		},
		{
			id: 143,
			title: 'Llaveros con forma de corazon 5cm x 3 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 2010,
			description:
				'Molde de silicona para resina tipo llavero de 3 cavidades con forma de corazón 5cm',
			sells: 10,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/corx3.webp?alt=media&token=d608ca00-b255-4dff-8b5c-69588cb164ff',
			isNew: false,
		},
		{
			id: 144,
			title: 'Bandeja de armado 20x12cm ',
			type: 'MoldesResina',
			offer: false,
			price: 4590,
			description:
				'Molde de silicona para resina con forma de bandeja de armado grow arte',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/band-armado20x12.webp?alt=media&token=1438bf7f-5704-434d-b6af-08da45a5a96c',
			isNew: false,
		},
		{
			id: 145,
			title: 'Posavasos cuadrado 4 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 4200,
			description:
				'Molde de silicona para resina con 4 cavidades cuadradas de 10cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posa-cuadradox4.webp?alt=media&token=4990319f-3640-4337-b63e-5886a7c4f37e',
			isNew: false,
		},
		{
			id: 146,
			title: 'Bandeja irregular 40x25cm',
			type: 'MoldesResina',
			offer: false,
			price: 7750,
			description:
				'Molde de silicona para resina con forma irregular para bandeja de 40x25cm acabado liso brillante',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/bandirr40.webp?alt=media&token=97f6301b-9f34-4932-bcb6-0b368c8de909',
			isNew: false,
		},
		{
			id: 147,
			title: 'Marcador doble 18x4cm',
			type: 'MoldesResina',
			offer: false,
			price: 2239,
			description:
				'Molde de silicona para resina forma de marcapaginas 18x4cm x 2 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/marc-18x4doble.webp?alt=media&token=8a9c6425-1b02-4f4b-a192-ac4bcbad1424',
			isNew: false,
		},
		{
			id: 148,
			title: 'Paleta pintor 30cm',
			type: 'MoldesResina',
			offer: false,
			price: 3925,
			description:
				'Molde de silicona para paleta de pintor con agujero. 30x20cm acabado liso.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/palpintor.webp?alt=media&token=281db2b1-de95-456c-8efb-4fbad22e472b',
			isNew: false,
		},
		{
			id: 149,
			title: 'Llaveros rectangulares',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para resina tipo llaveros rectangulares 4,2x8cm 8 cavidades.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavrectx8.webp?alt=media&token=55113af6-a553-4d48-b9ce-9ea47d0e64a8',
			isNew: false,
		},
		{
			id: 150,
			title: 'Rectangulo 25x15cm',
			type: 'MoldesResina',
			offer: false,
			price: 3510,
			description:
				'Molde de silicona para rectangulo de 25x15x0,5 cm acabado liso.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/rect15x25.webp?alt=media&token=4a52c620-0c48-4398-8964-55786428e761',
			isNew: false,
		},
		{
			id: 151,
			title: 'Arcoiris bandeja 23x23',
			type: 'MoldesResina',
			offer: false,
			price: 7200,
			description:
				'Molde de silicona tipo bandeja con forma de arcoiris de 23x23x2 cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/arcoiris-20x20.webp?alt=media&token=4d60df28-fe66-4dc4-b466-4e2d8f495afc',
			isNew: false,
		},
		{
			id: 152,
			title: 'Combo 4 moldes para llaveros',
			type: 'MoldesResina',
			offer: false,
			price: 11750,
			description:
				'Molde de silicona tipo llaveros de 8 cavidades de 5cm cada uno con formas cuadradas, circulares, hexagonales y corazones',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavx8combo.webp?alt=media&token=48a557c6-3984-4025-985c-56ad688209c2',
			isNew: false,
		},
		{
			id: 153,
			title: 'Soporte para celulares',
			type: 'MoldesResina',
			offer: false,
			price: 4700,
			description:
				'Molde de silicona para resina con forma de soporte de celulares acabado liso 20,5 x 9cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/sopcel.webp?alt=media&token=0925eb0d-6803-466d-b4fe-9b52f80f1c55',
			isNew: false,
		},
		{
			id: 154,
			title: 'Vela con forma de almeja',
			type: 'moldesvelas',
			offer: false,
			price: 3500,
			description:
				'Moldes de silicona para velas con forma de almeja 9x6,5x4cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/velaalm.webp?alt=media&token=2f544911-ce48-4009-9bac-a2f5d1a8f5fe',
			isNew: false,
		},
		{
			id: 155,
			title: 'Circulo 15cm',
			type: 'MoldesResina',
			offer: false,
			price: 2345,
			description:
				'Moldes de silicona para resina con forma de circulo acabado brillante 15x0,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/circ15cm.webp?alt=media&token=71cd359e-bbf3-40d3-bbac-68aa41f10728',
			isNew: false,
		},
		{
			id: 156,
			title: 'Arcoiris bandeja 20x10',
			type: 'MoldesResina',
			offer: false,
			price: 4240,
			description:
				'Molde de silicona tipo bandeja con forma de arcoiris de 20x10x2 cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/arcoiris-20x10.webp?alt=media&token=6cccf333-f74d-4b2f-a6e6-8577aab33375',
			isNew: false,
		},
		{
			id: 157,
			title: 'Tabla picadas',
			type: 'MoldesResina',
			offer: false,
			price: 5205,
			description:
				'Molde de silicona para resina tipo paleta de pintura/tabla de picadas 35x15x1cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/tablapicadas.webp?alt=media&token=870116f5-6d82-4232-97e0-e3e5033a15c6',
			isNew: false,
		},
		{
			id: 158,
			title: 'Circulos varios tamaños 1, 2 y 3cm',
			type: 'MoldesResina',
			offer: false,
			price: 2720,
			description:
				'Molde de silicona para resina con 12 cavidades de 3cm, 12 de 2cm y 25 de 1cm. 0,5cm de espesor',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/varcirc.webp?alt=media&token=dc956461-c0cd-4636-b531-f99dffb142f7',
			isNew: false,
		},
		{
			id: 159,
			title: 'Llaveros hexagonales',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para resina tipo llavero con 8 cavidades hexagonales de 5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-hexagonalesx8.webp?alt=media&token=8618364b-0312-4d68-8849-7b95a1d603dc',
			isNew: false,
		},
		{
			id: 160,
			title: '4 cavidades cubicas',
			type: 'MoldesResina',
			offer: false,
			price: 2785,
			description:
				'Molde de silicona para jabones/shampoo/cosmetica/velas con 4 cavidades cubicas de 4x4x4cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/vel-cubos4x4-4cav.webp?alt=media&token=4de86e60-573d-418b-829f-4c8a672163ff',
			isNew: false,
		},
		{
			id: 161,
			title: 'Cuadrado 20cm',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para resina forma Cuadrada de 20x0,5 cm acabado liso.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/cuadrado20cm.webp?alt=media&token=b0875b7f-a71d-4f04-bd19-d13feeba7c18',
			isNew: false,
		},
		{
			id: 162,
			title: 'Rectangulo 17x8cm',
			type: 'MoldesResina',
			offer: false,
			price: 1770,
			description:
				'Molde de silicona para resina forma rectangular de 17x8cm acabado liso.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/rectangulo-17x8.webp?alt=media&token=92e155cc-4c5f-4607-b840-b804c5be78a5',
			isNew: false,
		},
		{
			id: 163,
			title: '30 cavidades cuadradas',
			type: 'MoldesResina',
			offer: false,
			price: 2010,
			description:
				'Molde de silicona para resina 30 cavidades cuadradas 20x5 mm.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/30cavcuadrados.webp?alt=media&token=39806a92-e908-4c7d-aa1e-5735f9f0ca9a',
			isNew: false,
		},
		{
			id: 164,
			title: 'Jabonera 10x9',
			type: 'MoldesResina',
			offer: false,
			price: 2715,
			description:
				'Molde de silicona para resina con forma de jabonera 10x9x1,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/jabonera10x9.webp?alt=media&token=b037be0d-0a4e-4ce9-86de-0b5c0ae11a9d',
			isNew: false,
		},
		{
			id: 166,
			title: 'Bandeja 20x12 para sushi',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para resina con forma de bandeja con borde irregular para sushi 20x12cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/band-sushi18x9.webp?alt=media&token=c54da2bc-62e7-4150-9350-99d7f8954884',
			isNew: false,
		},
		{
			id: 167,
			title: 'Posavasos con forma irregular',
			type: 'MoldesResina',
			offer: false,
			price: 1250,
			description:
				'Molde de silicona para resina con forma de posavasos bordes irregulares 9cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posairr.webp?alt=media&token=ec05b936-e302-475b-9601-d52b4bdc983d',
			isNew: false,
		},
		{
			id: 170,
			title: '4 cavidades para jabónes/shampo/velas 8x6x2cm',
			type: 'moldesvelas',
			offer: false,
			price: 3880,
			description:
				'Molde de silicona para jabónes/shampo/velas con 4 cavidades con forma rectangular 8x6x2cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/shampoo-solido-8x6x25.webp?alt=media&token=e28fd3dc-ea69-41e1-804e-7972c72d398c',
			isNew: false,
		},
		{
			id: 172,
			title: '8 cavidades cilindricas para velas',
			type: 'moldesvelas',
			offer: false,
			price: 4000,
			description:
				'Molde de silicona para jabónes/shampo/velas con 8 cavidades con forma cilindrica 4x4cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/vel-cilindrosx8.webp?alt=media&token=c0ff7dd3-d24b-4424-aa8e-392f565b4540',
			isNew: false,
		},
		{
			id: 173,
			title: 'Circulo 20cm',
			type: 'MoldesResina',
			offer: false,
			price: 3550,
			description:
				'Molde de silicona para resina circulo de 20 cm acabado brillante',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/circ15cm.webp?alt=media&token=71cd359e-bbf3-40d3-bbac-68aa41f10728',
			isNew: false,
		},
		{
			id: 175,
			title: 'Pastillas x30 cavidades 20mm',
			type: 'MoldesResina',
			offer: false,
			price: 3460,
			description: 'Molde de silicona para jabones con forma de pastillas 20mm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/30cav-2x1cmjabon.webp?alt=media&token=95146304-7385-40e1-9422-3612794f1c9c',
			isNew: false,
		},
		{
			id: 176,
			title: 'Posavasos triangular',
			type: 'MoldesResina',
			offer: false,
			price: 2711,
			description:
				'Molde de silicona para resina con forma de triangulos con un borde irregular para posavasos 4 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posa-triangulosirr.webp?alt=media&token=4a470ff1-b580-4722-9714-4b46ce50b876',
			isNew: false,
		},
		{
			id: 178,
			title: 'Paleta pintor pequeña',
			type: 'MoldesResina',
			offer: false,
			price: 1872,
			description:
				'Molde de silicona para paleta de pintor con agujero. 8,5cm acabado liso.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pal-pintorpeque%C3%B1a.webp?alt=media&token=d51de9b2-765a-4759-9c51-c8bcd1606e3a',
			isNew: false,
		},
		{
			id: 179,
			title: 'Tapa agenda A6 doble',
			type: 'MoldesResina',
			offer: false,
			price: 4700,
			description: 'Molde de silicona para tapa agenda tamaño A6 para anillado',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/tapaaga6x2.webp?alt=media&token=6594556e-3856-4555-ba7c-bd7967741168',
			isNew: false,
		},
		{
			id: 180,
			title: 'Arcoiris 7x7',
			type: 'MoldesResina',
			offer: true,
			price: 2730,
			description: 'Molde de silicona con forma de arcoiris de 7x7x2 cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/arc7x7.webp?alt=media&token=28dfd241-8e9b-4924-aa05-961b26ad11db',
			isNew: false,
		},
		{
			id: 182,
			title: 'LLavero camiseta x3 cav.',
			type: 'MoldesResina',
			offer: false,
			price: 2010,
			description:
				'Molde de silicona con 3 cavidades tipo llavero con forma de camiseta de futlbol x3 cavidades 5x3,6cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavcamisetax3.webp?alt=media&token=ccc8359c-586f-4086-9459-677f5a4437e9',
			isNew: false,
		},
		{
			id: 183,
			title: 'LLavero circulos x3 cav.',
			type: 'MoldesResina',
			offer: false,
			price: 2010,
			description:
				'Molde de silicona con 3 cavidades tipo llavero con forma de circular 3 cavidades 5cm',
			sells: 5,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavredx3.webp?alt=media&token=eaaea1a2-59cb-4255-b6f0-d1bef11fde37',
			isNew: false,
		},
		{
			id: 184,
			title: 'Abecedario y numeros',
			type: 'MoldesResina',
			offer: false,
			price: 4499,
			description:
				'Molde de silicona abcedario y numeros de 3cm y 0,7cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/abc.webp?alt=media&token=3350c2d0-0b4a-48bc-8a34-4036c901f589',
			isNew: false,
		},
		{
			id: 185,
			title: 'LLavero gatito x3 cav.',
			type: 'MoldesResina',
			offer: true,
			price: 2010,
			description:
				'Molde de silicona con 3 cavidades tipo llavero con forma de gatito 3 cavidades 3x3cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-gatitox3.webp?alt=media&token=2d1b6f1a-1729-48cf-bb5c-ed64bea6bd88',
			isNew: false,
		},
		{
			id: 186,
			title: 'LLavero huesito x8 cav.',
			type: 'MoldesResina',
			offer: false,
			price: 3560,
			description:
				'Molde de silicona con 8 cavidades tipo llavero con forma de huesito x8 cavidades 5x3cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavhuex8.webp?alt=media&token=27741ea4-873d-4ff8-b90e-0ba0962d3710',
			isNew: false,
		},
		{
			id: 187,
			title: 'Cilindro 4cm',
			type: 'moldesvelas',
			offer: false,
			price: 1420,
			description: 'Molde de silicona con forma de cilindro de 4cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/vel-cilindro.webp?alt=media&token=eac44738-2eba-47d0-8f07-be107b7cfb29',
			isNew: false,
		},
		{
			id: 188,
			title: 'LLavero gatito x8 cav.',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona con 8 cavidades tipo llavero con forma de gatito 8 cavidades 3x3cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-gatitox8.webp?alt=media&token=0966dbd6-d874-43fb-a8f8-70924f5c7ef7',
			isNew: false,
		},
		{
			id: 189,
			title: 'Llaveros cuadrados x3 cav.',
			type: 'MoldesResina',
			offer: false,
			price: 2010,
			description:
				'Molde de silicona para resina tipo llaveros cuadrados 5cm x 3 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavcuax3.webp?alt=media&token=5a26be55-8a7b-4b49-9552-cd81f5fc675b',
			isNew: false,
		},
		{
			id: 190,
			title: 'LLavero camiseta x11 cav.',
			type: 'MoldesResina',
			offer: false,
			price: 3966,
			description:
				'Molde de silicona con 11 cavidades tipo llavero con forma de camiseta de futlbol x3 cavidades 5x3,6cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-camisetax11.webp?alt=media&token=5dee1345-c0a9-4486-9204-2a45b93cc9f5',
			isNew: false,
		},
		{
			id: 191,
			title: 'Posavasos forma corazon x2 cav.',
			type: 'MoldesResina',
			offer: false,
			price: 2230,
			description:
				'Molde de silicona con dos cavidades con forma de corazon 9x8cm acabado liso',
			sells: 10,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posa-corazondoble.webp?alt=media&token=ee43989a-7469-41d3-bc74-f4ffcd248b95',
			isNew: false,
		},
		{
			id: 192,
			title: '20 cav cuadradas 3x3cm',
			type: 'MoldesResina',
			offer: false,
			price: 2299,
			description:
				'Molde de silicona con 20 cavidades con forma de cuadrada 3x3cm acabado liso',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/20cav-3x3cm-cuadrado.webp?alt=media&token=4aa8c67e-a5df-4fc4-9d66-8776b8906184',
			isNew: false,
		},
		{
			id: 193,
			title: 'Jabonera 8x8cm Bubble',
			type: 'MoldesResina',
			offer: false,
			price: 2800,
			description: 'Molde de silicona para resina con forma de jabonera 8x8cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/jabonera-bubble.webp?alt=media&token=c7157548-2f48-46b2-9358-0f4663822882',
			isNew: false,
		},
		{
			id: 194,
			title: 'Bandeja 35x10 para sushi',
			type: 'MoldesResina',
			offer: false,
			price: 4120,
			description:
				'Molde de silicona para resina con forma de bandeja con borde irregular para sushi 35x10cm acabado liso',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/band-sushi35x10.webp?alt=media&token=d7453f4b-4a7f-4e37-8585-171786dcc6fe',
			isNew: false,
		},
		{
			id: 195,
			title: 'Vela forma simetrica',
			type: 'moldesvelas',
			offer: false,
			price: 2830,
			description:
				'Molde de silicona para velas forma simetrica 20cm clande soja',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/vel-simetrica.webp?alt=media&token=fd40ab86-0843-4810-96d0-1f343ed6bb4e',
			isNew: false,
		},
		{
			id: 196,
			title: 'Tapa agenda A4 para anillado',
			type: 'MoldesResina',
			offer: false,
			price: 4100,
			description: 'Molde de silicona para tapa agenda tamaño A4 para anillado',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/tapag-a4simple.webp?alt=media&token=b507fef1-888d-40d6-9f4b-2ebf56d230e6',
			isNew: false,
		},
		{
			id: 197,
			title: 'Tapa agenda A5 para anillado',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: 'Molde de silicona para tapa agenda tamaño A5 para anillado',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/tapaga5anillado.webp?alt=media&token=f646546f-c90e-4140-b16f-7ae6b0d7d62d',
			isNew: false,
		},
		{
			id: 198,
			title: 'Tapa agenda A4 Doble para anillado ',
			type: 'MoldesResina',
			offer: false,
			price: 7300,
			description: 'Molde de silicona para tapa agenda tamaño A4 para anillado',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/tapag-a4doble.webp?alt=media&token=33819d71-77b2-475c-bd17-945b64365491',
			isNew: false,
		},
		{
			id: 199,
			title: 'Llavero copa del mundo x3 cav',
			type: 'MoldesResina',
			offer: false,
			price: 2010,
			description:
				'Molde de silicona para llaveros con forma de la copa del mundo 3 cavidades',
			sells: 10,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-mundialx3.webp?alt=media&token=a4891534-2d5a-40ae-b938-eb9da389422e',
			isNew: false,
		},
		{
			id: 200,
			title: 'Llavero copa del mundo x8 cav',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona para llaveros con forma de la copa del mundo 8 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-mundialx8.webp?alt=media&token=74901d80-6de7-4835-9244-dffbd44144fa',
			isNew: false,
		},
		{
			id: 201,
			title: 'Posavasos doble panal 9cm',
			type: 'MoldesResina',
			offer: true,
			price: 2350,
			description:
				'Molde de silicona para posavasos con dos cavidades forma de panal',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/posa-panalx2.webp?alt=media&token=783bb76f-5d0f-4a10-a3ef-10135b212d65',
			isNew: false,
		},
		{
			id: 202,
			title: 'Circulo 35cm',
			type: 'MoldesResina',
			offer: false,
			price: 9950,
			description:
				'Molde de silicona circulo de 35x3cm. Apto para resina,cemento, yeso, etc.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/circulo-35cm.webp?alt=media&token=5b43249a-8b6a-4530-a95b-60fdeaf800e6',
			isNew: false,
		},
		{
			id: 204,
			title: 'Circulo 50cm',
			type: 'MoldesResina',
			offer: false,
			price: 19800,
			description:
				'Molde de silicona circulo de 50x3cm. Apto para resina,cemento, yeso, etc.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/circulo-50cm.webp?alt=media&token=c49daa18-8e26-45ad-9eb0-8b683c4d5d36',
			isNew: false,
		},
		{
			id: 205,
			title: 'Mariposa x8',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description:
				'Molde de silicona tipo llaeveros con forma de mariposa x8 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-mariposasx8.webp?alt=media&token=4b529cb1-8470-46c6-8966-5138d7cc4088',
			isNew: false,
		},
		{
			id: 206,
			title: 'Mariposa x3',
			type: 'MoldesResina',
			offer: false,
			price: 1972,
			description:
				'Molde de silicona tipo llaeveros con forma de Mariposa x3 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-mariposasx3.webp?alt=media&token=b9e982be-13b2-41d9-b77c-833d83e80b2a',
			isNew: false,
		},
		{
			id: 207,
			title: 'Adornos navideños',
			type: 'MoldesResina',
			offer: false,
			price: 2700,
			description: 'Molde de silicona para adornos navideños 3 formas',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/adorn-navidadv1.webp?alt=media&token=274e4a92-8b80-42a5-bd31-24720a82207b',
			isNew: false,
		},
		{
			id: 208,
			title: 'Oval x8',
			type: 'MoldesResina',
			offer: false,
			price: 2990,
			description:
				'Molde de silicona tipo llaeveros con forma de oval x8 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-ovalx8.webp?alt=media&token=332c334c-805f-4dfc-bbd3-41417298b93b',
			isNew: false,
		},
		{
			id: 209,
			title: 'Marcador x8',
			type: 'MoldesResina',
			offer: false,
			price: 6280,
			description: 'Molde de silicona tipo separador de paginas x8 cavidades',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/marcx8.webp?alt=media&token=378d1e5d-9fda-4eb3-8d1f-75756668dc51',
			isNew: false,
		},
		{
			id: 210,
			title: 'Combo tapas agendas',
			type: 'MoldesResina',
			offer: false,
			price: 9850,
			description: 'Tapas de agenda A4, A5 y A6 simples',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/combo-agendassimples.webp?alt=media&token=af5e6615-22a0-4293-bab8-920efd9fe008',
			isNew: false,
		},
		{
			id: 211,
			title: 'Combo tapas agendas doble',
			type: 'MoldesResina',
			offer: false,
			price: 17100,
			description: 'Tapas de agenda A4, A5 y A6 dobles',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/combo-agendasdobles.webp?alt=media&token=9bcc43ee-31f0-4285-b8c2-d6ba3603d293',
			isNew: false,
		},
		{
			id: 212,
			title: 'Kit futbol',
			type: 'MoldesResina',
			offer: false,
			price: 5000,
			description:
				'Kit 3 moldes futbol Copa mundial, pelota y camiseta 3 cavidades cada uno.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/kit-futbolx3.webp?alt=media&token=a9dc0f95-aa6d-407a-8239-10d187c4b0aa',
			isNew: false,
		},
		{
			id: 213,
			title: 'Portacopas',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: 'Molde para resina con forma de portacopas de champagne',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/portacopas.webp?alt=media&token=61f5a6d1-2017-48b1-842a-126bb5e764fb',
			isNew: false,
		},
		{
			id: 214,
			title: 'Pelota de Futbol x3 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 2010,
			description: 'Molde con 3 cavidades con forma de futbol grabado.',
			sells: 10,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-futx3.webp?alt=media&token=9ffa3b2e-cf15-44df-bb74-9c808b11c632',
			isNew: false,
		},
		{
			id: 215,
			title: 'Pelota de Futbol x8 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: 'Molde con 8 cavidades con forma de futbol grabado.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-futx8.webp?alt=media&token=ded2793a-49e0-499d-885a-3a8dbfe582dd',
			isNew: false,
		},
		{
			id: 216,
			title: 'Reloj 30cm',
			type: 'MoldesResina',
			offer: false,
			price: 5400,
			description:
				'Molde con forma de reloj 30cm, orificio en el centro y lineas que marcan la hora.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/reloj30cm.webp?alt=media&token=e947eb00-3e9c-491d-96f2-fb8de083cae9',
			isNew: false,
		},
		{
			id: 217,
			title: 'Estrellas x8 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: 'Molde con 8 cavidades con forma de estrellas.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-estrellax8.webp?alt=media&token=ca6fe370-5ffe-40a2-9b48-6ebf9d0f2336',
			isNew: false,
		},
		{
			id: 218,
			title: 'Aritos/dijes 32 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 3299,
			description:
				'32 cavidades para pendientes 8 formas diferentes 2cm cada uno, detalles grabados',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/aritosx32.webp?alt=media&token=896563b2-6c0e-4c22-a3ac-981f7d7d818b',
			isNew: false,
		},
		{
			id: 219,
			title: 'Messi x3 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 2010,
			description: 'Molde con 3 cavidades con forma de Messi grabado (5x5cm).',
			sells: 30,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/messix3.webp?alt=media&token=46a5ff71-f05f-4317-9786-bf34e4604d64',
			isNew: false,
		},
		{
			id: 220,
			title: 'Messi x8 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: 'Molde con 8 cavidades con forma de Messi grabado (5x5cm)',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/messix8.webp?alt=media&token=4be0bb59-3daf-44ef-af46-7ce04cdc723b',
			isNew: false,
		},
		{
			id: 221,
			title: 'Signos zodiacales',
			type: 'MoldesResina',
			offer: false,
			price: 3300,
			description:
				'!2 cavidades tipo llavero con 12 cavidades con los signos zodiacales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-zodiacalesx12.webp?alt=media&token=91167c92-58eb-4639-8251-f890d0506481',
			isNew: false,
		},
		{
			id: 222,
			title: 'Reloj 20cm',
			type: 'MoldesResina',
			offer: false,
			price: 3999,
			description:
				'Molde con forma de reloj 20cm, orificio en el centro y lineas que marcan la hora.',
			sells: 20,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/reloj20cm.webp?alt=media&token=cbc7ae00-17a2-40ea-a6f1-f7fd0f5b3a09',
			isNew: false,
		},
		{
			id: 223,
			title: 'Mano de Fatima',
			type: 'MoldesResina',
			offer: false,
			price: 2700,
			description: 'Molde con forma de portasahumerios mano de fatima. 15x12cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/portasahumerio-mano.webp?alt=media&token=09fb10db-0e4d-436c-a56d-1963eba08315',
			isNew: false,
		},
		{
			id: 224,
			title: '4 cavidades cilindricas (6,5x3cm)',
			type: 'moldesvelas',
			offer: false,
			price: 3800,
			description:
				'Ideal para shampoo sólido, jabones, etc. Excelente flexibilidad, anti-adherencia. Fácil desmold',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/vel-cubos4x4-4cav.webp?alt=media&token=4de86e60-573d-418b-829f-4c8a672163ff',
			isNew: false,
		},
		{
			id: 225,
			title: 'Joystick x3 cav.',
			type: 'MoldesResina',
			offer: false,
			price: 1750,
			description: 'Molde con forma de joystick para resina 3 cavidades 7x5cm',
			sells: 20,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/joystickx3.webp?alt=media&token=a403f2a2-acb9-4a13-b696-a1f32a3e5442',
			isNew: true,
		},
		{
			id: 226,
			title: 'Pelota de basquet x8',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: '8 cavidades con forma de pelota de basquet 5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/basquetx8.webp?alt=media&token=0f28a943-5ac5-4530-8df8-b9701d29ed4d',
			isNew: false,
		},
		{
			id: 227,
			title: 'Pelota de basquet x3',
			type: 'MoldesResina',
			offer: false,
			price: 2100,
			description: '3 cavidades con forma de pelota de basquet 5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/basquetx3.webp?alt=media&token=7f07ee0c-3ff7-4d06-b12f-d835af63549d',
			isNew: false,
		},
		{
			id: 228,
			title: 'Mickey x8',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: '8 cavidades con forma de personaje Mickey 5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/mickeyx8.webp?alt=media&token=69647186-c69e-4057-9782-daa77996c0cd',
			isNew: false,
		},
		{
			id: 229,
			title: 'Mickey x3',
			type: 'MoldesResina',
			offer: false,
			price: 2100,
			description: '3 cavidades con forma de personaje Mickey 5cm',
			sells: 10,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/mickeyx3.webp?alt=media&token=a8febddc-4554-4a70-ad77-d693aae1ae95',
			isNew: false,
		},
		{
			id: 230,
			title: 'Angelitos x8',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: '8 cavidades con forma de angelito rezando 7x5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/angelitosx8.webp?alt=media&token=33c72384-6430-427a-806d-6ed476436930',
			isNew: false,
		},
		{
			id: 231,
			title: 'Angelitos x3',
			type: 'MoldesResina',
			offer: false,
			price: 2100,
			description: '3 cavidades con forma de angelito rezando 7x5cm',
			sells: 10,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/angelitosx3.webp?alt=media&token=546c1e4a-4d67-48f0-ab84-1dd13c22ef81',
			isNew: false,
		},
		{
			id: 232,
			title: 'Corazon partido x3',
			type: 'MoldesResina',
			offer: false,
			price: 2100,
			description: '3 cavidades con forma de corazon partido 6x4cm cada mitad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/corazon-partx3.webp?alt=media&token=367fb581-79ee-41e2-ab9a-5a5dd6e0b6e8',
			isNew: false,
		},
		{
			id: 233,
			title: 'Corazon partido simple',
			type: 'MoldesResina',
			offer: false,
			price: 1100,
			description: 'Molde con forma de corazon partido 6x4cm cada mitad',
			sells: 10,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/corazon-part.webp?alt=media&token=4f5003ef-bb7c-4b05-b585-51f5e9b5b862',
			isNew: false,
		},
		{
			id: 234,
			title: 'Estrellas x3 cavidades',
			type: 'MoldesResina',
			offer: false,
			price: 2100,
			description: 'Molde con 3 cavidades con forma de estrellas.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/estrellx3.webp?alt=media&token=1e9e9fbd-b5ba-4a4d-b4d4-93486079ed82',
			isNew: false,
		},
		{
			id: 235,
			title: 'Bandeja oval con borde',
			type: 'MoldesResina',
			offer: true,
			price: 4800,
			description: 'Bandeja de armado oval 20x12cm con borde de 3mm.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/band20x12.webp?alt=media&token=9e35d1b4-4523-456f-8559-f340971971cf',
			isNew: false,
		},
		{
			id: 236,
			title: 'kit flores',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: 'Molde con 3 cavidades con forma de margarita y 3 cavidades flor (Sin agujeros)',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/floresx2.webp?alt=media&token=80b01a39-a161-4cae-8093-73816a46bb8e',
			isNew: true,
		},
		{
			id: 237,
			title: 'Escudos 6cm x 7,5cm',
			type: 'MoldesResina',
			offer: false,
			price: 3680,
			description: 'Molde con 4 cavidades con forma de escudos de 6cm x 7,5cm.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/escudosx4.webp?alt=media&token=d9a1dd30-fbcf-4027-9d03-ce7667958882',
			isNew: false,
		},
		{
			id: 238,
			title: 'Foquitos de luz',
			type: 'MoldesResina',
			offer: false,
			price: 3300,
			description: 'Molde 8 cavidades con forma de foquito para llavero de 5cm x 3cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llavfoquitosx8.webp?alt=media&token=55b73881-dcee-4e78-86fa-ba13d6707290',
			isNew: false,
		},
		{
			id: 239,
			title: 'Mezcladores corazón',
			type: 'MoldesResina',
			offer: false,
			price: 4100,
			description: 'Molde 10 cavidades con forma de corazon para mezclador de 20cm de largo',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/marcorazon.webp?alt=media&token=cb3f7a75-a0fe-4008-bfe6-5c58314ef4f3',
			isNew: false,
		},
		{
			id: 240,
			title: 'Llaveros Spotify',
			type: 'MoldesResina',
			offer: false,
			price: 2300,
			description: 'Molde 3 cavidades spotify 6,5cm x 4cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-spotifyx3.webp?alt=media&token=b167d430-a26a-414b-a95f-4cea4af2ea59',
			isNew: true,
		},
		{
			id: 241,
			title: 'Llaveros cruces x3',
			type: 'MoldesResina',
			offer: false,
			price: 2100,
			description: 'Molde llavero cruces x3 cavidades 5cm x 3cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-cruzx3.webp?alt=media&token=65000843-fec2-4a87-b4a8-fec6dc91cf07',
			isNew: true,
		},
		{
			id: 242,
			title: 'Llaveros cruces x6',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: 'Molde llavero cruces x6 cavidades 5cm x 3cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/llav-cruzx6.webp?alt=media&token=2adabc13-69ad-4bd5-846e-0cc35f22aeee',
			isNew: true,
		},
		{
			id: 243,
			title: 'Abecedario y numeros 2cm',
			type: 'MoldesResina',
			offer: false,
			price: 3600,
			description: 'Molde abecedario y numeros 2cm x 2cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/abc2cm.webp?alt=media&token=42af324b-b55f-4264-b1e3-34d2e48b5458',
			isNew: true,
		},
		{
			id: 244,
			title: 'Mate x3',
			type: 'MoldesResina',
			offer: false,
			price: 2300,
			description: 'Molde con forma de mate 3 cavidades 4,5cm mas la bombilla 2,5cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/matex3.webp?alt=media&token=15eb63a7-db43-4c16-961d-385aecb39701',
			isNew: true,
		},
		{
			id: 245,
			title: 'Carroza',
			type: 'MoldesResina',
			offer: false,
			price: 4500,
			description: 'Molde con forma de carroza 10cm',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/carroza.webp?alt=media&token=3e24cc09-c27d-4c8f-a0e0-8699e391ee17',
			isNew: true,
		},


		
		{
			id: 300,
			title: 'Resina epoxi 300gr',
			type: 'ProductosVarios',
			offer: false,
			price: 5800,
			description: 'Resina epoxi marca cristal tack 300gr',
			sells: 20,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/res-cristaltack300.webp?alt=media&token=447ef459-4d17-4bc3-9d15-8c1813629aea',
			isNew: false,
		},
		{
			id: 301,
			title: 'Resina epoxi 750gr',
			type: 'ProductosVarios',
			offer: false,
			price: 11800,
			description: 'Resina epoxi cristal tack 750gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/res-cristaltack750.webp?alt=media&token=9d5242e4-3d54-466a-bb22-ffa745d675ba',
			isNew: false,
		},
		
		{
			id: 304,
			title: 'Pasta colorante rosa para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 910,
			description: 'Pasta colorante para resinas pigmento rosa 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-rosa.webp?alt=media&token=d8b28987-79d1-4b2d-bbcb-455f8fac5148',
			isNew: false,
		},
		{
			id: 305,
			title: 'Pasta colorante amarillo para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 910,
			description: 'Pasta colorante para resinas pigmento amarillo 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-amarillo.webp?alt=media&token=f4255220-c43d-4448-a4ad-7da31afb7903',
			isNew: false,
		},
		{
			id: 306,
			title: 'Pasta colorante azul para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 1400,
			description: 'Pasta colorante para resinas pigmento azul 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-azul.webp?alt=media&token=fab0186f-03d3-4ce5-b0d8-9fd01656c5cd',
			isNew: false,
		},
		{
			id: 307,
			title: 'Resina al agua Ecocryil 1,4kg',
			type: 'ProductosVarios',
			offer: false,
			price: 5700,
			description: 'Resina epoxi marca ecocryil de 1,4kg simil ceramigca',
			sells: 0,
			image: '/Images/ProductsImages/resinaepoxi700.jpg',
			isNew: false,
		},
		{
			id: 308,
			title: 'Pasta colorante negro para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 910,
			description: 'Pasta colorante para resinas pigmento negro 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-negro.webp?alt=media&token=f6c8ffde-cb8b-4988-b1ec-acdd6ade7347',
			isNew: false,
		},
		{
			id: 309,
			title: 'Pasta colorante fucsia para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 910,
			description: 'Pasta colorante para resinas pigmento fucsia 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-fucsia.webp?alt=media&token=b1a03540-1104-40e8-b41d-1c8f6912e9d0',
			isNew: false,
		},
		{
			id: 310,
			title: 'Pasta colorante rojo para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 1400,
			description: 'Pasta colorante para resinas pigmento rojo 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-rojo.webp?alt=media&token=8c4f5ee1-afd1-44b0-bf85-01ea8bfed47f',
			isNew: false,
		},
		{
			id: 311,
			title: 'Resina al agua Ecocryil 700g',
			type: 'ProductosVarios',
			offer: false,
			price: 3600,
			description: 'Resina epoxi marca ecocryil de 700g simil ceramigca',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/res-ecocryl700g.webp?alt=media&token=6c01416c-9515-4221-9f92-860f91d0454f',
			isNew: false,
		},
		{
			id: 312,
			title: 'Pasta colorante blanco para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 910,
			description: 'Pasta colorante para resinas pigmento blanco 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-blanco.webp?alt=media&token=1114edec-c248-4595-9000-ae5cc989f3c4',
			isNew: false,
		},/*
		{
			id: 313,
			title: 'Limpiador DPM liquido',
			type: 'ProductosVarios',
			offer: false,
			price: 1600,
			description: 'Limpiador liquido sin solventes para resinas epoxi 250cc',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/limpiadordpm.webp?alt=media&token=54a045a5-1902-4f48-8709-90e44987f85a',
			isNew: false,
		},*/
		/*
		{
			id: 314,
			title: 'Resina epoxi dicast 41',
			type: 'ProductosVarios',
			offer: false,
			price: 1170,
			description: 'Resina epoxi dicast 41 plastificada color natural 540g',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/res-dicast41.webp?alt=media&token=3f6274cb-d80e-4c33-be76-ded82eb482f8',
				isNew: false,
			},
			*/
		/*{
			id: 315,
			title: 'Resina epoxi glosstack 210gr',
			type: 'ProductosVarios',
			offer: false,
			price: 3050,
			description:
				'Resina epoxi glosstack cristal 210gr, dimensional epoxi cristalino, para acabados.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/res-glosstack.webp?alt=media&token=b95e7b38-6dd1-40d5-a3cc-edd4c5a35f33',
				isNew: false
			
		},*/
		{
			id: 317,
			title: 'Pasta colorante violeta para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 1400,
			description: 'Pasta colorante para resinas pigmento violeta 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-violeta.webp?alt=media&token=9540cce3-e021-4bc8-906c-5281eb6c4675',
			isNew: false,
		},
		{
			id: 319,
			title: 'Resina poliuretano Ebalta sg2000 400g',
			type: 'ProductosVarios',
			offer: false,
			price: 6400,
			description:
				'Compuesto de colada base poliuretano de muy baja viscosidad y endurecimiento rápido y alta calidad de reproducción de detalles. Color blanco tiza.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/res-poliuretano.webp?alt=media&token=d5306fe1-ce9c-4cc7-b61e-19e2d9f856bf',
			isNew: false,
		},
		{
			id: 320,
			title: 'Caucho RTV silcast 7020 500g',
			type: 'ProductosVarios',
			offer: false,
			price: 6900,
			description: 'Caucho de siliconas rtv silcast 7020 x500gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/sil-silcast7020.webp?alt=media&token=655dd348-c917-4eb3-ac87-6cb3f411c49c',
			isNew: false,
		},
		{
			id: 321,
			title: 'Pasta colorante amarillo fluor para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 2400,
			description: 'Pasta colorante para resinas pigmento amarillo fluor 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-amaf.webp?alt=media&token=561ba083-594f-4a4f-86a8-1c01189d2ab4',
			isNew: false,
		},
		{
			id: 322,
			title: 'Pasta colorante naranja fluor para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 2400,
			description: 'Pasta colorante para resinas pigmento naranja fluor 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-narf.webp?alt=media&token=be62e657-aaca-484c-b1f5-827b35bf53d0',
			isNew: false,
		},
		{
			id: 323,
			title: 'Pasta colorante rosa fluor para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 2400,
			description: 'Pasta colorante para resinas pigmento rosa fluor 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-rosaf.webp?alt=media&token=5e88ff35-602d-4269-b2b7-442ea9f50835',
			isNew: false,
		},
		{
			id: 324,
			title: 'Pasta colorante verde fluor para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 2400,
			description: 'Pasta colorante para resinas pigmento verde fluor 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-verdef.webp?alt=media&token=ea1b0550-b093-456c-9f6c-329ee0547191',
			isNew: false,
		},
		{
			id: 325,
			title: 'Pasta colorante celeste para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 1400,
			description: 'Pasta colorante para resinas pigmento celeste 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-celeste.webp?alt=media&token=5016a37c-7c5d-4bbc-bdc4-833bc85a43a7',
			isNew: false,
		},
		{
			id: 326,
			title: 'Pasta colorante rosa piel para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 1400,
			description: 'Pasta colorante para resinas pigmento rosa piel 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-rosa.webp?alt=media&token=d8b28987-79d1-4b2d-bbcb-455f8fac5148',
			isNew: false,
		},
		{
			id: 327,
			title: 'Pasta colorante cian para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 1400,
			description: 'Pasta colorante para resinas pigmento cian 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-cian.webp?alt=media&token=242498e1-d574-4baa-83cb-8b2a6434f95c',
			isNew: false,
		},
		{
			id: 328,
			title: 'Pasta colorante verde para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 1400,
			description: 'Pasta colorante para resinas pigmento verde 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-verde.webp?alt=media&token=2e981522-ad45-4412-8342-74b57df752ae',
			isNew: false,
		},
		{
			id: 329,
			title: 'Pasta colorante roja para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 910,
			description: 'Pasta colorante para resinas pigmento roja 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-rojo.webp?alt=media&token=8c4f5ee1-afd1-44b0-bf85-01ea8bfed47f',
			isNew: false,
		},
		{
			id: 330,
			title: 'Pasta colorante lila para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 1400,
			description: 'Pasta colorante para resinas pigmento lila 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-lila.webp?alt=media&token=d705fc44-fa1f-4df6-a18b-3cc04399fba5',
			isNew: false,
		},
		{
			id: 331,
			title: 'Pasta colorante marron para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 910,
			description: 'Pasta colorante para resinas pigmento marron 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-marron.webp?alt=media&token=8d6af6ab-4d18-444b-acca-640b8cf4b6f7',
			isNew: false,
		},
		{
			id: 332,
			title: 'Pasta colorante gris para resinas',
			type: 'ProductosVarios',
			offer: false,
			price: 910,
			description: 'Pasta colorante para resinas pigmento gris 25gr',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/pig-gris.webp?alt=media&token=5af783a4-01c9-4f43-aff3-43650d6f2d0c',
			isNew: false,
		},

		{
			id: 400,
			title: 'Tapas optica Chevrolet Cruze LTZ',
			type: '3D',
			offer: false,
			price: 3620,
			description: 'tapas optica para chevrolet Cruze LTZ extendida para led',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-ltz.webp?alt=media&token=06da17ae-a5ac-4f98-ac48-2b550c18e532',
			isNew: false,
		},
		{
			id: 401,
			title: 'Tapas optica Peugeot 208',
			type: '3D',
			offer: false,
			price: 3600,
			description:
				'Juego de tapas para peugeot 208, flexibles goma, fabricadas con impresión 3D',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-208.webp?alt=media&token=6c6b2477-a8d1-48f0-b92f-9bbb46c63c5f',
			isNew: false,
		},
		{
			id: 403,
			title: 'Tapas optica Chevrolet Cruze LT H7',
			type: '3D',
			offer: false,
			price: 3600,
			description:
				'tapas optica para chevrolet Cruze LT H7 extendida para led Aptas para colocarle el oring original de las tapas (no incluyen oring)',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-lth7.webp?alt=media&token=bae5d08f-da4e-4de2-99d1-4b69c5fbaa42',
			isNew: false,
		},
		{
			id: 404,
			title: 'Tapas optica Chevrolet Cruze LT Guantera',
			type: '3D',
			offer: false,
			price: 4900,
			description:
				'tapas optica para chevrolet Cruze Incluye las 4 tapas (H15 y H7) extendida para led Aptas para colocarle el oring original de las tapas (no incluyen oring)',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-cruze-lt-guantera.webp?alt=media&token=6e292f35-e394-4843-8985-711b87f24b8f',
			isNew: false,
		},
		{
			id: 405,
			title: 'Tapas optica BMW Gs F800 (2017/2018)',
			type: '3D',
			offer: false,
			price: 3600,
			description:
				'Par de tapas optica para BMW Gs F800 modelo (2017/2018) extendidas para colocar led, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-bmw-gsf800-1617.webp?alt=media&token=ec1375e9-c5e2-4d66-afeb-841d4c7b398b',
			isNew: false,
		},
		{
			id: 407,
			title: 'Tapas optica Yamaha super Tenere',
			type: '3D',
			offer: false,
			price: 3600,
			description:
				'Par de tapas optica extendidas para led para Yamaha super Tenere extendidas para colocar led, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-yamaha-supertenere.webp?alt=media&token=7611ec6d-3cfc-4705-a3c9-1ea164a29f07',
			isNew: false,
		},
		{
			id: 408,
			title: 'Tapas optica BMW Gs F800 modelos',
			type: '3D',
			offer: false,
			price: 3600,
			description:
				'Par de tapas optica para BMW Gs F800 y similares con tapas ovaladas extendidas para colocar led, ver foto de tapas originales, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'',
			isNew: false,
		},
		{
			id: 409,
			title: 'Tapas optica BMW s1000rr Xr y otros',
			type: '3D',
			offer: false,
			price: 3600,
			description:
				'Par de tapas optica para BMW s1000rr Xr y otros extendidas para colocar led, ver foto de tapas originales, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-bmw-s1000rr.webp?alt=media&token=e939fa8f-9dfd-4bef-9f55-36ab76009ffe',
			isNew: false,
		},
		{
			id: 410,
			title: 'Velador con forma de luna 14cm + base',
			type: '3D',
			offer: false,
			price: 3900,
			description:
				'Lampara luna velador 14cm con base decoración. Fabricada mediante impresión 3D',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/3d-luna-14cm.webp?alt=media&token=c2793c1c-cade-449a-8f10-76e529175959',
			isNew: false,
		},
		{
			id: 411,
			title: 'Tapas optica BMW Gs 1200 adventure y otros',
			type: '3D',
			offer: false,
			price: 3350,
			description:
				'Par de tapas optica para BMW Gs 1200 extendidas para colocar led, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'',
			isNew: false,
		},
		{
			id: 412,
			title: 'Soporte stand notebook',
			type: '3D',
			offer: false,
			price: 1980,
			description:
				'Soporte para notebook, refrigeracio, 5 posiciones, portatil',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/3d-stand-notebook.webp?alt=media&token=3aeb5f0b-789b-4fae-8a59-fc75728a77c5',
			isNew: false,
		},
		{
			id: 413,
			title: 'Tapas optica Peugeot 207',
			type: '3D',
			offer: false,
			price: 3300,
			description:
				'Par de tapas optica para Peugeot 207 extendidas para colocar led, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-207.webp?alt=media&token=9f4451d4-eeb3-424d-ad02-bae3630e405d',
			isNew: false,
		},
		{
			id: 414,
			title: '10 llaveros ninjacat',
			type: '3D',
			offer: false,
			price: 2160,
			description:
				'10 llaveros defensa personal ninjacat colores varios, impresion 3D',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/3d-ninjacat.webp?alt=media&token=62e5ebbd-ce4c-42fe-806c-2b9bc6f29d24',
			isNew: false,
		},
		{
			id: 415,
			title: 'Tapas optica Hyundai tucson',
			type: '3D',
			offer: false,
			price: 3300,
			description:
				'Par de tapas optica para Hyundai tucson extendidas para colocar led, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-hyundai-tucson.webp?alt=media&token=6b5fd334-3375-4917-9057-0b043229cf53',
			isNew: false,
		},
		{
			id: 416,
			title: 'Control de velocidad crucero para motos',
			type: '3D',
			offer: false,
			price: 600,
			description:
				' Control de velocidad crucero para todo tipo de moto, y cualquier medida de puño. UNIVERSAL - Adaptable a cualquier marca y modelo de moto.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/3d-control-velmoto.webp?alt=media&token=08829eeb-6e1c-44dd-95f1-f8c936cc6fc6',
			isNew: false,
		},
		{
			id: 417,
			title: 'Tapas optica Yamaha R3',
			type: '3D',
			offer: false,
			price: 3300,
			description:
				'Par de tapas optica para Yamaha R3 extendidas para colocar led, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-yamaha-r3.webp?alt=media&token=7270856d-3826-4815-8dc6-d52f748f65cd',
			isNew: false,
		},
		{
			id: 419,
			title: 'Tapas optica Chevrolet Tracker led 17/18',
			type: '3D',
			offer: false,
			price: 3600,
			description:
				'Par de tapas optica Chevrolet Tracker led 17/18 extendidas para colocar led, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-tracker1718.webp?alt=media&token=6f878251-b181-40ca-9266-45254397ccb2',
			isNew: false,
		},
		{
			id: 420,
			title: '50 llaveros ninjacat',
			type: '3D',
			offer: false,
			price: 6750,
			description:
				'50 llaveros defensa personal ninjacat colores varios, impresion 3D',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/3d-ninjacat.webp?alt=media&token=62e5ebbd-ce4c-42fe-806c-2b9bc6f29d24',
			isNew: false,
		},
		// {
		// 	id: 421,
		// 	title: 'Soporte playstation 4',
		// 	type: '3D',
		// 	offer: false,
		// 	price: 630,
		// 	description:
		// 		'soporte para playstation 4 para refrigeracion, mejor circulacion de aire',
		// 	sells: 0,
		// 	image:
		// 		'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/3d-sopplay.webp?alt=media&token=f8d53c76-0f90-41f1-9906-44b6c1687392',
		// 	isNew: false,
		// },
		{
			id: 422,
			title: 'Tapas optica Chevrolet Cruze LT H15 ALTAS',
			type: '3D',
			offer: false,
			price: 2970,
			description:
				'tapas optica para chevrolet Cruze LT H15 ALTAS extendida para led Aptas para colocarle el oring original de las tapas.',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-lth15.webp?alt=media&token=e69ae87a-c60e-4bb6-9204-896f81cf9da7',
			isNew: false,
		},
		{
			id: 423,
			title: 'Tapas optica Chevrolet Onix',
			type: '3D',
			offer: false,
			price: 3300,
			description:
				'Juego de tapas optica para chevrolet Onix extendida para led',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-onix.webp?alt=media&token=f2ec2f74-7ea3-4f3e-9801-87505a608c43',
			isNew: false,
		},
		{
			id: 424,
			title: 'Exhibidor de lentes',
			type: '3D',
			offer: false,
			price: 3600,
			description: 'Exhibidor de lentes para optica de impresion 3D',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/3d-exhibidorcabeza.webp?alt=media&token=afc71057-cee0-405b-a327-db1b85eab604',
			isNew: false,
		},
		{
			id: 425,
			title: 'Tapas optica BMW Gs 1200',
			type: '3D',
			offer: false,
			price: 3600,
			description:
				'Par de tapas optica para BMW Gs 1200 extendidas para colocar led, colocar el oring de las tapas originales',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/opt-gs1200.webp?alt=media&token=e4ce43e6-2bcd-41c9-8291-1c6f683b2138',
			isNew: false,
		},

		{
			id: 500,
			title: 'Letra A',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraA.webp?alt=media&token=aa0a909e-3a9f-4650-937a-c7914ff7742a',
			isNew: false,
		},
		{
			id: 501,
			title: 'Letra B',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraB.webp?alt=media&token=cf57aec9-bbad-40fe-b488-76634376fbe4',
			isNew: false,
		},
		{
			id: 503,
			title: 'Letra C',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraC.webp?alt=media&token=c1c49482-4c79-4e6a-b9a0-fa75036877a7',
			isNew: false,
		},
		{
			id: 504,
			title: 'Letra D',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraD.webp?alt=media&token=069f565f-22d9-46cf-b8c8-1fc00dd29bed',
			isNew: false,
		},
		{
			id: 505,
			title: 'Letra E',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraE.webp?alt=media&token=52d35449-60cc-41e5-ab5d-1837dd9136e7',
			isNew: false,
		},
		{
			id: 506,
			title: 'Letra F',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraF.webp?alt=media&token=683754d3-fc5e-4726-ad9f-39275d58b5e2',
			isNew: false,
		},
		{
			id: 507,
			title: 'Letra G',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraG.webp?alt=media&token=1db27c72-00cd-4e41-a35a-9791786ea883',
			isNew: false,
		},
		{
			id: 508,
			title: 'Letra H',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraH.webp?alt=media&token=32d27d3d-78c6-443d-a72a-166c35221d7c',
			isNew: false,
		},
		{
			id: 509,
			title: 'Letra I',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letrai.webp?alt=media&token=d5fad97c-c90d-4655-a481-17afc1a16d14',
			isNew: false,
		},
		{
			id: 510,
			title: 'Letra J',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraJ.webp?alt=media&token=a4b09e8e-6d75-4129-bd3f-71536bc99554',
			isNew: false,
		},
		{
			id: 511,
			title: 'Letra K',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraK.webp?alt=media&token=3211ad01-a456-42e1-a251-bd8d5ff56b94',
			isNew: false,
		},
		{
			id: 512,
			title: 'Letra L',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraL.webp?alt=media&token=38397c94-8107-4da5-9318-4f802917ac66',
			isNew: false,
		},
		{
			id: 513,
			title: 'Letra M',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraM.webp?alt=media&token=1df1f92a-9eb1-4948-af4c-16ab2b9e202b',
			isNew: false,
		},
		{
			id: 514,
			title: 'Letra N',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraN.webp?alt=media&token=b1265f7c-b8e3-4b62-9a8c-0155c7cf6dcd',
			isNew: false,
		},
		{
			id: 515,
			title: 'Letra O',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraO.webp?alt=media&token=a86341e5-8e10-4dc9-980a-7f875dc81584',
			isNew: false,
		},
		{
			id: 516,
			title: 'Letra P',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraP.webp?alt=media&token=92c9ee0b-7119-46b1-bf18-da969ec91a4f',
			isNew: false,
		},
		{
			id: 517,
			title: 'Letra Q',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraQ.webp?alt=media&token=919fed91-97d4-44f4-b457-7022d4aa12ce',
			isNew: false,
		},
		{
			id: 518,
			title: 'Letra R',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraR.webp?alt=media&token=6f8ad3a3-9069-41ae-ae2e-14bf231a89d4',
			isNew: false,
		},
		{
			id: 519,
			title: 'Letra S',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraS.webp?alt=media&token=9626087b-dd0e-4990-a98e-24f30edc6fc3',
			isNew: false,
		},
		{
			id: 520,
			title: 'Letra T',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraT.webp?alt=media&token=f2b01d07-db6a-4dd5-b2b7-6b9c559bca80',
			isNew: false,
		},
		{
			id: 521,
			title: 'Letra U',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraU.webp?alt=media&token=6f31f65d-1fa1-4ff6-a170-a62251eceb96',
			isNew: false,
		},
		{
			id: 522,
			title: 'Letra V',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraV.webp?alt=media&token=bf57bc6a-acca-4265-9f66-b91807706bf3',
			isNew: false,
		},
		{
			id: 523,
			title: 'Letra W',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraW.webp?alt=media&token=cd07723a-72be-436a-a2dd-780b48b2104c',
			isNew: false,
		},
		{
			id: 524,
			title: 'Letra X',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraX.webp?alt=media&token=84bba568-6005-4ae3-a676-c1fca2cb174a',
			isNew: false,
		},
		{
			id: 525,
			title: 'Letra Y',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraY.webp?alt=media&token=a8ecbfce-8ada-4939-8f2b-f576141d2b7e',
			isNew: false,
		},
		{
			id: 526,
			title: 'Letra Z',
			type: 'Letras',
			offer: false,
			price: 810,
			description: 'Letra individual de 5cm y 0,5cm de profundidad',
			sells: 0,
			image:
				'https://firebasestorage.googleapis.com/v0/b/mementica3d-db4af.appspot.com/o/letraZ.webp?alt=media&token=ee746bf6-2b0d-4b1c-acc9-0c683cff06e4',
			isNew: false,
		},
	],
};
