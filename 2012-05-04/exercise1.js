var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);


var p0 = [[10,0,0],[0,1.5,0],[0,0,0]];
var p1 = p0.map(function (p) {return [p[0], p[1], p[2]+2]});
var p2 = p1.map(function (p) {return [p[0], p[1], p[2]+2]});
var p3 = p2.map(function (p) {return [p[0], p[1], p[2]+2]});
var p4 = p3.map(function (p) {return [p[0], p[1], p[2]+2]});
var p5 = p4.map(function (p) {return [p[0], p[1], p[2]+2]});
var p6 = p5.map(function (p) {return [p[0], p[1], p[2]+2]});
var p7 = p6.map(function (p) {return [p[0], p[1], p[2]+2]});
var p8 = p7.map(function (p) {return [p[0], p[1], p[2]+2]});
var p9 = p8.map(function (p) {return [p[0], p[1], p[2]+2]});
var p10 = p9.map(function (p) {return [p[0], p[1], p[2]+2]});
var c0 = BEZIER(S0)(p0);
var c1 = BEZIER(S0)(p1);
var c2 = BEZIER(S0)(p2);
var c3 = BEZIER(S0)(p3);
var c4 = BEZIER(S0)(p4);
var c5 = BEZIER(S0)(p5);
var c6 = BEZIER(S0)(p6);
var c7 = BEZIER(S0)(p7);
var c8 = BEZIER(S0)(p8);
var c9 = BEZIER(S0)(p9);
var c10 = BEZIER(S0)(p10);

var controls = [c0,c1,c2,c3,c4,c5,c6, c7, c8, c9, c10];
var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));

DRAW(curves);

var wing = BEZIER(S1)(controls);
var surf = MAP(wing)(domain2);
var surfFinal = COLOR([0.33,0.33,0.33])(surf);
DRAW(surfFinal);



var p11 = [[10,-8,0],[0,-6,0],[0,-8,0]];
var p12 = p11.map(function (p) {return [p[0], p[1], p[2]+2]});
var p13 = p12.map(function (p) {return [p[0], p[1], p[2]+2]});
var p14 = p13.map(function (p) {return [p[0], p[1], p[2]+2]});
var p15 = p14.map(function (p) {return [p[0], p[1], p[2]+2]});
var p16 = p15.map(function (p) {return [p[0], p[1], p[2]+2]});
var p17 = p16.map(function (p) {return [p[0], p[1], p[2]+2]});
var p18 = p17.map(function (p) {return [p[0], p[1], p[2]+2]});
var p19 = p18.map(function (p) {return [p[0], p[1], p[2]+2]});
var p20 = p19.map(function (p) {return [p[0], p[1], p[2]+2]});
var p21 = p20.map(function (p) {return [p[0], p[1], p[2]+2]});

var c11 = BEZIER(S0)(p11);
var c12 = BEZIER(S0)(p12);
var c13 = BEZIER(S0)(p13);
var c14 = BEZIER(S0)(p14);
var c15 = BEZIER(S0)(p15);
var c16 = BEZIER(S0)(p16);
var c17 = BEZIER(S0)(p17);
var c18 = BEZIER(S0)(p18);
var c19 = BEZIER(S0)(p19);
var c20 = BEZIER(S0)(p20);
var c21 = BEZIER(S0)(p21);
var controls2 = [c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21];
var curves2 = STRUCT(CONS(AA(MAP)(controls2))(domain1));

DRAW(curves2);

var wing = BEZIER(S1)(controls2);
var surf2 = MAP(wing)(domain2);
var surfFinal2 = COLOR([0.33,0.33,0.33])(surf2);
DRAW(surfFinal2);

var x1 = [[2.5,0.8,5],[2.5,-7,5],[1,0,0],[-1,0,0]];
var x2 = [[2.5,0.8,5],[2.5,-7,5],[-1,0,0],[1,0,0]];
var x3 = [[2.5,0.8,5],[2.5,-7,5],[0,0,1],[0,0,-1]];
var x4 = [[2.5,0.8,5],[2.5,-7,5],[0,0,-1],[0,0,1]];
var z1 = CUBIC_HERMITE(S0)(x1);
var z2 = CUBIC_HERMITE(S0)(x2);
var z3 = CUBIC_HERMITE(S0)(x3);
var z4 = CUBIC_HERMITE(S0)(x4);

var controls3 = [z1,z2,z3,z4];

var palo1 = BEZIER(S1)(controls3);

var palo1final = COLOR([219/255, 219/255, 112/255]) (MAP(palo1)(domain2));

var x5 = [[2.5,0.8,15],[2.5,-7,15],[1,0,0],[-1,0,0]];
var x6 = [[2.5,0.8,15],[2.5,-7,15],[-1,0,0],[1,0,0]];
var x7 = [[2.5,0.8,15],[2.5,-7,15],[0,0,1],[0,0,-1]];
var x8 = [[2.5,0.8,15],[2.5,-7,15],[0,0,-1],[0,0,1]];
var z5 = CUBIC_HERMITE(S0)(x5);
var z6 = CUBIC_HERMITE(S0)(x6);
var z7 = CUBIC_HERMITE(S0)(x7);
var z8 = CUBIC_HERMITE(S0)(x8);
var controls4 = [z5, z6, z7, z8];
var palo2 = BEZIER(S1)(controls4);
var palo2final = COLOR([219/255, 219/255, 112/255]) (MAP(palo2)(domain2));

var x9 = [[7.5,0.3,15],[7.5,-7.5,15],[1,0,0],[-1,0,0]];
var x10 = [[7.5,0.3,15],[7.5,-7.5,15],[-1,0,0],[1,0,0]];
var x11 = [[7.5,0.3,15],[7.5,-7.5,15],[0,0,1],[0,0,-1]];
var x12 = [[7.5,0.3,15],[7.5,-7.5,15],[0,0,-1],[0,0,1]];
var z9 = CUBIC_HERMITE(S0)(x9);
var z10 = CUBIC_HERMITE(S0)(x10);
var z11 = CUBIC_HERMITE(S0)(x11);
var z12 = CUBIC_HERMITE(S0)(x12);
var controls5 = [z9, z10, z11, z12];
var palo3 = BEZIER(S1)(controls5);
var palo3final = COLOR([219/255, 219/255, 112/255]) (MAP(palo3)(domain2));

var x13 = [[7.5,0.3,5],[7.5,-7.5,5],[1,0,0],[-1,0,0]];
var x14 = [[7.5,0.3,5],[7.5,-7.5,5],[-1,0,0],[1,0,0]];
var x15 = [[7.5,0.3,5],[7.5,-7.5,5],[0,0,1],[0,0,-1]];
var x16 = [[7.5,0.3,5],[7.5,-7.5,5],[0,0,-1],[0,0,1]];
var z13 = CUBIC_HERMITE(S0)(x13);
var z14 = CUBIC_HERMITE(S0)(x14);
var z15 = CUBIC_HERMITE(S0)(x15);
var z16 = CUBIC_HERMITE(S0)(x16);
var controls6 = [z13, z14, z15, z16];
var palo4 = BEZIER(S1)(controls6);
var palo4final = COLOR([219/255, 219/255, 112/255]) (MAP(palo4)(domain2));


var pali = STRUCT([palo1final, palo2final, palo3final, palo4final]);

DRAW(pali);












