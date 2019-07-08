/**
 * GameController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  


pontuacao: async function (req, res) {
 	await jogada.create({
 	pontuacao: req.body.pontuacao,
 	jogador: req.me.id
 	});
 	res.end('Pontuação salva');
},

trex: async function (req, res) {
 res.view('pages/game/trex');
},


};

