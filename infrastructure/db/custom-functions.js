const db = require("../../domain/entities");

const customFunctions = {};

customFunctions.createGetEasterByYear = () => {
  // Execute query to create function
  db.sequelize.query(
    'CREATE OR REPLACE FUNCTION get_easter_by_year( ano INTEGER ) \n' +
    'RETURNS DATE AS\n' +
    '$BODY$\n' +
    'DECLARE\n' +
    '    mes   INTEGER;\n' +
    '    dia   INTEGER;\n' +
    '    sec   INTEGER;\n' +
    '    I   INTEGER;\n' +
    '    J   INTEGER;\n' +
    '    K   INTEGER;\n' +
    '    L   INTEGER;\n' +
    '    N   INTEGER;\n' +
    'BEGIN\n' +
    '    sec := trunc( ano / 100 );\n' +
    '    N := ano - 19 * (trunc( ano / 19 ) );\n' +
    '    K := trunc( (sec - 17) / 25 );\n' +
    '    I := sec - trunc( sec / 4 ) - trunc( (sec - K) / 3) + 19 * N + 15;\n' +
    '    I := I - 30 * (trunc( I / 30 ) );\n' +
    '    I := I - ( trunc( I / 28 ) ) * (1 - ( trunc( 1 / 28 ) ) * ( trunc(29 / (I + 1) ) ) * ( trunc( (21 - N) / 11) ) );\n' +
    '    J := ano + trunc( ano / 4 ) + I + 2 - sec + trunc( sec / 4 );\n' +
    '    J := J - 7 * ( trunc( J / 7 ) );\n' +
    '    L := I - J;\n' +
    '    mes := 3 + trunc( (L + 40) / 44 );\n' +
    '    dia := L + 28 - 31 * ( trunc( mes / 4 ) );\n' +
    '\n' +
    '    RETURN to_date( to_char( dia, \'00\') || to_char( mes, \'00\') || to_char( ano,\'0000\'), \'DDMMYYYY\');\n' +
    'END;\n' +
    '$BODY$\n' +
    'LANGUAGE plpgsql;', (error) => {
      if (error) {
        throw error
      }
    })
}

module.exports = customFunctions;
