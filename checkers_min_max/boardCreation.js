//builds a screen with two divisions, each with an ID
function buildScreen(){    

    /*
    const idFirstDiv = "wholeScreen";
    const idLeftDiv = "checkersBoard";
    const idRightDiv = "minMaxTree";
    const idLeftDivPaTurn = "paragrapheCoup";
    const idCheckersSVG = "cherckersSVG";
    const leftSideBackgroundColor = "#99ccff";
    */

    //creat a division for the whole screen
    d3.select("body")
        .append("div")
        .attr("id", idFirstDiv);
    
    /*
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
    */

    //creats left division with id: chessBoard
    d3.select("#" + idFirstDiv)
        .append("div")
        .attr("id", idLeftDiv)
        .style("width", halfWindowWidth + "px")
        .style("height", fullWindowHeight + "px")
        .style("background",leftSideBackgroundColor)
        .style("float", "left");

    //creats right division with id: minMaxTree
    d3.select("#" + idFirstDiv)
        .append("div")
        .attr("id", idRightDiv)
        .style("margin-left", halfWindowWidth + "px")
        .style("width", halfWindowWidth + "px")
        .style("height", fullWindowHeight + "px")
        .style("background","black");

    //who plays tracker
    d3.select("#" + idLeftDiv)
        .append("p")
        .attr("id", idLeftDivPaTurn);

    //creates svg window for checkers
    d3.select("#" + idLeftDiv)
        .append("svg")
        .attr("id", idCheckersSVG)
        .style("position", "fixed")
        .style("top", topMargin + "px")
        .style("left", leftMargin + "px")
        .style("width", windowSize + "px")
        .style("height", windowSize + "px")
        .style("background", "white");

    //creates svg window for minMaxTree
    d3.select("#minMaxTree")
        .append("svg")
        .attr("id", "graphSVG")
        .style("position", "fixed")
        .style("top", topMargin + "px")
        .style("left", halfWindowWidth + leftMargin + "px")
        .style("width", windowSize + "px")
        .style("height", windowSize + "px")
        .style("background", "white");
}

//populates the chess divisian with a checkers board
function buildCheckersBoard(actualCheckersGame){
    var board = fromCheckersToVis(actualCheckersGame.fen());

    d3.select("#" + idLeftDivPaTurn)
        .selectAll("*")
        .remove();

    if(actualCheckersGame.gameOver()){
        var texte = "";
        var res = computeValue(actualCheckersGame);
        if( res == 0){
            texte = "Partie terminé. Résultat : nul";
        }else if(res > 0){
            texte = "Partie terminé. Résultat : Blancs ont gagné";
        }else{
            texte = "Partie terminé. Résultat : Noirs ont gagné";
        }
        d3.select("#" + idLeftDivPaTurn)
            .append("text")
            .text(texte);
        
        d3.select("#" + idLeftDivPaTurn)
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "REJOUER")
            .style("margin-left", "42%")
            .on("click", function() {
                lanchGame();
            });

    }else{
        //a faire plus tard, va faire jouer un coup
        d3.select("#" + idLeftDivPaTurn)
            .append("text")
            .text("Game state : " + computeValue(actualCheckersGame));

        d3.select("#" + idLeftDivPaTurn)
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "FAIRE UN COUP")
            .on("click", function() {
                clickPlayButton(actualCheckersGame, "move");
            });
        
        d3.select("#" + idLeftDivPaTurn)
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "RANDOM")
            .on("click", function() {
                clickPlayButton(actualCheckersGame, "rng");
            });

        d3.select("#" + idLeftDivPaTurn)
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "10 * RANDOM")
            .on("click", function() {
                clickPlayButton(actualCheckersGame, "rngBRR");
            });
            

        
    }
    //board is the data

    //clears all elements in boardSVG
    d3.select("#" + idCheckersSVG)
        .selectAll("*")
        .remove();

    var boardSVG = d3.select("#" + idCheckersSVG);

    //adds <g></g> for each data in board and adds on click()
    boardSVG = boardSVG.selectAll(".fields")
        .data(board)
        .enter()
        .append("g");

    /*
    //add click function
    .on("click", function (d) {
        prepareTransition(d.srcElement, actualCheckersGame);
    });
    */

    //appends rectangles with color and position
    boardSVG.append("rect")
        .style("class", "fields")
        .style("class", "rects")
        .attr("x", function (d) {
            return d.x*fieldSize;
        })
        .attr("y", function (d) {
            return d.y*fieldSize;
        })
        .attr("width", fieldSize + "px")
        .attr("height", fieldSize + "px")
        .style("fill", function (d) {
            if (d.piece == "-") 
                return "#cccccc";
            else
                return "#5286bf";
        });

    /*
    var lettre = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var chiffre = ['10', '9','8', '7', '6', '5', '4', '3', '2','1'];

    //appends rectangle numbers/letters
    boardSVG.append("text")
    .style("font-size", "15px")
    .attr("x", function (d) {
        return d.x*fieldSize + fieldSize - 22;
    })
    .attr("y", function (d) {
        return d.y*fieldSize + 12; 
    })
    .text(function(d) { 
        return lettre[d.x]+chiffre[d.y]; 
    });
    */

    //adds symbol
    

    
    boardSVG.append("text")
        .attr("x", function (d) {
            return d.x*fieldSize + 15;
        })
        .attr("y", function (d) {
            return d.y*fieldSize + 10;
        })
        .attr("class", "checkersPieceStyle")
        .attr("text-anchor", "middle")
        .attr("dy", "30px")
        .attr("dx", "15px")
        .text(function (d) {
            return fromPieceToUnicode(d.piece);
        })
        .attr("class", "bar-text")
        .attr("pointer-events", "none");

}