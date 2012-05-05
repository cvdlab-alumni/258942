var domain1 = INTERVALS(1)(15);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

//stabilizer 1
var controlsSt1 = [[0,0,0],[3,0,0],[3,0,0],[3,1.5,0],[3,1.5,0],[1.5,3,0],[1.5,3,0],[0,3,0],[0,3,0],[0,0,0]]; // controls + 2 + 1
var knotsSt1 = [0,0,0,1,2,3,4,5,6,7,8,8,8];
var cSt1= NUBS(S0)(2)(knotsSt1)(controlsSt1);
var stabiliz1 = MAP(cSt1)(domain1);
DRAW(stabiliz1);


//stabilizer 2
var controlsSt2 = [[0,0,-0.5],[3,0,-0.5],[3,0,-0.5],[3,1.5,-0.5],[3,1.5,-0.5],[1.5,3,-0.5],[1.5,3,-0.5],[0,3,-0.5],[0,3,-0.5],[0,0,-0.5]]; // controls + 2 + 1
var knotsSt2 = [0,0,0,1,2,3,4,5,6,7,8,8,8];
var cSt2 = NUBS(S0)(2)(knotsSt2)(controlsSt2);
var stabiliz2 = MAP(cSt2)(domain1);
DRAW(stabiliz2);

var stDx = BEZIER(S1)([cSt1,cSt2]);
var stabilizerDx = MAP(stDx)(domain2);
DRAW(stabilizerDx);

