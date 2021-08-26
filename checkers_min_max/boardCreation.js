//builds a screen with two divisions, each with an ID
function buildScreen(){   
    //create a div of full scree  
    d3.select("body")
        .append("div")
        .attr("id", idFirstDiv)
        .attr("class", "fullScreen");

    //create left half div
    d3.select("#" + idFirstDiv)
        .append("div")
        .attr("id", idLeftDiv)
        .attr("class", "halfScreenLeft");

    //create right half div
    d3.select("#" + idFirstDiv)
        .append("div")
        .attr("id", idRightDiv)
        .attr("class", "halfScreenRight");

    //populate left half, with header checkers and footer -> header has 2 halfs
    d3.select("#" + idLeftDiv)
        .append("div")
        .attr("id", leftSideHeaderSVG)
        .attr("class", "leftSideHeader");
    
    d3.select("#" + leftSideHeaderSVG)
        .append("div")
        .attr("id", leftSideHeaderSVGTop)
        .attr("class", "leftSideHeaderTop");

    d3.select("#" + leftSideHeaderSVG)
        .append("div")
        .attr("id", leftSideHeaderSVGBot)
        .attr("class", "leftSideHeaderBot");
    
    d3.select("#" + idLeftDiv)
        .append("svg")
        .attr("id", idCheckersSVG)
        .attr("class", "leftSideCheckers")
        .style("width", windowSize + "px")
        .style("height", windowSize + "px")
        .style("left", leftMargin + "px")
        .style("top", topMargin + "px");
    
    d3.select("#" + idLeftDiv)
        .append("div")
        .attr("id", leftSideFooterSVG)
        .attr("class", "leftSideFooter");
    
    //populate right half, with header checkers and footer
    d3.select("#" + idRightDiv)
        .append("div")
        .attr("id", rightSideHeaderSVG)
        .attr("class", "leftSideHeader");

    d3.select("#" + idRightDiv)
        .append("svg")
        .attr("id", idMinMaxTree)
        .attr("class", "leftSideCheckers")
        .style("width", windowSize + "px")
        .style("height", windowSize + "px")
        .style("left", leftMargin + "px")
        .style("top", topMargin + "px");

    d3.select("#" + idRightDiv)
        .append("div")
        .attr("id", leftSideFooterSVG)
        .attr("class", "leftSideFooter");

}

//populates the chess divisian with a checkers board
function buildCheckersBoard(actualCheckersGame){
    var board = fromCheckersToVis(actualCheckersGame.fen());
       
    d3.select("#" + leftSideHeaderSVGTop)
        .selectAll("*")
        .remove();
    
    d3.select("#" + leftSideHeaderSVGBot)
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
        d3.select("#" + leftSideHeaderSVGBot)
            .append("text")
            .text(texte);
        
        d3.select("#" + leftSideHeaderSVGTop)
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
        d3.select("#" + leftSideHeaderSVGBot)
            .append("text")
            .text("Game state : " + computeValue(actualCheckersGame));

        d3.select("#" + leftSideHeaderSVGTop)
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "FAIRE UN COUP")
            .on("click", function() {
                clickPlayButton(actualCheckersGame, "move");
            });
        
        d3.select("#" + leftSideHeaderSVGTop)
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "RANDOM")
            .on("click", function() {
                clickPlayButton(actualCheckersGame, "rng");
            });

        d3.select("#" + leftSideHeaderSVGTop)
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
                return color1;
            else
                return color2;
        });

    
    boardSVG.append("circle")
        .attr('cx', function (d) {
            return d.x*fieldSize + fieldSize/2;
        })
        .attr('cy', function (d) {
            return d.y*fieldSize + fieldSize/2;
        })
        .attr('r', fieldSize/2 * 0.6)
        .style('fill', function (d) {
            return fromPieceToUnicode(d.piece);
        })
        .attr("pointer-events", "none");

}