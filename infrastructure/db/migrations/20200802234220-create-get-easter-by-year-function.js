'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createFunction(
      'get_easter_by_year',
      [{type: 'integer', name: 'year'}],
      'DATE',
      'plpgsql',
      '    sec := trunc( year / 100 );\n' +
      '    N := year - 19 * (trunc( year / 19 ) );\n' +
      '    K := trunc( (sec - 17) / 25 );\n' +
      '    I := sec - trunc( sec / 4 ) - trunc( (sec - K) / 3) + 19 * N + 15;\n' +
      '    I := I - 30 * (trunc( I / 30 ) );\n' +
      '    I := I - ( trunc( I / 28 ) ) * (1 - ( trunc( 1 / 28 ) ) * ( trunc(29 / (I + 1) ) ) * ( trunc( (21 - N) / 11) ) );\n' +
      '    J := year + trunc( year / 4 ) + I + 2 - sec + trunc( sec / 4 );\n' +
      '    J := J - 7 * ( trunc( J / 7 ) );\n' +
      '    L := I - J;\n' +
      '    month := 3 + trunc( (L + 40) / 44 );\n' +
      '    day := L + 28 - 31 * ( trunc( month / 4 ) );\n' +
      '    RETURN to_date( to_char( day, \'00\') || to_char( month, \'00\') || to_char( year,\'0000\'), \'DDMMYYYY\');\n',
      [
        'IMMUTABLE',
        'LEAKPROOF'
      ],
      {
        variables:
          [
            {type: 'integer', name: 'month', default: 1},
            {type: 'integer', name: 'day', default: 1},
            {type: 'integer', name: 'sec', default: 1},
            {type: 'integer', name: 'I', default: 1},
            {type: 'integer', name: 'J', default: 1},
            {type: 'integer', name: 'K', default: 1},
            {type: 'integer', name: 'L', default: 1},
            {type: 'integer', name: 'N', default: 1},
          ],
        force: true
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('region');
  }
};
