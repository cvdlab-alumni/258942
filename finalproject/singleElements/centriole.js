// DOMAINS

var domain1 = INTERVALS(1)(100);
var domain2 = DOMAIN([[0,1],[0,1]])([100,100]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([25,25,1]);

// COLORS - All colors are normalized.

var mattAquamarine = [127/255, 255/255, 212/255, 1];
var mattDarkSeaGreen =[143/255, 188/255, 143/255, 0.8];
var mattLightSeaGreen = [32/255, 178/255, 170/255,1];


/* This function creates an array of knots used by the function nubs. The function takes as input an array of control points. It returns an array of knots. 

   INPUT - An array of points

   OUTPUT - An array of knots.

*/

function knots (point) {
  var k = 2; 
  var m =point.length;
  var n = (m + k + 1);
  var first = 1;
  var last = n - 3;

  var knots = [];

  for (var i = 0; i < 3; i++) {
     knots[i] = 0;
    };

  for (var i = 3; i < last; i++,first++) {
     knots[i] = first;

    };

  for (var i = last; i < n; i++) {
     knots[i] = first;
    };

  return knots;
};

/* This function creates a curve with the function Nubs. The function takes as input an array of control points. It returns to the curve. 

   INPUT - An array of points
   
   OUTPUT - A curve built with the function NUBS

*/

function createNubs (point) {
	
	var knots1 = knots(point);
	var c1 = NUBS(S0)(2)(knots1)(point);
  //var c1Map = MAP(c1)(domain1)
  //DRAW(c1Map)
		return c1;
}

/* This function creates a 1 grade Bezier curve. The function takes as input an array of curves. It returns to the Bezier curve. 

   INPUT - An array of curves

   OUTPUT - A 1 grade Bezier curve

*/

function createBezierS1(curves) {
  var b1 = BEZIER(S1)(curves);
  //var b1Map = MAP(b1)(domain2);
  //DRAW(b1Map)
  return b1;
}

/* This function creates a 2 grade Bezier curve. The function takes as input an array of curves and a color. It returns to the drawing of curves. 

   INPUT - An array of curves and a color

   OUTPUT - A 2 grade Bezier curve

*/

function createBezierS2 (curves, color) {
  var b1 = BEZIER(S2)(curves);
  var b1Map = MAP(b1)(domain3);
  return DRAW(COLOR(color)(b1Map));
}

/* This function takes an array as input and reverses it. It returns the reversed array. 
   
   INPUT - An array 

   OUTPUT - A reversed array 

*/

function reverseR(array) {
  var arrayReturn = [];
  var j = 0;
  for(var i = array.length-1; i>=0; i--) {
        
        arrayReturn[j] = array[i];
        j++;
  }
  return arrayReturn;
}

/* This function modifies the third element in an array. It takes in input an array of points and a quantity z. It returns to the modified array. 
 
   INPUT - An array of control points and a quatity z.

   OUTPUT - A modified array. 

*/

function modifyZ(points, z) {
  var pointsNew = [];
  pointsNew[0]=points[0];
  pointsNew[1] = points[1];
  pointsNew[2] = points[2]+z;
  return pointsNew;
}

/* This function creates a new array of control points that are modified. It takes in input and array of control points and a breadth. It returns the modified array.
 
   INPUT - An array of control points and a breadth.

   OUTPUT - A modified array. 

*/

function createControls(controls, breadth) {
  var controlsRet = [];
    controlsRet[0] = controls[0];
    controlsRet[1] = modifyZ(controls[1], breadth)
    controlsRet[2] = modifyZ(controls[2], breadth)
    controlsRet[3] = controls[3];
    return controlsRet; 
}

/* This function creates a 1 grade Bezier curve. It takes in input an initial point, a final point and an array of points. It returns the 1 grade Bezier curve. 
 
   INPUT - An initial point, a final point and an array of points.

   OUTPUT - A 1 grade Bezier curve. 

*/

function createCurveSurface(pointStart, pointFinal, points) {
  var nubs = [];
  nubs.push(pointStart);
  var j = 1;
  for(var i=0; i<points.length; i++) {
      nubs[j] = createNubs(points[i]);
      DRAW(nubs[j]);
      j++;
  }
  nubs.push(pointFinal);

  return createBezierS1(nubs);
    }

/* This function creates a 1 grade Bezier curve. It takes in input a final point and an array of points. It returns the 1 grade Bezier curve. 
 
   INPUT - A final point and an array of points.

   OUTPUT - A 1 grade Bezier curve. 

*/

  function createCurveSurface2(pointFinal, points) {
  var nubs = [];
 
  var j = 0;
  for(var i=0; i<points.length; i++) {
      nubs[j] = createNubs(points[i]);
      DRAW(nubs[j]);
      j++;
  }
  nubs.push(pointFinal);
  return createBezierS1(nubs);
    }

/* This function reverses the order of an array of points. It takes in input an array of control points. It returns to the modified array. 
 
   INPUT - An array of control points.

   OUTPUT - A modified array. 

*/

function reticulumTransformation(controls) {
  var arr = [];
    for(var i=0; i<controls.length; i++) {
    for(var j=0; j<3; j++) {
        var arr2 = [];
        arr2[j+2] = -(controls[i][j]);
        arr2[j+1] = controls[i][j+1];
        arr2[j] = controls[i][j+2];
        j+=3;
        arr.push(arr2);
       
    }
     
  }
  return arr;
}


/* This function translates an array of points. It takes in input an array of control points and three breadths for each coordinate of the Cartesian Plane. It returns to the modified array. 
 
   INPUT - An array of control points and three breadths.

   OUTPUT - A modified array. 

*/

function controlsPointTranslation(controls, dx, dy, dz) {
  var arr = [];
    for(var i=0; i<controls.length; i++) {
    for(var j=0; j<3; j++) {
        var arr2 = [];
        arr2[j] = controls[i][j]+dx;
        arr2[j+1] = controls[i][j+1]+dy;
        arr2[j+2] = controls[i][j+2]+dz;
        j+=3;
        arr.push(arr2);
       
    }
     
  }
  return arr;
}

/* This function modifies an array of points. It takes in input an array of control points. It returns to the modified array. 
 
   INPUT - An array of control points.

   OUTPUT - A modified array. 

*/

function controlsPointTransformation(controls) {
  var arr = [];
    for(var i=0; i<controls.length; i++) {
    for(var j=0; j<3; j++) {
        var arr2 = [];
        arr2[j] = controls[i][j+2];
        arr2[j+1] = controls[i][j];
        arr2[j+2] = (-1)*controls[i][j+1];
        j+=3;
        arr.push(arr2);
       
    }
     
  }
  return arr;
}


//--------------------------------------------------------------------------------------CENTRIOLE----------------------------------------------------------------------------------------------

var controlsCentrioleIn1 = [[332.4930725097656,452.826904296875,0],[333.27081298828125,452.9727478027344,0],[333.7812194824219,453.31298828125,0],[333.99993896484375,453.7261657714844,0],[334.1457824707031,454.5525207519531,0],[334.0485534667969,455.1844482421875,0],[333.6353759765625,455.5976257324219,0],[333.02777099609375,455.79205322265625,0],[331.9097595214844,455.9621887207031,0],[331.35076904296875,455.79205322265625,0],[330.9375915527344,455.4031677246094,0],[330.62164306640625,454.7469482421875,0],[330.7917785644531,453.75048828125,0],[331.0348205566406,453.2643737792969,0],[331.5209045410156,452.94842529296875,0],[332.1771240234375,452.8026123046875,0],[332.49139404296875,452.8263854980469,0]]
var nubsCentrioleIn1 = createNubs(controlsCentrioleIn1);
var controlsCentrioleEx1 = [[332.4687805175781,452.3894348144531,0],[333.4166564941406,452.5352478027344,0],[334.09716796875,452.9727478027344,0],[334.5346374511719,453.6046447753906,0],[334.6561584472656,454.5282287597656,0],[334.46173095703125,455.2573547363281,0],[333.829833984375,455.81634521484375,0],[333.0763854980469,456.2052307128906,0],[331.8854675292969,456.30242919921875,0],[331.1563415527344,456.1080017089844,0],[330.4515075683594,455.57330322265625,0],[330.2084655761719,454.7469482421875,0],[330.42718505859375,453.7261657714844,0],[330.8403625488281,452.94842529296875,0],[331.3993835449219,452.6567687988281,0],[332.1042175292969,452.4137268066406,0],[332.4444580078125,452.3894348144531,0]]
var nubsCentrioleEx1 = createNubs(controlsCentrioleEx1);
var controlsCentrioleIn1Under = [[332.4930725097656,452.826904296875,-36],[333.27081298828125,452.9727478027344,-36],[333.7812194824219,453.31298828125,-36],[333.99993896484375,453.7261657714844,-36],[334.1457824707031,454.5525207519531,-36],[334.0485534667969,455.1844482421875,-36],[333.6353759765625,455.5976257324219,-36],[333.02777099609375,455.79205322265625,-36],[331.9097595214844,455.9621887207031,-36],[331.35076904296875,455.79205322265625,-36],[330.9375915527344,455.4031677246094,-36],[330.62164306640625,454.7469482421875,-36],[330.7917785644531,453.75048828125,-36],[331.0348205566406,453.2643737792969,-36],[331.5209045410156,452.94842529296875,-36],[332.1771240234375,452.8026123046875,-36],[332.49139404296875,452.8263854980469,-36]]
var nubsCentrioleIn1Under = createNubs(controlsCentrioleIn1Under);
var controlsCentrioleEx1Under = [[332.4687805175781,452.3894348144531,-36],[333.4166564941406,452.5352478027344,-36],[334.09716796875,452.9727478027344,-36],[334.5346374511719,453.6046447753906,-36],[334.6561584472656,454.5282287597656,-36],[334.46173095703125,455.2573547363281,-36],[333.829833984375,455.81634521484375,-36],[333.0763854980469,456.2052307128906,-36],[331.8854675292969,456.30242919921875,-36],[331.1563415527344,456.1080017089844,-36],[330.4515075683594,455.57330322265625,-36],[330.2084655761719,454.7469482421875,-36],[330.42718505859375,453.7261657714844,-36],[330.8403625488281,452.94842529296875,-36],[331.3993835449219,452.6567687988281,-36],[332.1042175292969,452.4137268066406,-36],[332.4444580078125,452.3894348144531,-36]]

var nubsCentrioleEx1Under = createNubs(controlsCentrioleEx1Under);

var centriole1In = createBezierS1([nubsCentrioleIn1, nubsCentrioleIn1Under]);
var centriole1InMap = MAP(centriole1In)(domain2);

var centriole1Ex = createBezierS1([nubsCentrioleEx1, nubsCentrioleEx1Under]);
var centriole1ExMap = MAP(centriole1Ex)(domain2);
var centriole1 = BEZIER(S2)([centriole1In, centriole1Ex]);
var centriole1Map = MAP(centriole1)(domain3);
DRAW(COLOR(mattAquamarine)(centriole1Map));

var centriole2Map = T([0,1])([4,1])(centriole1Map)
DRAW(COLOR(mattAquamarine)(centriole2Map));

var centriole3Map = T([0,1])([8, 2])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole3Map));

var centriole4Map = T([0,1])([16, 5])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole4Map));

var centriole5Map = T([0,1])([19.5, 3])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole5Map));

var centriole6Map = T([0,1])([23.5, 1.5])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole6Map));

var centriole7Map = T([0,1])([32, -3])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole7Map));

var centriole8Map = T([0,1])([33, -6.5])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole8Map));

var centriole9Map = T([0,1])([34, -10])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole9Map));

var centriole10Map = T([0,1])([38, -17])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole10Map));

var centriole11Map = T([0,1])([36, -20])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole11Map));

var centriole12Map = T([0,1])([34, -23])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole12Map));

var centriole13Map = T([0,1])([35, -32])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole13Map));

var centriole14Map = T([0,1])([31.5, -34])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole14Map));

var centriole15Map = T([0,1])([28, -36])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole15Map));

var centriole16Map = T([0,1])([21, -42])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole16Map));

var centriole17Map = T([0,1])([17, -42])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole17Map));

var centriole18Map = T([0,1])([13, -42])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole18Map));

var centriole19Map = T([0,1])([2, -41])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole19Map));

var centriole20Map = T([0,1])([1, -37.5])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole20Map));

var centriole21Map = T([0,1])([-0.5, -34])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole21Map));

var centriole22Map = T([0,1])([-9, -28])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole22Map));

var centriole23Map = T([0,1])([-8, -24.5])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole23Map));

var centriole24Map = T([0,1])([-7, -21])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole24Map));

var centriole25Map = T([0,1])([-9, -13])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole25Map));

var centriole26Map = T([0,1])([-7, -10])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole26Map));

var centriole27Map = T([0,1])([-5, -7])(centriole1Map);
DRAW(COLOR(mattAquamarine)(centriole27Map));

var unionLine = SIMPLEX_GRID([
  [2],
  [1],
  REPLICA(8)([0.01, -4, 0.01])
]);
var unionLine1 = T([0,1,2])([343.59686279296875,451.5823974609375,-32])(unionLine);

var p1 = POLYLINE([[343.57257080078125-1.5,451.6553039550781+5,-4],[346.2946472167969+0.5,450.51300048828125+10,-4]]);
DRAW(p1);

DRAW(T([2])([-4])(p1));
DRAW(T([2])([-8])(p1));
DRAW(T([2])([-12])(p1));
DRAW(T([2])([-16])(p1));
DRAW(T([2])([-20])(p1));
DRAW(T([2])([-24])(p1));
DRAW(T([2])([-28])(p1));

var p2 = POLYLINE([[358.64129638671875-0.5,452.8705139160156+3,-4],[362.1411437988281+0.5,456.5891113281251-4,-4]]);
DRAW(p2);

DRAW(T([2])([-4])(p2));
DRAW(T([2])([-8])(p2));
DRAW(T([2])([-12])(p2));
DRAW(T([2])([-16])(p2));
DRAW(T([2])([-20])(p2));
DRAW(T([2])([-24])(p2));
DRAW(T([2])([-28])(p2));

var p3 = POLYLINE([[370.44915771484375+1.5,466.7430114746094-28.1,-4],[368.7023010253906-2,469.6221008300781-27.1,-4]]);
DRAW(p3);

DRAW(T([2])([-4])(p3));
DRAW(T([2])([-8])(p3));
DRAW(T([2])([-12])(p3));
DRAW(T([2])([-16])(p3));
DRAW(T([2])([-20])(p3));
DRAW(T([2])([-24])(p3));
DRAW(T([2])([-28])(p3));

var p4 = POLYLINE([[365.164306640625,481.4428405761719-51.6,0],[369.51214599609375,484.9516296386719-62,0]]);
DRAW(p4);
DRAW(T([2])([-4])(p4));
DRAW(T([2])([-8])(p4));
DRAW(T([2])([-12])(p4));
DRAW(T([2])([-16])(p4));
DRAW(T([2])([-20])(p4));
DRAW(T([2])([-24])(p4));
DRAW(T([2])([-28])(p4));

var p5 = POLYLINE([[353.32830810546875+2.3,493.5585632324219-81.2,-4],[358.7335205078125,493.6936950683594-76.4,-4]]);
DRAW(p5);
DRAW(T([2])([-4])(p5));
DRAW(T([2])([-8])(p5));
DRAW(T([2])([-12])(p5));
DRAW(T([2])([-16])(p5));
DRAW(T([2])([-20])(p5));
DRAW(T([2])([-24])(p5));
DRAW(T([2])([-28])(p5));

var p6 = POLYLINE([[337.92340087890625-3.5,494.369354248046-83,-4],[341.5719299316406+3,496.80169677734375-83,-4]]);
DRAW(p6);
DRAW(T([2])([-4])(p6));
DRAW(T([2])([-8])(p6));
DRAW(T([2])([-12])(p6));
DRAW(T([2])([-16])(p6));
DRAW(T([2])([-20])(p6));
DRAW(T([2])([-24])(p6));
DRAW(T([2])([-28])(p6));

var p7 = POLYLINE([[328.8696594238281+3,482.88323974609375-60.8,-4],[326.30218505859375-3.8,486.5317687988281-61.9,-4]]);
DRAW(p7);
DRAW(T([2])([-4])(p7));
DRAW(T([2])([-8])(p7));
DRAW(T([2])([-12])(p7));
DRAW(T([2])([-16])(p7));
DRAW(T([2])([-20])(p7));
DRAW(T([2])([-24])(p7));
DRAW(T([2])([-28])(p7));

var p8 = POLYLINE([[321.8428649902344+2,469.09991455078125-34.3,-4],[325.35626220703125,471.39715576171875-31,-4]]);
DRAW(p8);
DRAW(T([2])([-4])(p8));
DRAW(T([2])([-8])(p8));
DRAW(T([2])([-12])(p8));
DRAW(T([2])([-16])(p8));
DRAW(T([2])([-20])(p8));
DRAW(T([2])([-24])(p8));
DRAW(T([2])([-28])(p8));

var p9 = POLYLINE([[329.0047912597656-2,455.58685302734375-6.3,0],[330.761474609375+3,459.1002502441406-6.3,0]]);
DRAW(p9);
DRAW(T([2])([-4])(p9));
DRAW(T([2])([-8])(p9));
DRAW(T([2])([-12])(p9));
DRAW(T([2])([-16])(p9));
DRAW(T([2])([-20])(p9));
DRAW(T([2])([-24])(p9));
DRAW(T([2])([-28])(p9));