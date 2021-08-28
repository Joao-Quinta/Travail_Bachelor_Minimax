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
    buildScreen();
    buildCheckersBoard(draughtsGame);
}

launchGame();

/*

*/