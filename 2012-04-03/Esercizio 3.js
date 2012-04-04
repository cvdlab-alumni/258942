/*
 * Pilastri interni alla struttura. Sono colorati di marrone.
 */
var pilastri = T([0,1])([26,7])(SIMPLEX_GRID([
	REPLICA(3)([0.15,-6.3]),
	REPLICA(2)([0.15,-7]),
	[-1.6,3]
]));

/*
 * Insieme dei pavimenti e delle piscine. I pavimenti sono marroni mentre le piscine blue.
 */
var pavimento0 = SIMPLEX_GRID([
	[39],[1],[1.6]]);
var quadratinoLateraleDx = T([1])([1])(SIMPLEX_GRID([
	[1],[1],[1.6]]));
var piscinaDx = T([0,1])([1,1])(SIMPLEX_GRID([
	[20],[9],[1.6]]));
var pavimento5 = T([0,1])([21,1])(SIMPLEX_GRID([
	[15],[3],[1.6]]));
var pavimento4 = T([0,1])([21,4])(SIMPLEX_GRID([
	[18],[6],[1.6]]));
var pavimento2 = T([0,1])([9,10])(SIMPLEX_GRID([[29],[7],[1.6]]));
var pavimento1 = T([0,1])([1,10])(SIMPLEX_GRID([[8],[12],[1.6]]));
var pavimento3 = T([0,1])([38, 5])(SIMPLEX_GRID([[8],[12],[1.6]]));
var quadratinoLateraleSx = T([0,1])([51,5])(SIMPLEX_GRID([
	[1],[1],[1.6]]));
var striscettaLaterale = T([0,1])([39,4])(SIMPLEX_GRID([[13],[1],[1.6]]));
var piscinaSx= T([0,1])([45,5])(SIMPLEX_GRID([[6],[11],[1.6]]));
var pavimenti = COLOR([0.6,0.4,0.2])(STRUCT([pavimento0,quadratinoLateraleDx,quadratinoLateraleSx,pavimento5,pavimento4,pavimento2,pavimento1, 
	pavimento3, striscettaLaterale,pilastri]));
var piscine = COLOR([0.2,0,0.6])(STRUCT([piscinaSx,piscinaDx]));
DRAW(pavimenti); DRAW(piscine);

/*
 * Insieme dei muri interni ed esterni della struttura. I muri interni sono colorati di rosso, quelli esterni di grigio.
 */
var muro0 = T([0,1])([6.5,15])(SIMPLEX_GRID([[20],[0.2],[-1.6,3]]));
var muro2 = T([0,1])([37, 11.7])(SIMPLEX_GRID([[6],[0.2],[-1.6,3]]));
var muro3 = T([0,1])([25,7.5])(SIMPLEX_GRID([[9],[0.2],[-1.6,3]]));
var muro4 = T([0,1])([9,17])(SIMPLEX_GRID([[0.2],[5.2],[-1.6,3]]));
var muro5 = T([0,1])([1,22])(SIMPLEX_GRID([[8],[0.2],[-1.6,3]]));
var muro6 = T([0,1])([1,1])(SIMPLEX_GRID([[0.2],[21],[-1.6,3]]));
var muro7 = T([0,1])([1,1])(SIMPLEX_GRID([[6.5],[0.2],[-1.6,3]]));
var muro8 = T([0,1])([38,16])(SIMPLEX_GRID([[13.2],[0.2],[-1.6,3]]));
var muro9 = T([0,1])([51,5])(SIMPLEX_GRID([[0.2],[11],[-1.6,3]]));
var muro10 = T([0,1])([41.2,5])(SIMPLEX_GRID([[9.8],[0.2],[-1.6,3]]));

var muriRossi = COLOR([1,0,0])(STRUCT([muro0,muro2,muro3]));
var muriGrigi = COLOR([0.5,0.5,0.5])(STRUCT([muro4, muro5,muro6,muro7, muro8, muro9, muro10]))

DRAW(muriGrigi);
DRAW(muriRossi);


/*
 * Varie finestre e divisori della struttura. Le finestre sono colorate di verde chiaro mentre gli infissi di nero.
 */
var pilastriFinestrone = T([0,1])([30.35,5])(SIMPLEX_GRID([[0.005,-3.66,0.005,-3.66,0.005,-3.66,0.005],[0.2],[-1.6,3]]));
var finestreFinestrone = T([0,1])([30.35,5])(SIMPLEX_GRID([[-0.005,3.66,-0.005,3.66,-0.005,3.66,-0.005],[0.2],[-1.6,3]]));
var infissiFinestrone = T([0,1])([30.35,5])(SIMPLEX_GRID([[11],[0.005],[-1.6,0.005,-3,0.005]]));
var finestroneColorato = STRUCT([COLOR([0.2,0.2,0.2])(pilastriFinestrone),COLOR([0.8,1,0.8])(finestreFinestrone),COLOR([0.2,0.2,0.2])(infissiFinestrone)]);
DRAW(finestroneColorato);


var pilastriFinestraPallela1 = T([0,1])([31,7.5])(SIMPLEX_GRID([[0.2],[0.005,-3.66,0.005,-3.66,0.005],[-1.6,3]]));
var finestreFinestraPallela1 = T([0,1])([31,7.505])(SIMPLEX_GRID([[0.2],[-0.005,3.66,-0.005,3.66,-0.005],[-1.6,3]]));
var infissiFinestraParallela1 = T([0,1])([31,7.5])(SIMPLEX_GRID([[0.2],[7],[-1.6,0.005,-3,0.005]]));
var finestraParallelaColorata1 = STRUCT([COLOR([0.2,0.2,0.2])(pilastriFinestraPallela1),COLOR([0.8,1,0.8])(finestreFinestraPallela1),
	COLOR([0.2,0.2,0.2])(infissiFinestraParallela1)]);
DRAW(finestraParallelaColorata1);


var pilastriFinestrone2 = T([0,1])([32,7.5])(SIMPLEX_GRID([[0.2],[0.005,-3.66,0.005,-3.66,0.005],[-1.6,3]]));
var finestreFinestrone2 = T([0,1])([32,7.505])(SIMPLEX_GRID([[0.2],[-0.005,3.66,-0.005,3.66,-0.005],[-1.6,3]]));
var infissiFinestrone2 = T([0,1])([32,7.5])(SIMPLEX_GRID([[0.2],[7],[-1.6,0.005,-3,0.005]]));
var finestroneColorato2 = STRUCT([COLOR([0.2,0.2,0.2])(pilastriFinestrone2),COLOR([0.8,1,0.8])(finestreFinestrone2),
	COLOR([0.2,0.2,0.2])(infissiFinestrone2)]);
DRAW(finestroneColorato2);


var pilastriFinestra = T([0,1])([30,14.7])(SIMPLEX_GRID([[0.005,-0.995,0.005,-0.995,0.005,-0.995,0.005,-0.995,0.005,-0.995,
	0.005,-0.995,0.005,-0.995,0.005,-0.995,0.005,-0.995,0.005,-0.995,0.005],[0.2],[-1.6,3]]));
var finestreFinestra = T([0,1])([30,14.7])(SIMPLEX_GRID([[-0.005,0.995,-0.005,0.995,-0.005,0.995,-0.005,0.995,-0.005,0.995,
	-0.005,0.995,-0.005,0.995,-0.005,0.995,-0.005,0.995,-0.005,0.995,-0.005],[0.2],[-1.6,3]]));
var infissiFinestra = T([0,1])([30,14.7])(SIMPLEX_GRID([[10],[0.2],[-1.6,0.005,-3,0.005]]));
var finestraColorata = STRUCT([COLOR([0.2,0.2,0.2])(pilastriFinestra),COLOR([0.8,1,0.8])(finestreFinestra),COLOR([0.2,0.2,0.2])(infissiFinestra)]);
DRAW(finestraColorata);


var pilastriFinestraLaterale = T([0,1])([44.5,7])(SIMPLEX_GRID([[0.2],[0.005,-0.99,0.005,-0.99,0.005,-0.99,0.005,-0.99,0.005,-0.99,
	0.005,-0.99,0.005,-0.99,0.005],[-1.6,3]]));
var finestreFinestraLaterale = T([0,1])([44.5,7])(SIMPLEX_GRID([[0.2],[-0.005,0.99,-0.005,0.99,-0.005,0.99,-0.005,0.99,-0.005,0.99,
	-0.005,-.99,-0.005,0.99,-0.005],[-1.6,3]]));
var infissiFinestraLaterale = T([0,1])([44.5,7])(SIMPLEX_GRID([[0.2],[7],[-1.6,0.005,-3,0.005]]));
var finestraLaterale = STRUCT([pilastriFinestraLaterale,finestreFinestraLaterale,infissiFinestraLaterale]);
var finestraLateraleColorata = STRUCT([COLOR([0.2,0.2,0.2])(pilastriFinestraLaterale),COLOR([0.8,1,0.8])(finestreFinestraLaterale),
	COLOR([0.2,0.2,0.2])(infissiFinestraLaterale)]);
DRAW(finestraLateraleColorata);


var pilastriPorta = T([0,1])([40,14.5])(SIMPLEX_GRID([[0.2],[0.005,-0.825,0.005,-0.825,0.005],[-1.6,3]]));
var finestrePorta = T([0,1])([40,14.5])(SIMPLEX_GRID([[0.2],[-0.005,0.825,-0.005,0.825,0.005],[-1.6,3]]));
var infissiPorta = T([0,1])([40,14.5])(SIMPLEX_GRID([[0.2],[1.8],[-1.6,0.005,-3,0.005]]));
var porta = STRUCT([pilastriPorta, finestrePorta, infissiPorta]);
var portaColorata = STRUCT([COLOR([0.2,0.2,0.2])(pilastriPorta),COLOR([0,1,1])(finestrePorta),
	COLOR([0.2,0.2,0.2])(infissiPorta)]);
DRAW(portaColorata);



var pilastriPorta2 = T([0,1])([30,5])(SIMPLEX_GRID([[0.2],[0.005,-1.2425,0.005,-1.2425,0.005],[-1.6,3]]));
var finestrePorta2 = T([0,1])([30,5])(SIMPLEX_GRID([[0.2],[-0.005,1.2425,-0.005,1.2425,0.005],[-1.6,3]]));
var infissiPorta2 = T([0,1])([30,5])(SIMPLEX_GRID([[0.2],[2.5],[-1.6,0.005,-3,0.005]]));
var porta2 = STRUCT([pilastriPorta2, finestrePorta2, infissiPorta2]);
var portaColorata2 = STRUCT([COLOR([0.2,0.2,0.2])(pilastriPorta2),COLOR([0.8,1,0.8])(finestrePorta2),
	COLOR([0.2,0.2,0.2])(infissiPorta2)]);
DRAW(portaColorata2);


var pilastriPavimento1 = T([0,1])([1,17])(SIMPLEX_GRID([[0.005,-0.94375,0.005,-0.94375,0.005,-0.94375,0.005,-0.94375,0.005,-0.94375,
	0.005,-0.94375,0.005,-0.94375,0.005,-0.94375,0.005,-0.47,0.005],[0.2],[-1.6,3]]));
var finestrePavimento1 = T([0,1])([1,17])(SIMPLEX_GRID([[-0.005,0.94375,-0.005,0.94375,-0.005,0.94375,-0.005,0.94375,-0.005,0.94375,
	-0.005,0.94375,-0.005,0.94375,-0.005,0.94375,-0.005,0.47,-0.005],[0.2],[-1.6,3]]));
var infissiPavimento1 = T([0,1])([30,5])(SIMPLEX_GRID([[0.2],[8],[-1.6,0.005,-3,0.005]]));
var finestreTotaliPavimento1 = STRUCT([pilastriPavimento1, finestrePavimento1, infissiPavimento1]);
var finestreTotaliPavimento1Colorate = STRUCT([COLOR([0.2,0.2,0.2])(pilastriPavimento1),COLOR([0.8,1,0.8])(finestrePavimento1),
	COLOR([0.2,0.2,0.2])(infissiPavimento1)]);
DRAW(finestreTotaliPavimento1Colorate);

/*
 *  Tetti della struttura. Sono colorati di marrone.
 */
var tetto1 = T([1])([13])(SIMPLEX_GRID([[10],[10],[-4.6,0.3]]));
var tetto2 = T([0,1])([24,4])(SIMPLEX_GRID([[23],[13],[-4.6,0.3]]));
var tettiColorati = COLOR([0.6,0.4,0.2])(STRUCT([tetto1,tetto2]));
DRAW(tettiColorati);


/*
 * Gli scalini laterali. 
 */
 var scalino1 = T([0,1])([36,1])(SIMPLEX_GRID([[3],[3],[0.2]]));
 var scalino2 = T([0,1])([36,1])(SIMPLEX_GRID([[2.6],[3],[0.4]]));
 var scalino3 = T([0,1])([36,1])(SIMPLEX_GRID([[2.4],[3],[0.6]]));
 var scalino4 = T([0,1])([36,1])(SIMPLEX_GRID([[2.2],[3],[0.8]]));
 var scalino5 = T([0,1])([36,1])(SIMPLEX_GRID([[2],[3],[1]]));
 var scalino6 = T([0,1])([36,1])(SIMPLEX_GRID([[1.8],[3],[1.2]]));
 var scalino7 = T([0,1])([36,1])(SIMPLEX_GRID([[1.6],[3],[1.4]]));
 var scalinataColorata = COLOR([0.6,0.4,0.2])(STRUCT([scalino1, scalino2,scalino3,scalino4,scalino5,scalino6,scalino7]);
 DRAW(scalinata));