var windowMin = 500;
var windowMax = 600;
var fullWindowWidth = document.documentElement.clientWidth;
var fullWindowHeight = document.documentElement.clientHeight;
var halfWindowWidth = Math.floor(fullWindowWidth/2);
var smallerSide = Math.min(fullWindowHeight, halfWindowWidth);
var windowSize = Math.floor(70 * smallerSide / 100);
var leftMargin = Math.floor((halfWindowWidth - windowSize) / 2);
var topMargin = Math.floor((fullWindowHeight - windowSize) / 2);
var leftMarginPer = Math.floor(100 * leftMargin / halfWindowWidth);
var topMarginPer = Math.floor(100 * topMargin / fullWindowHeight);
var fieldSize = windowSize/10;

const idFirstDiv = "wholeScreen";
const idLeftDiv = "checkersBoard";
const idRightDiv = "minMaxTree";
const idLeftDivPaTurn = "paragrapheCoup";
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
//d3.select("#graphSVG").graphviz().renderDot('digraph  {a -> b -> c -> d -> e -> f}');