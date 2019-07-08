/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {
//id: { type: 'number', autoIncrement: true, },
nome: { type: 'string', required: true, maxLength: 64 },
sigla: { type: 'string', maxLength: 4},
descricao: { type: 'string'},
},

};
