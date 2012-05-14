// dominio 
var domain = DOMAIN([[0,1],[0,2*PI]])([80,80]);
var lDomain = DOMAIN([[0,1],[0,2*PI]])([1,60]);
var domain1 = INTERVALS(1)(50);
var domain2 = DOMAIN([[0,1],[0,1]])([30,10]);

/* base */
var controlliBase1 = [[3,0,0],[3.1,0,0.2],[3.2,0,0.4],[3.3,0,0.6],[3.4,0,0.8],[3.5,0,1],[3.5,0,1],
[3.6,0,1.2],[3.7,0,1.4],[3.8,0,1.6],[3.9,0,1.8],[4,0,2]];
var base1 = BEZIER(S0)(controlliBase1);
var mapBase1 = ROTATIONAL_SURFACE(base1);
var baseFinale1 = MAP(mapBase1)(domain);

var baseBassaColorata = COLOR([138/255, 43/255, 226/255, 1])(baseFinale1);
DRAW(baseBassaColorata);


var controlliBase2 = [[4,0,2],[4.1,0,2.2],[4.2,0,2.4],[4.2,0,2.6],[4.1,0,2.8],[4,0,3]];
var base2 = BEZIER(S0)(controlliBase2);
var mapBase2 = ROTATIONAL_SURFACE(base2);
var baseFinale2 = MAP(mapBase2)(domain);

var baseCentraleColorata = COLOR([34/255, 139/255, 34/255, 1])(baseFinale2);
DRAW(baseCentraleColorata);


var controlliBase3 = [[4,0,3],[3.9,0,3.1],[3.8,0,3.2],[3.7,0,3.3],[3.6,0,3.4],[3.5,0,3.5],[3.4,0,3.6],[3.3,0,3.7],[3.2,0,3.8],[3.1,0,3.9],[3,0,4],
     [2.9,0,4.1],[2.8,0,4.2],[2.7,0,4.3],[2.6,0,4.4],[2.5,0,4.5],[2.4,0,4.6],[2.3,0,4.7],[2.2,0,4.8],[2.1,0,4.9],[2,0,5]];

var base3 = BEZIER(S0)(controlliBase3);
var mapBase3 = ROTATIONAL_SURFACE(base3);
var baseFinale3 = MAP(mapBase3)(domain);

var baseAltaColorata = COLOR([138/255, 43/255, 226/255, 1])(baseFinale3);
DRAW(baseAltaColorata);

var controlliBase = [[0,0,0],[3,0,0]];
var cerchioBase = BEZIER(S0)(controlliBase);
var cerchioMap = ROTATIONAL_SURFACE(cerchioBase);
var baseFinale = MAP(cerchioMap)(lDomain);
var baseFinaleColorata =  COLOR([138/255, 43/255, 226/255, 1])(baseFinale);

DRAW(baseFinaleColorata);

var controlliViso = [[2,0,5],[2.2,0,5.2],[2.3,0,5.4],[2.4,0,5.6],[2.5,0,5.8],[2.6,0,6],[2.6,0,6],[2.5,0,6.2],[2.4,0,6.4],
[2.3,0,6.6],[2.2,0,6.8],[2,0,7]];
var viso = BEZIER(S0)(controlliViso);
var visoMap = ROTATIONAL_SURFACE(viso);
var visoFinale = MAP(visoMap)(domain);
var visoFinaleColorato =  COLOR([238/255, 197/255, 145/255, 1])(visoFinale);
DRAW(visoFinaleColorato);

var controlliCapelli = [[3,0,6.8],[3,0,7.2],[3,0,7.6],[2.5,0,8],[2,0,8.4],[1,0,8.8],[0,0,9]];
var capelli = BEZIER(S0)(controlliCapelli);
var capelliMap = ROTATIONAL_SURFACE(capelli);
var capelliFinale = MAP(capelliMap)(domain);
var capelliFinaleColorato =  COLOR([0,0,0, 1])(capelliFinale);
DRAW(capelliFinaleColorato);


var controlliCapelli2 = [[0.5,0,8.8],[1,0,9],[1.5,0,9.2],[1.5,0,9.4],[1,0,9.6],[0.5,0,9.8],[0.1,0,10]];
var capelli2 = BEZIER(S0)(controlliCapelli2);
var capelli2Map = ROTATIONAL_SURFACE(capelli2);
var capelli2Finale = MAP(capelli2Map)(domain);
var capelli2FinaleColorato =  COLOR([0,0,0, 1])(capelli2Finale);
DRAW(capelli2FinaleColorato);

/* parte inferiore dei capelli */

var controlli1 = [[0,3,6.9],[-2.5,2.5,6.9],[-3,0,6.9],[-2.5,-2.5,6.9],[0,-3,6.9]];
var nodi1 = [0,0,0,1,2,3,3,3];
var c1 = NUBS(S0)(2)(nodi1)(controlli1);
var curva1 = MAP(c1)(domain1);
//DRAW(curva1);

var controlli2 = [[0,3,5.9],[-2.5,2.5,5.9],[-3,0,5.9],[-2.5,-2.5,5.9],[0,-3,5.9]];
var nodi2 = [0,0,0,1,2,3,3,3];
var c2 = NUBS(S0)(2)(nodi2)(controlli2);
var curva2 = MAP(c2)(domain1);
//DRAW(curva2);

var controlli3 = [[0,3,5],[-2.5,2.5,5],[-3,0,5],[-2.5,-2.25,5],[0,-3,5]];
var nodi3 = [0,0,0,1,2,3,3,3];
var c3 = NUBS(S0)(2)(nodi3)(controlli3);
var curva3 = MAP(c3)(domain1);
//DRAW(curva3);

var curveBambola = [c3,c2,c1];
var nodiBambola1 = [0,0,0,1,1,1];
var bambola = NUBS(S1)(2)(nodiBambola1)(curveBambola);
var mappaBambola = MAP(bambola)(domain2);
var bambolaColorata = COLOR([0,0,0, 1])(mappaBambola);
DRAW(bambolaColorata);

var controlliOcchio1 = [[2.6,-0.5,6.5],[2,-1.25,6.7],[1.4,-2.5,6.5]];
var nodiOcchio1 = [0,0,0,1,1,1];
var occhio1 = NUBS(S0)(2)(nodiOcchio1)(controlliOcchio1);
var mappaOcchio = MAP(occhio1)(domain1);
var occhioColorato = COLOR([0, 0, 0, 1])(mappaOcchio);
DRAW(mappaOcchio);

var controlliOcchio2 = [[2.6,0.5,6.5],[2,1.25,6.7],[1.4,2.5,6.5]];
var nodiOcchio2 = [0,0,0,1,1,1];
var occhio2 = NUBS(S0)(2)(nodiOcchio2)(controlliOcchio2);
var mappaOcchio2 = MAP(occhio2)(domain1);
var occhioColorato2 = COLOR([0, 0, 0, 1])(mappaOcchio2);
DRAW(mappaOcchio2);


var controlliBocca = [[2.4,1,5.5], [2,0,5], [2,0,5], [2.4,-1,5.5]];
var nodiBocca = [0,0,0,1,2,2,2];
var cBocca = NUBS(S0)(2)(nodiBocca)(controlliBocca);
var curvaBocca = MAP(cBocca)(domain1);
var curvaBoccaColorata = COLOR([255/255, 36/255,0,1])(curvaBocca);
DRAW(curvaBoccaColorata);
