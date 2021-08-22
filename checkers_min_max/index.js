var windowMin = 500;
var windowMax = 600;
var fullWindowWidth = document.documentElement.clientWidth;
var fullWindowHeight = document.documentElement.clientHeight;
var halfWindowWidth = Math.floor(fullWindowWidth/2);
var smallerSide = Math.min(fullWindowHeight, halfWindowWidth);
var windowSize = Math.floor(80 * smallerSide / 100);
var leftMargin = Math.floor((halfWindowWidth - windowSize) / 2);
var topMargin = Math.floor((fullWindowHeight - windowSize) / 2);
var leftMarginPer = Math.floor(100 * leftMargin / halfWindowWidth);
var topMarginPer = Math.floor(100 * topMargin / fullWindowHeight);
var fieldSize = windowSize/10;
var nodeCounter = 0;

const color1 = "#cccccc";
const color2 = "#5286bf";
const idFirstDiv = "wholeScreen";
const idLeftDiv = "checkersBoard";
const idRightDiv = "minMaxTree";
const idLeftDivPaTurn = "paragrapheCoup";
const idRightDivStat = "paragrapheStat";
const idCheckersSVG = "cherckersSVG";
const leftSideBackgroundColor = "#99ccff";

test1();
test2();
/*
for(var i = 0; i < 10; i++){
    var rng = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    console.log(0 + " - TO -> " + 10 + " => " + rng);
}
*/

function launchGame(){
    var draughtsGame = new Draughts();
    buildScreen();
    buildCheckersBoard(draughtsGame);
}

launchGame();

var test2 = "amaxb,c.bmind,e.cminf,g.dmax2.emax-1.fmax4.gmax-2";
var test1 = test2.split('.');
console.log(test1)
var nodes = [];
while (test1.length > 0){
    var current = test1.pop();
    console.log(current)
    console.log(current[0] + '   ::   ' + current.slice(1, 3) + '   ::   ' + current.slice(4,));
    
}