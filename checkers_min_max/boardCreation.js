//builds a screen with two divisions, each with an ID
function buildScreen(){   
    var valueOptions = ['0','1','2','3','4','5','6','7','8'];

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

    d3.select("#" + leftSideHeaderSVGBot)
        .append("div")
        .attr("id", leftSideHeaderSVGBot + "B")
        .attr("class", "leftSideHeaderBotB");

    d3.select("#" + leftSideHeaderSVGBot + "B")
        .append("div")
        .attr("id", leftSideHeaderSVGBot + "BL")
        .attr("class", "leftSideHeaderBotNL");

    d3.select("#" + leftSideHeaderSVGBot + "B")
        .append("div")
        .attr("id", leftSideHeaderSVGBot + "BR")
        .attr("class", "leftSideHeaderBotNR");
    
    makeDropDownMenu(leftSideHeaderSVGBot + "BL", leftSideHeaderSVGBot + "BLMenu", valueOptions);

    d3.select("#"+ leftSideHeaderSVGBot + "BR")
        .append("text")
        .text("coups en avance")
        .style('color', 'white');

    d3.select("#" + leftSideHeaderSVGBot)
        .append("div")
        .attr("id", leftSideHeaderSVGBot + "Score")
        .attr("class", "leftSideHeaderBotScore");

    d3.select("#" + leftSideHeaderSVGBot)
        .append("div")
        .attr("id", leftSideHeaderSVGBot + "N")
        .attr("class", "leftSideHeaderBotN");

    d3.select("#" + leftSideHeaderSVGBot + "N")
        .append("div")
        .attr("id", leftSideHeaderSVGBot + "NL")
        .attr("class", "leftSideHeaderBotNL");

    d3.select("#" + leftSideHeaderSVGBot + "N")
        .append("div")
        .attr("id", leftSideHeaderSVGBot + "NR")
        .attr("class", "leftSideHeaderBotNR");
    
    makeDropDownMenu(leftSideHeaderSVGBot + "NR", leftSideHeaderSVGBot + "NRMenu", valueOptions);

    d3.select("#"+ leftSideHeaderSVGBot + "NL")
        .append("text")
        .text("coups en avance")
        .style('color', 'black');

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
    
    d3.select("#" + rightSideHeaderSVG)
        .append("div")
        .attr("id", rightSideHeaderSVG + "Top")
        .attr("class", "leftSideHeaderTop");

    d3.select("#" + rightSideHeaderSVG + "Top")
        .append("div")
        .attr("id", rightSideHeaderSVG + "Top1")
        .attr("class", "leftSideHeaderLeft");

    d3.select("#" + rightSideHeaderSVG + "Top1")
        .append('text')
        .text('Noeuds Créés :')
        .attr("class", "rightSideText");

    d3.select("#" + rightSideHeaderSVG + "Top")
        .append("div")
        .attr("id", rightSideHeaderSVG + "Top2")
        .attr("class", "leftSideHeaderMiddle");

    d3.select("#" + rightSideHeaderSVG + "Top2")
        .append('text')
        .text('Noeuds Visités :')
        .attr("class", "rightSideText");

    d3.select("#" + rightSideHeaderSVG + "Top")
        .append("div")
        .attr("id", rightSideHeaderSVG + "Top3")
        .attr("class", "leftSideHeaderRight");

    d3.select("#" + rightSideHeaderSVG + "Top3")
        .append('text')
        .text('Visités/Créés*100 :')
        .attr("class", "rightSideText");

    d3.select("#" + rightSideHeaderSVG)
        .append("div")
        .attr("id", rightSideHeaderSVG + "Bot")
        .attr("class", "leftSideHeaderBot");

    d3.select("#" + rightSideHeaderSVG + "Bot")
        .append("div")
        .attr("id", rightSideHeaderSVG + "Bot1")
        .attr("class", "leftSideHeaderLeft");

    d3.select("#" + rightSideHeaderSVG + "Bot")
        .append("div")
        .attr("id", rightSideHeaderSVG + "Bot2")
        .attr("class", "leftSideHeaderMiddle");

    d3.select("#" + rightSideHeaderSVG + "Bot")
        .append("div")
        .attr("id", rightSideHeaderSVG + "Bot3")
        .attr("class", "leftSideHeaderRight");

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
    
    d3.select("#" + leftSideHeaderSVGBot + "Score")
        .selectAll("*")
        .remove();

    d3.select("#" + leftSideHeaderSVGTop)
        .append("div")
        .attr("id", leftSideHeaderSVGTop + "1")
        .attr("class", "leftSideHeaderTopSplits");

    d3.select("#" + leftSideHeaderSVGTop)
        .append("div")
        .attr("id", leftSideHeaderSVGTop + "2")
        .style("left","25%")
        .attr("class", "leftSideHeaderTopSplits");

    d3.select("#" + leftSideHeaderSVGTop)
        .append("div")
        .attr("id", leftSideHeaderSVGTop + "3")
        .style("left","50%")
        .attr("class", "leftSideHeaderTopSplits");

    d3.select("#" + leftSideHeaderSVGTop)
        .append("div")
        .attr("id", leftSideHeaderSVGTop + "4")
        .style("left","75%")
        .attr("class", "leftSideHeaderTopSplits");

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
        d3.select("#" + leftSideHeaderSVGBot + "Score")
            .append("text")
            .style("font-size", "2vw")
            .style("color", "red")
            .text(texte);
        
        d3.select("#" + leftSideHeaderSVGTop)
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "REJOUER")
            .style("margin-left", "42%")
            .on("click", function() {
                launchGame();
            });

    }else{
        //a faire plus tard, va faire jouer un coup
        d3.select("#" + leftSideHeaderSVGBot + "Score")
            .append("text")
            .text("Score : " + computeValue(actualCheckersGame))
            .style("font-size", "2vw")
            .style("color", "red");


        d3.select("#" + leftSideHeaderSVGTop + "1")
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "RELANCER")
            .on("click", function() {
                
                launchGame();
            });

        var textB;
        if(actualCheckersGame.fen()[0] == 'B'){
            textB = "FAIRE UN COUP -> Noir";
        } else{
            textB = "FAIRE UN COUP -> Blanc";
        }
        d3.select("#" + leftSideHeaderSVGTop + "2")
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", textB)
            .on("click", function() {
                clickPlayButton(actualCheckersGame, "move");
            });

        d3.select("#" + leftSideHeaderSVGTop + "3")
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "10 * RANDOM")
            .on("click", function() {
                clickPlayButton(actualCheckersGame, "rngBRR");
            });        

        d3.select("#" + leftSideHeaderSVGTop + "4")
            .append("input")
            .attr("type", "button")
            .attr("class", "button")
            .attr("value", "COSTUM TREE")
            .on("click", function() {
                clickPlayButton(actualCheckersGame, "input");
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

function makeDropDownMenu(pId, fId, data){
    var dropdown = d3.select("#" + pId)
        .append("select")
        .style("width", "50%")
        .style("height", "50%")
        .attr("id", fId);
    
    var options = dropdown.selectAll("option")
        .data(data)
        .enter()
        .append("option")
        .attr("value", function(d) {
            return d;
        })
        .text(function(d) {
            return d;
        });

    options.property("selected", function(d) { return d === '2'});
}

function buildArrows(movesList){
    var boardSVG = d3.select("#" + idCheckersSVG);
    boardSVG.append("svg:defs").append("svg:marker")
        .attr("id", "triangle")
        .attr("refX", 6)
        .attr("refY", 6)
        .attr("markerWidth", 30)
        .attr("markerHeight", 30)
        .attr("markerUnits","userSpaceOnUse")
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 12 6 0 12 3 6")
        .style("fill", "red");


    for(var i = 0; i < movesList.length; i++){
        //console.log(movesList[i].from)
        //console.log(movesList[i].to)
        //console.log("jump")
        var fromN = movesList[i].from;
        var toN = movesList[i].to;
        var x1 = getCCX(fromN);
        var y1 = getCCY(fromN);
        var x2 = ((getCCX(toN) - x1) * 0.9) + x1;
        var y2 = ((getCCY(toN) - y1) * 0.9) + y1;

        var x3 = (x2-x1)/2 + x1;
        var y3 = (y2-y1)/2 + y1;
        

        var boardSVG = d3.select("#" + idCheckersSVG);

        boardSVG.append("line")
            .attr("x1", x1)
            .attr("y1", y1)
            .attr("x2", x2)
            .attr("y2", y2)
            .attr("stroke", "red")
            .attr("stroke-width",4)
            .attr("marker-end", "url(#triangle)");

        boardSVG.append("text")
            .text((i+1).toString())
            .attr("x", x3)
            .attr("y", y3)
            .style("font-size", "25px")
            .style("font-weight", "800");
        
    }
    //var ccY = getCCX(11);
    

}

function getCCX(number){
    var x;
    var resteN = number%10;
    if(resteN == 0){
        x = fieldSize/2 + 8 * fieldSize;
    }else if(resteN == 1){
        x = fieldSize/2 + fieldSize;
    }else if(resteN == 2){
        x = fieldSize/2 + 3 * fieldSize;
    }else if(resteN == 3){
        x = fieldSize/2 + 5 * fieldSize;
    }else if(resteN == 4){
        x = fieldSize/2 + 7 * fieldSize;
    }else if(resteN == 5){
        x = fieldSize/2 + 9 * fieldSize;
    }else if(resteN == 6){
        x = fieldSize/2;
    }else if(resteN == 7){
        x = fieldSize/2 + 2 * fieldSize;
    }else if(resteN == 8){
        x = fieldSize/2 + 4 * fieldSize;
    }else if(resteN == 9){
        x = fieldSize/2 + 6 * fieldSize;
    }
    return x;

}

function getCCY(number){
    var y;
    if (number < 6){
        y = fieldSize/2;
    }else if (number < 11){
        y = fieldSize/2 + fieldSize;
    }else if (number < 16){
        y = fieldSize/2 + 2 * fieldSize;
    }else if (number < 21){
        y = fieldSize/2 + 3 * fieldSize;
    }else if (number < 26){
        y = fieldSize/2 + 4 * fieldSize;
    }else if (number < 31){
        y = fieldSize/2 + 5 * fieldSize;
    }else if (number < 36){
        y = fieldSize/2 + 6 * fieldSize;
    }else if (number < 41){
        y = fieldSize/2 + 7 * fieldSize;
    }else if (number < 46){
        y = fieldSize/2 + 8 * fieldSize;
    }else if (number < 51){
        y = fieldSize/2 + 9 * fieldSize;
    }
    return y;
}