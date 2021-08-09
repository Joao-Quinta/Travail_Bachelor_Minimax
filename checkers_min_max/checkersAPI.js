function fromCheckersToVis(checkersFen){
    // in a total of 10000 calls to this function, the avg time was = 0.0134

    var parsedFen = checkersFen.split(":");
    var whitePieces = parsedFen[1].slice(1).split(",");
    var blackPieces = parsedFen[2].slice(1).split(",");

    var board50 = new Array(50).fill(0);

    for (val in whitePieces){
        if (whitePieces[val][0]== 'K'){
            board50[parseInt(whitePieces[val].slice(1)) - 1 ] = 'W';
        }else{
            board50[parseInt(whitePieces[val]) - 1 ] = 'w';
        }
    }

    for (val in blackPieces){
        if (blackPieces[val][0] == 'K'){
            board50[parseInt(blackPieces[val].slice(1)) - 1 ] = 'B';
        }else{
            board50[parseInt(blackPieces[val]) - 1 ] = 'b';
        }
    }


    var boardDimension = 10;
    var board = [];
    var ind = 0;
    for (var i = 0; i < 100; i = i + 2){
        var x1 = i % boardDimension;
        var x2 = (i+1) % boardDimension;
        var y0 = Math.floor(i / boardDimension);
        if(y0%2==0){
            board = pushOnBoard(board, x1, x2, y0, "-", board50[ind], ind + 1)
        }else{
            board = pushOnBoard(board, x1, x2, y0, board50[ind], "-", ind + 1)
        }
        ind ++;
    }
    return board;

}

function pushOnBoard(board, x1, x2,y,val1,val2, ind){
    
    board.push({
        x: x1,
        y: y,
        piece: val1,
        cc : ind
    });

    board.push({
        x: x2,
        y: y,
        piece: val2,
        cc : ind
    });

    return board;

}

// for a given piece object with type and color, returns the unicode for the right symbol
function fromPieceToUnicode(piece){
    // if piece is null return nothing
    // else
    if(piece == "-"){
        return "";
    }else if(piece == "b"){
        return "\u26C2";
    }else if(piece == "w"){
        return "\u26C0";
    }else if(piece == "W"){
        return "\u26C1";
    }else if(piece == "B"){
        return "\u26C3";
    }else if(piece == "0"){
        return "";
    }else{
        return "U";
    }
}