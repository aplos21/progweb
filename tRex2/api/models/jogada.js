/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {
  //id: { type: 'number', autoIncrement: true, },
  jogador: { model: 'user' },
  pontuacao: { type: 'number', columnType: 'int' },
  data: { type: 'string', maxLength: 45 },


  },


};
