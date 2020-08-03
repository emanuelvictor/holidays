'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('region', [
      {
        code: 1100015,
        name: "Alta Floresta D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100379,
        name: "Alto Alegre dos Parecis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100403,
        name: "Alto Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100346,
        name: "Alvorada D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100023,
        name: "Ariquemes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100452,
        name: "Buritis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100031,
        name: "Cabixi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100601,
        name: "Cacaulândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100049,
        name: "Cacoal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100700,
        name: "Campo Novo de Rondônia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100809,
        name: "Candeias do Jamari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100908,
        name: "Castanheiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100056,
        name: "Cerejeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100924,
        name: "Chupinguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100064,
        name: "Colorado do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100072,
        name: "Corumbiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100080,
        name: "Costa Marques",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100940,
        name: "Cujubim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100098,
        name: "Espigão D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101005,
        name: "Governador Jorge Teixeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100106,
        name: "Guajará-Mirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101104,
        name: "Itapuã do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100114,
        name: "Jaru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100122,
        name: "Ji-Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100130,
        name: "Machadinho D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101203,
        name: "Ministro Andreazza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101302,
        name: "Mirante da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101401,
        name: "Monte Negro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100148,
        name: "Nova Brasilândia D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100338,
        name: "Nova Mamoré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101435,
        name: "Nova União",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100502,
        name: "Novo Horizonte do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100155,
        name: "Ouro Preto do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101450,
        name: "Parecis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100189,
        name: "Pimenta Bueno",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101468,
        name: "Pimenteiras do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100205,
        name: "Porto Velho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100254,
        name: "Presidente Médici",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101476,
        name: "Primavera de Rondônia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100262,
        name: "Rio Crespo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100288,
        name: "Rolim de Moura",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100296,
        name: "Santa Luzia D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101484,
        name: "São Felipe D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101492,
        name: "São Francisco do Guaporé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100320,
        name: "São Miguel do Guaporé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101500,
        name: "Seringueiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101559,
        name: "Teixeirópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101609,
        name: "Theobroma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101708,
        name: "Urupá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101757,
        name: "Vale do Anari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1101807,
        name: "Vale do Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1100304,
        name: "Vilhena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 11
      },
      {
        code: 1200013,
        name: "Acrelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200054,
        name: "Assis Brasil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200104,
        name: "Brasiléia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200138,
        name: "Bujari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200179,
        name: "Capixaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200203,
        name: "Cruzeiro do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200252,
        name: "Epitaciolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200302,
        name: "Feijó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200328,
        name: "Jordão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200336,
        name: "Mâncio Lima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200344,
        name: "Manoel Urbano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200351,
        name: "Marechal Thaumaturgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200385,
        name: "Plácido de Castro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200807,
        name: "Porto Acre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200393,
        name: "Porto Walter",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200401,
        name: "Rio Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200427,
        name: "Rodrigues Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200435,
        name: "Santa Rosa do Purus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200500,
        name: "Sena Madureira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200450,
        name: "Senador Guiomard",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200609,
        name: "Tarauacá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1200708,
        name: "Xapuri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 12
      },
      {
        code: 1300029,
        name: "Alvarães",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300060,
        name: "Amaturá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300086,
        name: "Anamã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300102,
        name: "Anori",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300144,
        name: "Apuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300201,
        name: "Atalaia do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300300,
        name: "Autazes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300409,
        name: "Barcelos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300508,
        name: "Barreirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300607,
        name: "Benjamin Constant",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300631,
        name: "Beruri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300680,
        name: "Boa Vista do Ramos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300706,
        name: "Boca do Acre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300805,
        name: "Borba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300839,
        name: "Caapiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1300904,
        name: "Canutama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301001,
        name: "Carauari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301100,
        name: "Careiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301159,
        name: "Careiro da Várzea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301209,
        name: "Coari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301308,
        name: "Codajás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301407,
        name: "Eirunepé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301506,
        name: "Envira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301605,
        name: "Fonte Boa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301654,
        name: "Guajará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301704,
        name: "Humaitá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301803,
        name: "Ipixuna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301852,
        name: "Iranduba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301902,
        name: "Itacoatiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1301951,
        name: "Itamarati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302009,
        name: "Itapiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302108,
        name: "Japurá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302207,
        name: "Juruá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302306,
        name: "Jutaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302405,
        name: "Lábrea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302504,
        name: "Manacapuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302553,
        name: "Manaquiri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302603,
        name: "Manaus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302702,
        name: "Manicoré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302801,
        name: "Maraã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1302900,
        name: "Maués",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303007,
        name: "Nhamundá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303106,
        name: "Nova Olinda do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303205,
        name: "Novo Airão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303304,
        name: "Novo Aripuanã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303403,
        name: "Parintins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303502,
        name: "Pauini",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303536,
        name: "Presidente Figueiredo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303569,
        name: "Rio Preto da Eva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303601,
        name: "Santa Isabel do Rio Negro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303700,
        name: "Santo Antônio do Içá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303809,
        name: "São Gabriel da Cachoeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303908,
        name: "São Paulo de Olivença",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1303957,
        name: "São Sebastião do Uatumã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1304005,
        name: "Silves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1304062,
        name: "Tabatinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1304104,
        name: "Tapauá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1304203,
        name: "Tefé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1304237,
        name: "Tonantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1304260,
        name: "Uarini",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1304302,
        name: "Urucará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1304401,
        name: "Urucurituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 13
      },
      {
        code: 1400050,
        name: "Alto Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400027,
        name: "Amajari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400100,
        name: "Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400159,
        name: "Bonfim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400175,
        name: "Cantá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400209,
        name: "Caracaraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400233,
        name: "Caroebe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400282,
        name: "Iracema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400308,
        name: "Mucajaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400407,
        name: "Normandia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400456,
        name: "Pacaraima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400472,
        name: "Rorainópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400506,
        name: "São João da Baliza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400605,
        name: "São Luiz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1400704,
        name: "Uiramutã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 14
      },
      {
        code: 1500107,
        name: "Abaetetuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500131,
        name: "Abel Figueiredo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500206,
        name: "Acará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500305,
        name: "Afuá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500347,
        name: "Água Azul do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500404,
        name: "Alenquer",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500503,
        name: "Almeirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500602,
        name: "Altamira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500701,
        name: "Anajás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500800,
        name: "Ananindeua",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500859,
        name: "Anapu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500909,
        name: "Augusto Corrêa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1500958,
        name: "Aurora do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501006,
        name: "Aveiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501105,
        name: "Bagre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501204,
        name: "Baião",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501253,
        name: "Bannach",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501303,
        name: "Barcarena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501402,
        name: "Belém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501451,
        name: "Belterra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501501,
        name: "Benevides",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501576,
        name: "Bom Jesus do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501600,
        name: "Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501709,
        name: "Bragança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501725,
        name: "Brasil Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501758,
        name: "Brejo Grande do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501782,
        name: "Breu Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501808,
        name: "Breves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501907,
        name: "Bujaru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502004,
        name: "Cachoeira do Arari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1501956,
        name: "Cachoeira do Piriá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502103,
        name: "Cametá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502152,
        name: "Canaã dos Carajás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502202,
        name: "Capanema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502301,
        name: "Capitão Poço",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502400,
        name: "Castanhal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502509,
        name: "Chaves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502608,
        name: "Colares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502707,
        name: "Conceição do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502756,
        name: "Concórdia do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502764,
        name: "Cumaru do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502772,
        name: "Curionópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502806,
        name: "Curralinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502855,
        name: "Curuá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502905,
        name: "Curuçá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502939,
        name: "Dom Eliseu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1502954,
        name: "Eldorado do Carajás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503002,
        name: "Faro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503044,
        name: "Floresta do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503077,
        name: "Garrafão do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503093,
        name: "Goianésia do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503101,
        name: "Gurupá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503200,
        name: "Igarapé-Açu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503309,
        name: "Igarapé-Miri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503408,
        name: "Inhangapi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503457,
        name: "Ipixuna do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503507,
        name: "Irituia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503606,
        name: "Itaituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503705,
        name: "Itupiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503754,
        name: "Jacareacanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503804,
        name: "Jacundá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1503903,
        name: "Juruti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504000,
        name: "Limoeiro do Ajuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504059,
        name: "Mãe do Rio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504109,
        name: "Magalhães Barata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504208,
        name: "Marabá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504307,
        name: "Maracanã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504406,
        name: "Marapanim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504422,
        name: "Marituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504455,
        name: "Medicilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504505,
        name: "Melgaço",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504604,
        name: "Mocajuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504703,
        name: "Moju",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504752,
        name: "Mojuí dos Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504802,
        name: "Monte Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504901,
        name: "Muaná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504950,
        name: "Nova Esperança do Piriá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1504976,
        name: "Nova Ipixuna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505007,
        name: "Nova Timboteua",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505031,
        name: "Novo Progresso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505064,
        name: "Novo Repartimento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505106,
        name: "Óbidos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505205,
        name: "Oeiras do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505304,
        name: "Oriximiná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505403,
        name: "Ourém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505437,
        name: "Ourilândia do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505486,
        name: "Pacajá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505494,
        name: "Palestina do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505502,
        name: "Paragominas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505536,
        name: "Parauapebas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505551,
        name: "Pau D'Arco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505601,
        name: "Peixe-Boi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505635,
        name: "Piçarra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505650,
        name: "Placas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505700,
        name: "Ponta de Pedras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505809,
        name: "Portel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1505908,
        name: "Porto de Moz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506005,
        name: "Prainha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506104,
        name: "Primavera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506112,
        name: "Quatipuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506138,
        name: "Redenção",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506161,
        name: "Rio Maria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506187,
        name: "Rondon do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506195,
        name: "Rurópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506203,
        name: "Salinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506302,
        name: "Salvaterra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506351,
        name: "Santa Bárbara do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506401,
        name: "Santa Cruz do Arari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506500,
        name: "Santa Izabel do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506559,
        name: "Santa Luzia do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506583,
        name: "Santa Maria das Barreiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506609,
        name: "Santa Maria do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506708,
        name: "Santana do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506807,
        name: "Santarém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1506906,
        name: "Santarém Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507003,
        name: "Santo Antônio do Tauá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507102,
        name: "São Caetano de Odivelas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507151,
        name: "São Domingos do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507201,
        name: "São Domingos do Capim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507300,
        name: "São Félix do Xingu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507409,
        name: "São Francisco do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507458,
        name: "São Geraldo do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507466,
        name: "São João da Ponta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507474,
        name: "São João de Pirabas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507508,
        name: "São João do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507607,
        name: "São Miguel do Guamá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507706,
        name: "São Sebastião da Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507755,
        name: "Sapucaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507805,
        name: "Senador José Porfírio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507904,
        name: "Soure",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507953,
        name: "Tailândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507961,
        name: "Terra Alta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1507979,
        name: "Terra Santa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508001,
        name: "Tomé-Açu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508035,
        name: "Tracuateua",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508050,
        name: "Trairão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508084,
        name: "Tucumã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508100,
        name: "Tucuruí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508126,
        name: "Ulianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508159,
        name: "Uruará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508209,
        name: "Vigia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508308,
        name: "Viseu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508357,
        name: "Vitória do Xingu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1508407,
        name: "Xinguara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 15
      },
      {
        code: 1600105,
        name: "Amapá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600204,
        name: "Calçoene",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600212,
        name: "Cutias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600238,
        name: "Ferreira Gomes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600253,
        name: "Itaubal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600279,
        name: "Laranjal do Jari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600303,
        name: "Macapá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600402,
        name: "Mazagão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600501,
        name: "Oiapoque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600154,
        name: "Pedra Branca do Amapari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600535,
        name: "Porto Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600550,
        name: "Pracuúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600600,
        name: "Santana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600055,
        name: "Serra do Navio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600709,
        name: "Tartarugalzinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1600808,
        name: "Vitória do Jari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 16
      },
      {
        code: 1700251,
        name: "Abreulândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1700301,
        name: "Aguiarnópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1700350,
        name: "Aliança do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1700400,
        name: "Almas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1700707,
        name: "Alvorada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1701002,
        name: "Ananás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1701051,
        name: "Angico",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1701101,
        name: "Aparecida do Rio Negro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1701309,
        name: "Aragominas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1701903,
        name: "Araguacema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702000,
        name: "Araguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702109,
        name: "Araguaína",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702158,
        name: "Araguanã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702208,
        name: "Araguatins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702307,
        name: "Arapoema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702406,
        name: "Arraias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702554,
        name: "Augustinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702703,
        name: "Aurora do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1702901,
        name: "Axixá do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703008,
        name: "Babaçulândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703057,
        name: "Bandeirantes do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703073,
        name: "Barra do Ouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703107,
        name: "Barrolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703206,
        name: "Bernardo Sayão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703305,
        name: "Bom Jesus do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703602,
        name: "Brasilândia do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703701,
        name: "Brejinho de Nazaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703800,
        name: "Buriti do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703826,
        name: "Cachoeirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703842,
        name: "Campos Lindos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703867,
        name: "Cariri do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703883,
        name: "Carmolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703891,
        name: "Carrasco Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1703909,
        name: "Caseara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1704105,
        name: "Centenário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1705102,
        name: "Chapada da Natividade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1704600,
        name: "Chapada de Areia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1705508,
        name: "Colinas do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1716703,
        name: "Colméia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1705557,
        name: "Combinado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1705607,
        name: "Conceição do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1706001,
        name: "Couto Magalhães",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1706100,
        name: "Cristalândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1706258,
        name: "Crixás do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1706506,
        name: "Darcinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1707009,
        name: "Dianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1707108,
        name: "Divinópolis do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1707207,
        name: "Dois Irmãos do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1707306,
        name: "Dueré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1707405,
        name: "Esperantina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1707553,
        name: "Fátima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1707652,
        name: "Figueirópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1707702,
        name: "Filadélfia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1708205,
        name: "Formoso do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1708304,
        name: "Goianorte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1709005,
        name: "Goiatins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1709302,
        name: "Guaraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1709500,
        name: "Gurupi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1709807,
        name: "Ipueiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1710508,
        name: "Itacajá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1710706,
        name: "Itaguatins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1710904,
        name: "Itapiratins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1711100,
        name: "Itaporã do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1711506,
        name: "Jaú do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1711803,
        name: "Juarina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1711902,
        name: "Lagoa da Confusão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1711951,
        name: "Lagoa do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1712009,
        name: "Lajeado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1712157,
        name: "Lavandeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1712405,
        name: "Lizarda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1712454,
        name: "Luzinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1712504,
        name: "Marianópolis do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1712702,
        name: "Mateiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1712801,
        name: "Maurilândia do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1713205,
        name: "Miracema do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1713304,
        name: "Miranorte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1713601,
        name: "Monte do Carmo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1713700,
        name: "Monte Santo do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1713957,
        name: "Muricilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1714203,
        name: "Natividade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1714302,
        name: "Nazaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1714880,
        name: "Nova Olinda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1715002,
        name: "Nova Rosalândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1715101,
        name: "Novo Acordo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1715150,
        name: "Novo Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1715259,
        name: "Novo Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1715507,
        name: "Oliveira de Fátima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1721000,
        name: "Palmas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1715705,
        name: "Palmeirante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1713809,
        name: "Palmeiras do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1715754,
        name: "Palmeirópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1716109,
        name: "Paraíso do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1716208,
        name: "Paranã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1716307,
        name: "Pau D'Arco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1716505,
        name: "Pedro Afonso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1716604,
        name: "Peixe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1716653,
        name: "Pequizeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1717008,
        name: "Pindorama do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1717206,
        name: "Piraquê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1717503,
        name: "Pium",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1717800,
        name: "Ponte Alta do Bom Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1717909,
        name: "Ponte Alta do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718006,
        name: "Porto Alegre do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718204,
        name: "Porto Nacional",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718303,
        name: "Praia Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718402,
        name: "Presidente Kennedy",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718451,
        name: "Pugmil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718501,
        name: "Recursolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718550,
        name: "Riachinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718659,
        name: "Rio da Conceição",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718709,
        name: "Rio dos Bois",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718758,
        name: "Rio Sono",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718808,
        name: "Sampaio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718840,
        name: "Sandolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718865,
        name: "Santa Fé do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718881,
        name: "Santa Maria do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718899,
        name: "Santa Rita do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1718907,
        name: "Santa Rosa do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1719004,
        name: "Santa Tereza do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720002,
        name: "Santa Terezinha do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720101,
        name: "São Bento do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720150,
        name: "São Félix do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720200,
        name: "São Miguel do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720259,
        name: "São Salvador do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720309,
        name: "São Sebastião do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720499,
        name: "São Valério",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720655,
        name: "Silvanópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720804,
        name: "Sítio Novo do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720853,
        name: "Sucupira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1708254,
        name: "Tabocão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720903,
        name: "Taguatinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720937,
        name: "Taipas do Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1720978,
        name: "Talismã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1721109,
        name: "Tocantínia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1721208,
        name: "Tocantinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1721257,
        name: "Tupirama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1721307,
        name: "Tupiratins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1722081,
        name: "Wanderlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 1722107,
        name: "Xambioá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 17
      },
      {
        code: 2100055,
        name: "Açailândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100105,
        name: "Afonso Cunha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100154,
        name: "Água Doce do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100204,
        name: "Alcântara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100303,
        name: "Aldeias Altas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100402,
        name: "Altamira do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100436,
        name: "Alto Alegre do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100477,
        name: "Alto Alegre do Pindaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100501,
        name: "Alto Parnaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100550,
        name: "Amapá do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100600,
        name: "Amarante do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100709,
        name: "Anajatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100808,
        name: "Anapurus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100832,
        name: "Apicum-Açu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100873,
        name: "Araguanã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100907,
        name: "Araioses",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2100956,
        name: "Arame",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101004,
        name: "Arari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101103,
        name: "Axixá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101202,
        name: "Bacabal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101251,
        name: "Bacabeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101301,
        name: "Bacuri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101350,
        name: "Bacurituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101400,
        name: "Balsas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101509,
        name: "Barão de Grajaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101608,
        name: "Barra do Corda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101707,
        name: "Barreirinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101772,
        name: "Bela Vista do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101731,
        name: "Belágua",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101806,
        name: "Benedito Leite",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101905,
        name: "Bequimão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101939,
        name: "Bernardo do Mearim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2101970,
        name: "Boa Vista do Gurupi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102002,
        name: "Bom Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102036,
        name: "Bom Jesus das Selvas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102077,
        name: "Bom Lugar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102101,
        name: "Brejo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102150,
        name: "Brejo de Areia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102200,
        name: "Buriti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102309,
        name: "Buriti Bravo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102325,
        name: "Buriticupu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102358,
        name: "Buritirana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102374,
        name: "Cachoeira Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102408,
        name: "Cajapió",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102507,
        name: "Cajari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102556,
        name: "Campestre do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102606,
        name: "Cândido Mendes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102705,
        name: "Cantanhede",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102754,
        name: "Capinzal do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102804,
        name: "Carolina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2102903,
        name: "Carutapera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103000,
        name: "Caxias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103109,
        name: "Cedral",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103125,
        name: "Central do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103158,
        name: "Centro do Guilherme",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103174,
        name: "Centro Novo do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103208,
        name: "Chapadinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103257,
        name: "Cidelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103307,
        name: "Codó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103406,
        name: "Coelho Neto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103505,
        name: "Colinas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103554,
        name: "Conceição do Lago-Açu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103604,
        name: "Coroatá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103703,
        name: "Cururupu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103752,
        name: "Davinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103802,
        name: "Dom Pedro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2103901,
        name: "Duque Bacelar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104008,
        name: "Esperantinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104057,
        name: "Estreito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104073,
        name: "Feira Nova do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104081,
        name: "Fernando Falcão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104099,
        name: "Formosa da Serra Negra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104107,
        name: "Fortaleza dos Nogueiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104206,
        name: "Fortuna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104305,
        name: "Godofredo Viana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104404,
        name: "Gonçalves Dias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104503,
        name: "Governador Archer",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104552,
        name: "Governador Edison Lobão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104602,
        name: "Governador Eugênio Barros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104628,
        name: "Governador Luiz Rocha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104651,
        name: "Governador Newton Bello",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104677,
        name: "Governador Nunes Freire",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104701,
        name: "Graça Aranha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104800,
        name: "Grajaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2104909,
        name: "Guimarães",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105005,
        name: "Humberto de Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105104,
        name: "Icatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105153,
        name: "Igarapé do Meio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105203,
        name: "Igarapé Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105302,
        name: "Imperatriz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105351,
        name: "Itaipava do Grajaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105401,
        name: "Itapecuru Mirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105427,
        name: "Itinga do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105450,
        name: "Jatobá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105476,
        name: "Jenipapo dos Vieiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105500,
        name: "João Lisboa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105609,
        name: "Joselândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105658,
        name: "Junco do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105708,
        name: "Lago da Pedra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105807,
        name: "Lago do Junco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105948,
        name: "Lago dos Rodrigues",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105906,
        name: "Lago Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105922,
        name: "Lagoa do Mato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105963,
        name: "Lagoa Grande do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2105989,
        name: "Lajeado Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106003,
        name: "Lima Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106102,
        name: "Loreto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106201,
        name: "Luís Domingues",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106300,
        name: "Magalhães de Almeida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106326,
        name: "Maracaçumé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106359,
        name: "Marajá do Sena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106375,
        name: "Maranhãozinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106409,
        name: "Mata Roma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106508,
        name: "Matinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106607,
        name: "Matões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106631,
        name: "Matões do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106672,
        name: "Milagres do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106706,
        name: "Mirador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106755,
        name: "Miranda do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106805,
        name: "Mirinzal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2106904,
        name: "Monção",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107001,
        name: "Montes Altos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107100,
        name: "Morros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107209,
        name: "Nina Rodrigues",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107258,
        name: "Nova Colinas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107308,
        name: "Nova Iorque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107357,
        name: "Nova Olinda do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107407,
        name: "Olho d'Água das Cunhãs",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107456,
        name: "Olinda Nova do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107506,
        name: "Paço do Lumiar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107605,
        name: "Palmeirândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107704,
        name: "Paraibano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107803,
        name: "Parnarama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2107902,
        name: "Passagem Franca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108009,
        name: "Pastos Bons",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108058,
        name: "Paulino Neves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108108,
        name: "Paulo Ramos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108207,
        name: "Pedreiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108256,
        name: "Pedro do Rosário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108306,
        name: "Penalva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108405,
        name: "Peri Mirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108454,
        name: "Peritoró",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108504,
        name: "Pindaré-Mirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108603,
        name: "Pinheiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108702,
        name: "Pio XII",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108801,
        name: "Pirapemas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2108900,
        name: "Poção de Pedras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109007,
        name: "Porto Franco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109056,
        name: "Porto Rico do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109106,
        name: "Presidente Dutra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109205,
        name: "Presidente Juscelino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109239,
        name: "Presidente Médici",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109270,
        name: "Presidente Sarney",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109304,
        name: "Presidente Vargas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109403,
        name: "Primeira Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109452,
        name: "Raposa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109502,
        name: "Riachão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109551,
        name: "Ribamar Fiquene",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109601,
        name: "Rosário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109700,
        name: "Sambaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109759,
        name: "Santa Filomena do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109809,
        name: "Santa Helena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2109908,
        name: "Santa Inês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110005,
        name: "Santa Luzia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110039,
        name: "Santa Luzia do Paruá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110104,
        name: "Santa Quitéria do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110203,
        name: "Santa Rita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110237,
        name: "Santana do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110278,
        name: "Santo Amaro do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110302,
        name: "Santo Antônio dos Lopes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110401,
        name: "São Benedito do Rio Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110500,
        name: "São Bento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110609,
        name: "São Bernardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110658,
        name: "São Domingos do Azeitão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110708,
        name: "São Domingos do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110807,
        name: "São Félix de Balsas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110856,
        name: "São Francisco do Brejão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2110906,
        name: "São Francisco do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111003,
        name: "São João Batista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111029,
        name: "São João do Carú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111052,
        name: "São João do Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111078,
        name: "São João do Soter",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111102,
        name: "São João dos Patos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111201,
        name: "São José de Ribamar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111250,
        name: "São José dos Basílios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111300,
        name: "São Luís",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111409,
        name: "São Luís Gonzaga do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111508,
        name: "São Mateus do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111532,
        name: "São Pedro da Água Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111573,
        name: "São Pedro dos Crentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111607,
        name: "São Raimundo das Mangabeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111631,
        name: "São Raimundo do Doca Bezerra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111672,
        name: "São Roberto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111706,
        name: "São Vicente Ferrer",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111722,
        name: "Satubinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111748,
        name: "Senador Alexandre Costa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111763,
        name: "Senador La Rocque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111789,
        name: "Serrano do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111805,
        name: "Sítio Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111904,
        name: "Sucupira do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2111953,
        name: "Sucupira do Riachão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112001,
        name: "Tasso Fragoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112100,
        name: "Timbiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112209,
        name: "Timon",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112233,
        name: "Trizidela do Vale",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112274,
        name: "Tufilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112308,
        name: "Tuntum",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112407,
        name: "Turiaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112456,
        name: "Turilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112506,
        name: "Tutóia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112605,
        name: "Urbano Santos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112704,
        name: "Vargem Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112803,
        name: "Viana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112852,
        name: "Vila Nova dos Martírios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2112902,
        name: "Vitória do Mearim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2113009,
        name: "Vitorino Freire",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2114007,
        name: "Zé Doca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 21
      },
      {
        code: 2200053,
        name: "Acauã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200103,
        name: "Agricolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200202,
        name: "Água Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200251,
        name: "Alagoinha do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200277,
        name: "Alegrete do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200301,
        name: "Alto Longá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200400,
        name: "Altos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200459,
        name: "Alvorada do Gurguéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200509,
        name: "Amarante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200608,
        name: "Angical do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200707,
        name: "Anísio de Abreu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200806,
        name: "Antônio Almeida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200905,
        name: "Aroazes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2200954,
        name: "Aroeiras do Itaim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201002,
        name: "Arraial",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201051,
        name: "Assunção do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201101,
        name: "Avelino Lopes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201150,
        name: "Baixa Grande do Ribeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201176,
        name: "Barra D'Alcântara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201200,
        name: "Barras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201309,
        name: "Barreiras do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201408,
        name: "Barro Duro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201507,
        name: "Batalha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201556,
        name: "Bela Vista do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201572,
        name: "Belém do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201606,
        name: "Beneditinos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201705,
        name: "Bertolínia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201739,
        name: "Betânia do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201770,
        name: "Boa Hora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201804,
        name: "Bocaina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201903,
        name: "Bom Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201919,
        name: "Bom Princípio do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201929,
        name: "Bonfim do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201945,
        name: "Boqueirão do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201960,
        name: "Brasileira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2201988,
        name: "Brejo do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202000,
        name: "Buriti dos Lopes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202026,
        name: "Buriti dos Montes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202059,
        name: "Cabeceiras do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202075,
        name: "Cajazeiras do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202083,
        name: "Cajueiro da Praia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202091,
        name: "Caldeirão Grande do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202109,
        name: "Campinas do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202117,
        name: "Campo Alegre do Fidalgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202133,
        name: "Campo Grande do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202174,
        name: "Campo Largo do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202208,
        name: "Campo Maior",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202251,
        name: "Canavieira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202307,
        name: "Canto do Buriti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202406,
        name: "Capitão de Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202455,
        name: "Capitão Gervásio Oliveira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202505,
        name: "Caracol",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202539,
        name: "Caraúbas do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202554,
        name: "Caridade do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202604,
        name: "Castelo do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202653,
        name: "Caxingó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202703,
        name: "Cocal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202711,
        name: "Cocal de Telha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202729,
        name: "Cocal dos Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202737,
        name: "Coivaras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202752,
        name: "Colônia do Gurguéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202778,
        name: "Colônia do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202802,
        name: "Conceição do Canindé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202851,
        name: "Coronel José Dias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2202901,
        name: "Corrente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203008,
        name: "Cristalândia do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203107,
        name: "Cristino Castro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203206,
        name: "Curimatá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203230,
        name: "Currais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203271,
        name: "Curral Novo do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203255,
        name: "Curralinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203305,
        name: "Demerval Lobão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203354,
        name: "Dirceu Arcoverde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203404,
        name: "Dom Expedito Lopes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203453,
        name: "Dom Inocêncio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203420,
        name: "Domingos Mourão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203503,
        name: "Elesbão Veloso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203602,
        name: "Eliseu Martins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203701,
        name: "Esperantina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203750,
        name: "Fartura do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203800,
        name: "Flores do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203859,
        name: "Floresta do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2203909,
        name: "Floriano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204006,
        name: "Francinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204105,
        name: "Francisco Ayres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204154,
        name: "Francisco Macedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204204,
        name: "Francisco Santos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204303,
        name: "Fronteiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204352,
        name: "Geminiano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204402,
        name: "Gilbués",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204501,
        name: "Guadalupe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204550,
        name: "Guaribas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204600,
        name: "Hugo Napoleão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204659,
        name: "Ilha Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204709,
        name: "Inhuma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204808,
        name: "Ipiranga do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2204907,
        name: "Isaías Coelho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205003,
        name: "Itainópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205102,
        name: "Itaueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205151,
        name: "Jacobina do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205201,
        name: "Jaicós",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205250,
        name: "Jardim do Mulato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205276,
        name: "Jatobá do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205300,
        name: "Jerumenha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205359,
        name: "João Costa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205409,
        name: "Joaquim Pires",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205458,
        name: "Joca Marques",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205508,
        name: "José de Freitas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205516,
        name: "Juazeiro do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205524,
        name: "Júlio Borges",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205532,
        name: "Jurema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205557,
        name: "Lagoa Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205573,
        name: "Lagoa de São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205565,
        name: "Lagoa do Barro do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205581,
        name: "Lagoa do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205599,
        name: "Lagoa do Sítio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205540,
        name: "Lagoinha do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205607,
        name: "Landri Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205706,
        name: "Luís Correia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205805,
        name: "Luzilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205854,
        name: "Madeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205904,
        name: "Manoel Emídio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2205953,
        name: "Marcolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206001,
        name: "Marcos Parente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206050,
        name: "Massapê do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206100,
        name: "Matias Olímpio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206209,
        name: "Miguel Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206308,
        name: "Miguel Leão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206357,
        name: "Milton Brandão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206407,
        name: "Monsenhor Gil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206506,
        name: "Monsenhor Hipólito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206605,
        name: "Monte Alegre do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206654,
        name: "Morro Cabeça no Tempo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206670,
        name: "Morro do Chapéu do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206696,
        name: "Murici dos Portelas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206704,
        name: "Nazaré do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206720,
        name: "Nazária",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206753,
        name: "Nossa Senhora de Nazaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206803,
        name: "Nossa Senhora dos Remédios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207959,
        name: "Nova Santa Rita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206902,
        name: "Novo Oriente do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2206951,
        name: "Novo Santo Antônio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207009,
        name: "Oeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207108,
        name: "Olho D'Água do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207207,
        name: "Padre Marcos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207306,
        name: "Paes Landim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207355,
        name: "Pajeú do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207405,
        name: "Palmeira do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207504,
        name: "Palmeirais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207553,
        name: "Paquetá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207603,
        name: "Parnaguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207702,
        name: "Parnaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207751,
        name: "Passagem Franca do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207777,
        name: "Patos do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207793,
        name: "Pau D'Arco do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207801,
        name: "Paulistana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207850,
        name: "Pavussu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207900,
        name: "Pedro II",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2207934,
        name: "Pedro Laurentino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208007,
        name: "Picos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208106,
        name: "Pimenteiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208205,
        name: "Pio IX",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208304,
        name: "Piracuruca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208403,
        name: "Piripiri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208502,
        name: "Porto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208551,
        name: "Porto Alegre do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208601,
        name: "Prata do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208650,
        name: "Queimada Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208700,
        name: "Redenção do Gurguéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208809,
        name: "Regeneração",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208858,
        name: "Riacho Frio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208874,
        name: "Ribeira do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2208908,
        name: "Ribeiro Gonçalves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209005,
        name: "Rio Grande do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209104,
        name: "Santa Cruz do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209153,
        name: "Santa Cruz dos Milagres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209203,
        name: "Santa Filomena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209302,
        name: "Santa Luz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209377,
        name: "Santa Rosa do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209351,
        name: "Santana do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209401,
        name: "Santo Antônio de Lisboa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209450,
        name: "Santo Antônio dos Milagres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209500,
        name: "Santo Inácio do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209559,
        name: "São Braz do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209609,
        name: "São Félix do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209658,
        name: "São Francisco de Assis do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209708,
        name: "São Francisco do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209757,
        name: "São Gonçalo do Gurguéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209807,
        name: "São Gonçalo do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209856,
        name: "São João da Canabrava",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209872,
        name: "São João da Fronteira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209906,
        name: "São João da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209955,
        name: "São João da Varjota",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2209971,
        name: "São João do Arraial",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210003,
        name: "São João do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210052,
        name: "São José do Divino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210102,
        name: "São José do Peixe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210201,
        name: "São José do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210300,
        name: "São Julião",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210359,
        name: "São Lourenço do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210375,
        name: "São Luis do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210383,
        name: "São Miguel da Baixa Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210391,
        name: "São Miguel do Fidalgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210409,
        name: "São Miguel do Tapuio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210508,
        name: "São Pedro do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210607,
        name: "São Raimundo Nonato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210623,
        name: "Sebastião Barros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210631,
        name: "Sebastião Leal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210656,
        name: "Sigefredo Pacheco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210706,
        name: "Simões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210805,
        name: "Simplício Mendes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210904,
        name: "Socorro do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210938,
        name: "Sussuapara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210953,
        name: "Tamboril do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2210979,
        name: "Tanque do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211001,
        name: "Teresina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211100,
        name: "União",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211209,
        name: "Uruçuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211308,
        name: "Valença do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211357,
        name: "Várzea Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211407,
        name: "Várzea Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211506,
        name: "Vera Mendes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211605,
        name: "Vila Nova do Piauí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2211704,
        name: "Wall Ferraz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 22
      },
      {
        code: 2300101,
        name: "Abaiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300150,
        name: "Acarape",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300200,
        name: "Acaraú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300309,
        name: "Acopiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300408,
        name: "Aiuaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300507,
        name: "Alcântaras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300606,
        name: "Altaneira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300705,
        name: "Alto Santo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300754,
        name: "Amontada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300804,
        name: "Antonina do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2300903,
        name: "Apuiarés",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301000,
        name: "Aquiraz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301109,
        name: "Aracati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301208,
        name: "Aracoiaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301257,
        name: "Ararendá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301307,
        name: "Araripe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301406,
        name: "Aratuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301505,
        name: "Arneiroz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301604,
        name: "Assaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301703,
        name: "Aurora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301802,
        name: "Baixio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301851,
        name: "Banabuiú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301901,
        name: "Barbalha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2301950,
        name: "Barreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302008,
        name: "Barro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302057,
        name: "Barroquinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302107,
        name: "Baturité",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302206,
        name: "Beberibe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302305,
        name: "Bela Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302404,
        name: "Boa Viagem",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302503,
        name: "Brejo Santo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302602,
        name: "Camocim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302701,
        name: "Campos Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302800,
        name: "Canindé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2302909,
        name: "Capistrano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303006,
        name: "Caridade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303105,
        name: "Cariré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303204,
        name: "Caririaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303303,
        name: "Cariús",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303402,
        name: "Carnaubal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303501,
        name: "Cascavel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303600,
        name: "Catarina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303659,
        name: "Catunda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303709,
        name: "Caucaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303808,
        name: "Cedro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303907,
        name: "Chaval",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303931,
        name: "Choró",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2303956,
        name: "Chorozinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304004,
        name: "Coreaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304103,
        name: "Crateús",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304202,
        name: "Crato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304236,
        name: "Croatá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304251,
        name: "Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304269,
        name: "Deputado Irapuan Pinheiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304277,
        name: "Ereré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304285,
        name: "Eusébio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304301,
        name: "Farias Brito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304350,
        name: "Forquilha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304400,
        name: "Fortaleza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304459,
        name: "Fortim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304509,
        name: "Frecheirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304608,
        name: "General Sampaio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304657,
        name: "Graça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304707,
        name: "Granja",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304806,
        name: "Granjeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304905,
        name: "Groaíras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2304954,
        name: "Guaiúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305001,
        name: "Guaraciaba do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305100,
        name: "Guaramiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305209,
        name: "Hidrolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305233,
        name: "Horizonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305266,
        name: "Ibaretama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305308,
        name: "Ibiapina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305332,
        name: "Ibicuitinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305357,
        name: "Icapuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305407,
        name: "Icó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305506,
        name: "Iguatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305605,
        name: "Independência",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305654,
        name: "Ipaporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305704,
        name: "Ipaumirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305803,
        name: "Ipu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2305902,
        name: "Ipueiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306009,
        name: "Iracema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306108,
        name: "Irauçuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306207,
        name: "Itaiçaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306256,
        name: "Itaitinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306306,
        name: "Itapajé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306405,
        name: "Itapipoca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306504,
        name: "Itapiúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306553,
        name: "Itarema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306603,
        name: "Itatira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306702,
        name: "Jaguaretama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306801,
        name: "Jaguaribara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2306900,
        name: "Jaguaribe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307007,
        name: "Jaguaruana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307106,
        name: "Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307205,
        name: "Jati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307254,
        name: "Jijoca de Jericoacoara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307304,
        name: "Juazeiro do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307403,
        name: "Jucás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307502,
        name: "Lavras da Mangabeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307601,
        name: "Limoeiro do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307635,
        name: "Madalena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307650,
        name: "Maracanaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307700,
        name: "Maranguape",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307809,
        name: "Marco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2307908,
        name: "Martinópole",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308005,
        name: "Massapê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308104,
        name: "Mauriti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308203,
        name: "Meruoca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308302,
        name: "Milagres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308351,
        name: "Milhã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308377,
        name: "Miraíma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308401,
        name: "Missão Velha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308500,
        name: "Mombaça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308609,
        name: "Monsenhor Tabosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308708,
        name: "Morada Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308807,
        name: "Moraújo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2308906,
        name: "Morrinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309003,
        name: "Mucambo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309102,
        name: "Mulungu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309201,
        name: "Nova Olinda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309300,
        name: "Nova Russas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309409,
        name: "Novo Oriente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309458,
        name: "Ocara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309508,
        name: "Orós",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309607,
        name: "Pacajus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309706,
        name: "Pacatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309805,
        name: "Pacoti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2309904,
        name: "Pacujá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310001,
        name: "Palhano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310100,
        name: "Palmácia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310209,
        name: "Paracuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310258,
        name: "Paraipaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310308,
        name: "Parambu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310407,
        name: "Paramoti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310506,
        name: "Pedra Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310605,
        name: "Penaforte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310704,
        name: "Pentecoste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310803,
        name: "Pereiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310852,
        name: "Pindoretama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310902,
        name: "Piquet Carneiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2310951,
        name: "Pires Ferreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311009,
        name: "Poranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311108,
        name: "Porteiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311207,
        name: "Potengi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311231,
        name: "Potiretama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311264,
        name: "Quiterianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311306,
        name: "Quixadá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311355,
        name: "Quixelô",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311405,
        name: "Quixeramobim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311504,
        name: "Quixeré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311603,
        name: "Redenção",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311702,
        name: "Reriutaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311801,
        name: "Russas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311900,
        name: "Saboeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2311959,
        name: "Salitre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312205,
        name: "Santa Quitéria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312007,
        name: "Santana do Acaraú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312106,
        name: "Santana do Cariri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312304,
        name: "São Benedito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312403,
        name: "São Gonçalo do Amarante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312502,
        name: "São João do Jaguaribe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312601,
        name: "São Luís do Curu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312700,
        name: "Senador Pompeu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312809,
        name: "Senador Sá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2312908,
        name: "Sobral",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313005,
        name: "Solonópole",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313104,
        name: "Tabuleiro do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313203,
        name: "Tamboril",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313252,
        name: "Tarrafas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313302,
        name: "Tauá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313351,
        name: "Tejuçuoca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313401,
        name: "Tianguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313500,
        name: "Trairi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313559,
        name: "Tururu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313609,
        name: "Ubajara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313708,
        name: "Umari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313757,
        name: "Umirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313807,
        name: "Uruburetama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313906,
        name: "Uruoca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2313955,
        name: "Varjota",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2314003,
        name: "Várzea Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2314102,
        name: "Viçosa do Ceará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 23
      },
      {
        code: 2400109,
        name: "Acari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2400208,
        name: "Açu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2400307,
        name: "Afonso Bezerra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2400406,
        name: "Água Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2400505,
        name: "Alexandria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2400604,
        name: "Almino Afonso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2400703,
        name: "Alto do Rodrigues",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2400802,
        name: "Angicos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2400901,
        name: "Antônio Martins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401008,
        name: "Apodi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401107,
        name: "Areia Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401206,
        name: "Arês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401404,
        name: "Baía Formosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401453,
        name: "Baraúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401503,
        name: "Barcelona",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401602,
        name: "Bento Fernandes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401651,
        name: "Bodó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401701,
        name: "Bom Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401800,
        name: "Brejinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401859,
        name: "Caiçara do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401909,
        name: "Caiçara do Rio do Vento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402006,
        name: "Caicó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2401305,
        name: "Campo Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402105,
        name: "Campo Redondo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402204,
        name: "Canguaretama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402303,
        name: "Caraúbas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402402,
        name: "Carnaúba dos Dantas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402501,
        name: "Carnaubais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402600,
        name: "Ceará-Mirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402709,
        name: "Cerro Corá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402808,
        name: "Coronel Ezequiel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2402907,
        name: "Coronel João Pessoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403004,
        name: "Cruzeta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403103,
        name: "Currais Novos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403202,
        name: "Doutor Severiano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403301,
        name: "Encanto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403400,
        name: "Equador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403509,
        name: "Espírito Santo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403608,
        name: "Extremoz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403707,
        name: "Felipe Guerra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403756,
        name: "Fernando Pedroza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403806,
        name: "Florânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403905,
        name: "Francisco Dantas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404002,
        name: "Frutuoso Gomes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404101,
        name: "Galinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404200,
        name: "Goianinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404309,
        name: "Governador Dix-Sept Rosado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404408,
        name: "Grossos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404507,
        name: "Guamaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404606,
        name: "Ielmo Marinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404705,
        name: "Ipanguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404804,
        name: "Ipueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404853,
        name: "Itajá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2404903,
        name: "Itaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405009,
        name: "Jaçanã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405108,
        name: "Jandaíra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405207,
        name: "Janduís",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405306,
        name: "Januário Cicco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405405,
        name: "Japi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405504,
        name: "Jardim de Angicos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405603,
        name: "Jardim de Piranhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405702,
        name: "Jardim do Seridó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405801,
        name: "João Câmara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2405900,
        name: "João Dias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406007,
        name: "José da Penha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406106,
        name: "Jucurutu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406155,
        name: "Jundiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406205,
        name: "Lagoa d'Anta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406304,
        name: "Lagoa de Pedras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406403,
        name: "Lagoa de Velhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406502,
        name: "Lagoa Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406601,
        name: "Lagoa Salgada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406700,
        name: "Lajes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406809,
        name: "Lajes Pintadas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2406908,
        name: "Lucrécia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407005,
        name: "Luís Gomes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407104,
        name: "Macaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407203,
        name: "Macau",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407252,
        name: "Major Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407302,
        name: "Marcelino Vieira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407401,
        name: "Martins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407500,
        name: "Maxaranguape",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407609,
        name: "Messias Targino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407708,
        name: "Montanhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407807,
        name: "Monte Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2407906,
        name: "Monte das Gameleiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408003,
        name: "Mossoró",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408102,
        name: "Natal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408201,
        name: "Nísia Floresta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408300,
        name: "Nova Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408409,
        name: "Olho d'Água do Borges",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408508,
        name: "Ouro Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408607,
        name: "Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408706,
        name: "Paraú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408805,
        name: "Parazinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408904,
        name: "Parelhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2403251,
        name: "Parnamirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409100,
        name: "Passa e Fica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409209,
        name: "Passagem",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409308,
        name: "Patu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409407,
        name: "Pau dos Ferros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409506,
        name: "Pedra Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409605,
        name: "Pedra Preta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409704,
        name: "Pedro Avelino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409803,
        name: "Pedro Velho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409902,
        name: "Pendências",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410009,
        name: "Pilões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410108,
        name: "Poço Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410207,
        name: "Portalegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410256,
        name: "Porto do Mangue",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410405,
        name: "Pureza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410504,
        name: "Rafael Fernandes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410603,
        name: "Rafael Godeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410702,
        name: "Riacho da Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410801,
        name: "Riacho de Santana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410900,
        name: "Riachuelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2408953,
        name: "Rio do Fogo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411007,
        name: "Rodolfo Fernandes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411106,
        name: "Ruy Barbosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411205,
        name: "Santa Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2409332,
        name: "Santa Maria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411403,
        name: "Santana do Matos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411429,
        name: "Santana do Seridó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411502,
        name: "Santo Antônio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411601,
        name: "São Bento do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411700,
        name: "São Bento do Trairí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411809,
        name: "São Fernando",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411908,
        name: "São Francisco do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412005,
        name: "São Gonçalo do Amarante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412104,
        name: "São João do Sabugi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412203,
        name: "São José de Mipibu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412302,
        name: "São José do Campestre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412401,
        name: "São José do Seridó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412500,
        name: "São Miguel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412559,
        name: "São Miguel do Gostoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412609,
        name: "São Paulo do Potengi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412708,
        name: "São Pedro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412807,
        name: "São Rafael",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2412906,
        name: "São Tomé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413003,
        name: "São Vicente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413102,
        name: "Senador Elói de Souza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413201,
        name: "Senador Georgino Avelino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2410306,
        name: "Serra Caiada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413300,
        name: "Serra de São Bento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413359,
        name: "Serra do Mel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413409,
        name: "Serra Negra do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413508,
        name: "Serrinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413557,
        name: "Serrinha dos Pintos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413607,
        name: "Severiano Melo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413706,
        name: "Sítio Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413805,
        name: "Taboleiro Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2413904,
        name: "Taipu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414001,
        name: "Tangará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414100,
        name: "Tenente Ananias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414159,
        name: "Tenente Laurentino Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2411056,
        name: "Tibau",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414209,
        name: "Tibau do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414308,
        name: "Timbaúba dos Batistas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414407,
        name: "Touros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414456,
        name: "Triunfo Potiguar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414506,
        name: "Umarizal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414605,
        name: "Upanema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414704,
        name: "Várzea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414753,
        name: "Venha-Ver",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414803,
        name: "Vera Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2414902,
        name: "Viçosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2415008,
        name: "Vila Flor",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 24
      },
      {
        code: 2500106,
        name: "Água Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500205,
        name: "Aguiar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500304,
        name: "Alagoa Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500403,
        name: "Alagoa Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500502,
        name: "Alagoinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500536,
        name: "Alcantil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500577,
        name: "Algodão de Jandaíra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500601,
        name: "Alhandra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500734,
        name: "Amparo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500775,
        name: "Aparecida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500809,
        name: "Araçagi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500908,
        name: "Arara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501005,
        name: "Araruna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501104,
        name: "Areia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501153,
        name: "Areia de Baraúnas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501203,
        name: "Areial",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501302,
        name: "Aroeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501351,
        name: "Assunção",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501401,
        name: "Baía da Traição",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501500,
        name: "Bananeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501534,
        name: "Baraúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501609,
        name: "Barra de Santa Rosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501575,
        name: "Barra de Santana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501708,
        name: "Barra de São Miguel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501807,
        name: "Bayeux",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2501906,
        name: "Belém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502003,
        name: "Belém do Brejo do Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502052,
        name: "Bernardino Batista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502102,
        name: "Boa Ventura",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502151,
        name: "Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502201,
        name: "Bom Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502300,
        name: "Bom Sucesso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502409,
        name: "Bonito de Santa Fé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502508,
        name: "Boqueirão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502706,
        name: "Borborema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502805,
        name: "Brejo do Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502904,
        name: "Brejo dos Santos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503001,
        name: "Caaporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503100,
        name: "Cabaceiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503209,
        name: "Cabedelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503308,
        name: "Cachoeira dos Índios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503407,
        name: "Cacimba de Areia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503506,
        name: "Cacimba de Dentro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503555,
        name: "Cacimbas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503605,
        name: "Caiçara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503704,
        name: "Cajazeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503753,
        name: "Cajazeirinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503803,
        name: "Caldas Brandão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2503902,
        name: "Camalaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504009,
        name: "Campina Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504033,
        name: "Capim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504074,
        name: "Caraúbas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504108,
        name: "Carrapateira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504157,
        name: "Casserengue",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504207,
        name: "Catingueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504306,
        name: "Catolé do Rocha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504355,
        name: "Caturité",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504405,
        name: "Conceição",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504504,
        name: "Condado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504603,
        name: "Conde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504702,
        name: "Congo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504801,
        name: "Coremas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504850,
        name: "Coxixola",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2504900,
        name: "Cruz do Espírito Santo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505006,
        name: "Cubati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505105,
        name: "Cuité",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505238,
        name: "Cuité de Mamanguape",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505204,
        name: "Cuitegi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505279,
        name: "Curral de Cima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505303,
        name: "Curral Velho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505352,
        name: "Damião",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505402,
        name: "Desterro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505600,
        name: "Diamante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505709,
        name: "Dona Inês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505808,
        name: "Duas Estradas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505907,
        name: "Emas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506004,
        name: "Esperança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506103,
        name: "Fagundes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506202,
        name: "Frei Martinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506251,
        name: "Gado Bravo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506301,
        name: "Guarabira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506400,
        name: "Gurinhém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506509,
        name: "Gurjão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506608,
        name: "Ibiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2502607,
        name: "Igaracy",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506707,
        name: "Imaculada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506806,
        name: "Ingá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2506905,
        name: "Itabaiana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507002,
        name: "Itaporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507101,
        name: "Itapororoca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507200,
        name: "Itatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507309,
        name: "Jacaraú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507408,
        name: "Jericó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507507,
        name: "João Pessoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513653,
        name: "Joca Claudino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507606,
        name: "Juarez Távora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507705,
        name: "Juazeirinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507804,
        name: "Junco do Seridó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2507903,
        name: "Juripiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508000,
        name: "Juru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508109,
        name: "Lagoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508208,
        name: "Lagoa de Dentro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508307,
        name: "Lagoa Seca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508406,
        name: "Lastro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508505,
        name: "Livramento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508554,
        name: "Logradouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508604,
        name: "Lucena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508703,
        name: "Mãe d'Água",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508802,
        name: "Malta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2508901,
        name: "Mamanguape",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509008,
        name: "Manaíra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509057,
        name: "Marcação",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509107,
        name: "Mari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509156,
        name: "Marizópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509206,
        name: "Massaranduba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509305,
        name: "Mataraca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509339,
        name: "Matinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509370,
        name: "Mato Grosso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509396,
        name: "Maturéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509404,
        name: "Mogeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509503,
        name: "Montadas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509602,
        name: "Monte Horebe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509701,
        name: "Monteiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509800,
        name: "Mulungu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2509909,
        name: "Natuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510006,
        name: "Nazarezinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510105,
        name: "Nova Floresta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510204,
        name: "Nova Olinda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510303,
        name: "Nova Palmeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510402,
        name: "Olho d'Água",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510501,
        name: "Olivedos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510600,
        name: "Ouro Velho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510659,
        name: "Parari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510709,
        name: "Passagem",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510808,
        name: "Patos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2510907,
        name: "Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511004,
        name: "Pedra Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511103,
        name: "Pedra Lavrada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511202,
        name: "Pedras de Fogo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512721,
        name: "Pedro Régis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511301,
        name: "Piancó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511400,
        name: "Picuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511509,
        name: "Pilar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511608,
        name: "Pilões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511707,
        name: "Pilõezinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511806,
        name: "Pirpirituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2511905,
        name: "Pitimbu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512002,
        name: "Pocinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512036,
        name: "Poço Dantas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512077,
        name: "Poço de José de Moura",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512101,
        name: "Pombal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512200,
        name: "Prata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512309,
        name: "Princesa Isabel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512408,
        name: "Puxinanã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512507,
        name: "Queimadas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512606,
        name: "Quixaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512705,
        name: "Remígio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512747,
        name: "Riachão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512754,
        name: "Riachão do Bacamarte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512762,
        name: "Riachão do Poço",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512788,
        name: "Riacho de Santo Antônio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512804,
        name: "Riacho dos Cavalos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2512903,
        name: "Rio Tinto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513000,
        name: "Salgadinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513109,
        name: "Salgado de São Félix",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513158,
        name: "Santa Cecília",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513208,
        name: "Santa Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513307,
        name: "Santa Helena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513356,
        name: "Santa Inês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513406,
        name: "Santa Luzia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513703,
        name: "Santa Rita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513802,
        name: "Santa Teresinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513505,
        name: "Santana de Mangueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513604,
        name: "Santana dos Garrotes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513851,
        name: "Santo André",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513927,
        name: "São Bentinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513901,
        name: "São Bento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513968,
        name: "São Domingos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513943,
        name: "São Domingos do Cariri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2513984,
        name: "São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514008,
        name: "São João do Cariri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2500700,
        name: "São João do Rio do Peixe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514107,
        name: "São João do Tigre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514206,
        name: "São José da Lagoa Tapada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514305,
        name: "São José de Caiana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514404,
        name: "São José de Espinharas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514503,
        name: "São José de Piranhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514552,
        name: "São José de Princesa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514602,
        name: "São José do Bonfim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514651,
        name: "São José do Brejo do Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514701,
        name: "São José do Sabugi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514800,
        name: "São José dos Cordeiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514453,
        name: "São José dos Ramos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2514909,
        name: "São Mamede",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515005,
        name: "São Miguel de Taipu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515104,
        name: "São Sebastião de Lagoa de Roça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515203,
        name: "São Sebastião do Umbuzeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515401,
        name: "São Vicente do Seridó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515302,
        name: "Sapé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515500,
        name: "Serra Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515609,
        name: "Serra da Raiz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515708,
        name: "Serra Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515807,
        name: "Serra Redonda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515906,
        name: "Serraria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515930,
        name: "Sertãozinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2515971,
        name: "Sobrado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516003,
        name: "Solânea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516102,
        name: "Soledade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516151,
        name: "Sossêgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516201,
        name: "Sousa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516300,
        name: "Sumé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516409,
        name: "Tacima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516508,
        name: "Taperoá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516607,
        name: "Tavares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516706,
        name: "Teixeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516755,
        name: "Tenório",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516805,
        name: "Triunfo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2516904,
        name: "Uiraúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2517001,
        name: "Umbuzeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2517100,
        name: "Várzea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2517209,
        name: "Vieirópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2505501,
        name: "Vista Serrana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2517407,
        name: "Zabelê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 25
      },
      {
        code: 2600054,
        name: "Abreu e Lima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600104,
        name: "Afogados da Ingazeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600203,
        name: "Afrânio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600302,
        name: "Agrestina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600401,
        name: "Água Preta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600500,
        name: "Águas Belas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600609,
        name: "Alagoinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600708,
        name: "Aliança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600807,
        name: "Altinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2600906,
        name: "Amaraji",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601003,
        name: "Angelim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601052,
        name: "Araçoiaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601102,
        name: "Araripina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601201,
        name: "Arcoverde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601300,
        name: "Barra de Guabiraba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601409,
        name: "Barreiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601508,
        name: "Belém de Maria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601607,
        name: "Belém do São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601706,
        name: "Belo Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601805,
        name: "Betânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2601904,
        name: "Bezerros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602001,
        name: "Bodocó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602100,
        name: "Bom Conselho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602209,
        name: "Bom Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602308,
        name: "Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602407,
        name: "Brejão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602506,
        name: "Brejinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602605,
        name: "Brejo da Madre de Deus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602704,
        name: "Buenos Aires",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602803,
        name: "Buíque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2602902,
        name: "Cabo de Santo Agostinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603009,
        name: "Cabrobó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603108,
        name: "Cachoeirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603207,
        name: "Caetés",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603306,
        name: "Calçado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603405,
        name: "Calumbi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603454,
        name: "Camaragibe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603504,
        name: "Camocim de São Félix",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603603,
        name: "Camutanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603702,
        name: "Canhotinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603801,
        name: "Capoeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603900,
        name: "Carnaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2603926,
        name: "Carnaubeira da Penha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604007,
        name: "Carpina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604106,
        name: "Caruaru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604155,
        name: "Casinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604205,
        name: "Catende",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604304,
        name: "Cedro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604403,
        name: "Chã de Alegria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604502,
        name: "Chã Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604601,
        name: "Condado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604700,
        name: "Correntes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604809,
        name: "Cortês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2604908,
        name: "Cumaru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605004,
        name: "Cupira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605103,
        name: "Custódia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605152,
        name: "Dormentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605202,
        name: "Escada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605301,
        name: "Exu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605400,
        name: "Feira Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605459,
        name: "Fernando de Noronha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605509,
        name: "Ferreiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605608,
        name: "Flores",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605707,
        name: "Floresta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605806,
        name: "Frei Miguelinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2605905,
        name: "Gameleira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606002,
        name: "Garanhuns",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606101,
        name: "Glória do Goitá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606200,
        name: "Goiana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606309,
        name: "Granito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606408,
        name: "Gravatá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606507,
        name: "Iati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606606,
        name: "Ibimirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606705,
        name: "Ibirajuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606804,
        name: "Igarassu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2606903,
        name: "Iguaracy",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607604,
        name: "Ilha de Itamaracá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607000,
        name: "Inajá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607109,
        name: "Ingazeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607208,
        name: "Ipojuca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607307,
        name: "Ipubi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607406,
        name: "Itacuruba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607505,
        name: "Itaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607653,
        name: "Itambé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607703,
        name: "Itapetim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607752,
        name: "Itapissuma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607802,
        name: "Itaquitinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607901,
        name: "Jaboatão dos Guararapes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2607950,
        name: "Jaqueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608008,
        name: "Jataúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608057,
        name: "Jatobá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608107,
        name: "João Alfredo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608206,
        name: "Joaquim Nabuco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608255,
        name: "Jucati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608305,
        name: "Jupi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608404,
        name: "Jurema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608503,
        name: "Lagoa de Itaenga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608453,
        name: "Lagoa do Carro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608602,
        name: "Lagoa do Ouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608701,
        name: "Lagoa dos Gatos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608750,
        name: "Lagoa Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608800,
        name: "Lajedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2608909,
        name: "Limoeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609006,
        name: "Macaparana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609105,
        name: "Machados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609154,
        name: "Manari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609204,
        name: "Maraial",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609303,
        name: "Mirandiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614303,
        name: "Moreilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609402,
        name: "Moreno",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609501,
        name: "Nazaré da Mata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609600,
        name: "Olinda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609709,
        name: "Orobó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609808,
        name: "Orocó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2609907,
        name: "Ouricuri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610004,
        name: "Palmares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610103,
        name: "Palmeirina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610202,
        name: "Panelas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610301,
        name: "Paranatama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610400,
        name: "Parnamirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610509,
        name: "Passira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610608,
        name: "Paudalho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610707,
        name: "Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610806,
        name: "Pedra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2610905,
        name: "Pesqueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611002,
        name: "Petrolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611101,
        name: "Petrolina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611200,
        name: "Poção",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611309,
        name: "Pombos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611408,
        name: "Primavera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611507,
        name: "Quipapá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611533,
        name: "Quixaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611606,
        name: "Recife",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611705,
        name: "Riacho das Almas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611804,
        name: "Ribeirão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2611903,
        name: "Rio Formoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612000,
        name: "Sairé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612109,
        name: "Salgadinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612208,
        name: "Salgueiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612307,
        name: "Saloá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612406,
        name: "Sanharó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612455,
        name: "Santa Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612471,
        name: "Santa Cruz da Baixa Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612505,
        name: "Santa Cruz do Capibaribe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612554,
        name: "Santa Filomena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612604,
        name: "Santa Maria da Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612703,
        name: "Santa Maria do Cambucá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612802,
        name: "Santa Terezinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2612901,
        name: "São Benedito do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613008,
        name: "São Bento do Una",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613107,
        name: "São Caitano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613206,
        name: "São João",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613305,
        name: "São Joaquim do Monte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613404,
        name: "São José da Coroa Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613503,
        name: "São José do Belmonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613602,
        name: "São José do Egito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613701,
        name: "São Lourenço da Mata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613800,
        name: "São Vicente Férrer",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2613909,
        name: "Serra Talhada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614006,
        name: "Serrita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614105,
        name: "Sertânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614204,
        name: "Sirinhaém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614402,
        name: "Solidão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614501,
        name: "Surubim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614600,
        name: "Tabira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614709,
        name: "Tacaimbó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614808,
        name: "Tacaratu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2614857,
        name: "Tamandaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615003,
        name: "Taquaritinga do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615102,
        name: "Terezinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615201,
        name: "Terra Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615300,
        name: "Timbaúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615409,
        name: "Toritama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615508,
        name: "Tracunhaém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615607,
        name: "Trindade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615706,
        name: "Triunfo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615805,
        name: "Tupanatinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2615904,
        name: "Tuparetama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2616001,
        name: "Venturosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2616100,
        name: "Verdejante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2616183,
        name: "Vertente do Lério",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2616209,
        name: "Vertentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2616308,
        name: "Vicência",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2616407,
        name: "Vitória de Santo Antão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2616506,
        name: "Xexéu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 26
      },
      {
        code: 2700102,
        name: "Água Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2700201,
        name: "Anadia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2700300,
        name: "Arapiraca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2700409,
        name: "Atalaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2700508,
        name: "Barra de Santo Antônio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2700607,
        name: "Barra de São Miguel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2700706,
        name: "Batalha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2700805,
        name: "Belém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2700904,
        name: "Belo Monte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701001,
        name: "Boca da Mata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701100,
        name: "Branquinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701209,
        name: "Cacimbinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701308,
        name: "Cajueiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701357,
        name: "Campestre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701407,
        name: "Campo Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701506,
        name: "Campo Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701605,
        name: "Canapi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701704,
        name: "Capela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701803,
        name: "Carneiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2701902,
        name: "Chã Preta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702009,
        name: "Coité do Nóia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702108,
        name: "Colônia Leopoldina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702207,
        name: "Coqueiro Seco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702306,
        name: "Coruripe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702355,
        name: "Craíbas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702405,
        name: "Delmiro Gouveia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702504,
        name: "Dois Riachos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702553,
        name: "Estrela de Alagoas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702603,
        name: "Feira Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702702,
        name: "Feliz Deserto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702801,
        name: "Flexeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2702900,
        name: "Girau do Ponciano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703007,
        name: "Ibateguara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703106,
        name: "Igaci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703205,
        name: "Igreja Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703304,
        name: "Inhapi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703403,
        name: "Jacaré dos Homens",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703502,
        name: "Jacuípe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703601,
        name: "Japaratinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703700,
        name: "Jaramataia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703759,
        name: "Jequiá da Praia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703809,
        name: "Joaquim Gomes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2703908,
        name: "Jundiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704005,
        name: "Junqueiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704104,
        name: "Lagoa da Canoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704203,
        name: "Limoeiro de Anadia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704302,
        name: "Maceió",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704401,
        name: "Major Isidoro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704906,
        name: "Mar Vermelho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704500,
        name: "Maragogi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704609,
        name: "Maravilha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704708,
        name: "Marechal Deodoro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2704807,
        name: "Maribondo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705002,
        name: "Mata Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705101,
        name: "Matriz de Camaragibe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705200,
        name: "Messias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705309,
        name: "Minador do Negrão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705408,
        name: "Monteirópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705507,
        name: "Murici",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705606,
        name: "Novo Lino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705705,
        name: "Olho d'Água das Flores",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705804,
        name: "Olho d'Água do Casado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2705903,
        name: "Olho d'Água Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706000,
        name: "Olivença",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706109,
        name: "Ouro Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706208,
        name: "Palestina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706307,
        name: "Palmeira dos Índios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706406,
        name: "Pão de Açúcar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706422,
        name: "Pariconha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706448,
        name: "Paripueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706505,
        name: "Passo de Camaragibe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706604,
        name: "Paulo Jacinto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706703,
        name: "Penedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706802,
        name: "Piaçabuçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2706901,
        name: "Pilar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707008,
        name: "Pindoba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707107,
        name: "Piranhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707206,
        name: "Poço das Trincheiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707305,
        name: "Porto Calvo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707404,
        name: "Porto de Pedras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707503,
        name: "Porto Real do Colégio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707602,
        name: "Quebrangulo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707701,
        name: "Rio Largo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707800,
        name: "Roteiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2707909,
        name: "Santa Luzia do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708006,
        name: "Santana do Ipanema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708105,
        name: "Santana do Mundaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708204,
        name: "São Brás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708303,
        name: "São José da Laje",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708402,
        name: "São José da Tapera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708501,
        name: "São Luís do Quitunde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708600,
        name: "São Miguel dos Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708709,
        name: "São Miguel dos Milagres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708808,
        name: "São Sebastião",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708907,
        name: "Satuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2708956,
        name: "Senador Rui Palmeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2709004,
        name: "Tanque d'Arca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2709103,
        name: "Taquarana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2709152,
        name: "Teotônio Vilela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2709202,
        name: "Traipu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2709301,
        name: "União dos Palmares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2709400,
        name: "Viçosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 27
      },
      {
        code: 2800100,
        name: "Amparo de São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2800209,
        name: "Aquidabã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2800308,
        name: "Aracaju",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2800407,
        name: "Arauá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2800506,
        name: "Areia Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2800605,
        name: "Barra dos Coqueiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2800670,
        name: "Boquim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2800704,
        name: "Brejo Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801009,
        name: "Campo do Brito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801108,
        name: "Canhoba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801207,
        name: "Canindé de São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801306,
        name: "Capela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801405,
        name: "Carira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801504,
        name: "Carmópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801603,
        name: "Cedro de São João",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801702,
        name: "Cristinápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2801900,
        name: "Cumbe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802007,
        name: "Divina Pastora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802106,
        name: "Estância",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802205,
        name: "Feira Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802304,
        name: "Frei Paulo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802403,
        name: "Gararu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802502,
        name: "General Maynard",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802601,
        name: "Gracho Cardoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802700,
        name: "Ilha das Flores",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802809,
        name: "Indiaroba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2802908,
        name: "Itabaiana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803005,
        name: "Itabaianinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803104,
        name: "Itabi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803203,
        name: "Itaporanga d'Ajuda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803302,
        name: "Japaratuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803401,
        name: "Japoatã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803500,
        name: "Lagarto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803609,
        name: "Laranjeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803708,
        name: "Macambira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803807,
        name: "Malhada dos Bois",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2803906,
        name: "Malhador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804003,
        name: "Maruim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804102,
        name: "Moita Bonita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804201,
        name: "Monte Alegre de Sergipe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804300,
        name: "Muribeca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804409,
        name: "Neópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804458,
        name: "Nossa Senhora Aparecida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804508,
        name: "Nossa Senhora da Glória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804607,
        name: "Nossa Senhora das Dores",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804706,
        name: "Nossa Senhora de Lourdes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804805,
        name: "Nossa Senhora do Socorro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2804904,
        name: "Pacatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805000,
        name: "Pedra Mole",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805109,
        name: "Pedrinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805208,
        name: "Pinhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805307,
        name: "Pirambu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805406,
        name: "Poço Redondo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805505,
        name: "Poço Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805604,
        name: "Porto da Folha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805703,
        name: "Propriá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805802,
        name: "Riachão do Dantas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2805901,
        name: "Riachuelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806008,
        name: "Ribeirópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806107,
        name: "Rosário do Catete",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806206,
        name: "Salgado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806305,
        name: "Santa Luzia do Itanhy",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806503,
        name: "Santa Rosa de Lima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806404,
        name: "Santana do São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806602,
        name: "Santo Amaro das Brotas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806701,
        name: "São Cristóvão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806800,
        name: "São Domingos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2806909,
        name: "São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2807006,
        name: "São Miguel do Aleixo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2807105,
        name: "Simão Dias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2807204,
        name: "Siriri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2807303,
        name: "Telha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2807402,
        name: "Tobias Barreto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2807501,
        name: "Tomar do Geru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2807600,
        name: "Umbaúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 28
      },
      {
        code: 2900108,
        name: "Abaíra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900207,
        name: "Abaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900306,
        name: "Acajutiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900355,
        name: "Adustina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900405,
        name: "Água Fria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900603,
        name: "Aiquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900702,
        name: "Alagoinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900801,
        name: "Alcobaça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900900,
        name: "Almadina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901007,
        name: "Amargosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901106,
        name: "Amélia Rodrigues",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901155,
        name: "América Dourada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901205,
        name: "Anagé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901304,
        name: "Andaraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901353,
        name: "Andorinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901403,
        name: "Angical",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901502,
        name: "Anguera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901601,
        name: "Antas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901700,
        name: "Antônio Cardoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901809,
        name: "Antônio Gonçalves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901908,
        name: "Aporá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2901957,
        name: "Apuarema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902054,
        name: "Araçás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902005,
        name: "Aracatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902104,
        name: "Araci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902203,
        name: "Aramari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902252,
        name: "Arataca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902302,
        name: "Aratuípe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902401,
        name: "Aurelino Leal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902500,
        name: "Baianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902609,
        name: "Baixa Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902658,
        name: "Banzaê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902708,
        name: "Barra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902807,
        name: "Barra da Estiva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2902906,
        name: "Barra do Choça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903003,
        name: "Barra do Mendes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903102,
        name: "Barra do Rocha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903201,
        name: "Barreiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903235,
        name: "Barro Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903300,
        name: "Barro Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903276,
        name: "Barrocas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903409,
        name: "Belmonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903508,
        name: "Belo Campo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903607,
        name: "Biritinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903706,
        name: "Boa Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903805,
        name: "Boa Vista do Tupim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903904,
        name: "Bom Jesus da Lapa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2903953,
        name: "Bom Jesus da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904001,
        name: "Boninal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904050,
        name: "Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904100,
        name: "Boquira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904209,
        name: "Botuporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904308,
        name: "Brejões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904407,
        name: "Brejolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904506,
        name: "Brotas de Macaúbas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904605,
        name: "Brumado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904704,
        name: "Buerarema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904753,
        name: "Buritirama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904803,
        name: "Caatiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904852,
        name: "Cabaceiras do Paraguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2904902,
        name: "Cachoeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905008,
        name: "Caculé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905107,
        name: "Caém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905156,
        name: "Caetanos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905206,
        name: "Caetité",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905305,
        name: "Cafarnaum",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905404,
        name: "Cairu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905503,
        name: "Caldeirão Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905602,
        name: "Camacan",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905701,
        name: "Camaçari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905800,
        name: "Camamu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2905909,
        name: "Campo Alegre de Lourdes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906006,
        name: "Campo Formoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906105,
        name: "Canápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906204,
        name: "Canarana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906303,
        name: "Canavieiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906402,
        name: "Candeal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906501,
        name: "Candeias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906600,
        name: "Candiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906709,
        name: "Cândido Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906808,
        name: "Cansanção",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906824,
        name: "Canudos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906857,
        name: "Capela do Alto Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906873,
        name: "Capim Grosso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906899,
        name: "Caraíbas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2906907,
        name: "Caravelas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907004,
        name: "Cardeal da Silva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907103,
        name: "Carinhanha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907202,
        name: "Casa Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907301,
        name: "Castro Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907400,
        name: "Catolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907509,
        name: "Catu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907558,
        name: "Caturama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907608,
        name: "Central",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907707,
        name: "Chorrochó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907806,
        name: "Cícero Dantas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2907905,
        name: "Cipó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908002,
        name: "Coaraci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908101,
        name: "Cocos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908200,
        name: "Conceição da Feira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908309,
        name: "Conceição do Almeida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908408,
        name: "Conceição do Coité",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908507,
        name: "Conceição do Jacuípe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908606,
        name: "Conde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908705,
        name: "Condeúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908804,
        name: "Contendas do Sincorá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2908903,
        name: "Coração de Maria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909000,
        name: "Cordeiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909109,
        name: "Coribe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909208,
        name: "Coronel João Sá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909307,
        name: "Correntina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909406,
        name: "Cotegipe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909505,
        name: "Cravolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909604,
        name: "Crisópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909703,
        name: "Cristópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909802,
        name: "Cruz das Almas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2909901,
        name: "Curaçá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910008,
        name: "Dário Meira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910057,
        name: "Dias d'Ávila",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910107,
        name: "Dom Basílio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910206,
        name: "Dom Macedo Costa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910305,
        name: "Elísio Medrado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910404,
        name: "Encruzilhada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910503,
        name: "Entre Rios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2900504,
        name: "Érico Cardoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910602,
        name: "Esplanada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910701,
        name: "Euclides da Cunha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910727,
        name: "Eunápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910750,
        name: "Fátima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910776,
        name: "Feira da Mata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910800,
        name: "Feira de Santana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910859,
        name: "Filadélfia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2910909,
        name: "Firmino Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911006,
        name: "Floresta Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911105,
        name: "Formosa do Rio Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911204,
        name: "Gandu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911253,
        name: "Gavião",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911303,
        name: "Gentio do Ouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911402,
        name: "Glória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911501,
        name: "Gongogi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911600,
        name: "Governador Mangabeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911659,
        name: "Guajeru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911709,
        name: "Guanambi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911808,
        name: "Guaratinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911857,
        name: "Heliópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2911907,
        name: "Iaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912004,
        name: "Ibiassucê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912103,
        name: "Ibicaraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912202,
        name: "Ibicoara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912301,
        name: "Ibicuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912400,
        name: "Ibipeba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912509,
        name: "Ibipitanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912608,
        name: "Ibiquera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912707,
        name: "Ibirapitanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912806,
        name: "Ibirapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2912905,
        name: "Ibirataia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913002,
        name: "Ibitiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913101,
        name: "Ibititá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913200,
        name: "Ibotirama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913309,
        name: "Ichu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913408,
        name: "Igaporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913457,
        name: "Igrapiúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913507,
        name: "Iguaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913606,
        name: "Ilhéus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913705,
        name: "Inhambupe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913804,
        name: "Ipecaetá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2913903,
        name: "Ipiaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914000,
        name: "Ipirá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914109,
        name: "Ipupiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914208,
        name: "Irajuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914307,
        name: "Iramaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914406,
        name: "Iraquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914505,
        name: "Irará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914604,
        name: "Irecê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914653,
        name: "Itabela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914703,
        name: "Itaberaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914802,
        name: "Itabuna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2914901,
        name: "Itacaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915007,
        name: "Itaeté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915106,
        name: "Itagi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915205,
        name: "Itagibá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915304,
        name: "Itagimirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915353,
        name: "Itaguaçu da Bahia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915403,
        name: "Itaju do Colônia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915502,
        name: "Itajuípe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915601,
        name: "Itamaraju",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915700,
        name: "Itamari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915809,
        name: "Itambé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2915908,
        name: "Itanagra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916005,
        name: "Itanhém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916104,
        name: "Itaparica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916203,
        name: "Itapé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916302,
        name: "Itapebi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916401,
        name: "Itapetinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916500,
        name: "Itapicuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916609,
        name: "Itapitanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916708,
        name: "Itaquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916807,
        name: "Itarantim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916856,
        name: "Itatim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2916906,
        name: "Itiruçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917003,
        name: "Itiúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917102,
        name: "Itororó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917201,
        name: "Ituaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917300,
        name: "Ituberá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917334,
        name: "Iuiu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917359,
        name: "Jaborandi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917409,
        name: "Jacaraci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917508,
        name: "Jacobina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917607,
        name: "Jaguaquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917706,
        name: "Jaguarari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917805,
        name: "Jaguaripe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2917904,
        name: "Jandaíra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918001,
        name: "Jequié",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918100,
        name: "Jeremoabo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918209,
        name: "Jiquiriçá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918308,
        name: "Jitaúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918357,
        name: "João Dourado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918407,
        name: "Juazeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918456,
        name: "Jucuruçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918506,
        name: "Jussara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918555,
        name: "Jussari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918605,
        name: "Jussiape",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918704,
        name: "Lafaiete Coutinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918753,
        name: "Lagoa Real",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918803,
        name: "Laje",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2918902,
        name: "Lajedão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919009,
        name: "Lajedinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919058,
        name: "Lajedo do Tabocal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919108,
        name: "Lamarão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919157,
        name: "Lapão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919207,
        name: "Lauro de Freitas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919306,
        name: "Lençóis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919405,
        name: "Licínio de Almeida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919504,
        name: "Livramento de Nossa Senhora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919553,
        name: "Luís Eduardo Magalhães",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919603,
        name: "Macajuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919702,
        name: "Macarani",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919801,
        name: "Macaúbas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919900,
        name: "Macururé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919926,
        name: "Madre de Deus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2919959,
        name: "Maetinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920007,
        name: "Maiquinique",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920106,
        name: "Mairi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920205,
        name: "Malhada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920304,
        name: "Malhada de Pedras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920403,
        name: "Manoel Vitorino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920452,
        name: "Mansidão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920502,
        name: "Maracás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920601,
        name: "Maragogipe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920700,
        name: "Maraú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920809,
        name: "Marcionílio Souza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2920908,
        name: "Mascote",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921005,
        name: "Mata de São João",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921054,
        name: "Matina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921104,
        name: "Medeiros Neto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921203,
        name: "Miguel Calmon",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921302,
        name: "Milagres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921401,
        name: "Mirangaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921450,
        name: "Mirante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921500,
        name: "Monte Santo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921609,
        name: "Morpará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921708,
        name: "Morro do Chapéu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921807,
        name: "Mortugaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2921906,
        name: "Mucugê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922003,
        name: "Mucuri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922052,
        name: "Mulungu do Morro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922102,
        name: "Mundo Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922201,
        name: "Muniz Ferreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922250,
        name: "Muquém do São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922300,
        name: "Muritiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922409,
        name: "Mutuípe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922508,
        name: "Nazaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922607,
        name: "Nilo Peçanha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922656,
        name: "Nordestina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922706,
        name: "Nova Canaã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922730,
        name: "Nova Fátima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922755,
        name: "Nova Ibiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922805,
        name: "Nova Itarana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922854,
        name: "Nova Redenção",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2922904,
        name: "Nova Soure",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923001,
        name: "Nova Viçosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923035,
        name: "Novo Horizonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923050,
        name: "Novo Triunfo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923100,
        name: "Olindina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923209,
        name: "Oliveira dos Brejinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923308,
        name: "Ouriçangas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923357,
        name: "Ourolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923407,
        name: "Palmas de Monte Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923506,
        name: "Palmeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923605,
        name: "Paramirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923704,
        name: "Paratinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923803,
        name: "Paripiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2923902,
        name: "Pau Brasil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924009,
        name: "Paulo Afonso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924058,
        name: "Pé de Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924108,
        name: "Pedrão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924207,
        name: "Pedro Alexandre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924306,
        name: "Piatã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924405,
        name: "Pilão Arcado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924504,
        name: "Pindaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924603,
        name: "Pindobaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924652,
        name: "Pintadas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924678,
        name: "Piraí do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924702,
        name: "Piripá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924801,
        name: "Piritiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2924900,
        name: "Planaltino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925006,
        name: "Planalto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925105,
        name: "Poções",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925204,
        name: "Pojuca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925253,
        name: "Ponto Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925303,
        name: "Porto Seguro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925402,
        name: "Potiraguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925501,
        name: "Prado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925600,
        name: "Presidente Dutra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925709,
        name: "Presidente Jânio Quadros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925758,
        name: "Presidente Tancredo Neves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925808,
        name: "Queimadas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925907,
        name: "Quijingue",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925931,
        name: "Quixabeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2925956,
        name: "Rafael Jambeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926004,
        name: "Remanso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926103,
        name: "Retirolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926202,
        name: "Riachão das Neves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926301,
        name: "Riachão do Jacuípe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926400,
        name: "Riacho de Santana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926509,
        name: "Ribeira do Amparo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926608,
        name: "Ribeira do Pombal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926657,
        name: "Ribeirão do Largo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926707,
        name: "Rio de Contas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926806,
        name: "Rio do Antônio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2926905,
        name: "Rio do Pires",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927002,
        name: "Rio Real",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927101,
        name: "Rodelas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927200,
        name: "Ruy Barbosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927309,
        name: "Salinas da Margarida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927408,
        name: "Salvador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927507,
        name: "Santa Bárbara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927606,
        name: "Santa Brígida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927705,
        name: "Santa Cruz Cabrália",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927804,
        name: "Santa Cruz da Vitória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2927903,
        name: "Santa Inês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928059,
        name: "Santa Luzia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928109,
        name: "Santa Maria da Vitória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928406,
        name: "Santa Rita de Cássia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928505,
        name: "Santa Terezinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928000,
        name: "Santaluz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928208,
        name: "Santana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928307,
        name: "Santanópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928604,
        name: "Santo Amaro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928703,
        name: "Santo Antônio de Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928802,
        name: "Santo Estêvão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928901,
        name: "São Desidério",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2928950,
        name: "São Domingos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929107,
        name: "São Felipe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929008,
        name: "São Félix",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929057,
        name: "São Félix do Coribe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929206,
        name: "São Francisco do Conde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929255,
        name: "São Gabriel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929305,
        name: "São Gonçalo dos Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929354,
        name: "São José da Vitória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929370,
        name: "São José do Jacuípe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929404,
        name: "São Miguel das Matas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929503,
        name: "São Sebastião do Passé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929602,
        name: "Sapeaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929701,
        name: "Sátiro Dias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929750,
        name: "Saubara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929800,
        name: "Saúde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2929909,
        name: "Seabra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930006,
        name: "Sebastião Laranjeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930105,
        name: "Senhor do Bonfim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930204,
        name: "Sento Sé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930154,
        name: "Serra do Ramalho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930303,
        name: "Serra Dourada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930402,
        name: "Serra Preta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930501,
        name: "Serrinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930600,
        name: "Serrolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930709,
        name: "Simões Filho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930758,
        name: "Sítio do Mato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930766,
        name: "Sítio do Quinto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930774,
        name: "Sobradinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930808,
        name: "Souto Soares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2930907,
        name: "Tabocas do Brejo Velho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931004,
        name: "Tanhaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931053,
        name: "Tanque Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931103,
        name: "Tanquinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931202,
        name: "Taperoá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931301,
        name: "Tapiramutá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931350,
        name: "Teixeira de Freitas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931400,
        name: "Teodoro Sampaio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931509,
        name: "Teofilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931608,
        name: "Teolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931707,
        name: "Terra Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931806,
        name: "Tremedal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2931905,
        name: "Tucano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932002,
        name: "Uauá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932101,
        name: "Ubaíra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932200,
        name: "Ubaitaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932309,
        name: "Ubatã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932408,
        name: "Uibaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932457,
        name: "Umburanas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932507,
        name: "Una",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932606,
        name: "Urandi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932705,
        name: "Uruçuca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932804,
        name: "Utinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2932903,
        name: "Valença",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933000,
        name: "Valente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933059,
        name: "Várzea da Roça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933109,
        name: "Várzea do Poço",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933158,
        name: "Várzea Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933174,
        name: "Varzedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933208,
        name: "Vera Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933257,
        name: "Vereda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933307,
        name: "Vitória da Conquista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933406,
        name: "Wagner",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933455,
        name: "Wanderley",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933505,
        name: "Wenceslau Guimarães",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 2933604,
        name: "Xique-Xique",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 29
      },
      {
        code: 3100104,
        name: "Abadia dos Dourados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3100203,
        name: "Abaeté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3100302,
        name: "Abre Campo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3100401,
        name: "Acaiaca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3100500,
        name: "Açucena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3100609,
        name: "Água Boa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3100708,
        name: "Água Comprida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3100807,
        name: "Aguanil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3100906,
        name: "Águas Formosas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101003,
        name: "Águas Vermelhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101102,
        name: "Aimorés",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101201,
        name: "Aiuruoca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101300,
        name: "Alagoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101409,
        name: "Albertina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101508,
        name: "Além Paraíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101607,
        name: "Alfenas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101631,
        name: "Alfredo Vasconcelos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101706,
        name: "Almenara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101805,
        name: "Alpercata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3101904,
        name: "Alpinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102001,
        name: "Alterosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102050,
        name: "Alto Caparaó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153509,
        name: "Alto Jequitibá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102100,
        name: "Alto Rio Doce",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102209,
        name: "Alvarenga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102308,
        name: "Alvinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102407,
        name: "Alvorada de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102506,
        name: "Amparo do Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102605,
        name: "Andradas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102803,
        name: "Andrelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102852,
        name: "Angelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102902,
        name: "Antônio Carlos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103009,
        name: "Antônio Dias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103108,
        name: "Antônio Prado de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103207,
        name: "Araçaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103306,
        name: "Aracitaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103405,
        name: "Araçuaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103504,
        name: "Araguari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103603,
        name: "Arantina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103702,
        name: "Araponga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103751,
        name: "Araporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103801,
        name: "Arapuá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3103900,
        name: "Araújos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104007,
        name: "Araxá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104106,
        name: "Arceburgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104205,
        name: "Arcos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104304,
        name: "Areado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104403,
        name: "Argirita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104452,
        name: "Aricanduva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104502,
        name: "Arinos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104601,
        name: "Astolfo Dutra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104700,
        name: "Ataléia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104809,
        name: "Augusto de Lima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3104908,
        name: "Baependi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105004,
        name: "Baldim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105103,
        name: "Bambuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105202,
        name: "Bandeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105301,
        name: "Bandeira do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105400,
        name: "Barão de Cocais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105509,
        name: "Barão de Monte Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105608,
        name: "Barbacena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105707,
        name: "Barra Longa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3105905,
        name: "Barroso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106002,
        name: "Bela Vista de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106101,
        name: "Belmiro Braga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106200,
        name: "Belo Horizonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106309,
        name: "Belo Oriente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106408,
        name: "Belo Vale",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106507,
        name: "Berilo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106655,
        name: "Berizal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106606,
        name: "Bertópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106705,
        name: "Betim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106804,
        name: "Bias Fortes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3106903,
        name: "Bicas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107000,
        name: "Biquinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107109,
        name: "Boa Esperança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107208,
        name: "Bocaina de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107307,
        name: "Bocaiúva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107406,
        name: "Bom Despacho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107505,
        name: "Bom Jardim de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107604,
        name: "Bom Jesus da Penha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107703,
        name: "Bom Jesus do Amparo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107802,
        name: "Bom Jesus do Galho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3107901,
        name: "Bom Repouso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108008,
        name: "Bom Sucesso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108107,
        name: "Bonfim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108206,
        name: "Bonfinópolis de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108255,
        name: "Bonito de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108305,
        name: "Borda da Mata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108404,
        name: "Botelhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108503,
        name: "Botumirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108701,
        name: "Brás Pires",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108552,
        name: "Brasilândia de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108602,
        name: "Brasília de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108800,
        name: "Braúnas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3108909,
        name: "Brazópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109006,
        name: "Brumadinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109105,
        name: "Bueno Brandão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109204,
        name: "Buenópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109253,
        name: "Bugre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109303,
        name: "Buritis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109402,
        name: "Buritizeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109451,
        name: "Cabeceira Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109501,
        name: "Cabo Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109600,
        name: "Cachoeira da Prata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109709,
        name: "Cachoeira de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3102704,
        name: "Cachoeira de Pajeú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109808,
        name: "Cachoeira Dourada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3109907,
        name: "Caetanópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110004,
        name: "Caeté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110103,
        name: "Caiana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110202,
        name: "Cajuri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110301,
        name: "Caldas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110400,
        name: "Camacho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110509,
        name: "Camanducaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110608,
        name: "Cambuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110707,
        name: "Cambuquira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110806,
        name: "Campanário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3110905,
        name: "Campanha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111002,
        name: "Campestre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111101,
        name: "Campina Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111150,
        name: "Campo Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111200,
        name: "Campo Belo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111309,
        name: "Campo do Meio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111408,
        name: "Campo Florido",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111507,
        name: "Campos Altos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111606,
        name: "Campos Gerais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111903,
        name: "Cana Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111705,
        name: "Canaã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3111804,
        name: "Canápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112000,
        name: "Candeias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112059,
        name: "Cantagalo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112109,
        name: "Caparaó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112208,
        name: "Capela Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112307,
        name: "Capelinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112406,
        name: "Capetinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112505,
        name: "Capim Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112604,
        name: "Capinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112653,
        name: "Capitão Andrade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112703,
        name: "Capitão Enéas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112802,
        name: "Capitólio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3112901,
        name: "Caputira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113008,
        name: "Caraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113107,
        name: "Caranaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113206,
        name: "Carandaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113305,
        name: "Carangola",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113404,
        name: "Caratinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113503,
        name: "Carbonita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113602,
        name: "Careaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113701,
        name: "Carlos Chagas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113800,
        name: "Carmésia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3113909,
        name: "Carmo da Cachoeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114006,
        name: "Carmo da Mata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114105,
        name: "Carmo de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114204,
        name: "Carmo do Cajuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114303,
        name: "Carmo do Paranaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114402,
        name: "Carmo do Rio Claro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114501,
        name: "Carmópolis de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114550,
        name: "Carneirinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114600,
        name: "Carrancas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114709,
        name: "Carvalhópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114808,
        name: "Carvalhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3114907,
        name: "Casa Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115003,
        name: "Cascalho Rico",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115102,
        name: "Cássia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115300,
        name: "Cataguases",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115359,
        name: "Catas Altas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115409,
        name: "Catas Altas da Noruega",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115458,
        name: "Catuji",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115474,
        name: "Catuti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115508,
        name: "Caxambu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115607,
        name: "Cedro do Abaeté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115706,
        name: "Central de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115805,
        name: "Centralina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115904,
        name: "Chácara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116001,
        name: "Chalé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116100,
        name: "Chapada do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116159,
        name: "Chapada Gaúcha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116209,
        name: "Chiador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116308,
        name: "Cipotânea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116407,
        name: "Claraval",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116506,
        name: "Claro dos Poções",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116605,
        name: "Cláudio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116704,
        name: "Coimbra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116803,
        name: "Coluna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3116902,
        name: "Comendador Gomes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117009,
        name: "Comercinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117108,
        name: "Conceição da Aparecida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3115201,
        name: "Conceição da Barra de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117306,
        name: "Conceição das Alagoas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117207,
        name: "Conceição das Pedras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117405,
        name: "Conceição de Ipanema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117504,
        name: "Conceição do Mato Dentro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117603,
        name: "Conceição do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117702,
        name: "Conceição do Rio Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117801,
        name: "Conceição dos Ouros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117836,
        name: "Cônego Marinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117876,
        name: "Confins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3117900,
        name: "Congonhal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118007,
        name: "Congonhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118106,
        name: "Congonhas do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118205,
        name: "Conquista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118304,
        name: "Conselheiro Lafaiete",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118403,
        name: "Conselheiro Pena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118502,
        name: "Consolação",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118601,
        name: "Contagem",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118700,
        name: "Coqueiral",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118809,
        name: "Coração de Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3118908,
        name: "Cordisburgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119005,
        name: "Cordislândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119104,
        name: "Corinto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119203,
        name: "Coroaci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119302,
        name: "Coromandel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119401,
        name: "Coronel Fabriciano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119500,
        name: "Coronel Murta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119609,
        name: "Coronel Pacheco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119708,
        name: "Coronel Xavier Chaves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119807,
        name: "Córrego Danta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119906,
        name: "Córrego do Bom Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3119955,
        name: "Córrego Fundo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120003,
        name: "Córrego Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120102,
        name: "Couto de Magalhães de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120151,
        name: "Crisólita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120201,
        name: "Cristais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120300,
        name: "Cristália",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120409,
        name: "Cristiano Otoni",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120508,
        name: "Cristina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120607,
        name: "Crucilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120706,
        name: "Cruzeiro da Fortaleza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120805,
        name: "Cruzília",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120839,
        name: "Cuparaque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120870,
        name: "Curral de Dentro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3120904,
        name: "Curvelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121001,
        name: "Datas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121100,
        name: "Delfim Moreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121209,
        name: "Delfinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121258,
        name: "Delta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121308,
        name: "Descoberto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121407,
        name: "Desterro de Entre Rios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121506,
        name: "Desterro do Melo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121605,
        name: "Diamantina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121704,
        name: "Diogo de Vasconcelos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121803,
        name: "Dionísio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3121902,
        name: "Divinésia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122009,
        name: "Divino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122108,
        name: "Divino das Laranjeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122207,
        name: "Divinolândia de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122306,
        name: "Divinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122355,
        name: "Divisa Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122405,
        name: "Divisa Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122454,
        name: "Divisópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122470,
        name: "Dom Bosco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122504,
        name: "Dom Cavati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122603,
        name: "Dom Joaquim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122702,
        name: "Dom Silvério",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122801,
        name: "Dom Viçoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3122900,
        name: "Dona Euzébia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123007,
        name: "Dores de Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123106,
        name: "Dores de Guanhães",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123205,
        name: "Dores do Indaiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123304,
        name: "Dores do Turvo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123403,
        name: "Doresópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123502,
        name: "Douradoquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123528,
        name: "Durandé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123601,
        name: "Elói Mendes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123700,
        name: "Engenheiro Caldas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123809,
        name: "Engenheiro Navarro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123858,
        name: "Entre Folhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3123908,
        name: "Entre Rios de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124005,
        name: "Ervália",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124104,
        name: "Esmeraldas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124203,
        name: "Espera Feliz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124302,
        name: "Espinosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124401,
        name: "Espírito Santo do Dourado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124500,
        name: "Estiva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124609,
        name: "Estrela Dalva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124708,
        name: "Estrela do Indaiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124807,
        name: "Estrela do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3124906,
        name: "Eugenópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125002,
        name: "Ewbank da Câmara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125101,
        name: "Extrema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125200,
        name: "Fama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125309,
        name: "Faria Lemos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125408,
        name: "Felício dos Santos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125606,
        name: "Felisburgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125705,
        name: "Felixlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125804,
        name: "Fernandes Tourinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125903,
        name: "Ferros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125952,
        name: "Fervedouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126000,
        name: "Florestal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126109,
        name: "Formiga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126208,
        name: "Formoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126307,
        name: "Fortaleza de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126406,
        name: "Fortuna de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126505,
        name: "Francisco Badaró",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126604,
        name: "Francisco Dumont",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126703,
        name: "Francisco Sá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126752,
        name: "Franciscópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126802,
        name: "Frei Gaspar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126901,
        name: "Frei Inocêncio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3126950,
        name: "Frei Lagonegro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127008,
        name: "Fronteira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127057,
        name: "Fronteira dos Vales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127073,
        name: "Fruta de Leite",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127107,
        name: "Frutal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127206,
        name: "Funilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127305,
        name: "Galiléia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127339,
        name: "Gameleiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127354,
        name: "Glaucilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127370,
        name: "Goiabeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127388,
        name: "Goianá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127404,
        name: "Gonçalves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127503,
        name: "Gonzaga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127602,
        name: "Gouveia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127701,
        name: "Governador Valadares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127800,
        name: "Grão Mogol",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3127909,
        name: "Grupiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128006,
        name: "Guanhães",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128105,
        name: "Guapé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128204,
        name: "Guaraciaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128253,
        name: "Guaraciama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128303,
        name: "Guaranésia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128402,
        name: "Guarani",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128501,
        name: "Guarará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128600,
        name: "Guarda-Mor",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128709,
        name: "Guaxupé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128808,
        name: "Guidoval",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3128907,
        name: "Guimarânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129004,
        name: "Guiricema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129103,
        name: "Gurinhatã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129202,
        name: "Heliodora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129301,
        name: "Iapu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129400,
        name: "Ibertioga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129509,
        name: "Ibiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129608,
        name: "Ibiaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129657,
        name: "Ibiracatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129707,
        name: "Ibiraci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129806,
        name: "Ibirité",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3129905,
        name: "Ibitiúra de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130002,
        name: "Ibituruna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130051,
        name: "Icaraí de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130101,
        name: "Igarapé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130200,
        name: "Igaratinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130309,
        name: "Iguatama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130408,
        name: "Ijaci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130507,
        name: "Ilicínea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130556,
        name: "Imbé de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130606,
        name: "Inconfidentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130655,
        name: "Indaiabira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130705,
        name: "Indianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130804,
        name: "Ingaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3130903,
        name: "Inhapim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131000,
        name: "Inhaúma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131109,
        name: "Inimutaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131158,
        name: "Ipaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131208,
        name: "Ipanema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131307,
        name: "Ipatinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131406,
        name: "Ipiaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131505,
        name: "Ipuiúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131604,
        name: "Iraí de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131703,
        name: "Itabira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131802,
        name: "Itabirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3131901,
        name: "Itabirito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132008,
        name: "Itacambira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132107,
        name: "Itacarambi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132206,
        name: "Itaguara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132305,
        name: "Itaipé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132404,
        name: "Itajubá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132503,
        name: "Itamarandiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132602,
        name: "Itamarati de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132701,
        name: "Itambacuri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132800,
        name: "Itambé do Mato Dentro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3132909,
        name: "Itamogi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133006,
        name: "Itamonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133105,
        name: "Itanhandu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133204,
        name: "Itanhomi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133303,
        name: "Itaobim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133402,
        name: "Itapagipe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133501,
        name: "Itapecerica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133600,
        name: "Itapeva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133709,
        name: "Itatiaiuçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133758,
        name: "Itaú de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133808,
        name: "Itaúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3133907,
        name: "Itaverava",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134004,
        name: "Itinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134103,
        name: "Itueta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134202,
        name: "Ituiutaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134301,
        name: "Itumirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134400,
        name: "Iturama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134509,
        name: "Itutinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134608,
        name: "Jaboticatubas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134707,
        name: "Jacinto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134806,
        name: "Jacuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3134905,
        name: "Jacutinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135001,
        name: "Jaguaraçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135050,
        name: "Jaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135076,
        name: "Jampruca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135100,
        name: "Janaúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135209,
        name: "Januária",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135308,
        name: "Japaraíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135357,
        name: "Japonvar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135407,
        name: "Jeceaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135456,
        name: "Jenipapo de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135506,
        name: "Jequeri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135605,
        name: "Jequitaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135704,
        name: "Jequitibá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135803,
        name: "Jequitinhonha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3135902,
        name: "Jesuânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136009,
        name: "Joaíma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136108,
        name: "Joanésia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136207,
        name: "João Monlevade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136306,
        name: "João Pinheiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136405,
        name: "Joaquim Felício",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136504,
        name: "Jordânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136520,
        name: "José Gonçalves de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136553,
        name: "José Raydan",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136579,
        name: "Josenópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136652,
        name: "Juatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136702,
        name: "Juiz de Fora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136801,
        name: "Juramento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136900,
        name: "Juruaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136959,
        name: "Juvenília",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137007,
        name: "Ladainha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137106,
        name: "Lagamar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137205,
        name: "Lagoa da Prata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137304,
        name: "Lagoa dos Patos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137403,
        name: "Lagoa Dourada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137502,
        name: "Lagoa Formosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137536,
        name: "Lagoa Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137601,
        name: "Lagoa Santa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137700,
        name: "Lajinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137809,
        name: "Lambari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3137908,
        name: "Lamim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138005,
        name: "Laranjal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138104,
        name: "Lassance",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138203,
        name: "Lavras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138302,
        name: "Leandro Ferreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138351,
        name: "Leme do Prado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138401,
        name: "Leopoldina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138500,
        name: "Liberdade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138609,
        name: "Lima Duarte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138625,
        name: "Limeira do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138658,
        name: "Lontra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138674,
        name: "Luisburgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138682,
        name: "Luislândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138708,
        name: "Luminárias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138807,
        name: "Luz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3138906,
        name: "Machacalis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139003,
        name: "Machado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139102,
        name: "Madre de Deus de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139201,
        name: "Malacacheta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139250,
        name: "Mamonas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139300,
        name: "Manga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139409,
        name: "Manhuaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139508,
        name: "Manhumirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139607,
        name: "Mantena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139805,
        name: "Mar de Espanha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139706,
        name: "Maravilhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3139904,
        name: "Maria da Fé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140001,
        name: "Mariana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140100,
        name: "Marilac",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140159,
        name: "Mário Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140209,
        name: "Maripá de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140308,
        name: "Marliéria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140407,
        name: "Marmelópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140506,
        name: "Martinho Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140530,
        name: "Martins Soares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140555,
        name: "Mata Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140605,
        name: "Materlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140704,
        name: "Mateus Leme",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171501,
        name: "Mathias Lobato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140803,
        name: "Matias Barbosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140852,
        name: "Matias Cardoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3140902,
        name: "Matipó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141009,
        name: "Mato Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141108,
        name: "Matozinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141207,
        name: "Matutina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141306,
        name: "Medeiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141405,
        name: "Medina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141504,
        name: "Mendes Pimentel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141603,
        name: "Mercês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141702,
        name: "Mesquita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141801,
        name: "Minas Novas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3141900,
        name: "Minduri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142007,
        name: "Mirabela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142106,
        name: "Miradouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142205,
        name: "Miraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142254,
        name: "Miravânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142304,
        name: "Moeda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142403,
        name: "Moema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142502,
        name: "Monjolos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142601,
        name: "Monsenhor Paulo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142700,
        name: "Montalvânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142809,
        name: "Monte Alegre de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3142908,
        name: "Monte Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143005,
        name: "Monte Belo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143104,
        name: "Monte Carmelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143153,
        name: "Monte Formoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143203,
        name: "Monte Santo de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143401,
        name: "Monte Sião",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143302,
        name: "Montes Claros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143450,
        name: "Montezuma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143500,
        name: "Morada Nova de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143609,
        name: "Morro da Garça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143708,
        name: "Morro do Pilar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143807,
        name: "Munhoz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3143906,
        name: "Muriaé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144003,
        name: "Mutum",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144102,
        name: "Muzambinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144201,
        name: "Nacip Raydan",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144300,
        name: "Nanuque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144359,
        name: "Naque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144375,
        name: "Natalândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144409,
        name: "Natércia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144508,
        name: "Nazareno",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144607,
        name: "Nepomuceno",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144656,
        name: "Ninheira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144672,
        name: "Nova Belém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144706,
        name: "Nova Era",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144805,
        name: "Nova Lima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3144904,
        name: "Nova Módica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145000,
        name: "Nova Ponte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145059,
        name: "Nova Porteirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145109,
        name: "Nova Resende",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145208,
        name: "Nova Serrana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3136603,
        name: "Nova União",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145307,
        name: "Novo Cruzeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145356,
        name: "Novo Oriente de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145372,
        name: "Novorizonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145406,
        name: "Olaria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145455,
        name: "Olhos-d'Água",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145505,
        name: "Olímpio Noronha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145604,
        name: "Oliveira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145703,
        name: "Oliveira Fortes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145802,
        name: "Onça de Pitangui",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145851,
        name: "Oratórios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145877,
        name: "Orizânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3145901,
        name: "Ouro Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146008,
        name: "Ouro Fino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146107,
        name: "Ouro Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146206,
        name: "Ouro Verde de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146255,
        name: "Padre Carvalho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146305,
        name: "Padre Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146552,
        name: "Pai Pedro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146404,
        name: "Paineiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146503,
        name: "Pains",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146602,
        name: "Paiva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146701,
        name: "Palma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146750,
        name: "Palmópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3146909,
        name: "Papagaios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147105,
        name: "Pará de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147006,
        name: "Paracatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147204,
        name: "Paraguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147303,
        name: "Paraisópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147402,
        name: "Paraopeba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147600,
        name: "Passa Quatro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147709,
        name: "Passa Tempo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147808,
        name: "Passa Vinte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147501,
        name: "Passabém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147907,
        name: "Passos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3147956,
        name: "Patis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148004,
        name: "Patos de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148103,
        name: "Patrocínio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148202,
        name: "Patrocínio do Muriaé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148301,
        name: "Paula Cândido",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148400,
        name: "Paulistas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148509,
        name: "Pavão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148608,
        name: "Peçanha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148707,
        name: "Pedra Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148756,
        name: "Pedra Bonita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148806,
        name: "Pedra do Anta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3148905,
        name: "Pedra do Indaiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149002,
        name: "Pedra Dourada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149101,
        name: "Pedralva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149150,
        name: "Pedras de Maria da Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149200,
        name: "Pedrinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149309,
        name: "Pedro Leopoldo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149408,
        name: "Pedro Teixeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149507,
        name: "Pequeri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149606,
        name: "Pequi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149705,
        name: "Perdigão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149804,
        name: "Perdizes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149903,
        name: "Perdões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3149952,
        name: "Periquito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150000,
        name: "Pescador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150109,
        name: "Piau",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150158,
        name: "Piedade de Caratinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150208,
        name: "Piedade de Ponte Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150307,
        name: "Piedade do Rio Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150406,
        name: "Piedade dos Gerais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150505,
        name: "Pimenta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150539,
        name: "Pingo d'Água",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150570,
        name: "Pintópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150604,
        name: "Piracema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150703,
        name: "Pirajuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150802,
        name: "Piranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3150901,
        name: "Piranguçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151008,
        name: "Piranguinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151107,
        name: "Pirapetinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151206,
        name: "Pirapora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151305,
        name: "Piraúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151404,
        name: "Pitangui",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151503,
        name: "Piumhi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151602,
        name: "Planura",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151701,
        name: "Poço Fundo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151800,
        name: "Poços de Caldas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3151909,
        name: "Pocrane",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152006,
        name: "Pompéu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152105,
        name: "Ponte Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152131,
        name: "Ponto Chique",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152170,
        name: "Ponto dos Volantes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152204,
        name: "Porteirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152303,
        name: "Porto Firme",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152402,
        name: "Poté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152501,
        name: "Pouso Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152600,
        name: "Pouso Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152709,
        name: "Prados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152808,
        name: "Prata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3152907,
        name: "Pratápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153004,
        name: "Pratinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153103,
        name: "Presidente Bernardes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153202,
        name: "Presidente Juscelino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153301,
        name: "Presidente Kubitschek",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153400,
        name: "Presidente Olegário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153608,
        name: "Prudente de Morais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153707,
        name: "Quartel Geral",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153806,
        name: "Queluzito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3153905,
        name: "Raposos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154002,
        name: "Raul Soares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154101,
        name: "Recreio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154150,
        name: "Reduto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154200,
        name: "Resende Costa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154309,
        name: "Resplendor",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154408,
        name: "Ressaquinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154457,
        name: "Riachinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154507,
        name: "Riacho dos Machados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154606,
        name: "Ribeirão das Neves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154705,
        name: "Ribeirão Vermelho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154804,
        name: "Rio Acima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3154903,
        name: "Rio Casca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155108,
        name: "Rio do Prado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155009,
        name: "Rio Doce",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155207,
        name: "Rio Espera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155306,
        name: "Rio Manso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155405,
        name: "Rio Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155504,
        name: "Rio Paranaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155603,
        name: "Rio Pardo de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155702,
        name: "Rio Piracicaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155801,
        name: "Rio Pomba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3155900,
        name: "Rio Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156007,
        name: "Rio Vermelho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156106,
        name: "Ritápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156205,
        name: "Rochedo de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156304,
        name: "Rodeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156403,
        name: "Romaria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156452,
        name: "Rosário da Limeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156502,
        name: "Rubelita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156601,
        name: "Rubim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156700,
        name: "Sabará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156809,
        name: "Sabinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3156908,
        name: "Sacramento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157005,
        name: "Salinas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157104,
        name: "Salto da Divisa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157203,
        name: "Santa Bárbara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157252,
        name: "Santa Bárbara do Leste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157278,
        name: "Santa Bárbara do Monte Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157302,
        name: "Santa Bárbara do Tugúrio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157336,
        name: "Santa Cruz de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157377,
        name: "Santa Cruz de Salinas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157401,
        name: "Santa Cruz do Escalvado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157500,
        name: "Santa Efigênia de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157609,
        name: "Santa Fé de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157658,
        name: "Santa Helena de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157708,
        name: "Santa Juliana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157807,
        name: "Santa Luzia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3157906,
        name: "Santa Margarida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158003,
        name: "Santa Maria de Itabira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158102,
        name: "Santa Maria do Salto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158201,
        name: "Santa Maria do Suaçuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159209,
        name: "Santa Rita de Caldas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159407,
        name: "Santa Rita de Ibitipoca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159308,
        name: "Santa Rita de Jacutinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159357,
        name: "Santa Rita de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159506,
        name: "Santa Rita do Itueto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159605,
        name: "Santa Rita do Sapucaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159704,
        name: "Santa Rosa da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159803,
        name: "Santa Vitória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158300,
        name: "Santana da Vargem",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158409,
        name: "Santana de Cataguases",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158508,
        name: "Santana de Pirapama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158607,
        name: "Santana do Deserto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158706,
        name: "Santana do Garambéu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158805,
        name: "Santana do Jacaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158904,
        name: "Santana do Manhuaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3158953,
        name: "Santana do Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159001,
        name: "Santana do Riacho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159100,
        name: "Santana dos Montes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3159902,
        name: "Santo Antônio do Amparo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160009,
        name: "Santo Antônio do Aventureiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160108,
        name: "Santo Antônio do Grama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160207,
        name: "Santo Antônio do Itambé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160306,
        name: "Santo Antônio do Jacinto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160405,
        name: "Santo Antônio do Monte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160454,
        name: "Santo Antônio do Retiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160504,
        name: "Santo Antônio do Rio Abaixo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160603,
        name: "Santo Hipólito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160702,
        name: "Santos Dumont",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160801,
        name: "São Bento Abade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160900,
        name: "São Brás do Suaçuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3160959,
        name: "São Domingos das Dores",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161007,
        name: "São Domingos do Prata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161056,
        name: "São Félix de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161106,
        name: "São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161205,
        name: "São Francisco de Paula",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161304,
        name: "São Francisco de Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161403,
        name: "São Francisco do Glória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161502,
        name: "São Geraldo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161601,
        name: "São Geraldo da Piedade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161650,
        name: "São Geraldo do Baixio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161700,
        name: "São Gonçalo do Abaeté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161809,
        name: "São Gonçalo do Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3161908,
        name: "São Gonçalo do Rio Abaixo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3125507,
        name: "São Gonçalo do Rio Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162005,
        name: "São Gonçalo do Sapucaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162104,
        name: "São Gotardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162203,
        name: "São João Batista do Glória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162252,
        name: "São João da Lagoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162302,
        name: "São João da Mata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162401,
        name: "São João da Ponte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162450,
        name: "São João das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162500,
        name: "São João del Rei",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162559,
        name: "São João do Manhuaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162575,
        name: "São João do Manteninha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162609,
        name: "São João do Oriente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162658,
        name: "São João do Pacuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162708,
        name: "São João do Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162807,
        name: "São João Evangelista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162906,
        name: "São João Nepomuceno",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162922,
        name: "São Joaquim de Bicas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162948,
        name: "São José da Barra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3162955,
        name: "São José da Lapa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163003,
        name: "São José da Safira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163102,
        name: "São José da Varginha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163201,
        name: "São José do Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163300,
        name: "São José do Divino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163409,
        name: "São José do Goiabal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163508,
        name: "São José do Jacuri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163607,
        name: "São José do Mantimento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163706,
        name: "São Lourenço",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163805,
        name: "São Miguel do Anta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3163904,
        name: "São Pedro da União",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164100,
        name: "São Pedro do Suaçuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164001,
        name: "São Pedro dos Ferros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164209,
        name: "São Romão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164308,
        name: "São Roque de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164407,
        name: "São Sebastião da Bela Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164431,
        name: "São Sebastião da Vargem Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164472,
        name: "São Sebastião do Anta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164506,
        name: "São Sebastião do Maranhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164605,
        name: "São Sebastião do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164704,
        name: "São Sebastião do Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164803,
        name: "São Sebastião do Rio Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3164902,
        name: "São Sebastião do Rio Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165008,
        name: "São Tiago",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165107,
        name: "São Tomás de Aquino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165206,
        name: "São Tomé das Letras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165305,
        name: "São Vicente de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165404,
        name: "Sapucaí-Mirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165503,
        name: "Sardoá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165537,
        name: "Sarzedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165560,
        name: "Sem-Peixe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165578,
        name: "Senador Amaral",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165602,
        name: "Senador Cortes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165701,
        name: "Senador Firmino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165800,
        name: "Senador José Bento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165909,
        name: "Senador Modestino Gonçalves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166006,
        name: "Senhora de Oliveira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166105,
        name: "Senhora do Porto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166204,
        name: "Senhora dos Remédios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166303,
        name: "Sericita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166402,
        name: "Seritinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166501,
        name: "Serra Azul de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166600,
        name: "Serra da Saudade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166808,
        name: "Serra do Salitre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166709,
        name: "Serra dos Aimorés",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166907,
        name: "Serrania",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3166956,
        name: "Serranópolis de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167004,
        name: "Serranos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167103,
        name: "Serro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167202,
        name: "Sete Lagoas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3165552,
        name: "Setubinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167301,
        name: "Silveirânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167400,
        name: "Silvianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167509,
        name: "Simão Pereira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167608,
        name: "Simonésia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167707,
        name: "Sobrália",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167806,
        name: "Soledade de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3167905,
        name: "Tabuleiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168002,
        name: "Taiobeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168051,
        name: "Taparuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168101,
        name: "Tapira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168200,
        name: "Tapiraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168309,
        name: "Taquaraçu de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168408,
        name: "Tarumirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168507,
        name: "Teixeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168606,
        name: "Teófilo Otoni",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168705,
        name: "Timóteo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168804,
        name: "Tiradentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3168903,
        name: "Tiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169000,
        name: "Tocantins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169059,
        name: "Tocos do Moji",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169109,
        name: "Toledo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169208,
        name: "Tombos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169307,
        name: "Três Corações",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169356,
        name: "Três Marias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169406,
        name: "Três Pontas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169505,
        name: "Tumiritinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169604,
        name: "Tupaciguara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169703,
        name: "Turmalina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169802,
        name: "Turvolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3169901,
        name: "Ubá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170008,
        name: "Ubaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170057,
        name: "Ubaporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170107,
        name: "Uberaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170206,
        name: "Uberlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170305,
        name: "Umburatiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170404,
        name: "Unaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170438,
        name: "União de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170479,
        name: "Uruana de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170503,
        name: "Urucânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170529,
        name: "Urucuia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170578,
        name: "Vargem Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170602,
        name: "Vargem Bonita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170651,
        name: "Vargem Grande do Rio Pardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170701,
        name: "Varginha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170750,
        name: "Varjão de Minas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170800,
        name: "Várzea da Palma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3170909,
        name: "Varzelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171006,
        name: "Vazante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171030,
        name: "Verdelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171071,
        name: "Veredinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171105,
        name: "Veríssimo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171154,
        name: "Vermelho Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171204,
        name: "Vespasiano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171303,
        name: "Viçosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171402,
        name: "Vieiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171600,
        name: "Virgem da Lapa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171709,
        name: "Virgínia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171808,
        name: "Virginópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3171907,
        name: "Virgolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3172004,
        name: "Visconde do Rio Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3172103,
        name: "Volta Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3172202,
        name: "Wenceslau Braz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 31
      },
      {
        code: 3200102,
        name: "Afonso Cláudio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200169,
        name: "Água Doce do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200136,
        name: "Águia Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200201,
        name: "Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200300,
        name: "Alfredo Chaves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200359,
        name: "Alto Rio Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200409,
        name: "Anchieta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200508,
        name: "Apiacá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200607,
        name: "Aracruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200706,
        name: "Atílio Vivacqua",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200805,
        name: "Baixo Guandu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3200904,
        name: "Barra de São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201001,
        name: "Boa Esperança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201100,
        name: "Bom Jesus do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201159,
        name: "Brejetuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201209,
        name: "Cachoeiro de Itapemirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201308,
        name: "Cariacica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201407,
        name: "Castelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201506,
        name: "Colatina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201605,
        name: "Conceição da Barra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201704,
        name: "Conceição do Castelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201803,
        name: "Divino de São Lourenço",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3201902,
        name: "Domingos Martins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202009,
        name: "Dores do Rio Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202108,
        name: "Ecoporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202207,
        name: "Fundão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202256,
        name: "Governador Lindenberg",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202306,
        name: "Guaçuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202405,
        name: "Guarapari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202454,
        name: "Ibatiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202504,
        name: "Ibiraçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202553,
        name: "Ibitirama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202603,
        name: "Iconha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202652,
        name: "Irupi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202702,
        name: "Itaguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202801,
        name: "Itapemirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3202900,
        name: "Itarana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203007,
        name: "Iúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203056,
        name: "Jaguaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203106,
        name: "Jerônimo Monteiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203130,
        name: "João Neiva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203163,
        name: "Laranja da Terra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203205,
        name: "Linhares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203304,
        name: "Mantenópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203320,
        name: "Marataízes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203346,
        name: "Marechal Floriano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203353,
        name: "Marilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203403,
        name: "Mimoso do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203502,
        name: "Montanha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203601,
        name: "Mucurici",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203700,
        name: "Muniz Freire",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203809,
        name: "Muqui",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3203908,
        name: "Nova Venécia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204005,
        name: "Pancas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204054,
        name: "Pedro Canário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204104,
        name: "Pinheiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204203,
        name: "Piúma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204252,
        name: "Ponto Belo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204302,
        name: "Presidente Kennedy",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204351,
        name: "Rio Bananal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204401,
        name: "Rio Novo do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204500,
        name: "Santa Leopoldina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204559,
        name: "Santa Maria de Jetibá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204609,
        name: "Santa Teresa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204658,
        name: "São Domingos do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204708,
        name: "São Gabriel da Palha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204807,
        name: "São José do Calçado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204906,
        name: "São Mateus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3204955,
        name: "São Roque do Canaã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205002,
        name: "Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205010,
        name: "Sooretama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205036,
        name: "Vargem Alta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205069,
        name: "Venda Nova do Imigrante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205101,
        name: "Viana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205150,
        name: "Vila Pavão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205176,
        name: "Vila Valério",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205200,
        name: "Vila Velha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3205309,
        name: "Vitória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 32
      },
      {
        code: 3300100,
        name: "Angra dos Reis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300159,
        name: "Aperibé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300209,
        name: "Araruama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300225,
        name: "Areal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300233,
        name: "Armação dos Búzios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300258,
        name: "Arraial do Cabo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300308,
        name: "Barra do Piraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300407,
        name: "Barra Mansa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300456,
        name: "Belford Roxo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300506,
        name: "Bom Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300605,
        name: "Bom Jesus do Itabapoana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300704,
        name: "Cabo Frio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300803,
        name: "Cachoeiras de Macacu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300902,
        name: "Cambuci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301009,
        name: "Campos dos Goytacazes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301108,
        name: "Cantagalo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300936,
        name: "Carapebus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301157,
        name: "Cardoso Moreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301207,
        name: "Carmo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301306,
        name: "Casimiro de Abreu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3300951,
        name: "Comendador Levy Gasparian",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301405,
        name: "Conceição de Macabu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301504,
        name: "Cordeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301603,
        name: "Duas Barras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301702,
        name: "Duque de Caxias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301801,
        name: "Engenheiro Paulo de Frontin",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301850,
        name: "Guapimirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301876,
        name: "Iguaba Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3301900,
        name: "Itaboraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302007,
        name: "Itaguaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302056,
        name: "Italva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302106,
        name: "Itaocara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302205,
        name: "Itaperuna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302254,
        name: "Itatiaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302270,
        name: "Japeri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302304,
        name: "Laje do Muriaé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302403,
        name: "Macaé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302452,
        name: "Macuco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302502,
        name: "Magé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302601,
        name: "Mangaratiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302700,
        name: "Maricá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302809,
        name: "Mendes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302858,
        name: "Mesquita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3302908,
        name: "Miguel Pereira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303005,
        name: "Miracema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303104,
        name: "Natividade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303203,
        name: "Nilópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303302,
        name: "Niterói",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303401,
        name: "Nova Friburgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303500,
        name: "Nova Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303609,
        name: "Paracambi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303708,
        name: "Paraíba do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303807,
        name: "Paraty",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303856,
        name: "Paty do Alferes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303906,
        name: "Petrópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3303955,
        name: "Pinheiral",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304003,
        name: "Piraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304102,
        name: "Porciúncula",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304110,
        name: "Porto Real",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304128,
        name: "Quatis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304144,
        name: "Queimados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304151,
        name: "Quissamã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304201,
        name: "Resende",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304300,
        name: "Rio Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304409,
        name: "Rio Claro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304508,
        name: "Rio das Flores",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304524,
        name: "Rio das Ostras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304557,
        name: "Rio de Janeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304607,
        name: "Santa Maria Madalena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304706,
        name: "Santo Antônio de Pádua",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304805,
        name: "São Fidélis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304755,
        name: "São Francisco de Itabapoana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3304904,
        name: "São Gonçalo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305000,
        name: "São João da Barra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305109,
        name: "São João de Meriti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305133,
        name: "São José de Ubá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305158,
        name: "São José do Vale do Rio Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305208,
        name: "São Pedro da Aldeia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305307,
        name: "São Sebastião do Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305406,
        name: "Sapucaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305505,
        name: "Saquarema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305554,
        name: "Seropédica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305604,
        name: "Silva Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305703,
        name: "Sumidouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305752,
        name: "Tanguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305802,
        name: "Teresópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3305901,
        name: "Trajano de Moraes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3306008,
        name: "Três Rios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3306107,
        name: "Valença",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3306156,
        name: "Varre-Sai",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3306206,
        name: "Vassouras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3306305,
        name: "Volta Redonda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 33
      },
      {
        code: 3500105,
        name: "Adamantina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500204,
        name: "Adolfo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500303,
        name: "Aguaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500402,
        name: "Águas da Prata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500501,
        name: "Águas de Lindóia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500550,
        name: "Águas de Santa Bárbara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500600,
        name: "Águas de São Pedro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500709,
        name: "Agudos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500758,
        name: "Alambari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500808,
        name: "Alfredo Marcondes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3500907,
        name: "Altair",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501004,
        name: "Altinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501103,
        name: "Alto Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501152,
        name: "Alumínio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501202,
        name: "Álvares Florence",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501301,
        name: "Álvares Machado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501400,
        name: "Álvaro de Carvalho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501509,
        name: "Alvinlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501608,
        name: "Americana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501707,
        name: "Américo Brasiliense",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501806,
        name: "Américo de Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3501905,
        name: "Amparo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502002,
        name: "Analândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502101,
        name: "Andradina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502200,
        name: "Angatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502309,
        name: "Anhembi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502408,
        name: "Anhumas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502507,
        name: "Aparecida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502606,
        name: "Aparecida d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502705,
        name: "Apiaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502754,
        name: "Araçariguama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502804,
        name: "Araçatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3502903,
        name: "Araçoiaba da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503000,
        name: "Aramina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503109,
        name: "Arandu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503158,
        name: "Arapeí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503208,
        name: "Araraquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503307,
        name: "Araras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503356,
        name: "Arco-Íris",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503406,
        name: "Arealva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503505,
        name: "Areias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503604,
        name: "Areiópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503703,
        name: "Ariranha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503802,
        name: "Artur Nogueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503901,
        name: "Arujá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3503950,
        name: "Aspásia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504008,
        name: "Assis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504107,
        name: "Atibaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504206,
        name: "Auriflama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504305,
        name: "Avaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504404,
        name: "Avanhandava",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504503,
        name: "Avaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504602,
        name: "Bady Bassitt",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504701,
        name: "Balbinos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504800,
        name: "Bálsamo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3504909,
        name: "Bananal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505005,
        name: "Barão de Antonina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505104,
        name: "Barbosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505203,
        name: "Bariri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505302,
        name: "Barra Bonita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505351,
        name: "Barra do Chapéu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505401,
        name: "Barra do Turvo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505500,
        name: "Barretos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505609,
        name: "Barrinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505708,
        name: "Barueri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505807,
        name: "Bastos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3505906,
        name: "Batatais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506003,
        name: "Bauru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506102,
        name: "Bebedouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506201,
        name: "Bento de Abreu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506300,
        name: "Bernardino de Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506359,
        name: "Bertioga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506409,
        name: "Bilac",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506508,
        name: "Birigui",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506607,
        name: "Biritiba Mirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506706,
        name: "Boa Esperança do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506805,
        name: "Bocaina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3506904,
        name: "Bofete",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507001,
        name: "Boituva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507100,
        name: "Bom Jesus dos Perdões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507159,
        name: "Bom Sucesso de Itararé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507209,
        name: "Borá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507308,
        name: "Boracéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507407,
        name: "Borborema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507456,
        name: "Borebi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507506,
        name: "Botucatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507605,
        name: "Bragança Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507704,
        name: "Braúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507753,
        name: "Brejo Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507803,
        name: "Brodowski",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3507902,
        name: "Brotas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508009,
        name: "Buri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508108,
        name: "Buritama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508207,
        name: "Buritizal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508306,
        name: "Cabrália Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508405,
        name: "Cabreúva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508504,
        name: "Caçapava",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508603,
        name: "Cachoeira Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508702,
        name: "Caconde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508801,
        name: "Cafelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3508900,
        name: "Caiabu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509007,
        name: "Caieiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509106,
        name: "Caiuá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509205,
        name: "Cajamar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509254,
        name: "Cajati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509304,
        name: "Cajobi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509403,
        name: "Cajuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509452,
        name: "Campina do Monte Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509502,
        name: "Campinas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509601,
        name: "Campo Limpo Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509700,
        name: "Campos do Jordão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509809,
        name: "Campos Novos Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509908,
        name: "Cananéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3509957,
        name: "Canas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510005,
        name: "Cândido Mota",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510104,
        name: "Cândido Rodrigues",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510153,
        name: "Canitar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510203,
        name: "Capão Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510302,
        name: "Capela do Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510401,
        name: "Capivari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510500,
        name: "Caraguatatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510609,
        name: "Carapicuíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510708,
        name: "Cardoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510807,
        name: "Casa Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3510906,
        name: "Cássia dos Coqueiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511003,
        name: "Castilho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511102,
        name: "Catanduva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511201,
        name: "Catiguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511300,
        name: "Cedral",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511409,
        name: "Cerqueira César",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511508,
        name: "Cerquilho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511607,
        name: "Cesário Lange",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511706,
        name: "Charqueada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3557204,
        name: "Chavantes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3511904,
        name: "Clementina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512001,
        name: "Colina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512100,
        name: "Colômbia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512209,
        name: "Conchal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512308,
        name: "Conchas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512407,
        name: "Cordeirópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512506,
        name: "Coroados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512605,
        name: "Coronel Macedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512704,
        name: "Corumbataí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512803,
        name: "Cosmópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3512902,
        name: "Cosmorama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513009,
        name: "Cotia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513108,
        name: "Cravinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513207,
        name: "Cristais Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513306,
        name: "Cruzália",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513405,
        name: "Cruzeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513504,
        name: "Cubatão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513603,
        name: "Cunha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513702,
        name: "Descalvado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513801,
        name: "Diadema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513850,
        name: "Dirce Reis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3513900,
        name: "Divinolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514007,
        name: "Dobrada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514106,
        name: "Dois Córregos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514205,
        name: "Dolcinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514304,
        name: "Dourado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514403,
        name: "Dracena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514502,
        name: "Duartina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514601,
        name: "Dumont",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514700,
        name: "Echaporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514809,
        name: "Eldorado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514908,
        name: "Elias Fausto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514924,
        name: "Elisiário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3514957,
        name: "Embaúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515004,
        name: "Embu das Artes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515103,
        name: "Embu-Guaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515129,
        name: "Emilianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515152,
        name: "Engenheiro Coelho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515186,
        name: "Espírito Santo do Pinhal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515194,
        name: "Espírito Santo do Turvo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3557303,
        name: "Estiva Gerbi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515301,
        name: "Estrela do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515202,
        name: "Estrela d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515350,
        name: "Euclides da Cunha Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515400,
        name: "Fartura",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515608,
        name: "Fernando Prestes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515509,
        name: "Fernandópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515657,
        name: "Fernão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515707,
        name: "Ferraz de Vasconcelos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515806,
        name: "Flora Rica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3515905,
        name: "Floreal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516002,
        name: "Flórida Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516101,
        name: "Florínea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516200,
        name: "Franca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516309,
        name: "Francisco Morato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516408,
        name: "Franco da Rocha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516507,
        name: "Gabriel Monteiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516606,
        name: "Gália",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516705,
        name: "Garça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516804,
        name: "Gastão Vidigal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516853,
        name: "Gavião Peixoto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3516903,
        name: "General Salgado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517000,
        name: "Getulina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517109,
        name: "Glicério",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517208,
        name: "Guaiçara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517307,
        name: "Guaimbê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517406,
        name: "Guaíra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517505,
        name: "Guapiaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517604,
        name: "Guapiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517703,
        name: "Guará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517802,
        name: "Guaraçaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3517901,
        name: "Guaraci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518008,
        name: "Guarani d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518107,
        name: "Guarantã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518206,
        name: "Guararapes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518305,
        name: "Guararema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518404,
        name: "Guaratinguetá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518503,
        name: "Guareí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518602,
        name: "Guariba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518701,
        name: "Guarujá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518800,
        name: "Guarulhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518859,
        name: "Guatapará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3518909,
        name: "Guzolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519006,
        name: "Herculândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519055,
        name: "Holambra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519071,
        name: "Hortolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519105,
        name: "Iacanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519204,
        name: "Iacri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519253,
        name: "Iaras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519303,
        name: "Ibaté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519402,
        name: "Ibirá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519501,
        name: "Ibirarema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519600,
        name: "Ibitinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519709,
        name: "Ibiúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519808,
        name: "Icém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3519907,
        name: "Iepê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520004,
        name: "Igaraçu do Tietê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520103,
        name: "Igarapava",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520202,
        name: "Igaratá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520301,
        name: "Iguape",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520426,
        name: "Ilha Comprida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520442,
        name: "Ilha Solteira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520400,
        name: "Ilhabela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520509,
        name: "Indaiatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520608,
        name: "Indiana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520707,
        name: "Indiaporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520806,
        name: "Inúbia Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3520905,
        name: "Ipaussu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521002,
        name: "Iperó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521101,
        name: "Ipeúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521150,
        name: "Ipiguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521200,
        name: "Iporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521309,
        name: "Ipuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521408,
        name: "Iracemápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521507,
        name: "Irapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521606,
        name: "Irapuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521705,
        name: "Itaberá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521804,
        name: "Itaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3521903,
        name: "Itajobi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522000,
        name: "Itaju",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522109,
        name: "Itanhaém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522158,
        name: "Itaoca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522208,
        name: "Itapecerica da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522307,
        name: "Itapetininga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522406,
        name: "Itapeva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522505,
        name: "Itapevi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522604,
        name: "Itapira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522653,
        name: "Itapirapuã Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522703,
        name: "Itápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522802,
        name: "Itaporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3522901,
        name: "Itapuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523008,
        name: "Itapura",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523107,
        name: "Itaquaquecetuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523206,
        name: "Itararé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523305,
        name: "Itariri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523404,
        name: "Itatiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523503,
        name: "Itatinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523602,
        name: "Itirapina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523701,
        name: "Itirapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523800,
        name: "Itobi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3523909,
        name: "Itu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524006,
        name: "Itupeva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524105,
        name: "Ituverava",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524204,
        name: "Jaborandi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524303,
        name: "Jaboticabal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524402,
        name: "Jacareí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524501,
        name: "Jaci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524600,
        name: "Jacupiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524709,
        name: "Jaguariúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524808,
        name: "Jales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3524907,
        name: "Jambeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525003,
        name: "Jandira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525102,
        name: "Jardinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525201,
        name: "Jarinu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525300,
        name: "Jaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525409,
        name: "Jeriquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525508,
        name: "Joanópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525607,
        name: "João Ramalho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525706,
        name: "José Bonifácio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525805,
        name: "Júlio Mesquita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525854,
        name: "Jumirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3525904,
        name: "Jundiaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526001,
        name: "Junqueirópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526100,
        name: "Juquiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526209,
        name: "Juquitiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526308,
        name: "Lagoinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526407,
        name: "Laranjal Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526506,
        name: "Lavínia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526605,
        name: "Lavrinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526704,
        name: "Leme",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526803,
        name: "Lençóis Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3526902,
        name: "Limeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527009,
        name: "Lindóia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527108,
        name: "Lins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527207,
        name: "Lorena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527256,
        name: "Lourdes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527306,
        name: "Louveira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527405,
        name: "Lucélia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527504,
        name: "Lucianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527603,
        name: "Luís Antônio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527702,
        name: "Luiziânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527801,
        name: "Lupércio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3527900,
        name: "Lutécia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528007,
        name: "Macatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528106,
        name: "Macaubal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528205,
        name: "Macedônia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528304,
        name: "Magda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528403,
        name: "Mairinque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528502,
        name: "Mairiporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528601,
        name: "Manduri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528700,
        name: "Marabá Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528809,
        name: "Maracaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528858,
        name: "Marapoama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3528908,
        name: "Mariápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529005,
        name: "Marília",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529104,
        name: "Marinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529203,
        name: "Martinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529302,
        name: "Matão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529401,
        name: "Mauá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529500,
        name: "Mendonça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529609,
        name: "Meridiano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529658,
        name: "Mesópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529708,
        name: "Miguelópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529807,
        name: "Mineiros do Tietê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530003,
        name: "Mira Estrela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3529906,
        name: "Miracatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530102,
        name: "Mirandópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530201,
        name: "Mirante do Paranapanema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530300,
        name: "Mirassol",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530409,
        name: "Mirassolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530508,
        name: "Mococa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530607,
        name: "Mogi das Cruzes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530706,
        name: "Mogi Guaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530805,
        name: "Mogi Mirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3530904,
        name: "Mombuca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531001,
        name: "Monções",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531100,
        name: "Mongaguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531209,
        name: "Monte Alegre do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531308,
        name: "Monte Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531407,
        name: "Monte Aprazível",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531506,
        name: "Monte Azul Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531605,
        name: "Monte Castelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531803,
        name: "Monte Mor",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531704,
        name: "Monteiro Lobato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3531902,
        name: "Morro Agudo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532009,
        name: "Morungaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532058,
        name: "Motuca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532108,
        name: "Murutinga do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532157,
        name: "Nantes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532207,
        name: "Narandiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532306,
        name: "Natividade da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532405,
        name: "Nazaré Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532504,
        name: "Neves Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532603,
        name: "Nhandeara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532702,
        name: "Nipoã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532801,
        name: "Nova Aliança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532827,
        name: "Nova Campina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532843,
        name: "Nova Canaã Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532868,
        name: "Nova Castilho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3532900,
        name: "Nova Europa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533007,
        name: "Nova Granada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533106,
        name: "Nova Guataporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533205,
        name: "Nova Independência",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533304,
        name: "Nova Luzitânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533403,
        name: "Nova Odessa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533254,
        name: "Novais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533502,
        name: "Novo Horizonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533601,
        name: "Nuporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533700,
        name: "Ocauçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533809,
        name: "Óleo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3533908,
        name: "Olímpia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534005,
        name: "Onda Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534104,
        name: "Oriente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534203,
        name: "Orindiúva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534302,
        name: "Orlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534401,
        name: "Osasco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534500,
        name: "Oscar Bressane",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534609,
        name: "Osvaldo Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534708,
        name: "Ourinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534807,
        name: "Ouro Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534757,
        name: "Ouroeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3534906,
        name: "Pacaembu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535002,
        name: "Palestina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535101,
        name: "Palmares Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535200,
        name: "Palmeira d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535309,
        name: "Palmital",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535408,
        name: "Panorama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535507,
        name: "Paraguaçu Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535606,
        name: "Paraibuna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535705,
        name: "Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535804,
        name: "Paranapanema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3535903,
        name: "Paranapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536000,
        name: "Parapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536109,
        name: "Pardinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536208,
        name: "Pariquera-Açu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536257,
        name: "Parisi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536307,
        name: "Patrocínio Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536406,
        name: "Paulicéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536505,
        name: "Paulínia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536570,
        name: "Paulistânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536604,
        name: "Paulo de Faria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536703,
        name: "Pederneiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536802,
        name: "Pedra Bela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3536901,
        name: "Pedranópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537008,
        name: "Pedregulho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537107,
        name: "Pedreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537156,
        name: "Pedrinhas Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537206,
        name: "Pedro de Toledo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537305,
        name: "Penápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537404,
        name: "Pereira Barreto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537503,
        name: "Pereiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537602,
        name: "Peruíbe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537701,
        name: "Piacatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537800,
        name: "Piedade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3537909,
        name: "Pilar do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538006,
        name: "Pindamonhangaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538105,
        name: "Pindorama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538204,
        name: "Pinhalzinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538303,
        name: "Piquerobi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538501,
        name: "Piquete",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538600,
        name: "Piracaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538709,
        name: "Piracicaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538808,
        name: "Piraju",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3538907,
        name: "Pirajuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539004,
        name: "Pirangi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539103,
        name: "Pirapora do Bom Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539202,
        name: "Pirapozinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539301,
        name: "Pirassununga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539400,
        name: "Piratininga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539509,
        name: "Pitangueiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539608,
        name: "Planalto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539707,
        name: "Platina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539806,
        name: "Poá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3539905,
        name: "Poloni",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540002,
        name: "Pompéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540101,
        name: "Pongaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540200,
        name: "Pontal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540259,
        name: "Pontalinda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540309,
        name: "Pontes Gestal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540408,
        name: "Populina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540507,
        name: "Porangaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540606,
        name: "Porto Feliz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540705,
        name: "Porto Ferreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540754,
        name: "Potim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540804,
        name: "Potirendaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540853,
        name: "Pracinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3540903,
        name: "Pradópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541000,
        name: "Praia Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541059,
        name: "Pratânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541109,
        name: "Presidente Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541208,
        name: "Presidente Bernardes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541307,
        name: "Presidente Epitácio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541406,
        name: "Presidente Prudente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541505,
        name: "Presidente Venceslau",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541604,
        name: "Promissão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541653,
        name: "Quadra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541703,
        name: "Quatá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541802,
        name: "Queiroz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3541901,
        name: "Queluz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542008,
        name: "Quintana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542107,
        name: "Rafard",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542206,
        name: "Rancharia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542305,
        name: "Redenção da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542404,
        name: "Regente Feijó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542503,
        name: "Reginópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542602,
        name: "Registro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542701,
        name: "Restinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542800,
        name: "Ribeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3542909,
        name: "Ribeirão Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543006,
        name: "Ribeirão Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543105,
        name: "Ribeirão Corrente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543204,
        name: "Ribeirão do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543238,
        name: "Ribeirão dos Índios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543253,
        name: "Ribeirão Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543303,
        name: "Ribeirão Pires",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543402,
        name: "Ribeirão Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543600,
        name: "Rifaina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543709,
        name: "Rincão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543808,
        name: "Rinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543907,
        name: "Rio Claro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544004,
        name: "Rio das Pedras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544103,
        name: "Rio Grande da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544202,
        name: "Riolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3543501,
        name: "Riversul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544251,
        name: "Rosana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544301,
        name: "Roseira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544400,
        name: "Rubiácea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544509,
        name: "Rubinéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544608,
        name: "Sabino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544707,
        name: "Sagres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544806,
        name: "Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3544905,
        name: "Sales Oliveira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545001,
        name: "Salesópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545100,
        name: "Salmourão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545159,
        name: "Saltinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545209,
        name: "Salto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545308,
        name: "Salto de Pirapora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545407,
        name: "Salto Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545506,
        name: "Sandovalina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545605,
        name: "Santa Adélia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545704,
        name: "Santa Albertina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3545803,
        name: "Santa Bárbara d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546009,
        name: "Santa Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546108,
        name: "Santa Clara d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546207,
        name: "Santa Cruz da Conceição",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546256,
        name: "Santa Cruz da Esperança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546306,
        name: "Santa Cruz das Palmeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546405,
        name: "Santa Cruz do Rio Pardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546504,
        name: "Santa Ernestina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546603,
        name: "Santa Fé do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546702,
        name: "Santa Gertrudes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546801,
        name: "Santa Isabel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3546900,
        name: "Santa Lúcia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547007,
        name: "Santa Maria da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547106,
        name: "Santa Mercedes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547502,
        name: "Santa Rita do Passa Quatro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547403,
        name: "Santa Rita d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547601,
        name: "Santa Rosa de Viterbo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547650,
        name: "Santa Salete",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547205,
        name: "Santana da Ponte Pensa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547304,
        name: "Santana de Parnaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547700,
        name: "Santo Anastácio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547809,
        name: "Santo André",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3547908,
        name: "Santo Antônio da Alegria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548005,
        name: "Santo Antônio de Posse",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548054,
        name: "Santo Antônio do Aracanguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548104,
        name: "Santo Antônio do Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548203,
        name: "Santo Antônio do Pinhal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548302,
        name: "Santo Expedito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548401,
        name: "Santópolis do Aguapeí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548500,
        name: "Santos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548609,
        name: "São Bento do Sapucaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548708,
        name: "São Bernardo do Campo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548807,
        name: "São Caetano do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3548906,
        name: "São Carlos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549003,
        name: "São Francisco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549102,
        name: "São João da Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549201,
        name: "São João das Duas Pontes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549250,
        name: "São João de Iracema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549300,
        name: "São João do Pau d'Alho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549409,
        name: "São Joaquim da Barra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549508,
        name: "São José da Bela Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549607,
        name: "São José do Barreiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549706,
        name: "São José do Rio Pardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549805,
        name: "São José do Rio Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549904,
        name: "São José dos Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3549953,
        name: "São Lourenço da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550001,
        name: "São Luiz do Paraitinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550100,
        name: "São Manuel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550209,
        name: "São Miguel Arcanjo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550308,
        name: "São Paulo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550407,
        name: "São Pedro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550506,
        name: "São Pedro do Turvo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550605,
        name: "São Roque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550704,
        name: "São Sebastião",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550803,
        name: "São Sebastião da Grama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3550902,
        name: "São Simão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551009,
        name: "São Vicente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551108,
        name: "Sarapuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551207,
        name: "Sarutaiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551306,
        name: "Sebastianópolis do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551405,
        name: "Serra Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551603,
        name: "Serra Negra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551504,
        name: "Serrana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551702,
        name: "Sertãozinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551801,
        name: "Sete Barras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3551900,
        name: "Severínia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552007,
        name: "Silveiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552106,
        name: "Socorro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552205,
        name: "Sorocaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552304,
        name: "Sud Mennucci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552403,
        name: "Sumaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552551,
        name: "Suzanápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552502,
        name: "Suzano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552601,
        name: "Tabapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552700,
        name: "Tabatinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552809,
        name: "Taboão da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3552908,
        name: "Taciba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553005,
        name: "Taguaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553104,
        name: "Taiaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553203,
        name: "Taiúva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553302,
        name: "Tambaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553401,
        name: "Tanabi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553500,
        name: "Tapiraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553609,
        name: "Tapiratiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553658,
        name: "Taquaral",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553708,
        name: "Taquaritinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553807,
        name: "Taquarituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553856,
        name: "Taquarivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553906,
        name: "Tarabai",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3553955,
        name: "Tarumã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554003,
        name: "Tatuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554102,
        name: "Taubaté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554201,
        name: "Tejupá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554300,
        name: "Teodoro Sampaio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554409,
        name: "Terra Roxa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554508,
        name: "Tietê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554607,
        name: "Timburi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554656,
        name: "Torre de Pedra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554706,
        name: "Torrinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554755,
        name: "Trabiju",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554805,
        name: "Tremembé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554904,
        name: "Três Fronteiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3554953,
        name: "Tuiuti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555000,
        name: "Tupã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555109,
        name: "Tupi Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555208,
        name: "Turiúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555307,
        name: "Turmalina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555356,
        name: "Ubarana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555406,
        name: "Ubatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555505,
        name: "Ubirajara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555604,
        name: "Uchoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555703,
        name: "União Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555802,
        name: "Urânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3555901,
        name: "Uru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556008,
        name: "Urupês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556107,
        name: "Valentim Gentil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556206,
        name: "Valinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556305,
        name: "Valparaíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556354,
        name: "Vargem",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556404,
        name: "Vargem Grande do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556453,
        name: "Vargem Grande Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556503,
        name: "Várzea Paulista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556602,
        name: "Vera Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556701,
        name: "Vinhedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556800,
        name: "Viradouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556909,
        name: "Vista Alegre do Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3556958,
        name: "Vitória Brasil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3557006,
        name: "Votorantim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3557105,
        name: "Votuporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 3557154,
        name: "Zacarias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 35
      },
      {
        code: 4100103,
        name: "Abatiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100202,
        name: "Adrianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100301,
        name: "Agudos do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100400,
        name: "Almirante Tamandaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100459,
        name: "Altamira do Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128625,
        name: "Alto Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100608,
        name: "Alto Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100707,
        name: "Alto Piquiri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100509,
        name: "Altônia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100806,
        name: "Alvorada do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4100905,
        name: "Amaporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101002,
        name: "Ampére",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101051,
        name: "Anahy",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101101,
        name: "Andirá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101150,
        name: "Ângulo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101200,
        name: "Antonina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101309,
        name: "Antônio Olinto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101408,
        name: "Apucarana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101507,
        name: "Arapongas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101606,
        name: "Arapoti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101655,
        name: "Arapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101705,
        name: "Araruna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101804,
        name: "Araucária",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101853,
        name: "Ariranha do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4101903,
        name: "Assaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102000,
        name: "Assis Chateaubriand",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102109,
        name: "Astorga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102208,
        name: "Atalaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102307,
        name: "Balsa Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102406,
        name: "Bandeirantes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102505,
        name: "Barbosa Ferraz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102703,
        name: "Barra do Jacaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102604,
        name: "Barracão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102752,
        name: "Bela Vista da Caroba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102802,
        name: "Bela Vista do Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4102901,
        name: "Bituruna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103008,
        name: "Boa Esperança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103024,
        name: "Boa Esperança do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103040,
        name: "Boa Ventura de São Roque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103057,
        name: "Boa Vista da Aparecida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103107,
        name: "Bocaiúva do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103156,
        name: "Bom Jesus do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103206,
        name: "Bom Sucesso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103222,
        name: "Bom Sucesso do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103305,
        name: "Borrazópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103354,
        name: "Braganey",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103370,
        name: "Brasilândia do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103404,
        name: "Cafeara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103453,
        name: "Cafelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103479,
        name: "Cafezal do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103503,
        name: "Califórnia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103602,
        name: "Cambará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103701,
        name: "Cambé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103800,
        name: "Cambira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103909,
        name: "Campina da Lagoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4103958,
        name: "Campina do Simão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104006,
        name: "Campina Grande do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104055,
        name: "Campo Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104105,
        name: "Campo do Tenente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104204,
        name: "Campo Largo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104253,
        name: "Campo Magro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104303,
        name: "Campo Mourão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104402,
        name: "Cândido de Abreu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104428,
        name: "Candói",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104451,
        name: "Cantagalo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104501,
        name: "Capanema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104600,
        name: "Capitão Leônidas Marques",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104659,
        name: "Carambeí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104709,
        name: "Carlópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104808,
        name: "Cascavel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4104907,
        name: "Castro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105003,
        name: "Catanduvas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105102,
        name: "Centenário do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105201,
        name: "Cerro Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105300,
        name: "Céu Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105409,
        name: "Chopinzinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105508,
        name: "Cianorte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105607,
        name: "Cidade Gaúcha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105706,
        name: "Clevelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105805,
        name: "Colombo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4105904,
        name: "Colorado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106001,
        name: "Congonhinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106100,
        name: "Conselheiro Mairinck",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106209,
        name: "Contenda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106308,
        name: "Corbélia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106407,
        name: "Cornélio Procópio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106456,
        name: "Coronel Domingos Soares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106506,
        name: "Coronel Vivida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106555,
        name: "Corumbataí do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106803,
        name: "Cruz Machado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106571,
        name: "Cruzeiro do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106605,
        name: "Cruzeiro do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106704,
        name: "Cruzeiro do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106852,
        name: "Cruzmaltina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4106902,
        name: "Curitiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107009,
        name: "Curiúva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107108,
        name: "Diamante do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107124,
        name: "Diamante do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107157,
        name: "Diamante D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107207,
        name: "Dois Vizinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107256,
        name: "Douradina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107306,
        name: "Doutor Camargo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128633,
        name: "Doutor Ulysses",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107405,
        name: "Enéas Marques",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107504,
        name: "Engenheiro Beltrão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107538,
        name: "Entre Rios do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107520,
        name: "Esperança Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107546,
        name: "Espigão Alto do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107553,
        name: "Farol",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107603,
        name: "Faxinal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107652,
        name: "Fazenda Rio Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107702,
        name: "Fênix",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107736,
        name: "Fernandes Pinheiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107751,
        name: "Figueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107850,
        name: "Flor da Serra do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107801,
        name: "Floraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4107900,
        name: "Floresta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108007,
        name: "Florestópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108106,
        name: "Flórida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108205,
        name: "Formosa do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108304,
        name: "Foz do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108452,
        name: "Foz do Jordão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108320,
        name: "Francisco Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108403,
        name: "Francisco Beltrão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108502,
        name: "General Carneiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108551,
        name: "Godoy Moreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108601,
        name: "Goioerê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108650,
        name: "Goioxim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108700,
        name: "Grandes Rios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108809,
        name: "Guaíra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108908,
        name: "Guairaçá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4108957,
        name: "Guamiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109005,
        name: "Guapirama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109104,
        name: "Guaporema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109203,
        name: "Guaraci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109302,
        name: "Guaraniaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109401,
        name: "Guarapuava",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109500,
        name: "Guaraqueçaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109609,
        name: "Guaratuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109658,
        name: "Honório Serpa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109708,
        name: "Ibaiti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109757,
        name: "Ibema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109807,
        name: "Ibiporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4109906,
        name: "Icaraíma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110003,
        name: "Iguaraçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110052,
        name: "Iguatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110078,
        name: "Imbaú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110102,
        name: "Imbituva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110201,
        name: "Inácio Martins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110300,
        name: "Inajá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110409,
        name: "Indianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110508,
        name: "Ipiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110607,
        name: "Iporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110656,
        name: "Iracema do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110706,
        name: "Irati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110805,
        name: "Iretama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110904,
        name: "Itaguajé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4110953,
        name: "Itaipulândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111001,
        name: "Itambaracá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111100,
        name: "Itambé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111209,
        name: "Itapejara d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111258,
        name: "Itaperuçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111308,
        name: "Itaúna do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111407,
        name: "Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111506,
        name: "Ivaiporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111555,
        name: "Ivaté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111605,
        name: "Ivatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111704,
        name: "Jaboti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111803,
        name: "Jacarezinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4111902,
        name: "Jaguapitã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112009,
        name: "Jaguariaíva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112108,
        name: "Jandaia do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112207,
        name: "Janiópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112306,
        name: "Japira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112405,
        name: "Japurá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112504,
        name: "Jardim Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112603,
        name: "Jardim Olinda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112702,
        name: "Jataizinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112751,
        name: "Jesuítas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112801,
        name: "Joaquim Távora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112900,
        name: "Jundiaí do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4112959,
        name: "Juranda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113007,
        name: "Jussara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113106,
        name: "Kaloré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113205,
        name: "Lapa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113254,
        name: "Laranjal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113304,
        name: "Laranjeiras do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113403,
        name: "Leópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113429,
        name: "Lidianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113452,
        name: "Lindoeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113502,
        name: "Loanda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113601,
        name: "Lobato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113700,
        name: "Londrina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113734,
        name: "Luiziana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113759,
        name: "Lunardelli",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113809,
        name: "Lupionópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4113908,
        name: "Mallet",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114005,
        name: "Mamborê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114104,
        name: "Mandaguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114203,
        name: "Mandaguari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114302,
        name: "Mandirituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114351,
        name: "Manfrinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114401,
        name: "Mangueirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114500,
        name: "Manoel Ribas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114609,
        name: "Marechal Cândido Rondon",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114708,
        name: "Maria Helena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114807,
        name: "Marialva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4114906,
        name: "Marilândia do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115002,
        name: "Marilena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115101,
        name: "Mariluz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115200,
        name: "Maringá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115309,
        name: "Mariópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115358,
        name: "Maripá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115408,
        name: "Marmeleiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115457,
        name: "Marquinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115507,
        name: "Marumbi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115606,
        name: "Matelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115705,
        name: "Matinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115739,
        name: "Mato Rico",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115754,
        name: "Mauá da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115804,
        name: "Medianeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115853,
        name: "Mercedes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4115903,
        name: "Mirador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116000,
        name: "Miraselva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116059,
        name: "Missal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116109,
        name: "Moreira Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116208,
        name: "Morretes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116307,
        name: "Munhoz de Melo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116406,
        name: "Nossa Senhora das Graças",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116505,
        name: "Nova Aliança do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116604,
        name: "Nova América da Colina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116703,
        name: "Nova Aurora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116802,
        name: "Nova Cantu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116901,
        name: "Nova Esperança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4116950,
        name: "Nova Esperança do Sudoeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117008,
        name: "Nova Fátima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117057,
        name: "Nova Laranjeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117107,
        name: "Nova Londrina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117206,
        name: "Nova Olímpia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117255,
        name: "Nova Prata do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117214,
        name: "Nova Santa Bárbara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117222,
        name: "Nova Santa Rosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117271,
        name: "Nova Tebas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117297,
        name: "Novo Itacolomi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117305,
        name: "Ortigueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117404,
        name: "Ourizona",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117453,
        name: "Ouro Verde do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117503,
        name: "Paiçandu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117602,
        name: "Palmas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117701,
        name: "Palmeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117800,
        name: "Palmital",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4117909,
        name: "Palotina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118006,
        name: "Paraíso do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118105,
        name: "Paranacity",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118204,
        name: "Paranaguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118303,
        name: "Paranapoema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118402,
        name: "Paranavaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118451,
        name: "Pato Bragado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118501,
        name: "Pato Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118600,
        name: "Paula Freitas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118709,
        name: "Paulo Frontin",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118808,
        name: "Peabiru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118857,
        name: "Perobal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4118907,
        name: "Pérola",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119004,
        name: "Pérola d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119103,
        name: "Piên",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119152,
        name: "Pinhais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119251,
        name: "Pinhal de São Bento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119202,
        name: "Pinhalão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119301,
        name: "Pinhão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119400,
        name: "Piraí do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119509,
        name: "Piraquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119608,
        name: "Pitanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119657,
        name: "Pitangueiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119707,
        name: "Planaltina do Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119806,
        name: "Planalto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119905,
        name: "Ponta Grossa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4119954,
        name: "Pontal do Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120002,
        name: "Porecatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120101,
        name: "Porto Amazonas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120150,
        name: "Porto Barreiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120200,
        name: "Porto Rico",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120309,
        name: "Porto Vitória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120333,
        name: "Prado Ferreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120358,
        name: "Pranchita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120408,
        name: "Presidente Castelo Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120507,
        name: "Primeiro de Maio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120606,
        name: "Prudentópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120655,
        name: "Quarto Centenário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120705,
        name: "Quatiguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120804,
        name: "Quatro Barras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120853,
        name: "Quatro Pontes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4120903,
        name: "Quedas do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121000,
        name: "Querência do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121109,
        name: "Quinta do Sol",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121208,
        name: "Quitandinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121257,
        name: "Ramilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121307,
        name: "Rancho Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121356,
        name: "Rancho Alegre D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121406,
        name: "Realeza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121505,
        name: "Rebouças",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121604,
        name: "Renascença",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121703,
        name: "Reserva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121752,
        name: "Reserva do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121802,
        name: "Ribeirão Claro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4121901,
        name: "Ribeirão do Pinhal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122008,
        name: "Rio Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122107,
        name: "Rio Bom",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122156,
        name: "Rio Bonito do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122172,
        name: "Rio Branco do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122206,
        name: "Rio Branco do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122305,
        name: "Rio Negro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122404,
        name: "Rolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122503,
        name: "Roncador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122602,
        name: "Rondon",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122651,
        name: "Rosário do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122701,
        name: "Sabáudia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122800,
        name: "Salgado Filho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4122909,
        name: "Salto do Itararé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123006,
        name: "Salto do Lontra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123105,
        name: "Santa Amélia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123204,
        name: "Santa Cecília do Pavão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123303,
        name: "Santa Cruz de Monte Castelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123402,
        name: "Santa Fé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123501,
        name: "Santa Helena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123600,
        name: "Santa Inês",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123709,
        name: "Santa Isabel do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123808,
        name: "Santa Izabel do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123824,
        name: "Santa Lúcia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123857,
        name: "Santa Maria do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123907,
        name: "Santa Mariana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4123956,
        name: "Santa Mônica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124020,
        name: "Santa Tereza do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124053,
        name: "Santa Terezinha de Itaipu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124004,
        name: "Santana do Itararé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124103,
        name: "Santo Antônio da Platina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124202,
        name: "Santo Antônio do Caiuá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124301,
        name: "Santo Antônio do Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124400,
        name: "Santo Antônio do Sudoeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124509,
        name: "Santo Inácio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124608,
        name: "São Carlos do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124707,
        name: "São Jerônimo da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124806,
        name: "São João",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4124905,
        name: "São João do Caiuá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125001,
        name: "São João do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125100,
        name: "São João do Triunfo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125308,
        name: "São Jorge do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125357,
        name: "São Jorge do Patrocínio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125209,
        name: "São Jorge d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125407,
        name: "São José da Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125456,
        name: "São José das Palmeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125506,
        name: "São José dos Pinhais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125555,
        name: "São Manoel do Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125605,
        name: "São Mateus do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125704,
        name: "São Miguel do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125753,
        name: "São Pedro do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125803,
        name: "São Pedro do Ivaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4125902,
        name: "São Pedro do Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126009,
        name: "São Sebastião da Amoreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126108,
        name: "São Tomé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126207,
        name: "Sapopema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126256,
        name: "Sarandi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126272,
        name: "Saudade do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126306,
        name: "Sengés",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126355,
        name: "Serranópolis do Iguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126405,
        name: "Sertaneja",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126504,
        name: "Sertanópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126603,
        name: "Siqueira Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126652,
        name: "Sulina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126678,
        name: "Tamarana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126702,
        name: "Tamboara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126801,
        name: "Tapejara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4126900,
        name: "Tapira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127007,
        name: "Teixeira Soares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127106,
        name: "Telêmaco Borba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127205,
        name: "Terra Boa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127304,
        name: "Terra Rica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127403,
        name: "Terra Roxa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127502,
        name: "Tibagi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127601,
        name: "Tijucas do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127700,
        name: "Toledo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127809,
        name: "Tomazina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127858,
        name: "Três Barras do Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127882,
        name: "Tunas do Paraná",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127908,
        name: "Tuneiras do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127957,
        name: "Tupãssi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4127965,
        name: "Turvo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128005,
        name: "Ubiratã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128104,
        name: "Umuarama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128203,
        name: "União da Vitória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128302,
        name: "Uniflor",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128401,
        name: "Uraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128534,
        name: "Ventania",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128559,
        name: "Vera Cruz do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128609,
        name: "Verê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128658,
        name: "Virmond",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128708,
        name: "Vitorino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128500,
        name: "Wenceslau Braz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4128807,
        name: "Xambrê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 41
      },
      {
        code: 4200051,
        name: "Abdon Batista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200101,
        name: "Abelardo Luz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200200,
        name: "Agrolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200309,
        name: "Agronômica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200408,
        name: "Água Doce",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200507,
        name: "Águas de Chapecó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200556,
        name: "Águas Frias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200606,
        name: "Águas Mornas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200705,
        name: "Alfredo Wagner",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200754,
        name: "Alto Bela Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200804,
        name: "Anchieta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4200903,
        name: "Angelina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201000,
        name: "Anita Garibaldi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201109,
        name: "Anitápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201208,
        name: "Antônio Carlos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201257,
        name: "Apiúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201273,
        name: "Arabutã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201307,
        name: "Araquari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201406,
        name: "Araranguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201505,
        name: "Armazém",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201604,
        name: "Arroio Trinta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201653,
        name: "Arvoredo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201703,
        name: "Ascurra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201802,
        name: "Atalanta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201901,
        name: "Aurora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4201950,
        name: "Balneário Arroio do Silva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202057,
        name: "Balneário Barra do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202008,
        name: "Balneário Camboriú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202073,
        name: "Balneário Gaivota",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212809,
        name: "Balneário Piçarras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4220000,
        name: "Balneário Rincão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202081,
        name: "Bandeirante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202099,
        name: "Barra Bonita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202107,
        name: "Barra Velha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202131,
        name: "Bela Vista do Toldo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202156,
        name: "Belmonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202206,
        name: "Benedito Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202305,
        name: "Biguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202404,
        name: "Blumenau",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202438,
        name: "Bocaina do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202503,
        name: "Bom Jardim da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202537,
        name: "Bom Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202578,
        name: "Bom Jesus do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202602,
        name: "Bom Retiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202453,
        name: "Bombinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202701,
        name: "Botuverá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202800,
        name: "Braço do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202859,
        name: "Braço do Trombudo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202875,
        name: "Brunópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4202909,
        name: "Brusque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203006,
        name: "Caçador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203105,
        name: "Caibi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203154,
        name: "Calmon",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203204,
        name: "Camboriú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203303,
        name: "Campo Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203402,
        name: "Campo Belo do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203501,
        name: "Campo Erê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203600,
        name: "Campos Novos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203709,
        name: "Canelinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203808,
        name: "Canoinhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203253,
        name: "Capão Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203907,
        name: "Capinzal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4203956,
        name: "Capivari de Baixo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204004,
        name: "Catanduvas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204103,
        name: "Caxambu do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204152,
        name: "Celso Ramos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204178,
        name: "Cerro Negro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204194,
        name: "Chapadão do Lageado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204202,
        name: "Chapecó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204251,
        name: "Cocal do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204301,
        name: "Concórdia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204350,
        name: "Cordilheira Alta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204400,
        name: "Coronel Freitas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204459,
        name: "Coronel Martins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204558,
        name: "Correia Pinto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204509,
        name: "Corupá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204608,
        name: "Criciúma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204707,
        name: "Cunha Porã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204756,
        name: "Cunhataí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204806,
        name: "Curitibanos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4204905,
        name: "Descanso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205001,
        name: "Dionísio Cerqueira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205100,
        name: "Dona Emma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205159,
        name: "Doutor Pedrinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205175,
        name: "Entre Rios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205191,
        name: "Ermo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205209,
        name: "Erval Velho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205308,
        name: "Faxinal dos Guedes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205357,
        name: "Flor do Sertão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205407,
        name: "Florianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205431,
        name: "Formosa do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205456,
        name: "Forquilhinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205506,
        name: "Fraiburgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205555,
        name: "Frei Rogério",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205605,
        name: "Galvão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205704,
        name: "Garopaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205803,
        name: "Garuva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4205902,
        name: "Gaspar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206009,
        name: "Governador Celso Ramos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206108,
        name: "Grão Pará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206207,
        name: "Gravatal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206306,
        name: "Guabiruba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206405,
        name: "Guaraciaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206504,
        name: "Guaramirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206603,
        name: "Guarujá do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206652,
        name: "Guatambú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206702,
        name: "Herval d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206751,
        name: "Ibiam",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206801,
        name: "Ibicaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4206900,
        name: "Ibirama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207007,
        name: "Içara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207106,
        name: "Ilhota",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207205,
        name: "Imaruí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207304,
        name: "Imbituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207403,
        name: "Imbuia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207502,
        name: "Indaial",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207577,
        name: "Iomerê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207601,
        name: "Ipira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207650,
        name: "Iporã do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207684,
        name: "Ipuaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207700,
        name: "Ipumirim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207759,
        name: "Iraceminha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207809,
        name: "Irani",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207858,
        name: "Irati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4207908,
        name: "Irineópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208005,
        name: "Itá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208104,
        name: "Itaiópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208203,
        name: "Itajaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208302,
        name: "Itapema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208401,
        name: "Itapiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208450,
        name: "Itapoá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208500,
        name: "Ituporanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208609,
        name: "Jaborá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208708,
        name: "Jacinto Machado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208807,
        name: "Jaguaruna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208906,
        name: "Jaraguá do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4208955,
        name: "Jardinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209003,
        name: "Joaçaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209102,
        name: "Joinville",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209151,
        name: "José Boiteux",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209177,
        name: "Jupiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209201,
        name: "Lacerdópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209300,
        name: "Lages",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209409,
        name: "Laguna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209458,
        name: "Lajeado Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209508,
        name: "Laurentino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209607,
        name: "Lauro Müller",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209706,
        name: "Lebon Régis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209805,
        name: "Leoberto Leal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209854,
        name: "Lindóia do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4209904,
        name: "Lontras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210001,
        name: "Luiz Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210035,
        name: "Luzerna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210050,
        name: "Macieira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210100,
        name: "Mafra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210209,
        name: "Major Gercino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210308,
        name: "Major Vieira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210407,
        name: "Maracajá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210506,
        name: "Maravilha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210555,
        name: "Marema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210605,
        name: "Massaranduba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210704,
        name: "Matos Costa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210803,
        name: "Meleiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210852,
        name: "Mirim Doce",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4210902,
        name: "Modelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211009,
        name: "Mondaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211058,
        name: "Monte Carlo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211108,
        name: "Monte Castelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211207,
        name: "Morro da Fumaça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211256,
        name: "Morro Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211306,
        name: "Navegantes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211405,
        name: "Nova Erechim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211454,
        name: "Nova Itaberaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211504,
        name: "Nova Trento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211603,
        name: "Nova Veneza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211652,
        name: "Novo Horizonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211702,
        name: "Orleans",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211751,
        name: "Otacílio Costa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211801,
        name: "Ouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211850,
        name: "Ouro Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211876,
        name: "Paial",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211892,
        name: "Painel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4211900,
        name: "Palhoça",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212007,
        name: "Palma Sola",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212056,
        name: "Palmeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212106,
        name: "Palmitos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212205,
        name: "Papanduva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212239,
        name: "Paraíso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212254,
        name: "Passo de Torres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212270,
        name: "Passos Maia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212304,
        name: "Paulo Lopes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212403,
        name: "Pedras Grandes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212502,
        name: "Penha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212601,
        name: "Peritiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212650,
        name: "Pescaria Brava",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212700,
        name: "Petrolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4212908,
        name: "Pinhalzinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213005,
        name: "Pinheiro Preto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213104,
        name: "Piratuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213153,
        name: "Planalto Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213203,
        name: "Pomerode",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213302,
        name: "Ponte Alta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213351,
        name: "Ponte Alta do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213401,
        name: "Ponte Serrada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213500,
        name: "Porto Belo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213609,
        name: "Porto União",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213708,
        name: "Pouso Redondo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213807,
        name: "Praia Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4213906,
        name: "Presidente Castello Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214003,
        name: "Presidente Getúlio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214102,
        name: "Presidente Nereu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214151,
        name: "Princesa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214201,
        name: "Quilombo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214300,
        name: "Rancho Queimado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214409,
        name: "Rio das Antas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214508,
        name: "Rio do Campo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214607,
        name: "Rio do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214805,
        name: "Rio do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214706,
        name: "Rio dos Cedros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4214904,
        name: "Rio Fortuna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215000,
        name: "Rio Negrinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215059,
        name: "Rio Rufino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215075,
        name: "Riqueza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215109,
        name: "Rodeio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215208,
        name: "Romelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215307,
        name: "Salete",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215356,
        name: "Saltinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215406,
        name: "Salto Veloso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215455,
        name: "Sangão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215505,
        name: "Santa Cecília",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215554,
        name: "Santa Helena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215604,
        name: "Santa Rosa de Lima",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215653,
        name: "Santa Rosa do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215679,
        name: "Santa Terezinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215687,
        name: "Santa Terezinha do Progresso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215695,
        name: "Santiago do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215703,
        name: "Santo Amaro da Imperatriz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215802,
        name: "São Bento do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215752,
        name: "São Bernardino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4215901,
        name: "São Bonifácio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216008,
        name: "São Carlos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216057,
        name: "São Cristóvão do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216107,
        name: "São Domingos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216206,
        name: "São Francisco do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216305,
        name: "São João Batista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216354,
        name: "São João do Itaperiú",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216255,
        name: "São João do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216404,
        name: "São João do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216503,
        name: "São Joaquim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216602,
        name: "São José",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216701,
        name: "São José do Cedro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216800,
        name: "São José do Cerrito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4216909,
        name: "São Lourenço do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217006,
        name: "São Ludgero",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217105,
        name: "São Martinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217154,
        name: "São Miguel da Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217204,
        name: "São Miguel do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217253,
        name: "São Pedro de Alcântara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217303,
        name: "Saudades",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217402,
        name: "Schroeder",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217501,
        name: "Seara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217550,
        name: "Serra Alta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217600,
        name: "Siderópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217709,
        name: "Sombrio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217758,
        name: "Sul Brasil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217808,
        name: "Taió",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217907,
        name: "Tangará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4217956,
        name: "Tigrinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218004,
        name: "Tijucas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218103,
        name: "Timbé do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218202,
        name: "Timbó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218251,
        name: "Timbó Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218301,
        name: "Três Barras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218350,
        name: "Treviso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218400,
        name: "Treze de Maio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218509,
        name: "Treze Tílias",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218608,
        name: "Trombudo Central",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218707,
        name: "Tubarão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218756,
        name: "Tunápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218806,
        name: "Turvo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218855,
        name: "União do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218905,
        name: "Urubici",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4218954,
        name: "Urupema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219002,
        name: "Urussanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219101,
        name: "Vargeão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219150,
        name: "Vargem",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219176,
        name: "Vargem Bonita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219200,
        name: "Vidal Ramos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219309,
        name: "Videira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219358,
        name: "Vitor Meireles",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219408,
        name: "Witmarsum",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219507,
        name: "Xanxerê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219606,
        name: "Xavantina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219705,
        name: "Xaxim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4219853,
        name: "Zortéa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 42
      },
      {
        code: 4300034,
        name: "Aceguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300059,
        name: "Água Santa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300109,
        name: "Agudo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300208,
        name: "Ajuricaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300307,
        name: "Alecrim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300406,
        name: "Alegrete",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300455,
        name: "Alegria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300471,
        name: "Almirante Tamandaré do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300505,
        name: "Alpestre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300554,
        name: "Alto Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300570,
        name: "Alto Feliz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300604,
        name: "Alvorada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300638,
        name: "Amaral Ferrador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300646,
        name: "Ametista do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300661,
        name: "André da Rocha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300703,
        name: "Anta Gorda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300802,
        name: "Antônio Prado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300851,
        name: "Arambaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300877,
        name: "Araricá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4300901,
        name: "Aratiba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301008,
        name: "Arroio do Meio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301073,
        name: "Arroio do Padre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301057,
        name: "Arroio do Sal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301206,
        name: "Arroio do Tigre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301107,
        name: "Arroio dos Ratos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301305,
        name: "Arroio Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301404,
        name: "Arvorezinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301503,
        name: "Augusto Pestana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301552,
        name: "Áurea",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301602,
        name: "Bagé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301636,
        name: "Balneário Pinhal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301651,
        name: "Barão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301701,
        name: "Barão de Cotegipe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301750,
        name: "Barão do Triunfo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301859,
        name: "Barra do Guarita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301875,
        name: "Barra do Quaraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301909,
        name: "Barra do Ribeiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301925,
        name: "Barra do Rio Azul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301958,
        name: "Barra Funda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4301800,
        name: "Barracão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302006,
        name: "Barros Cassal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302055,
        name: "Benjamin Constant do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302105,
        name: "Bento Gonçalves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302154,
        name: "Boa Vista das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302204,
        name: "Boa Vista do Buricá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302220,
        name: "Boa Vista do Cadeado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302238,
        name: "Boa Vista do Incra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302253,
        name: "Boa Vista do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302303,
        name: "Bom Jesus",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302352,
        name: "Bom Princípio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302378,
        name: "Bom Progresso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302402,
        name: "Bom Retiro do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302451,
        name: "Boqueirão do Leão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302501,
        name: "Bossoroca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302584,
        name: "Bozano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302600,
        name: "Braga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302659,
        name: "Brochier",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302709,
        name: "Butiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302808,
        name: "Caçapava do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4302907,
        name: "Cacequi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303004,
        name: "Cachoeira do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303103,
        name: "Cachoeirinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303202,
        name: "Cacique Doble",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303301,
        name: "Caibaté",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303400,
        name: "Caiçara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303509,
        name: "Camaquã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303558,
        name: "Camargo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303608,
        name: "Cambará do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303673,
        name: "Campestre da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303707,
        name: "Campina das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303806,
        name: "Campinas do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4303905,
        name: "Campo Bom",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304002,
        name: "Campo Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304101,
        name: "Campos Borges",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304200,
        name: "Candelária",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304309,
        name: "Cândido Godói",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304358,
        name: "Candiota",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304408,
        name: "Canela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304507,
        name: "Canguçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304606,
        name: "Canoas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304614,
        name: "Canudos do Vale",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304622,
        name: "Capão Bonito do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304630,
        name: "Capão da Canoa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304655,
        name: "Capão do Cipó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304663,
        name: "Capão do Leão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304689,
        name: "Capela de Santana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304697,
        name: "Capitão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304671,
        name: "Capivari do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304713,
        name: "Caraá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304705,
        name: "Carazinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304804,
        name: "Carlos Barbosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304853,
        name: "Carlos Gomes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304903,
        name: "Casca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4304952,
        name: "Caseiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305009,
        name: "Catuípe",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305108,
        name: "Caxias do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305116,
        name: "Centenário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305124,
        name: "Cerrito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305132,
        name: "Cerro Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305157,
        name: "Cerro Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305173,
        name: "Cerro Grande do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305207,
        name: "Cerro Largo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305306,
        name: "Chapada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305355,
        name: "Charqueadas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305371,
        name: "Charrua",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305405,
        name: "Chiapetta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305439,
        name: "Chuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305447,
        name: "Chuvisca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305454,
        name: "Cidreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305504,
        name: "Ciríaco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305587,
        name: "Colinas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305603,
        name: "Colorado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305702,
        name: "Condor",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305801,
        name: "Constantina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305835,
        name: "Coqueiro Baixo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305850,
        name: "Coqueiros do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305871,
        name: "Coronel Barros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305900,
        name: "Coronel Bicaco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305934,
        name: "Coronel Pilar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305959,
        name: "Cotiporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4305975,
        name: "Coxilha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306007,
        name: "Crissiumal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306056,
        name: "Cristal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306072,
        name: "Cristal do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306106,
        name: "Cruz Alta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306130,
        name: "Cruzaltense",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306205,
        name: "Cruzeiro do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306304,
        name: "David Canabarro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306320,
        name: "Derrubadas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306353,
        name: "Dezesseis de Novembro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306379,
        name: "Dilermando de Aguiar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306403,
        name: "Dois Irmãos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306429,
        name: "Dois Irmãos das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306452,
        name: "Dois Lajeados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306502,
        name: "Dom Feliciano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306601,
        name: "Dom Pedrito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306551,
        name: "Dom Pedro de Alcântara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306700,
        name: "Dona Francisca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306734,
        name: "Doutor Maurício Cardoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306759,
        name: "Doutor Ricardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306767,
        name: "Eldorado do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306809,
        name: "Encantado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306908,
        name: "Encruzilhada do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306924,
        name: "Engenho Velho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306957,
        name: "Entre Rios do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306932,
        name: "Entre-Ijuís",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4306973,
        name: "Erebango",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307005,
        name: "Erechim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307054,
        name: "Ernestina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307203,
        name: "Erval Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307302,
        name: "Erval Seco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307401,
        name: "Esmeralda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307450,
        name: "Esperança do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307500,
        name: "Espumoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307559,
        name: "Estação",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307609,
        name: "Estância Velha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307708,
        name: "Esteio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307807,
        name: "Estrela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307815,
        name: "Estrela Velha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307831,
        name: "Eugênio de Castro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307864,
        name: "Fagundes Varela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307906,
        name: "Farroupilha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308003,
        name: "Faxinal do Soturno",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308052,
        name: "Faxinalzinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308078,
        name: "Fazenda Vilanova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308102,
        name: "Feliz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308201,
        name: "Flores da Cunha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308250,
        name: "Floriano Peixoto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308300,
        name: "Fontoura Xavier",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308409,
        name: "Formigueiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308433,
        name: "Forquetinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308458,
        name: "Fortaleza dos Valos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308508,
        name: "Frederico Westphalen",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308607,
        name: "Garibaldi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308656,
        name: "Garruchos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308706,
        name: "Gaurama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308805,
        name: "General Câmara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308854,
        name: "Gentil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4308904,
        name: "Getúlio Vargas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309001,
        name: "Giruá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309050,
        name: "Glorinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309100,
        name: "Gramado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309126,
        name: "Gramado dos Loureiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309159,
        name: "Gramado Xavier",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309209,
        name: "Gravataí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309258,
        name: "Guabiju",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309308,
        name: "Guaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309407,
        name: "Guaporé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309506,
        name: "Guarani das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309555,
        name: "Harmonia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4307104,
        name: "Herval",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309571,
        name: "Herveiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309605,
        name: "Horizontina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309654,
        name: "Hulha Negra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309704,
        name: "Humaitá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309753,
        name: "Ibarama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309803,
        name: "Ibiaçá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309902,
        name: "Ibiraiaras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4309951,
        name: "Ibirapuitã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310009,
        name: "Ibirubá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310108,
        name: "Igrejinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310207,
        name: "Ijuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310306,
        name: "Ilópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310330,
        name: "Imbé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310363,
        name: "Imigrante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310405,
        name: "Independência",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310413,
        name: "Inhacorá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310439,
        name: "Ipê",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310462,
        name: "Ipiranga do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310504,
        name: "Iraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310538,
        name: "Itaara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310553,
        name: "Itacurubi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310579,
        name: "Itapuca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310603,
        name: "Itaqui",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310652,
        name: "Itati",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310702,
        name: "Itatiba do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310751,
        name: "Ivorá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310801,
        name: "Ivoti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310850,
        name: "Jaboticaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310876,
        name: "Jacuizinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4310900,
        name: "Jacutinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311007,
        name: "Jaguarão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311106,
        name: "Jaguari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311122,
        name: "Jaquirana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311130,
        name: "Jari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311155,
        name: "Jóia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311205,
        name: "Júlio de Castilhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311239,
        name: "Lagoa Bonita do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311270,
        name: "Lagoa dos Três Cantos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311304,
        name: "Lagoa Vermelha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311254,
        name: "Lagoão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311403,
        name: "Lajeado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311429,
        name: "Lajeado do Bugre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311502,
        name: "Lavras do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311601,
        name: "Liberato Salzano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311627,
        name: "Lindolfo Collor",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311643,
        name: "Linha Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311718,
        name: "Maçambará",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311700,
        name: "Machadinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311734,
        name: "Mampituba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311759,
        name: "Manoel Viana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311775,
        name: "Maquiné",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311791,
        name: "Maratá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311809,
        name: "Marau",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311908,
        name: "Marcelino Ramos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4311981,
        name: "Mariana Pimentel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312005,
        name: "Mariano Moro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312054,
        name: "Marques de Souza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312104,
        name: "Mata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312138,
        name: "Mato Castelhano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312153,
        name: "Mato Leitão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312179,
        name: "Mato Queimado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312203,
        name: "Maximiliano de Almeida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312252,
        name: "Minas do Leão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312302,
        name: "Miraguaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312351,
        name: "Montauri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312377,
        name: "Monte Alegre dos Campos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312385,
        name: "Monte Belo do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312401,
        name: "Montenegro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312427,
        name: "Mormaço",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312443,
        name: "Morrinhos do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312450,
        name: "Morro Redondo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312476,
        name: "Morro Reuter",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312500,
        name: "Mostardas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312609,
        name: "Muçum",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312617,
        name: "Muitos Capões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312625,
        name: "Muliterno",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312658,
        name: "Não-Me-Toque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312674,
        name: "Nicolau Vergueiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312708,
        name: "Nonoai",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312757,
        name: "Nova Alvorada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312807,
        name: "Nova Araçá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312906,
        name: "Nova Bassano",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4312955,
        name: "Nova Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313003,
        name: "Nova Bréscia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313011,
        name: "Nova Candelária",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313037,
        name: "Nova Esperança do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313060,
        name: "Nova Hartz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313086,
        name: "Nova Pádua",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313102,
        name: "Nova Palma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313201,
        name: "Nova Petrópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313300,
        name: "Nova Prata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313334,
        name: "Nova Ramada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313359,
        name: "Nova Roma do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313375,
        name: "Nova Santa Rita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313490,
        name: "Novo Barreiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313391,
        name: "Novo Cabrais",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313409,
        name: "Novo Hamburgo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313425,
        name: "Novo Machado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313441,
        name: "Novo Tiradentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313466,
        name: "Novo Xingu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313508,
        name: "Osório",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313607,
        name: "Paim Filho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313656,
        name: "Palmares do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313706,
        name: "Palmeira das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313805,
        name: "Palmitinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313904,
        name: "Panambi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4313953,
        name: "Pantano Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314001,
        name: "Paraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314027,
        name: "Paraíso do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314035,
        name: "Pareci Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314050,
        name: "Parobé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314068,
        name: "Passa Sete",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314076,
        name: "Passo do Sobrado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314100,
        name: "Passo Fundo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314134,
        name: "Paulo Bento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314159,
        name: "Paverama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314175,
        name: "Pedras Altas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314209,
        name: "Pedro Osório",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314308,
        name: "Pejuçara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314407,
        name: "Pelotas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314423,
        name: "Picada Café",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314456,
        name: "Pinhal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314464,
        name: "Pinhal da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314472,
        name: "Pinhal Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314498,
        name: "Pinheirinho do Vale",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314506,
        name: "Pinheiro Machado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314548,
        name: "Pinto Bandeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314555,
        name: "Pirapó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314605,
        name: "Piratini",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314704,
        name: "Planalto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314753,
        name: "Poço das Antas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314779,
        name: "Pontão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314787,
        name: "Ponte Preta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314803,
        name: "Portão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4314902,
        name: "Porto Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315008,
        name: "Porto Lucena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315057,
        name: "Porto Mauá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315073,
        name: "Porto Vera Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315107,
        name: "Porto Xavier",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315131,
        name: "Pouso Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315149,
        name: "Presidente Lucena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315156,
        name: "Progresso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315172,
        name: "Protásio Alves",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315206,
        name: "Putinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315305,
        name: "Quaraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315313,
        name: "Quatro Irmãos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315321,
        name: "Quevedos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315354,
        name: "Quinze de Novembro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315404,
        name: "Redentora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315453,
        name: "Relvado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315503,
        name: "Restinga Sêca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315552,
        name: "Rio dos Índios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315602,
        name: "Rio Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315701,
        name: "Rio Pardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315750,
        name: "Riozinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315800,
        name: "Roca Sales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315909,
        name: "Rodeio Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4315958,
        name: "Rolador",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316006,
        name: "Rolante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316105,
        name: "Ronda Alta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316204,
        name: "Rondinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316303,
        name: "Roque Gonzales",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316402,
        name: "Rosário do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316428,
        name: "Sagrada Família",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316436,
        name: "Saldanha Marinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316451,
        name: "Salto do Jacuí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316477,
        name: "Salvador das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316501,
        name: "Salvador do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316600,
        name: "Sananduva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316709,
        name: "Santa Bárbara do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316733,
        name: "Santa Cecília do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316758,
        name: "Santa Clara do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316808,
        name: "Santa Cruz do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316972,
        name: "Santa Margarida do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316907,
        name: "Santa Maria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4316956,
        name: "Santa Maria do Herval",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317202,
        name: "Santa Rosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317251,
        name: "Santa Tereza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317301,
        name: "Santa Vitória do Palmar",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317004,
        name: "Santana da Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317103,
        name: "Sant'Ana do Livramento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317400,
        name: "Santiago",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317509,
        name: "Santo Ângelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317608,
        name: "Santo Antônio da Patrulha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317707,
        name: "Santo Antônio das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317558,
        name: "Santo Antônio do Palma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317756,
        name: "Santo Antônio do Planalto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317806,
        name: "Santo Augusto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317905,
        name: "Santo Cristo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4317954,
        name: "Santo Expedito do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318002,
        name: "São Borja",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318051,
        name: "São Domingos do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318101,
        name: "São Francisco de Assis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318200,
        name: "São Francisco de Paula",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318309,
        name: "São Gabriel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318408,
        name: "São Jerônimo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318424,
        name: "São João da Urtiga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318432,
        name: "São João do Polêsine",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318440,
        name: "São Jorge",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318457,
        name: "São José das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318465,
        name: "São José do Herval",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318481,
        name: "São José do Hortêncio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318499,
        name: "São José do Inhacorá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318507,
        name: "São José do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318606,
        name: "São José do Ouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318614,
        name: "São José do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318622,
        name: "São José dos Ausentes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318705,
        name: "São Leopoldo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318804,
        name: "São Lourenço do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4318903,
        name: "São Luiz Gonzaga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319000,
        name: "São Marcos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319109,
        name: "São Martinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319125,
        name: "São Martinho da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319158,
        name: "São Miguel das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319208,
        name: "São Nicolau",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319307,
        name: "São Paulo das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319356,
        name: "São Pedro da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319364,
        name: "São Pedro das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319372,
        name: "São Pedro do Butiá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319406,
        name: "São Pedro do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319505,
        name: "São Sebastião do Caí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319604,
        name: "São Sepé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319703,
        name: "São Valentim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319711,
        name: "São Valentim do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319737,
        name: "São Valério do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319752,
        name: "São Vendelino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319802,
        name: "São Vicente do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4319901,
        name: "Sapiranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320008,
        name: "Sapucaia do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320107,
        name: "Sarandi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320206,
        name: "Seberi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320230,
        name: "Sede Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320263,
        name: "Segredo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320305,
        name: "Selbach",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320321,
        name: "Senador Salgado Filho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320354,
        name: "Sentinela do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320404,
        name: "Serafina Corrêa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320453,
        name: "Sério",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320503,
        name: "Sertão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320552,
        name: "Sertão Santana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320578,
        name: "Sete de Setembro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320602,
        name: "Severiano de Almeida",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320651,
        name: "Silveira Martins",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320677,
        name: "Sinimbu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320701,
        name: "Sobradinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320800,
        name: "Soledade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320859,
        name: "Tabaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4320909,
        name: "Tapejara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321006,
        name: "Tapera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321105,
        name: "Tapes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321204,
        name: "Taquara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321303,
        name: "Taquari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321329,
        name: "Taquaruçu do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321352,
        name: "Tavares",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321402,
        name: "Tenente Portela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321436,
        name: "Terra de Areia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321451,
        name: "Teutônia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321469,
        name: "Tio Hugo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321477,
        name: "Tiradentes do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321493,
        name: "Toropi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321501,
        name: "Torres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321600,
        name: "Tramandaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321626,
        name: "Travesseiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321634,
        name: "Três Arroios",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321667,
        name: "Três Cachoeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321709,
        name: "Três Coroas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321808,
        name: "Três de Maio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321832,
        name: "Três Forquilhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321857,
        name: "Três Palmeiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321907,
        name: "Três Passos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4321956,
        name: "Trindade do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322004,
        name: "Triunfo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322103,
        name: "Tucunduva",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322152,
        name: "Tunas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322186,
        name: "Tupanci do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322202,
        name: "Tupanciretã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322251,
        name: "Tupandi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322301,
        name: "Tuparendi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322327,
        name: "Turuçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322343,
        name: "Ubiretama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322350,
        name: "União da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322376,
        name: "Unistalda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322400,
        name: "Uruguaiana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322509,
        name: "Vacaria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322533,
        name: "Vale do Sol",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322541,
        name: "Vale Real",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322525,
        name: "Vale Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322558,
        name: "Vanini",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322608,
        name: "Venâncio Aires",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322707,
        name: "Vera Cruz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322806,
        name: "Veranópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322855,
        name: "Vespasiano Corrêa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4322905,
        name: "Viadutos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323002,
        name: "Viamão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323101,
        name: "Vicente Dutra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323200,
        name: "Victor Graeff",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323309,
        name: "Vila Flores",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323358,
        name: "Vila Lângaro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323408,
        name: "Vila Maria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323457,
        name: "Vila Nova do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323507,
        name: "Vista Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323606,
        name: "Vista Alegre do Prata",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323705,
        name: "Vista Gaúcha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323754,
        name: "Vitória das Missões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323770,
        name: "Westfália",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 4323804,
        name: "Xangri-lá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 43
      },
      {
        code: 5000203,
        name: "Água Clara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5000252,
        name: "Alcinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5000609,
        name: "Amambai",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5000708,
        name: "Anastácio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5000807,
        name: "Anaurilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5000856,
        name: "Angélica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5000906,
        name: "Antônio João",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5001003,
        name: "Aparecida do Taboado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5001102,
        name: "Aquidauana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5001243,
        name: "Aral Moreira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5001508,
        name: "Bandeirantes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5001904,
        name: "Bataguassu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002001,
        name: "Batayporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002100,
        name: "Bela Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002159,
        name: "Bodoquena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002209,
        name: "Bonito",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002308,
        name: "Brasilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002407,
        name: "Caarapó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002605,
        name: "Camapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002704,
        name: "Campo Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002803,
        name: "Caracol",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002902,
        name: "Cassilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5002951,
        name: "Chapadão do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003108,
        name: "Corguinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003157,
        name: "Coronel Sapucaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003207,
        name: "Corumbá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003256,
        name: "Costa Rica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003306,
        name: "Coxim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003454,
        name: "Deodápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003488,
        name: "Dois Irmãos do Buriti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003504,
        name: "Douradina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003702,
        name: "Dourados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003751,
        name: "Eldorado",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003801,
        name: "Fátima do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5003900,
        name: "Figueirão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004007,
        name: "Glória de Dourados",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004106,
        name: "Guia Lopes da Laguna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004304,
        name: "Iguatemi",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004403,
        name: "Inocência",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004502,
        name: "Itaporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004601,
        name: "Itaquiraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004700,
        name: "Ivinhema",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004809,
        name: "Japorã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5004908,
        name: "Jaraguari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005004,
        name: "Jardim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005103,
        name: "Jateí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005152,
        name: "Juti",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005202,
        name: "Ladário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005251,
        name: "Laguna Carapã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005400,
        name: "Maracaju",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005608,
        name: "Miranda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005681,
        name: "Mundo Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005707,
        name: "Naviraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5005806,
        name: "Nioaque",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006002,
        name: "Nova Alvorada do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006200,
        name: "Nova Andradina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006259,
        name: "Novo Horizonte do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006275,
        name: "Paraíso das Águas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006309,
        name: "Paranaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006358,
        name: "Paranhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006408,
        name: "Pedro Gomes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006606,
        name: "Ponta Porã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5006903,
        name: "Porto Murtinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007109,
        name: "Ribas do Rio Pardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007208,
        name: "Rio Brilhante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007307,
        name: "Rio Negro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007406,
        name: "Rio Verde de Mato Grosso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007505,
        name: "Rochedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007554,
        name: "Santa Rita do Pardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007695,
        name: "São Gabriel do Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007802,
        name: "Selvíria",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007703,
        name: "Sete Quedas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007901,
        name: "Sidrolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007935,
        name: "Sonora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007950,
        name: "Tacuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5007976,
        name: "Taquarussu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5008008,
        name: "Terenos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5008305,
        name: "Três Lagoas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5008404,
        name: "Vicentina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 50
      },
      {
        code: 5100102,
        name: "Acorizal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5100201,
        name: "Água Boa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5100250,
        name: "Alta Floresta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5100300,
        name: "Alto Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5100359,
        name: "Alto Boa Vista",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5100409,
        name: "Alto Garças",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5100508,
        name: "Alto Paraguai",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5100607,
        name: "Alto Taquari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5100805,
        name: "Apiacás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101001,
        name: "Araguaiana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101209,
        name: "Araguainha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101258,
        name: "Araputanga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101308,
        name: "Arenápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101407,
        name: "Aripuanã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101605,
        name: "Barão de Melgaço",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101704,
        name: "Barra do Bugres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101803,
        name: "Barra do Garças",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101852,
        name: "Bom Jesus do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5101902,
        name: "Brasnorte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102504,
        name: "Cáceres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102603,
        name: "Campinápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102637,
        name: "Campo Novo do Parecis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102678,
        name: "Campo Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102686,
        name: "Campos de Júlio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102694,
        name: "Canabrava do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102702,
        name: "Canarana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102793,
        name: "Carlinda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5102850,
        name: "Castanheira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103007,
        name: "Chapada dos Guimarães",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103056,
        name: "Cláudia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103106,
        name: "Cocalinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103205,
        name: "Colíder",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103254,
        name: "Colniza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103304,
        name: "Comodoro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103353,
        name: "Confresa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103361,
        name: "Conquista D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103379,
        name: "Cotriguaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103403,
        name: "Cuiabá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103437,
        name: "Curvelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103452,
        name: "Denise",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103502,
        name: "Diamantino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103601,
        name: "Dom Aquino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103700,
        name: "Feliz Natal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103809,
        name: "Figueirópolis D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103858,
        name: "Gaúcha do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103908,
        name: "General Carneiro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5103957,
        name: "Glória D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104104,
        name: "Guarantã do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104203,
        name: "Guiratinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104500,
        name: "Indiavaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104526,
        name: "Ipiranga do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104542,
        name: "Itanhangá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104559,
        name: "Itaúba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104609,
        name: "Itiquira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104807,
        name: "Jaciara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5104906,
        name: "Jangada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105002,
        name: "Jauru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105101,
        name: "Juara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105150,
        name: "Juína",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105176,
        name: "Juruena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105200,
        name: "Juscimeira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105234,
        name: "Lambari D'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105259,
        name: "Lucas do Rio Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105309,
        name: "Luciara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105580,
        name: "Marcelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105606,
        name: "Matupá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105622,
        name: "Mirassol d'Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105903,
        name: "Nobres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106000,
        name: "Nortelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106109,
        name: "Nossa Senhora do Livramento",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106158,
        name: "Nova Bandeirantes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106208,
        name: "Nova Brasilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106216,
        name: "Nova Canaã do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108808,
        name: "Nova Guarita",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106182,
        name: "Nova Lacerda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108857,
        name: "Nova Marilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108907,
        name: "Nova Maringá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108956,
        name: "Nova Monte Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106224,
        name: "Nova Mutum",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106174,
        name: "Nova Nazaré",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106232,
        name: "Nova Olímpia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106190,
        name: "Nova Santa Helena",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106240,
        name: "Nova Ubiratã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106257,
        name: "Nova Xavantina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106273,
        name: "Novo Horizonte do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106265,
        name: "Novo Mundo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106315,
        name: "Novo Santo Antônio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106281,
        name: "Novo São Joaquim",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106299,
        name: "Paranaíta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106307,
        name: "Paranatinga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106372,
        name: "Pedra Preta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106422,
        name: "Peixoto de Azevedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106455,
        name: "Planalto da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106505,
        name: "Poconé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106653,
        name: "Pontal do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106703,
        name: "Ponte Branca",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106752,
        name: "Pontes e Lacerda",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106778,
        name: "Porto Alegre do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106802,
        name: "Porto dos Gaúchos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106828,
        name: "Porto Esperidião",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5106851,
        name: "Porto Estrela",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107008,
        name: "Poxoréu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107040,
        name: "Primavera do Leste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107065,
        name: "Querência",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107156,
        name: "Reserva do Cabaçal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107180,
        name: "Ribeirão Cascalheira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107198,
        name: "Ribeirãozinho",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107206,
        name: "Rio Branco",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107578,
        name: "Rondolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107602,
        name: "Rondonópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107701,
        name: "Rosário Oeste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107750,
        name: "Salto do Céu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107248,
        name: "Santa Carmem",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107743,
        name: "Santa Cruz do Xingu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107768,
        name: "Santa Rita do Trivelato",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107776,
        name: "Santa Terezinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107263,
        name: "Santo Afonso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107792,
        name: "Santo Antônio do Leste",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107800,
        name: "Santo Antônio do Leverger",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107859,
        name: "São Félix do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107297,
        name: "São José do Povo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107305,
        name: "São José do Rio Claro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107354,
        name: "São José do Xingu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107107,
        name: "São José dos Quatro Marcos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107404,
        name: "São Pedro da Cipa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107875,
        name: "Sapezal",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107883,
        name: "Serra Nova Dourada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107909,
        name: "Sinop",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107925,
        name: "Sorriso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107941,
        name: "Tabaporã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5107958,
        name: "Tangará da Serra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108006,
        name: "Tapurah",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108055,
        name: "Terra Nova do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108105,
        name: "Tesouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108204,
        name: "Torixoréu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108303,
        name: "União do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108352,
        name: "Vale de São Domingos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108402,
        name: "Várzea Grande",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108501,
        name: "Vera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5105507,
        name: "Vila Bela da Santíssima Trindade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5108600,
        name: "Vila Rica",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 51
      },
      {
        code: 5200050,
        name: "Abadia de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200100,
        name: "Abadiânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200134,
        name: "Acreúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200159,
        name: "Adelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200175,
        name: "Água Fria de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200209,
        name: "Água Limpa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200258,
        name: "Águas Lindas de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200308,
        name: "Alexânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200506,
        name: "Aloândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200555,
        name: "Alto Horizonte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200605,
        name: "Alto Paraíso de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200803,
        name: "Alvorada do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200829,
        name: "Amaralina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200852,
        name: "Americano do Brasil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5200902,
        name: "Amorinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201108,
        name: "Anápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201207,
        name: "Anhanguera",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201306,
        name: "Anicuns",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201405,
        name: "Aparecida de Goiânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201454,
        name: "Aparecida do Rio Doce",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201504,
        name: "Aporé",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201603,
        name: "Araçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201702,
        name: "Aragarças",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5201801,
        name: "Aragoiânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5202155,
        name: "Araguapaz",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5202353,
        name: "Arenópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5202502,
        name: "Aruanã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5202601,
        name: "Aurilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5202809,
        name: "Avelinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203104,
        name: "Baliza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203203,
        name: "Barro Alto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203302,
        name: "Bela Vista de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203401,
        name: "Bom Jardim de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203500,
        name: "Bom Jesus de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203559,
        name: "Bonfinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203575,
        name: "Bonópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203609,
        name: "Brazabrantes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203807,
        name: "Britânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203906,
        name: "Buriti Alegre",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203939,
        name: "Buriti de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5203962,
        name: "Buritinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204003,
        name: "Cabeceiras",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204102,
        name: "Cachoeira Alta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204201,
        name: "Cachoeira de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204250,
        name: "Cachoeira Dourada",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204300,
        name: "Caçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204409,
        name: "Caiapônia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204508,
        name: "Caldas Novas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204557,
        name: "Caldazinha",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204607,
        name: "Campestre de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204656,
        name: "Campinaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204706,
        name: "Campinorte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204805,
        name: "Campo Alegre de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204854,
        name: "Campo Limpo de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204904,
        name: "Campos Belos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5204953,
        name: "Campos Verdes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205000,
        name: "Carmo do Rio Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205059,
        name: "Castelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205109,
        name: "Catalão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205208,
        name: "Caturaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205307,
        name: "Cavalcante",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205406,
        name: "Ceres",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205455,
        name: "Cezarina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205471,
        name: "Chapadão do Céu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205497,
        name: "Cidade Ocidental",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205513,
        name: "Cocalzinho de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205521,
        name: "Colinas do Sul",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205703,
        name: "Córrego do Ouro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205802,
        name: "Corumbá de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5205901,
        name: "Corumbaíba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5206206,
        name: "Cristalina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5206305,
        name: "Cristianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5206404,
        name: "Crixás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5206503,
        name: "Cromínia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5206602,
        name: "Cumari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5206701,
        name: "Damianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5206800,
        name: "Damolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5206909,
        name: "Davinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207105,
        name: "Diorama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208301,
        name: "Divinópolis de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207253,
        name: "Doverlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207352,
        name: "Edealina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207402,
        name: "Edéia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207501,
        name: "Estrela do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207535,
        name: "Faina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207600,
        name: "Fazenda Nova",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207808,
        name: "Firminópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5207907,
        name: "Flores de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208004,
        name: "Formosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208103,
        name: "Formoso",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208152,
        name: "Gameleira de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208400,
        name: "Goianápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208509,
        name: "Goiandira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208608,
        name: "Goianésia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208707,
        name: "Goiânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208806,
        name: "Goianira",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5208905,
        name: "Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209101,
        name: "Goiatuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209150,
        name: "Gouvelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209200,
        name: "Guapó",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209291,
        name: "Guaraíta",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209408,
        name: "Guarani de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209457,
        name: "Guarinos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209606,
        name: "Heitoraí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209705,
        name: "Hidrolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209804,
        name: "Hidrolina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209903,
        name: "Iaciara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209937,
        name: "Inaciolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5209952,
        name: "Indiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210000,
        name: "Inhumas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210109,
        name: "Ipameri",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210158,
        name: "Ipiranga de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210208,
        name: "Iporá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210307,
        name: "Israelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210406,
        name: "Itaberaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210562,
        name: "Itaguari",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210604,
        name: "Itaguaru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210802,
        name: "Itajá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5210901,
        name: "Itapaci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211008,
        name: "Itapirapuã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211206,
        name: "Itapuranga",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211305,
        name: "Itarumã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211404,
        name: "Itauçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211503,
        name: "Itumbiara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211602,
        name: "Ivolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211701,
        name: "Jandaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211800,
        name: "Jaraguá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5211909,
        name: "Jataí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212006,
        name: "Jaupaci",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212055,
        name: "Jesúpolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212105,
        name: "Joviânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212204,
        name: "Jussara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212253,
        name: "Lagoa Santa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212303,
        name: "Leopoldo de Bulhões",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212501,
        name: "Luziânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212600,
        name: "Mairipotaba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212709,
        name: "Mambaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212808,
        name: "Mara Rosa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212907,
        name: "Marzagão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5212956,
        name: "Matrinchã",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213004,
        name: "Maurilândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213053,
        name: "Mimoso de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213087,
        name: "Minaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213103,
        name: "Mineiros",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213400,
        name: "Moiporá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213509,
        name: "Monte Alegre de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213707,
        name: "Montes Claros de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213756,
        name: "Montividiu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213772,
        name: "Montividiu do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213806,
        name: "Morrinhos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213855,
        name: "Morro Agudo de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5213905,
        name: "Mossâmedes",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214002,
        name: "Mozarlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214051,
        name: "Mundo Novo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214101,
        name: "Mutunópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214408,
        name: "Nazário",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214507,
        name: "Nerópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214606,
        name: "Niquelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214705,
        name: "Nova América",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214804,
        name: "Nova Aurora",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214838,
        name: "Nova Crixás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214861,
        name: "Nova Glória",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214879,
        name: "Nova Iguaçu de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5214903,
        name: "Nova Roma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215009,
        name: "Nova Veneza",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215207,
        name: "Novo Brasil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215231,
        name: "Novo Gama",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215256,
        name: "Novo Planalto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215306,
        name: "Orizona",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215405,
        name: "Ouro Verde de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215504,
        name: "Ouvidor",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215603,
        name: "Padre Bernardo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215652,
        name: "Palestina de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215702,
        name: "Palmeiras de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215801,
        name: "Palmelo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5215900,
        name: "Palminópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5216007,
        name: "Panamá",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5216304,
        name: "Paranaiguara",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5216403,
        name: "Paraúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5216452,
        name: "Perolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5216809,
        name: "Petrolina de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5216908,
        name: "Pilar de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5217104,
        name: "Piracanjuba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5217203,
        name: "Piranhas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5217302,
        name: "Pirenópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5217401,
        name: "Pires do Rio",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5217609,
        name: "Planaltina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5217708,
        name: "Pontalina",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218003,
        name: "Porangatu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218052,
        name: "Porteirão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218102,
        name: "Portelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218300,
        name: "Posse",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218391,
        name: "Professor Jamil",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218508,
        name: "Quirinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218607,
        name: "Rialma",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218706,
        name: "Rianápolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218789,
        name: "Rio Quente",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218805,
        name: "Rio Verde",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5218904,
        name: "Rubiataba",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219001,
        name: "Sanclerlândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219100,
        name: "Santa Bárbara de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219209,
        name: "Santa Cruz de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219258,
        name: "Santa Fé de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219308,
        name: "Santa Helena de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219357,
        name: "Santa Isabel",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219407,
        name: "Santa Rita do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219456,
        name: "Santa Rita do Novo Destino",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219506,
        name: "Santa Rosa de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219605,
        name: "Santa Tereza de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219704,
        name: "Santa Terezinha de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219712,
        name: "Santo Antônio da Barra",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219738,
        name: "Santo Antônio de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219753,
        name: "Santo Antônio do Descoberto",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219803,
        name: "São Domingos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5219902,
        name: "São Francisco de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220058,
        name: "São João da Paraúna",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220009,
        name: "São João d'Aliança",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220108,
        name: "São Luís de Montes Belos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220157,
        name: "São Luiz do Norte",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220207,
        name: "São Miguel do Araguaia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220264,
        name: "São Miguel do Passa Quatro",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220280,
        name: "São Patrício",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220405,
        name: "São Simão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220454,
        name: "Senador Canedo",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220504,
        name: "Serranópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220603,
        name: "Silvânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220686,
        name: "Simolândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5220702,
        name: "Sítio d'Abadia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221007,
        name: "Taquaral de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221080,
        name: "Teresina de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221197,
        name: "Terezópolis de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221304,
        name: "Três Ranchos",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221403,
        name: "Trindade",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221452,
        name: "Trombas",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221502,
        name: "Turvânia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221551,
        name: "Turvelândia",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221577,
        name: "Uirapuru",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221601,
        name: "Uruaçu",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221700,
        name: "Uruana",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221809,
        name: "Urutaí",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221858,
        name: "Valparaíso de Goiás",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5221908,
        name: "Varjão",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5222005,
        name: "Vianópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5222054,
        name: "Vicentinópolis",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5222203,
        name: "Vila Boa",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5222302,
        name: "Vila Propício",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 52
      },
      {
        code: 5300108,
        name: "Brasília",
        createdAt: new Date(),
        updatedAt: new Date(),
        upper_region_code: 53
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('region', null, {});
  }
};
