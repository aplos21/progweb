/**
 * Module dependencies
 */

// ...


/**
 * view-ranking.js
 *
 * Display "Ranking" page.
 */


 
 
function mostraDataHora(timestamp) {
	var fullDate = new Date(timestamp)
	var date = fullDate.toLocaleDateString();
	var timeWithoutSeconds = fullDate.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'}); 
	return date + ' ' + timeWithoutSeconds;
}
module.exports = async function viewRanking(req, res) {


var jogadas = await jogada.find().sort('pontuacao ASC').populate('jogador');
console.log(jogadas);
return res.view('pages/ranking', { jogadas, mostraDataHora });

};
