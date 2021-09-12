var windowMin = 500;
var windowMax = 600;
var fullWindowWidth = document.documentElement.clientWidth;
var fullWindowHeight = document.documentElement.clientHeight;
var footAndHeaderHeight = Math.floor(fullWindowHeight * 0.1);
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
const idMinMaxTree = "minMaxTreeGraph";
const leftSideBackgroundColor = "#99ccff";
const leftSideHeaderSVG = "leftSideHeaderSVG";
const leftSideFooterSVG = "leftSideFooterSVG";
const rightSideHeaderSVG = "rightSideHeaderSVG";
const rightSideFooterSVG = "rightSideFooterSVG";
const leftSideHeaderSVGTop = "leftSideHeaderSVGTop"
const leftSideHeaderSVGBot = "leftSideHeaderSVGBot"

test1();
test2();

function launchGame(){
    d3.select('#wholeScreen')
        .remove();
        
    var draughtsGame = new Draughts();
    //console.log(draughtsGame.moves())
    //draughtsGame.move(draughtsGame.moves()[1])
    buildScreen();
    buildCheckersBoard(draughtsGame);
}

launchGame();


/*
d3.select('#wholeScreen')
    .remove();
var draughtsGame = new Draughts();
var moves = [];

for (var i = 0 ; i < 25 ; i ++){
    var minV = 0;
    var maxV = draughtsGame.moves().length - 1;
    var rng = Math.floor(Math.random() * (maxV - minV + 1)) + minV;
    moves.push(rng);
    draughtsGame.move(draughtsGame.moves()[rng]);
}

console.log(moves)
buildScreen();
buildCheckersBoard(draughtsGame);*/
/* 

var test1 = [2,0,7,9,1,0,0,0,0,2,6,0,0,0,4,7,0,0,1,6,0,0,9,1,3];
var test2 = [2,0,2,0,7,3,4,4,0,7,4,0,2,7,1,0,0,7,8,5,10,10,3,11,9];
var test3 = [6,7,7,5,4,2,1,0,0,0,0,8,4,5,3,1,6,8,0,0,6,4,7,12,2];
var test4 = [7,4,0,1,0,0,0,7,6,2,3,9,3,0,1,2,0,1,11,4,1,0,5,0,8];
var test5 = [3,2,2,0,0,5,1,0,0,0,0,6,4,4,8,10,0,0,0,0,1,7,5,8,9];
test = test5;
console.log(test.length)

for (var i = 0; i < test.length; i++){
    draughtsGame.move(draughtsGame.moves()[test[i]])
}

buildScreen();
buildCheckersBoard(draughtsGame);*/
