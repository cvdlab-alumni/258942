/*var c1 = [[1,3,0],[3,5,0],[6,5,0],[8,3,0],[8,0,0],[6,-2,0],[3,-2,0],[0,1,0],[1,3,0]];
var x1 = BEZIER(S0)(c1);
DRAW(x1);*/
// altezza 8 lunghezza 10
var domain1 = INTERVALS(1)(15);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);


//parte bassa
var controls1 = [[0.5,1,0],[1,0,9],[1,0,9],[1.5,1,0],[1.5,1,0],[0.5,1,0]];
var knots1 = [0,0,0,1,2,3,4,4,4];
var c1 = NUBS(S0)(2)(knots1)(controls1);
var curve1 = MAP(c1)(domain1);
DRAW(curve1);

//parte alta
var controls2 = [[0,0.5,0],[1,0,9],[1,0,9],[0.5,1,0],[0.5,1,0],[0,0.5,0]];
var knots2 = [0,0,0,1,2,3,4,4,4];
var c2 = NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(domain1);
DRAW(curve2);

//parte alta
var controls3 = [[1.5,1,0],[1,0,9],[1,0,9],[2,0.5,0],[2,0.5,0],[1.5,1,0]];
var knots3 = [0,0,0,1,2,3,4,4,4];
var c3 = NUBS(S0)(2)(knots3)(controls3);
var curve3 = MAP(c3)(domain1);
DRAW(curve3);

//parte alta
var controls4 = [[2,0.5,0],[1,0,9],[1,0,9],[2,0,0],[2,0,0],[2,0.5,0]];
var knots4 = [0,0,0,1,2,3,4,4,4];
var c4 = NUBS(S0)(2)(knots4)(controls4);
var curve4 = MAP(c4)(domain1);
DRAW(curve4);

//parte alta
var controls5 = [[2,-0.5,0],[1,0,9],[1,0,9],[1.5,-1,0],[1.5,-1,0],[2,-0.5,0]];
var knots5 = [0,0,0,1,2,3,4,4,4];
var c5 = NUBS(S0)(2)(knots5)(controls5);
var curve5 = MAP(c5)(domain1);
DRAW(curve5);

//parte alta
var controls6 = [[2,0,0],[1,0,9],[1,0,9],[2,-0.5,0],[2,-0.5,0],[2,0,0]];
var knots6 = [0,0,0,1,2,3,4,4,4];
var c6 = NUBS(S0)(2)(knots6)(controls6);
var curve6 = MAP(c6)(domain1);
DRAW(curve6);

//parte alta
var controls7 = [[1.5,-1,0],[1,0,9],[1,0,9],[0.5,-1,0],[0.5,-1,0],[1.5,-1,0]];
var knots7 = [0,0,0,1,2,3,4,4,4];
var c7 = NUBS(S0)(2)(knots7)(controls7);
var curve7 = MAP(c7)(domain1);
DRAW(curve7);

//parte alta
var controls8 = [[0.5,-1,0],[1,0,9],[1,0,9],[0,-0.5,0],[0,-0.5,0],[0.5,-1,0]];
var knots8 = [0,0,0,1,2,3,4,4,4];
var c8 = NUBS(S0)(2)(knots8)(controls8);
var curve8 = MAP(c8)(domain1);
DRAW(curve8);

//parte alta
var controls9 = [[0,-0.5,0],[1,0,9],[1,0,9],[0,0,0],[0,0,0],[0,-0.5,0]];
var knots9 = [0,0,0,1,2,3,4,4,4];
var c9 = NUBS(S0)(2)(knots9)(controls9);
var curve9 = MAP(c9)(domain1);
DRAW(curve9);

//parte alta
var controls10 = [[0,0,0],[1,0,9],[1,0,9],[0,0.5,0],[0,0.5,0],[0,0,0]];
var knots10 = [0,0,0,1,2,3,4,4,4];
var c10 = NUBS(S0)(2)(knots10)(controls10);
var curve10 = MAP(c10)(domain1);
DRAW(curve10);

//parte elica
var controls11 = [[0,0.5,0],[0.5,1,0],[1.5,1,0], [2,0.5,0],[2,0,0],[2,-0.5,0],[1.5,-1,0],[0.5,-1,0],[0,-0.5,0],[0,0.5,0]]; // controls + 2 + 1
var knots11 = [0,0,0,1,2,3,4,5,6,7,8,8,8];
var c11 = NUBS(S0)(2)(knots11)(controls11);
var curve11 = MAP(c11)(domain1);

var b1 = BEZIER(S1)([c10,c2,c1,c3,c4,c6,c5,c7,c8,c9]);
var body = MAP(b1)(domain2);
DRAW(body);


