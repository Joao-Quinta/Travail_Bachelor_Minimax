// class that will represent a state -> 
    //value is the list of sons it can have - or its numeric value if final
    //isFinal determins if its a final node or not -> could be achieved by checking the data type of value -> if int : final, if list : not final
    //isMax -> determins if this node is trying to minimise or maximise the socre

class NodeGraph {
    constructor(value, isFinal, isMax){
        this.value = value;
        this.valueF = [];
        this.isFinal = isFinal;
        this.isMax = isMax;
        this.visited = false;
        this.uniqueID = nodeCounter;
        nodeCounter = nodeCounter + 1;
    }
}

class NodeCostum {
    constructor(name, value, isFinal, isMax){
        this.value = value;
        this.valueF = [];
        this.isFinal = isFinal;
        this.isMax = isMax;
        this.visited = false;
        this.uniqueID = name;
        
    }
}

// FAIRE UN COUP -> action button
function clickPlayButton(actualCheckersGame, action){
    if(action == "rng"){
        //make random move
        var minV = 0;
        var maxV = actualCheckersGame.moves().length - 1;
        var rng = Math.floor(Math.random() * (maxV - minV + 1)) + minV;
        actualCheckersGame.move(actualCheckersGame.moves()[rng]);
        buildCheckersBoard(actualCheckersGame);

    }else if (action == "move"){
        nodeCounter = 0;
        //make move computed using minMax with alpha beta pruning
        var isMax = true;
        var type = "max";
        var depth = 3;

        if (actualCheckersGame.fen()[0] == 'B'){
            isMax = false;
            type = "min";
            depth = 3;
        }
        
        var treeNode = computeTree(actualCheckersGame, 0, depth, isMax);
        minmax(treeNode, -Infinity, Infinity);
        var bestIndex = indexOfMaxMin(treeNode.valueF, type);
        actualCheckersGame.move(actualCheckersGame.moves()[bestIndex]);
        buildCheckersBoard(actualCheckersGame);
        buildMinMaxGraph(treeNode, depth, false);

    }else if (action == "rngBRR"){
        //makes 10 random moves
        for(var i = 0; i < 10; i++){
            if(!actualCheckersGame.gameOver()){
                var minV = 0;
                var maxV = actualCheckersGame.moves().length - 1;
                var rng = Math.floor(Math.random() * (maxV - minV + 1)) + minV;
                actualCheckersGame.move(actualCheckersGame.moves()[rng]);
            }
        }
        buildCheckersBoard(actualCheckersGame);
    }    
}

//look for argmin or argmax
function indexOfMaxMin(arr, type){

    if(arr.length === 0){return -1;}
    var currentValue = arr[0];
    var currentIndex = 0;

    if(type == "max"){
        for (var i = 1; i < arr.length; i++){
            if (arr[i] > currentValue){
                currentIndex = i;
                currentValue = arr[i];
            }
        }
    }
    else if(type == "min"){
        for (var i = 1; i < arr.length; i++){
            if (arr[i] < currentValue){
                currentIndex = i;
                currentValue = arr[i];
            }
        }
    }

    return currentIndex;
}

// returns the analysis min max for a given tree
function minmax(node, alpha, beta){
    
    node.visited = true;

    if (node.isFinal){
        return node.value;
    }

    else if(! node.isMax){
        var val = Infinity;
        for (var i = 0; i < node.value.length; i++){
            val = Math.min(val, minmax(node.value[i], alpha, beta));
            node.valueF.push(val);
            if (alpha >= val){
                return val;
            }
            beta = Math.min(beta, val);
        }
    }

    else{
        var val = -Infinity;
        for (var i = 0; i < node.value.length; i++){
            val = Math.max(val, minmax(node.value[i], alpha, beta));
            node.valueF.push(val);
            if (val >= beta){
                return val;
            }
            alpha = Math.max(alpha, val);
        }
    }

    return val;
}

// calcule tout l arbre -> tres long pour l instant
function computeTree(checkersGame, actualDepth, finalDepth, isMax){
    //these two lines define if we are in final or not
    var isFinal = false;
    if(actualDepth == finalDepth){isFinal = true;}

    // if not final depth
    if(!isFinal){
        var getChildren = checkersGame.moves();
        var values = [];
        for(val in getChildren){
            var move = getChildren[val];
            checkersGame.move(move);
            values.push(computeTree(checkersGame, actualDepth + 1, finalDepth, !isMax));
            checkersGame.undo();
        }
        return new NodeGraph(values, false, isMax);
    }

    // if final depth
    else{
        return new NodeGraph(computeValue(checkersGame), true, isMax);
    }
}

// computes the value of a given state
function computeValue(checkersGame){
    var checkersGameFen = checkersGame.fen();
    var total = 0;
    var parsedFen = checkersGameFen.split(":");
    var whitePieces = parsedFen[1].slice(1).split(",");
    var blackPieces = parsedFen[2].slice(1).split(",");

    for (val in whitePieces){
        if (whitePieces[val][0] == 'K'){
            total = total + 3;
        }else{
            total = total + 1;
        }
    }

    for (val in blackPieces){
        if (blackPieces[val][0] == 'K'){
            total = total - 3;
        }else{
            total = total - 1;
        }
    }

    return total;
}