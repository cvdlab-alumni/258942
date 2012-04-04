var piediSedia = SIMPLEX_GRID([
	[0.03,-0.4,0.03],
	[0.03,-0.4,0.03],
	[0.4]
]);
var baseSedia = SIMPLEX_GRID([[0.5],[0.5],[-0.4,0.02]]);
var schienaleSedia = SIMPLEX_GRID([[0.03],[-0.03,0.03,-0.4,0.03],[-0.4, 0.4]]);
var schienale = SIMPLEX_GRID([[0.03],[0.5],[-0.6, 0.25]]);

var sedia = T([0,1,2])([3,11,1.6])(STRUCT([piediSedia, baseSedia, schienaleSedia, schienale]));
var sediaColorata = COLOR([1,0,0])(sedia);
DRAW(sediaColorata);


var pilastriPanchina = T([0,1])([7,24])(SIMPLEX_GRID([[0.2],[0.2],[-1.6,0.4]]));
var basePanchina = T([0,1])([7,14])(SIMPLEX_GRID([[15.3],[1],[-1.605,0.015]]));
var panchina = COLOR([1,0,0])(STRUCT([pilastriPanchina,basePanchina]));
DRAW(panchina);



