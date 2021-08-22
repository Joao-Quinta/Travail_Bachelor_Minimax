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
/*
test = [
    'digraph  {',
    '    a [fillcolor="#FFFFFF", label="main"]',
    '    a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> j1 -> j2 -> j3 -> l -> 2',
    '    a -> o -> p',
    '    a -> d -> f',
    '    node [style="filled"]',
    '    1 [fillcolor="#FFFFFF", label="true"]',
    '    a -> 1 -> 2',
    '    a -> a2',
    '    1 -> i',
    '}'
]
test = test.join('')
console.log(test)
z = d3.select("#graphSVG").graphviz().height(windowSize).width(windowSize).fit(true).renderDot(test);
console.log(z)



test = [
    'digraph  {',
    '    a [color="#800000", fillcolor="#d62728", label="main"]',
    '    b [color="#006400", fillcolor="#228B22", label="main2"]',
    '    node [style="filled"]',
    '    1 [color="#800000", fillcolor="#d62728", label="true"]',
    '    2 [color="#006400", fillcolor="#228B22", label="false"]',
    '}'
]
test = test.join('')
console.log(test)
z = d3.select("#graphSVG").graphviz().height(windowSize).width(windowSize).fit(true).renderDot(test);
console.log(z)
*/

