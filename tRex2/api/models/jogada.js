/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {
  //id: { type: 'number', autoIncrement: true, },
  jogador: { type: 'number', columnType: 'int' },
  pontuacao: { type: 'number', columnType: 'int' },
  data: { type: 'string', maxLength: 45 },


  },


};
