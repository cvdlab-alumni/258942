/* creaQuadrati - Funzione che ha come parametri le coordinate iniziali e finali delle righe
 * di mattonelle che si vogliono creare.
*/
var creaQuadrati = function(yini, yfin, xini,xfin) {
	var c;
	for(i= xini; i<=xfin; i++) {
		var temp = i+1;
		c = POLYLINE([[i, yini],[i,yfin],[temp,yfin],[temp,yini]]);
		DRAW(c);
	}
	var r = POLYLINE([[xini,yini],[xfin+1,yini]]);
	DRAW(r);
};

/*
 * La griglia della piantina.
 */
var griglia = STRUCT([creaQuadrati(0,1,0,38), creaQuadrati(1,2,21,35), creaQuadrati(1,2,0,0), creaQuadrati(2,3,21,35),
					creaQuadrati(3,4,21,35),creaQuadrati(4,5,21,51), creaQuadrati(5,6,21,46), creaQuadrati(5,6,51,51),
					creaQuadrati(6,7,21,46), creaQuadrati(7,8,21,46), creaQuadrati(8,9,21,46),creaQuadrati(9,10,21,46),
					creaQuadrati(10,11,1,46),creaQuadrati(11,12,1,46),creaQuadrati(12,13,1,46),creaQuadrati(13,14,1,46),
					creaQuadrati(14,15,1,46),creaQuadrati(15,16,1,46),creaQuadrati(16,17,1,38),
					creaQuadrati(17,18,1,8), creaQuadrati(18,19,1,8),
					creaQuadrati(19,20,1,8),creaQuadrati(20,21,1,8),creaQuadrati(21,22,1,8),
					]);
/*
 * creaMuro: funzione che ha come parametri le coordinate iniziali e finali ed il colore del muro che si vuole ottenere.
*/
var creaMuro = function(xini,xfin,yini,yfin, rgb1,rgb2,rgb3) {
	var c = POLYLINE([[xini,yini],[xini,yfin],[xfin,yfin],[xfin,yini],[xini,yini]]);
	var cc = COLOR([rgb1,rgb2,rgb3])(c);
	DRAW(cc);
};

/*
 * I muri visibili dalla piantina e le finestre.
 */
var muri = STRUCT([creaMuro(1,7.5,0.9,1.1,0.2,0.2,0.2), creaMuro(0.9,1.1,1,22,0.2,0.2,0.2), creaMuro(1,9,21.9,22.1,0.2,0.2,0.2),
			creaMuro(8.9,9.1,17,22,0.2,0.2,0.2),
			creaMuro(6.5,26.5,14.9,15.1,0.2,0.2,0.2),creaMuro(30,40,13.5,13.7,0,1,1), creaMuro(36.2,42.5,11.4,11.6,0.2,0.2,0.2), 
			creaMuro(25,34,7.4,7.6,0.2,0.2,0.2), creaMuro(37.7,51,15.9,16.1,0.2,0.2,0.2), creaMuro(50.9,51.1,5,16,0.2,0.2,0.2),
			creaMuro(41.2,51,4.9,5.1,0.2,0.2,0.2), creaMuro(44.4,44.6,7,14,0,1,1),
			creaMuro(30.9,31.1,7.7,13.5,0,1,1), creaMuro(31.9,32.1,7.7,13.5,0,1,1),
			creaMuro(30,41.2,4.9,5.1,0,1,1), creaMuro(1.1,8.9,16.9,17.1,0,1,1), creaMuro(4.9,5.1,17.1,21.9,0,1,1)
			]);
/*
 * Gli scalini laterali.
 */
var scalini = STRUCT([creaMuro(36, 36.375, 1,4, 0.8,0.8, 0.8), creaMuro(36.375,36.75, 1,4, 0.8,0.8, 0.8),
	creaMuro(36.75,37.125, 1,4, 0.8,0.8, 0.8),
	creaMuro(37.125,37.5, 1,4, 0.8,0.8, 0.8), creaMuro(37.5,37.875, 1,4, 0.8,0.8, 0.8),creaMuro(37.875, 38.25, 1,4, 0.8,0.8, 0.8), 
	creaMuro(38.25, 38.625, 1,4, 0.8,0.8, 0.8), creaMuro(38.625, 39, 1,4, 0.8,0.8, 0.8),

	creaMuro(36, 36.375, 2.4, 2.5 , 0.8,0.8, 0.8), creaMuro(36.75, 37.175, 2.4, 2.5 , 0.8,0.8, 0.8), creaMuro(37.5, 37.875, 2.4, 2.5 , 0.8,0.8, 0.8),
	creaMuro(38.25, 38.625, 2.4, 2.5 , 0.8,0.8, 0.8),

	creaMuro(36.375,36.75, 1.9, 2, 0.8,0.8, 0.8),creaMuro(36.375,36.75, 3.4, 3.5, 0.8,0.8, 0.8),
	creaMuro(37.125,37.5, 1.9, 2, 0.8,0.8, 0.8),creaMuro(37.125,37.5, 3.4, 3.5, 0.8,0.8, 0.8),
	creaMuro(37.875, 38.25, 1.9, 2, 0.8,0.8, 0.8),creaMuro(37.875, 38.25, 3.4, 3.5, 0.8,0.8, 0.8),
	creaMuro(38.625, 39, 1.9, 2, 0.8,0.8, 0.8),creaMuro(38.625, 39, 3.4, 3.5, 0.8,0.8, 0.8)
	]);





