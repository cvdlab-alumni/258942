// DOMAINS

var domain1 = INTERVALS(1)(100);
var domain2 = DOMAIN([[0,1],[0,1]])([100,100]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([25,25,1]);

// COLORS - All colors are normalized.

var mattForestGreen = [34/255, 139/255, 34/255, 1];
var mattLimeGreen = [50/255, 205/255, 50/255, 1];

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
// DOMAINS

var domain1 = INTERVALS(1)(10);
var domain2 = DOMAIN([[0,1],[0,1]])([10,10]);
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([15,15,1]);
var domain1S = INTERVALS(1)(5);
var domainCircle = DOMAIN([[0,1],[0,2*PI]])([15,15]);


// COLORS - All colors are normalized.

var mattLightYellow = [255/255, 215/255, 0,1];
var mattGold = [218/255, 165/255, 32/255,1];
var mattBurgundy = [139/255, 0, 0, 1];
var mattCoralRed = [240/255,128/255, 128/255, 1];
var mattIndianRed = [205/255, 92/255, 92/255, 1];
var mattOrange = [255/255, 165/255, 0, 1];
var mattDarkOrange = [255/255, 140/255, 0, 1];
var mattForestGreen = [34/255, 139/255, 34/255, 1];
var mattLimeGreen = [50/255, 205/255, 50/255, 1];
var mattAquamarine = [127/255, 255/255, 212/255, 1];
var mattBurlywood = [255/255, 218/255, 185/255, 1];
var mattBisque = [255/255, 218/255, 185/255, 1];
var mattDarkOrchid = [153/255, 50/255, 204/255, 1];
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

//----------------------------------------------- GOLGI APPARATUS PART 1 -------------------------------------------------------------------

var points15 = [[467.215087890625,153.9337615966797,0],[470.1879577636719,151.23114013671875,-20],[471.5392761230469,150.2852325439453,-20],[475.5931701660156,147.31236267089844,0]]
var points16 = [[470.0528259277344,158.93359375,0],[473.16082763671875,156.36610412597656,+16],[475.9985656738281,154.2040252685547,+16],[481.40380859375,150.6906280517578,0]]
var points17 = [[475.18780517578125,163.5280303955078,0],[476.9444885253906,161.90646362304688,-20],[481.2686767578125,158.7984619140625,-20],[486.80902099609375,155.42019653320312,0]]
var points18 = [[478.7012023925781,167.7170867919922,0],[480.593017578125,166.5009002685547,-82],[485.59283447265625,162.58212280273438,-82],[491.5386047363281,159.0687255859375,0]]
var points19 = [[483.5658874511719,173.25743103027344,0],[484.7820739746094,172.4466552734375,+10],[491.5386047363281,167.98733520507812,+10],[497.0789489746094,165.28472900390625,0]]
var points20 = [[487.89007568359375,178.66265869140625,0],[489.1062316894531,177.7167510986328,-82],[500.05181884765625,172.1763916015625,-82],[502.4841613769531,170.96022033691406,0]]
var points21 = [[490.9980773925781,184.06788635253906,0],[492.889892578125,183.12196350097656,-10],[499.37615966796875,179.4734344482422,-10],[506.6732177734375,176.3654327392578,0]]
var points22 = [[494.511474609375,190.0136260986328,0],[496.2681579589844,189.20285034179688,-93],[502.6192932128906,186.63536071777344,-93],[511.6730651855469,183.93275451660156,0]]
var points23 = [[497.3492126464844,196.09449768066406,0],[500.45721435546875,194.87832641601562,+20],[506.6732177734375,192.8513641357422,+20],[514.7810668945312,190.2838897705078,0]]
var points24 = [[500.45721435546875,202.44564819335938,0],[505.727294921875,200.55381774902344,-15],[508.8352966308594,199.60789489746094,-15],[516.5377807617188,197.44581604003906,0]]
var points25 = [[502.4841613769531,208.12112426757812,0],[507.889404296875,206.3644256591797,-82],[511.1325378417969,205.14825439453125,-82],[517.483642578125,203.9320831298828,0]]
var points26 = [[506.267822265625,212.0399169921875,0],[511.1325378417969,211.093994140625,-8],[512.4838256835938,210.68861389160156,-8],[517.483642578125,209.74269104003906,0]]

var curveExGolgiApparatusPart1 = createCurveSurface([468.9717712402344,149.47445678710938+1,0],[512.8892211914062,212.71556091308594-1,0], [points15, points16, points17, points18, points19, points20, points21, points22, points23, points24, points25, points26]);
DRAW(COLOR(mattForestGreen)(MAP(curveExGolgiApparatusPart1)(domain3)));

var points27 = [[471.4041442871094,156.36610412597656,0],[472.89056396484375,154.87966918945312,-2],[473.56622314453125,154.2040252685547,-2],[474.91754150390625,152.9878387451172,0]]
var points28 = [[473.43109130859375,158.663330078125,0],[474.37701416015625,157.58229064941406,-4],[476.6742248535156,155.55532836914062,-4],[478.1606750488281,154.2040252685547,0]]
var points29 = [[477.0796203613281,161.50106811523438,0],[478.1606750488281,160.42002868652344,-5],[481.40380859375,158.122802734375,-5],[482.8902282714844,157.04176330566406,0]]
var points30 = [[481.9443359375,166.3657684326172,0],[483.1604919433594,165.69012451171875,-6],[486.80902099609375,163.2577667236328,-6],[488.70086669921875,161.77133178710938,0]]
var points31 = [[486.67388916015625,170.82508850097656,0],[488.29547119140625,169.74403381347656,-7],[490.9980773925781,167.98733520507812,-7],[492.889892578125,166.9062957763672,0]]
var points32 = [[489.5116271972656,174.06822204589844,0],[491.1332092285156,172.98716735839844,-8],[493.2952880859375,171.9061279296875,-8],[495.7276306152344,170.55482482910156,0]]
var points33 = [[492.349365234375,179.4734344482422,0],[493.8358154296875,178.93292236328125,-9],[499.24102783203125,175.82492065429688,-9],[500.59234619140625,175.01412963867188,0]]
var points34 = [[495.7276306152344,185.0137939453125,0],[497.7546081542969,183.66249084472656,-8],[501.53826904296875,181.50039672851562,-8],[504.5111389160156,180.1490936279297,0]]
var points35 = [[498.2951354980469,190.5541534423828,0],[501.26800537109375,188.79745483398438,-7],[503.7003479003906,187.58128356933594,-7],[507.4840087890625,185.2840576171875,0]]
var points36 = [[500.86260986328125,195.68911743164062,0],[504.2408752441406,193.9324188232422,-6],[505.727294921875,193.2567596435547,-6],[510.1866149902344,190.9595489501953,0]]
var points37 = [[502.4841613769531,200.68894958496094,0],[506.267822265625,198.52685546875,-5],[508.429931640625,197.8511962890625,-5],[512.4838256835938,195.82424926757812,0]]
var points38 = [[504.2408752441406,205.14825439453125,0],[507.4840087890625,203.9320831298828,-4],[510.0514831542969,202.5807647705078,-4],[513.8351440429688,201.22946166992188,0]]
var points39 = [[506.9434814453125,207.98599243164062,0],[509.7812194824219,207.3103485107422,-2],[512.0784301757812,206.2292938232422,-2],[513.9702758789062,205.55364990234375,0]]


var curveInGolgiApparatusPart1 = createCurveSurface([470.9987487792969,153.6634979248047+1,0],[511.1325378417969,208.66165161132812-1,0], [points27, points28, points29, points30, points31, points32, points33, points34, points35, points36, points37, points38, points39]);
createBezierS2([curveExGolgiApparatusPart1, curveInGolgiApparatusPart1], mattLimeGreen);

//----------------------------------------------------------------GOLGI APPARATUS PART 2-------------------------------------------------------------------------------

var points40 = [[426.540771484375,138.7991180419922,0],[430.0541687011719,135.5559844970703,-20],[434.91888427734375,132.17771911621094,-20],[438.5674133300781,130.01564025878906,0]]
var points41 = [[429.1082458496094,143.3935546875,0],[432.75677490234375,141.23147583007812,+20],[438.4322814941406,137.31268310546875,+20],[444.6482849121094,134.06954956054688,0]]
var points42 = [[434.64862060546875,148.25827026367188,0],[438.1620178222656,145.96104431152344,-100],[443.2969665527344,142.31251525878906,-100],[449.5129699707031,138.6639862060547,0]]
var points43 = [[440.18896484375,152.9878387451172,0],[445.3239440917969,150.28521728515625,+20],[448.83734130859375,147.85287475585938,+20],[454.918212890625,144.3394775390625,0]]
var points44 = [[448.70220947265625,157.4471435546875,0],[451.9453430175781,155.14991760253906,-80],[455.7289733886719,153.1229705810547,-80],[459.51263427734375,151.09600830078125,0]]
var points45 = [[454.377685546875,162.1767120361328,0],[456.9451599121094,160.14974975585938,+20],[459.64776611328125,158.66331481933594,+20],[464.1070861816406,156.50123596191406,0]]
var points46 = [[458.7018737792969,166.3657684326172,0],[461.67474365234375,164.87933349609375,+20],[464.2422180175781,162.5821075439453,+20],[467.4853515625,160.55514526367188,0]]
var points47 = [[463.2962951660156,170.8250732421875,0],[465.3232727050781,169.74403381347656,-50],[468.4312744140625,167.85220336914062,-80],[471.9446716308594,165.9603729248047,0]]
var points48 = [[467.4853515625,175.6897735595703,0],[470.3230895996094,173.66281127929688,-100],[471.5392761230469,172.58177185058594,-100],[474.78240966796875,170.2845458984375,0]]
var points49 = [[471.1338806152344,179.3383026123047,0],[473.02569580078125,177.85186767578125,-40],[474.64727783203125,177.04107666015625,-40],[478.8363037109375,174.60873413085938,0]]
var points50 = [[473.16082763671875,182.58143615722656,0],[475.7283020019531,181.09500122070312,+20],[477.3498840332031,180.14907836914062,+20],[481.2686767578125,178.2572479248047,0]]
var points51 = [[476.1336975097656,185.41917419433594,0],[478.4309387207031,184.7435302734375,-50],[480.7281494140625,183.52734375,-50],[483.8361511230469,181.63551330566406,0]]
var points52 = [[479.6470947265625,188.5271759033203,0],[481.8092041015625,187.44613647460938,-20],[483.0253601074219,186.50021362304688,-20],[484.7820739746094,185.41917419433594,0]]
var curveExGolgiApparatusPart2 = createCurveSurface([430.4595642089844,132.31285095214844+1,0],[482.8902282714844,188.9325714111328-1,0], [points40, points41, points42, points43, points44, points45, points46, points47, points48, points49, points50, points51, points52]);
DRAW(COLOR(mattForestGreen)(MAP(curveExGolgiApparatusPart2)(domain3)));

var points53 = [[430.4595642089844,138.5288543701172,0],[433.29730224609375,136.6370391845703,-20],[435.45941162109375,135.5559844970703,-20],[438.0268859863281,133.93441772460938,0]]
var points54 = [[432.48651123046875,142.71791076660156,0],[434.64862060546875,141.23147583007812,-20],[439.918701171875,138.39373779296875,-20],[443.0267028808594,136.3667755126953,0]]
var points55 = [[437.2160949707031,146.36643981933594,0],[439.6484375,145.01513671875,-20],[443.1618347167969,143.12330627441406,-20],[447.21575927734375,140.42068481445312,0]]
var points56 = [[442.7564392089844,150.42034912109375,0],[445.5942077636719,149.2041778564453,-20],[447.48602294921875,147.31234741210938,-20],[450.5940246582031,145.28538513183594,0]]
var points57 = [[448.43194580078125,153.66348266601562,0],[450.7291564941406,151.9067840576172,-20],[452.3507080078125,150.82574462890625,-20],[453.9722900390625,149.6095733642578,0]]
var points58 = [[451.6750793457031,155.55531311035156,0],[453.9722900390625,154.20401000976562,-20],[454.7830810546875,153.52835083007812,-20],[456.2695007324219,152.5824432373047,0]]
var points59 = [[454.7830810546875,158.2579345703125,0],[456.2695007324219,157.582275390625,-20],[457.7559509277344,156.771484375,-20],[458.97210693359375,156.09584045410156,0]]
var points60 = [[457.8910827636719,160.96054077148438,0],[458.97210693359375,160.28488159179688,-20],[460.32342529296875,159.47410583496094,-20],[461.40447998046875,158.79844665527344,0]]
var points61 = [[460.72882080078125,163.52801513671875,0],[461.26934814453125,162.9875030517578,-20],[462.6206359863281,162.1767120361328,-20],[463.9719543457031,161.50106811523438,0]]
var points62 = [[463.1611633300781,166.2306365966797,0],[463.9719543457031,165.5549774169922,-20],[465.1881408691406,164.87933349609375,-20],[465.9989013671875,164.33880615234375,0]]
var points63 = [[465.1881408691406,168.66297912597656,0],[466.2691650390625,167.98733520507812,-20],[466.8096923828125,167.58193969726562,-20],[467.8907470703125,166.90628051757812,0]]
var points64 = [[467.3502197265625,171.0953369140625,0],[468.8366394042969,170.1494140625,-20],[469.3771667480469,169.47377014160156,-20],[470.0528259277344,169.06837463378906,0]]
var points65 = [[469.3771667480469,173.79794311523438,0],[470.7284851074219,173.39254760742188,-20],[471.6744079589844,172.98716735839844,-20],[472.48516845703125,172.31150817871094,0]]
var points66 = [[471.5392761230469,176.3654327392578,0],[472.89056396484375,175.5546417236328,-20],[473.56622314453125,175.2843780517578,-20],[474.51214599609375,174.8789825439453,0]]
var points67 = [[473.56622314453125,178.5275115966797,0],[474.51214599609375,177.85186767578125,-20],[475.7283020019531,177.31134033203125,-20],[476.2688293457031,176.77081298828125,0]]
var points68 = [[474.91754150390625,180.28421020507812,0],[475.9985656738281,179.7436981201172,-20],[476.8093566894531,179.2031707763672,-20],[478.0255432128906,178.7977752685547,0]]
var points69 = [[476.4039611816406,182.31117248535156,0],[477.4850158691406,181.90577697753906,-20],[478.4309387207031,181.50038146972656,-20],[479.511962890625,180.95986938476562,0]]
var points70 = [[478.0255432128906,183.6624755859375,0],[478.8363037109375,183.257080078125,-20],[479.7822265625,182.85169982910156,-20],[480.32275390625,182.44630432128906,0]]
var points71 = [[478.5652770996094,184.66648864746094,0],[479.21112060546875,184.4942626953125,-20],[479.7708435058594,184.2789764404297,-20],[480.8042297363281,183.89146423339844,0]]
var curveInGolgiApparatusPart2 = createCurveSurface([432.7698974609375,134.91896057128906+1,0],[480.4324645996094,185.45928955078125-1,0], [points53, points54, points55, points56, points57, points58, points59, points60, points61, points62, points63, points64, points65, points66, points67, points68, points69, points70, points71]);
createBezierS2([curveExGolgiApparatusPart2, curveInGolgiApparatusPart2], mattLimeGreen);

//---------------------------------------------------------GOLGI APPARATUS PART 3 ----------------------------------------------------------------------------------------------

var points72 = createControls([[482.74884033203125,195.28854370117188,0],[485.3885192871094,194.27328491210938,0],[487.3175048828125,193.35955810546875,0],[489.652587890625,192.75039672851562,0]], -20)
var points73 = createControls([[484.1701965332031,198.2327880859375,0],[486.09918212890625,197.72515869140625,0],[489.44952392578125,196.2022705078125,0],[491.7846374511719,194.9839630126953,0]], +30)
var points74 = createControls([[485.9976806640625,202.8014373779297,0],[488.0281677246094,202.19227600097656,0],[492.49530029296875,200.66940307617188,0],[495.23651123046875,199.85719299316406,0]], -80)
var points75 = createControls([[487.82513427734375,206.9639892578125,0],[490.0586853027344,206.55789184570312,0],[495.1349792480469,204.9334716796875,0],[497.6731262207031,203.918212890625,0]], +30)
var points76 = createControls([[489.5510559082031,212.3448486328125,0],[491.9876708984375,211.63417053222656,0],[497.87615966796875,209.90823364257812,0],[500.61737060546875,208.89297485351562,0]], -110)
var points77 = createControls([[490.972412109375,217.62417602539062,0],[494.1197204589844,216.9134979248047,0],[500.21124267578125,215.18756103515625,0],[503.7646484375,214.17230224609375,0]], -70)
var points78 = createControls([[492.49530029296875,222.70045471191406,0],[494.9319152832031,222.2943572998047,0],[502.3432922363281,220.36537170410156,0],[506.9119567871094,219.35011291503906,0]],+30)
var points79 = createControls([[493.3075256347656,228.08131408691406,0],[495.9471740722656,227.6752166748047,0],[505.795166015625,226.35537719726562,0],[508.63787841796875,225.84774780273438,0]], -80)
var points80 = createControls([[494.1197204589844,233.66522216796875,0],[496.353271484375,233.56370544433594,0],[507.31805419921875,232.9545440673828,0],[509.5516052246094,232.75149536132812,0]], -100)
var points81 = createControls([[494.52581787109375,238.5384521484375,0],[497.06396484375,238.3354034423828,0],[505.3890686035156,238.3354034423828,0],[509.34857177734375,237.92930603027344,0]], +30)
var points82 = createControls([[494.32275390625,243.41168212890625,0],[497.87615966796875,243.61473083496094,0],[504.0692138671875,243.31015014648438,0],[508.7394104003906,243.41168212890625,0]], -80)
var points83 = createControls([[495.23651123046875,247.2696533203125,0],[499.3990478515625,247.37118530273438,0],[503.0539855957031,247.0666046142578,0],[507.5210876464844,247.1681365966797,0]], -50)
var points84 = createControls([[496.7593688964844,250.6199951171875,0],[500.0082092285156,250.6199951171875,0],[501.6325988769531,250.5184783935547,0],[504.6783752441406,250.72152709960938,0]], -20)
var curveExGolgiApparatusPart3 = createCurveSurface([484.0686950683594,193.5,0],[500.92193603515625,250,0], [points72, points73, points74, points75, points76, points77, points78, points79, points80, points81, points82, points83, points84]);
DRAW(COLOR(mattForestGreen)(MAP(curveExGolgiApparatusPart3)(domain3)));

var points116 = createControls([[486.4919128417969,198.13888549804688,0],[487.02874755859375,197.70831298828125,0],[487.5454406738281,197.49302673339844,0],[488.2343444824219,197.2346954345703,0]], -20)
var points117 = createControls([[487.9715576171875,201.3240966796875,0],[488.91748046875,200.918701171875,0],[489.728271484375,200.37818908691406,0],[490.8092956542969,199.97279357910156,0]], -20)
var points118 = createControls([[489.4580078125,204.70236206054688,0],[490.268798828125,204.29696655273438,0],[491.6200866699219,203.89158630371094,0],[492.9714050292969,203.48619079589844,0]], -20)
var points119 = createControls([[490.9444274902344,208.21575927734375,0],[491.8903503417969,207.81036376953125,0],[493.2416687011719,207.2698516845703,0],[494.86322021484375,206.4590606689453,0]], -20)
var points120 = createControls([[492.5660095214844,212.53993225097656,0],[493.7821960449219,211.99942016601562,0],[496.21453857421875,211.05349731445312,0],[497.7009582519531,210.3778533935547,0]], -20)
var points121 = createControls([[494.18756103515625,216.86412048339844,0],[495.67401123046875,216.45872497558594,0],[497.9712219238281,215.64794921875,0],[500.4035949707031,214.7020263671875,0]], -20)
var points122 = createControls([[494.99835205078125,221.59368896484375,0],[497.4306945800781,220.6477813720703,0],[500.4035949707031,219.4315948486328,0],[502.4305419921875,218.75595092773438,0]], -20)
var points123 = createControls([[496.07940673828125,226.32325744628906,0],[498.2414855957031,225.64761352539062,0],[502.025146484375,224.56655883789062,0],[504.1872253417969,223.8909149169922,0]], -20)
var points124 = createControls([[496.61993408203125,231.18795776367188,0],[498.9171447753906,230.91769409179688,0],[502.9710693359375,230.10691833496094,0],[505.4034118652344,229.83665466308594,0]], -20)
var points125 = createControls([[497.02532958984375,236.99856567382812,0],[499.5928039550781,236.5931854248047,0],[503.646728515625,236.0526580810547,0],[505.9439392089844,236.0526580810547,0]], -20)
var points126 = createControls([[497.16046142578125,241.99839782714844,0],[499.8630676269531,241.86326599121094,0],[503.9169921875,241.593017578125,0],[506.2142028808594,241.1876220703125,0]], -20)
var points127 = createControls([[497.70098876953125,245.6469268798828,0],[499.8630676269531,245.6469268798828,0],[503.7818603515625,245.1063995361328,0],[505.8088073730469,244.83615112304688,0]], -20)
var points128 = createControls([[498.7820129394531,247.67388916015625,0],[501.2143859863281,247.53875732421875,0],[503.5115966796875,247.40362548828125,0],[504.8628845214844,247.26849365234375,0]], -20)
var curveInGolgiApparatusPart3 = createCurveSurface([486.7553405761719,196.3242645263672+1,0],[501.2143249511719,249.0251922607422-1,0], [points116, points117, points118, points119, points120, points121, points122, points123, points124, points125, points126, points127, points128])
createBezierS2([curveExGolgiApparatusPart3, curveInGolgiApparatusPart3], mattLimeGreen);



//---------------------------------------------------------------------------GOLGI APPARATUS PART 4-----------------------------------------------------------------------------------

var points129 = createControls([[406.5442199707031,140.69677734375,0],[409.8957214355469,138.3028564453125,0],[413.0078125,135.908935546875,0],[414.44415283203125,134.4725799560547,0]], -20)
var points130 = createControls([[408.9381408691406,145.484619140625,0],[412.2896423339844,143.80886840820312,0],[414.9229431152344,141.89373779296875,0],[419.7107849121094,138.3028564453125,0]], -40)
var points131 = createControls([[414.20477294921875,150.99063110351562,0],[417.3168640136719,149.07550048828125,0],[421.62591552734375,146.20278930664062,0],[425.4562072753906,143.33009338378906,0]], -80)
var points132 = createControls([[419.9501953125,156.4966583251953,0],[422.58349609375,153.86334228515625,0],[427.371337890625,150.51185607910156,0],[430.2440490722656,148.11793518066406,0]], -45)
var points133 = createControls([[425.6955871582031,160.32693481445312,0],[429.0470886230469,157.93301391601562,0],[432.6379699707031,155.53909301757812,0],[435.5106506347656,153.6239471435547,0]], +10)
var points134 = createControls([[430.96221923828125,164.635986328125,0],[434.0743103027344,162.96023559570312,0],[437.6651916503906,161.2845001220703,0],[440.53790283203125,158.8905792236328,0]], -90)
var points135 = createControls([[435.98944091796875,168.94503784179688,0],[439.580322265625,166.79051208496094,0],[442.2136535644531,165.11477661132812,0],[445.32574462890625,162.2420654296875,0]], -100)
var points136 = createControls([[440.53790283203125,173.4934844970703,0],[443.4106140136719,171.8177490234375,0],[446.7620849609375,169.18443298339844,0],[449.6347961425781,166.55111694335938,0]], +40)
var points137 = createControls([[446.0439147949219,178.0419464111328,0],[449.3954162597656,176.36619567871094,0],[452.2680969238281,173.97227478027344,0],[455.3802185058594,172.53591918945312,0]], -100)
var points138 = createControls([[452.50750732421875,184.02674865722656,0],[455.3802185058594,181.87220764160156,0],[458.9710998535156,180.4358673095703,0],[462.5619812011719,178.52072143554688,0]], -80)
var points139 = createControls([[458.731689453125,190.49032592773438,0],[462.8013610839844,188.5751953125,0],[465.4346618652344,187.37823486328125,0],[468.5467834472656,185.94187927246094,0]], -60)
var points140 = createControls([[463.0407409667969,196.95391845703125,0],[466.1528625488281,195.7569580078125,0],[468.7861633300781,193.84181213378906,0],[473.5740051269531,191.44789123535156,0]], -100)
var points141 = createControls([[467.5892028808594,202.938720703125,0],[470.2225036621094,201.9811553955078,0],[473.5740051269531,200.78419494628906,0],[477.883056640625,198.86904907226562,0]], -80)
var points142 = createControls([[470.9407043457031,209.64169311523438,0],[475.0103454589844,207.9659423828125,0],[478.3618469238281,207.0083770751953,0],[482.6708984375,205.572021484375,0]], -60)
var points143 = createControls([[473.5740051269531,216.82345581054688,0],[476.44671630859375,215.62649536132812,0],[481.47393798828125,213.95074462890625,0],[484.5860290527344,212.99317932128906,0]], +40)
var points144 = createControls([[475.0103454589844,225.92034912109375,0],[478.3618469238281,225.68096923828125,0],[482.9103088378906,224.723388671875,0],[487.6981506347656,223.52642822265625,0]], -30)
var points145 = createControls([[475.9679260253906,234.299072265625,0],[479.5588073730469,233.82029724121094,0],[485.5436096191406,232.8627166748047,0],[489.1344909667969,231.9051513671875,0]], -40)
var points146 = createControls([[476.6861267089844,240.28387451171875,0],[480.5163879394531,239.56570434570312,0],[485.3042297363281,238.84751892089844,0],[489.8526916503906,237.6505584716797,0]], -50)
var points147 = createControls([[475.4891662597656,246.02928161621094,0],[480.03759765625,246.02928161621094,0],[486.2618103027344,246.02928161621094,0],[491.2890319824219,245.55050659179688,0]], -60)
var points148 = createControls([[474.7709655761719,254.64739990234375,0],[480.99517822265625,253.68983459472656,0],[486.7405700683594,252.97164916992188,0],[492.4859924316406,252.0140838623047,0]], -50)
var points149 = createControls([[474.7709655761719,260.87158203125,0],[480.2770080566406,259.9140319824219,0],[487.2193603515625,259.43524169921875,0],[494.6405334472656,258.7170715332031,0]], -40)
var points150 = createControls([[477.404296875+3,267.0957946777344+4,0],[482.9103088378906,267.0957946777344+5,0],[489.8526916503906,266.37762451171875+5,0],[492.96478271484375-3,266.1382141113281+4,0]], -20)
var curveExGolgiApparatusPart4 = createCurveSurface([411,139,0],[485.30419921875,266.5+1,0], [points129, points130, points131, points132, points133, points134, points135, points136, points137, points138, points139, points140,
  points141, points142, points143, points144, points145, points146, points147, points148, points149, points150]);
DRAW(COLOR(mattForestGreen)(MAP(curveExGolgiApparatusPart4)(domain3)));

var points85 = createControls([[410.42730712890625+2,143.07171630859375-1,0],[412.40576171875+1,141.81271362304688,0],[414.5640869140625,140.01412963867188,0],[416.0029296875-4,139.29469299316406-2,0]],-20)
var points86 = createControls([[414.5640869140625,147.748046875,0],[416.3626708984375,146.48904418945312,0],[418.3410949707031,145.0501708984375,0],[420.3195495605469,143.2515869140625,0]], -20)
var points87 = createControls([[419.060546875,151.16537475585938,0],[421.03900146484375,149.90635681152344,0],[423.3771667480469,148.10777282714844,0],[424.9958801269531,147.0286102294922,0]], -20)
var points88 = createControls([[423.3771667480469,155.1222686767578,0],[424.8160400390625,153.14381408691406,0],[426.43475341796875,151.8848114013672,0],[428.23333740234375,150.62579345703125,0]], -20)
var points89 = createControls([[427.33404541015625,157.46043395996094,0],[428.7729187011719,156.0215606689453,0],[430.03192138671875,154.94239807128906,0],[431.83050537109375,153.32366943359375,0]], -20)
var points90 = createControls([[431.111083984375,160.5180206298828,0],[432.3700866699219,158.8992919921875,0],[433.2693786621094,157.64028930664062,0],[435.0679931640625,156.74099731445312,0]], -20)
var points91 = createControls([[434.5284118652344,163.21591186523438,0],[435.96728515625,162.13674926757812,0],[437.0464172363281,160.5180206298828,0],[438.6651611328125,159.6187286376953,0]], -20)
var points92 = createControls([[438.3054504394531,166.81307983398438,0],[439.7442932128906,165.7339324951172,0],[441.0033264160156,165.01449584960938,0],[442.6220397949219,163.57562255859375,0]], -20)
var points93 = createControls([[441.7227478027344,170.050537109375,0],[442.8019104003906,168.79153442382812,0],[444.0609130859375,167.3526611328125,0],[445.6796569824219,166.09364318847656,0]], -20)
var points94 = createControls([[445.3199157714844,173.64772033691406,0],[446.5789489746094,172.38870239257812,0],[447.6580810546875,171.30955505371094,0],[449.2768249511719,169.51097106933594,0]], -20)
var points95 = createControls([[449.2768249511719,176.8851776123047,0],[449.9962463378906,175.8060302734375,0],[451.614990234375,174.54701232910156,0],[453.23370361328125,172.92828369140625,0]], -20)
var points96 = createControls([[452.56683349609375,180.67404174804688,0],[453.88665771484375,179.65879821777344,0],[455.4095458984375,178.74505615234375,0],[457.74462890625,177.0191192626953,0]], -20)
var points97 = createControls([[456.6278381347656,184.8365936279297,0],[457.4400634765625,183.71981811523438,0],[458.9629211425781,182.5015106201172,0],[461.3995361328125,181.0801544189453,0]], -20)
var points98 = createControls([[460.0797119140625,188.18695068359375,0],[461.5010681152344,187.07015991210938,0],[463.63311767578125,185.8518524169922,0],[465.3590393066406,184.8365936279297,0]], -20)
var points99 = createControls([[462.61785888671875,191.43576049804688,0],[464.1407470703125,190.42050170898438,0],[466.0697326660156,189.30372619628906,0],[467.8971862792969,188.08541870117188,0]], -20)
var points100 = createControls([[464.95294189453125,195.09068298339844,0],[466.1712646484375,194.3800048828125,0],[469.01397705078125,192.75559997558594,0],[470.9429626464844,191.63880920410156,0]], -20)
var points101 = createControls([[468.50634765625,200.26849365234375,0],[470.2322692871094,199.15170288085938,0],[472.05975341796875,198.23797607421875,0],[474.1917724609375,197.22271728515625,0]], -20)
var points102 = createControls([[471.7551574707031,204.83714294433594,0],[473.5826416015625,203.9234161376953,0],[475.917724609375,203.3142547607422,0],[477.1360168457031,202.60357666015625,0]], -20)
var points103 = createControls([[473.37957763671875,209.3042755126953,0],[475.3085632324219,208.6951141357422,0],[477.44061279296875,207.78138732910156,0],[479.26806640625,207.07070922851562,0]], -20)
var points104 = createControls([[475.20703125,213.0607147216797,0],[476.5268859863281,212.55308532714844,0],[478.6589050292969,211.8424072265625,0],[481.09552001953125,211.03021240234375,0]], -20)
var points105 = createControls([[476.3238220214844,216.61412048339844,0],[478.45587158203125,215.9034423828125,0],[479.978759765625,215.49732971191406,0],[482.5168762207031,215.0912322998047,0]], -20)
var points106 = createControls([[477.8467102050781,220.4720916748047,0],[479.77569580078125,220.4720916748047,0],[481.80621337890625,220.26904296875,0],[483.5321350097656,219.96446228027344,0]], -20)
var points107 = createControls([[478.2528076171875,225.04074096679688,0],[480.9939880371094,224.6346435546875,0],[482.82147216796875,224.33006286621094,0],[484.14129638671875,224.12701416015625,0]], -20)
var points108 = createControls([[478.6589050292969,229.40634155273438,0],[481.298583984375,229.40634155273438,0],[482.9230041503906,229.2032928466797,0],[485.0550231933594,229.10177612304688,0]], -20)
var points109 = createControls([[478.9635009765625,234.381103515625,0],[480.8924865722656,234.381103515625,0],[482.9230041503906,234.27957153320312,0],[485.46112060546875,234.27957153320312,0]], -20)
var points110 = createControls([[478.45587158203125,240.9802703857422,0],[480.587890625,240.8787384033203,0],[483.0245056152344,240.8787384033203,0],[486.679443359375,240.8787384033203,0]], -20)
var points111 = createControls([[478.2528076171875,246.6656951904297,0],[479.978759765625,246.6656951904297,0],[483.938232421875,246.3611297607422,0],[487.3901062011719,246.3611297607422,0]], -20)
var points112 = createControls([[477.6436462402344,252.6557159423828,0],[479.0650329589844,252.6557159423828,0],[486.7809753417969,252.45266723632812,0],[488.7099609375,252.45266723632812,0]], -20)
var points113 = createControls([[478.1512756347656,257.93505859375,0],[480.1817932128906,257.93505859375,0],[486.0702819824219,257.73199462890625,0],[490.02978515625,257.5289306640625,0]], -20)
var points114 = createControls([[477.5421447753906,262.40216064453125,0],[482.3138427734375,262.40216064453125,0],[485.5626525878906,262.40216064453125,0],[489.52215576171875,261.9960632324219,0]], -20)
var points115 = createControls([[480.79095458984375,265.75250244140625,0],[483.3291015625,265.8540344238281,0],[485.96875,265.8540344238281,0],[488.7099609375,265.95556640625,0]], -20)
var curveInGolgiApparatusPart4 = createCurveSurface([413.94512939453125,143,0],[484.59295654296875,265,0], [points85, points86, points87,points88, points89, points90, points91, points92, points93, points94, points95, points96, points97, points98, points99, points100, points101, points102, points103, points104, points105, points106, points107, points108, points109, points110, points111, points112, points113, points114, points115]);
createBezierS2([curveExGolgiApparatusPart4, curveInGolgiApparatusPart4], mattLimeGreen);

//-----------------------------------------------------------------------GOLGI APPARATUS PART 5------------------------------------------------------------------------------

var points151 = createControls([[392.65948486328125,156.7360382080078,0],[395.29278564453125,154.82090759277344,0],[398.1654968261719,152.18759155273438,0],[402.47454833984375,149.07550048828125,0]], -20)
var points152 = createControls([[396.48974609375,163.1996307373047,0],[400.08062744140625,160.56631469726562,0],[404.62908935546875,156.0178680419922,0],[408.4593505859375,152.6663818359375,0]], +30)
var points153 = createControls([[404.86846923828125,166.07232666015625,0],[408.69873046875,163.1996307373047,0],[411.0926513671875,159.60874938964844,0],[413.486572265625,157.21482849121094,0]], -100)
var points154 = createControls([[413.9653625488281,168.46624755859375,0],[417.3168640136719,165.35415649414062,0],[418.5138244628906,163.67840576171875,0],[420.6683349609375,162.4814453125,0]], -45)
var points155 = createControls([[420.6683349609375,173.97227478027344,0],[422.8228759765625,172.7753143310547,0],[424.9773864746094,171.0995635986328,0],[427.3713073730469,168.94503784179688,0]], -80)
var points156 = createControls([[427.3713073730469,180.91464233398438,0],[430.004638671875,178.99951171875,0],[431.9197692871094,177.32376098632812,0],[434.0743103027344,174.92984008789062,0]], -90)
var points157 = createControls([[432.1591491699219,186.66004943847656,0],[435.0318603515625,185.4630889892578,0],[437.6651916503906,183.0691680908203,0],[441.7348327636719,180.43585205078125,0]], -160)
var points158 = createControls([[436.9469909667969,193.12364196777344,0],[440.5378723144531,190.96910095214844,0],[443.41058349609375,189.05397033691406,0],[446.7620849609375,187.3782196044922,0]], +40)
var points159 = createControls([[441.2560729980469,199.8266143798828,0],[444.1287536621094,198.3902587890625,0],[448.6772155761719,196.23573303222656,0],[453.2256774902344,193.6024169921875,0]], -100)
var points160 = createControls([[446.0439147949219,206.2902069091797,0],[449.8741760253906,204.1356658935547,0],[453.4650573730469,202.69932556152344,0],[457.77410888671875,200.7841796875,0]], -90)
var points161 = createControls([[450.35296630859375,212.27500915527344,0],[452.74688720703125,210.83865356445312,0],[457.0559387207031,208.9235076904297,0],[461.1256103515625,207.24777221679688,0]], -80)
var points162 = createControls([[454.6620178222656,218.9779815673828,0],[457.77410888671875,216.5840606689453,0],[461.8437805175781,215.38710021972656,0],[464.95587158203125,213.4719696044922,0]], +20)
var points163 = createControls([[456.3377685546875,224.48399353027344,0],[459.92864990234375,223.7658233642578,0],[464.2377014160156,221.85069274902344,0],[468.0679626464844,219.69615173339844,0]], -100)
var points164 = createControls([[459.2104797363281,230.22940063476562,0],[463.9983215332031,229.99002075195312,0],[468.7861633300781,229.03244018554688,0],[471.1800842285156,228.79306030273438,0]], -80)
var points165 = createControls([[459.2104797363281,236.93238830566406,0],[463.2801208496094,237.6505584716797,0],[468.307373046875,237.17178344726562,0],[471.4194641113281,237.17178344726562,0]], -60)
var points166 = createControls([[456.8165588378906,241.24143981933594,0],[461.6044006347656,243.63536071777344,0],[466.3922424316406,243.874755859375,0],[471.4194641113281,244.59292602539062,0]], +40)
var points167 = createControls([[455.38018798828125,249.6201629638672,0],[460.6468200683594,250.33834838867188,0],[466.15283203125,250.57772827148438,0],[473.09521484375,251.0565185546875,0]], -30)
var points168 = createControls([[454.6620178222656,257.5201110839844,0],[460.16802978515625,257.5201110839844,0],[466.15283203125,258.4776611328125,0],[470.7012939453125,260.1534118652344,0]], -40)
var points169 = createControls([[456.5771484375,263.5049133300781,0],[461.1256103515625,264.9412536621094,0],[465.4346618652344,265.1806640625,0],[469.74371337890625,265.1806640625,0]], -20)
var curveExGolgiApparatusPart5 = createCurveSurface([397.6170349121094,153.5118408203125-3,0],[461.8437805175781,267.81396484375-3,0], [points151, points152, points153, points154, points155, points156, points157, points158, points159, points160, points161, points162, points163, points164, points165, points166, points167, points168, points169])
DRAW(COLOR(mattForestGreen)(MAP(curveExGolgiApparatusPart5)(domain3)));

var points170 = createControls([[396.48974609375,156.97543334960938,0],[397.68670654296875,154.82090759277344,0],[399.3624572753906,153.6239471435547,0],[401.7563781738281,152.18759155273438,0]], -20)
var points171 = createControls([[398.4048767089844,160.0875244140625,0],[401.0382080078125,158.89056396484375,0],[403.6715087890625,157.4542236328125,0],[406.7835998535156,155.2996826171875,0]], -20)
var points172 = createControls([[404.1502990722656,162.96023559570312,0],[407.50177001953125,161.76327514648438,0],[409.1775207519531,160.8057098388672,0],[411.5714416503906,159.36935424804688,0]], -20)
var points173 = createControls([[410.1351013183594,165.5935516357422,0],[412.5290222167969,164.8753662109375,0],[413.7259826660156,163.43902587890625,0],[417.07745361328125,162.2420654296875,0]], -20)
var points174 = createControls([[415.64111328125,168.7056427001953,0],[417.5562438964844,167.0299072265625,0],[418.7532043457031,166.07232666015625,0],[419.91668701171875,165.1094207763672,0]], -20)
var points175 = createControls([[420.52691650390625,171.8981475830078,0],[421.5185241699219,171.36419677734375,0],[422.73895263671875,170.37258911132812,0],[424.2645263671875,169.3809814453125,0]], -20)
var points176 = createControls([[425.5612487792969,175.9408721923828,0],[426.24774169921875,175.4832000732422,0],[427.4681701660156,174.79669189453125,0],[428.53607177734375,174.03392028808594,0]], -20)
var points177 = createControls([[431.05322265625,181.35658264160156,0],[431.96856689453125,180.44125366210938,0],[432.6550598144531,179.9073028564453,0],[433.4941101074219,179.06825256347656,0]], -20)
var points178 = createControls([[435.7061767578125,186.16207885742188,0],[437.15545654296875,185.6281280517578,0],[438.0707702636719,185.0941925048828,0],[439.36749267578125,184.40768432617188,0]], -20)
var points179 = createControls([[439.8251647949219,191.3489532470703,0],[440.9693298339844,190.66246032714844,0],[442.9525451660156,189.59457397460938,0],[443.94415283203125,188.90806579589844,0]], -20)
var points180 = createControls([[442.79998779296875,195.01028442382812,0],[443.94415283203125,194.47634887695312,0],[445.77484130859375,193.56101989746094,0],[446.9952697753906,192.87451171875,0]], -20)
var points181 = createControls([[446.53759765625,200.1208953857422,0],[447.5292053222656,199.51068115234375,0],[449.0547790527344,198.51907348632812,0],[450.80914306640625,197.6800079345703,0]], -20)
var points182 = createControls([[449.20733642578125,204.54501342773438,0],[450.88543701171875,203.5533905029297,0],[452.7923889160156,202.56178283691406,0],[454.7756042480469,201.41761779785156,0]], -20)
var points183 = createControls([[452.4109802246094,209.7318878173828,0],[454.7756042480469,208.35888671875,0],[456.1485900878906,207.90122985839844,0],[458.28436279296875,206.6807861328125,0]], -20)
var points184 = createControls([[455.6146545410156,215.98666381835938,0],[457.14019775390625,215.0713348388672,0],[459.9624938964844,213.7746124267578,0],[462.0982666015625,212.7830047607422,0]], -20)
var points185 = createControls([[458.97088623046875,220.94471740722656,0],[460.267578125,220.1819305419922,0],[462.2508239746094,219.41915893554688,0],[464.7679748535156,218.27499389648438,0]], -20)
var points186 = createControls([[461.0303649902344,226.05531311035156,0],[462.93731689453125,225.2162628173828,0],[464.1577453613281,224.52976989746094,0],[465.9121398925781,223.76698303222656,0]], -20)
var points187 = createControls([[462.7847900390625,231.5473175048828,0],[464.2340393066406,231.08966064453125,0],[465.6833190917969,230.7845458984375,0],[466.8274841308594,230.47943115234375,0]], -20)
var points188 = createControls([[461.25921630859375,238.0309295654297,0],[462.7847900390625,237.95465087890625,0],[465.30194091796875,237.80209350585938,0],[468.3530578613281,237.80209350585938,0]], -20)
var points189 = createControls([[459.2760009765625,243.82803344726562,0],[462.2508239746094,243.82803344726562,0],[466.2935485839844,243.82803344726562,0],[469.34466552734375,243.67547607421875,0]], -20)
var points190 = createControls([[458.0555725097656,248.5572509765625,0],[460.5727233886719,248.40469360351562,0],[466.98004150390625,248.5572509765625,0],[469.573486328125,248.40469360351562,0]], -20)
var points191 = createControls([[457.0639343261719,254.81201171875,0],[459.58111572265625,254.58319091796875,0],[467.59027099609375,254.35435485839844,0],[469.8023376464844,254.43063354492188,0]], -20)
var points192 = createControls([[456.8351135253906,260.30401611328125,0],[460.2676086425781,260.30401611328125,0],[465.6833190917969,260.22772216796875,0],[469.1921081542969,260.4565734863281,0]], -20)
var points193 = createControls([[458.8183288574219,263.5839538574219,0],[461.4117736816406,263.8127746582031,0],[464.3865966796875,263.66021728515625,0],[466.8274841308594,263.73651123046875,0]], -20)
var curveInGolgiApparatusPart5 = createCurveSurface([398.0367431640625+3,153.5-1,0],[462.9236755371094,265.392333984375-3,0], [points170, points171, points172, points173, points174, points175, points176, points177, points178, points180, points181, points182, points183, points184, points185, points186, points187, points188, points189, points190, points191, points192, points193])
createBezierS2([curveInGolgiApparatusPart5, curveExGolgiApparatusPart5], mattLimeGreen);

//-------------------------------------------------------------------GOLGI APPARATUS PART 6--------------------------------------------------------------------------------------------------

var points194 = createControls([[384.4259948730469,172.25936889648438,0],[386.99346923828125,170.63780212402344,0],[390.3717346191406,167.9351806640625,0],[394.29052734375,165.36770629882812,0]], -20)
var points195 = createControls([[387.26373291015625,177.5294647216797,0],[391.5879211425781,174.0160675048828,0],[396.8580017089844,171.17831420898438,0],[401.72271728515625,168.2054443359375,0]], -80)
var points196 = createControls([[397.6687927246094,179.15103149414062,0],[401.72271728515625,176.8538055419922,0],[405.5063781738281,174.69171142578125,0],[409.8305358886719,172.12423706054688,0]], -60)
var points197 = createControls([[406.58740234375,183.34007263183594,0],[410.1007995605469,181.04286193847656,0],[413.07366943359375,179.15103149414062,0],[416.4519348144531,176.7186737060547,0]], +40)
var points198 = createControls([[411.5872497558594,188.20477294921875,0],[414.83038330078125,186.1778106689453,0],[417.8032531738281,184.96163940429688,0],[421.316650390625,182.79954528808594,0]], -100)
var points199 = createControls([[418.8843078613281,199.5557403564453,0],[424.1543884277344,197.52879333496094,0],[428.07318115234375,195.636962890625,0],[430.5055236816406,194.555908203125,0]], -120)
var points200 = createControls([[425.91107177734375,210.77159118652344,0],[429.1542053222656,208.6094970703125,0],[433.2081298828125,207.12306213378906,0],[436.7215270996094,204.42044067382812,0]], -80)
var points201 = createControls([[430.6406555175781,218.87942504882812,0],[434.2891845703125,217.2578582763672,0],[438.7485046386719,215.36602783203125,0],[442.8023986816406,213.3390655517578,0]], +20)
var points202 = createControls([[434.8297119140625,227.52777099609375,0],[438.4782409667969,226.0413360595703,0],[443.6131896972656,223.74412536621094,0],[448.613037109375,222.39280700683594,0]], -80)
var points203 = createControls([[437.1269226074219,235.63560485839844,0],[441.72137451171875,234.2843017578125,0],[448.613037109375,232.39247131347656,0],[452.66693115234375,231.58169555664062,0]], -100)
var points204 = createControls([[437.8025817871094,242.93267822265625,0],[441.04571533203125,242.79754638671875,0],[449.2886657714844,242.12188720703125,0],[454.15338134765625,242.12188720703125,0]], -120)
var points205 = createControls([[437.2620544433594,249.0135498046875,0],[442.2618713378906,248.87841796875,0],[448.072509765625,248.87841796875,0],[452.80206298828125,248.87841796875,0]], +20)
var points206 = createControls([[436.5863952636719,254.2836456298828,0],[439.82952880859375,254.4187774658203,0],[445.64013671875,254.68902587890625,0],[451.9913024902344,254.82415771484375,0]], -80)
var points207 = createControls([[436.9917907714844,258.6078186035156,0],[441.72137451171875,259.2834777832031,0],[445.0996398925781,259.1483459472656,0],[448.3427734375,258.8780822753906,0]], -20)
var curveExGolgiApparatusPart6 = createCurveSurface([386.89324951171875,166.71072387695312+1,0],[441.69775390625,261.9813537597656-2,0], [points194, points195, points196, points197, points198, points199, points200, points201, points202, points203, points204, points205, points206, points207]);
DRAW(COLOR(mattForestGreen)(MAP(curveExGolgiApparatusPart6)(domain3)));


var points208 = createControls([[388.22528076171875,172.60269165039062,0],[389.98199462890625,170.7108612060547,0],[392.4143371582031,169.08929443359375,0],[394.7115478515625,168.0082550048828,0]], -20)
var points209 = createControls([[392.1440734863281,176.3863525390625,0],[394.7115478515625,174.49452209472656,0],[397.2790222167969,172.46755981445312,0],[399.0357360839844,170.9811248779297,0]], -20)
var points210 = createControls([[398.7654724121094,177.06199645996094,0],[400.65728759765625,175.5755615234375,0],[402.14373779296875,174.35939025878906,0],[403.49505615234375,173.41346740722656,0]], -20)
var points211 = createControls([[404.0355529785156,179.08895874023438,0],[405.6571350097656,178.68356323242188,0],[406.4679260253906,177.33226013183594,0],[407.8192138671875,176.65660095214844,0]], -20)
var points212 = createControls([[408.494873046875,182.33209228515625,0],[410.38671875,181.52130126953125,0],[411.7380065917969,180.8456573486328,0],[413.4947204589844,180.3051300048828,0]], -20)
var points213 = createControls([[413.6298522949219,187.19679260253906,0],[415.65679931640625,186.25088500976562,0],[416.73785400390625,185.57522583007812,0],[418.3594055175781,184.89956665039062,0]], -20)
var points214 = createControls([[416.33245849609375,190.43992614746094,0],[417.6837463378906,190.03453063964844,0],[419.3053283691406,189.2237548828125,0],[421.06201171875,188.1427001953125,0]], -20)
var points215 = createControls([[419.9809875488281,196.25054931640625,0],[421.872802734375,195.03436279296875,0],[424.9808044433594,193.8181915283203,0],[425.7915954589844,193.4127960205078,0]], -20)
var points216 = createControls([[423.494384765625,200.57472229003906,0],[424.9808044433594,199.76393127441406,0],[426.8726501464844,198.95315551757812,0],[429.57525634765625,197.8721160888672,0]], -20)
var points217 = createControls([[426.6023864746094,205.57455444335938,0],[428.35906982421875,205.03402709960938,0],[431.0616760253906,203.95298767089844,0],[432.5481262207031,203.41246032714844,0]], -20)
var points218 = createControls([[430.5211486816406,211.65542602539062,0],[433.0886535644531,210.4392547607422,0],[434.98046875,210.0338592529297,0],[436.60205078125,209.08795166015625,0]], -20)
var points219 = createControls([[433.7642822265625,218.00656127929688,0],[436.1966552734375,217.06065368652344,0],[439.1695251464844,216.11473083496094,0],[441.06134033203125,215.303955078125,0]], -20)
var points220 = createControls([[436.60205078125,224.0874481201172,0],[439.5749206542969,223.0063934326172,0],[441.73699951171875,222.19561767578125,0],[444.0342102050781,221.38482666015625,0]], -20)
var points221 = createControls([[439.4397888183594,230.57371520996094,0],[441.46673583984375,230.03318786621094,0],[444.5747375488281,228.8170166015625,0],[447.547607421875,227.87109375,0]], -20)
var points222 = createControls([[440.79107666015625,237.87075805664062,0],[443.4936828613281,237.19509887695312,0],[445.7908935546875,236.7897186279297,0],[449.4394226074219,235.9789276123047,0]], -20)
var points223 = createControls([[440.65594482421875,243.81649780273438,0],[442.9531555175781,243.95162963867188,0],[446.8719482421875,244.08676147460938,0],[449.9799499511719,244.22189331054688,0]], -20)
var points224 = createControls([[439.98028564453125,250.1676483154297,0],[443.0882873535156,250.70816040039062,0],[447.1422119140625,251.24868774414062,0],[449.1691589355469,251.51895141601562,0]], -20)
var points225 = createControls([[439.16949462890625,255.3026123046875,0],[442.4126281738281,255.57286071777344,0],[444.4396057128906,255.97825622558594,0],[446.3314208984375,256.1134033203125,0]], -20)
var curveInGolgiApparatusPart6 = createCurveSurface([389.4247741699219,168.7126007080078+1,0],[442.0910339355469,258.9634094238281-2,0], [points208, points209, points210, points211, points212, points213, points214, points215, points216, points217, points218, points219, points220, points221, points222, points223, points224, points225]);
createBezierS2([curveExGolgiApparatusPart6, curveInGolgiApparatusPart6], mattLimeGreen);