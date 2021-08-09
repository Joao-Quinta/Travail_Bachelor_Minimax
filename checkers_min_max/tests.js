function test1(){
    var draughtsGame = new Draughts();
    draughtsGame.move(draughtsGame.moves()[0]);
    draughtsGame.move(draughtsGame.moves()[0]);
    draughtsGame.move(draughtsGame.moves()[0]);
    var res = computeValue(draughtsGame);
    if(res == 1){
        console.log("test 1 passed");
    }else{
        console.log("test 1 failed");
    }
}

function test2(){
    var draughtsGame = new Draughts();
    draughtsGame.move(draughtsGame.moves()[0]);
    draughtsGame.move(draughtsGame.moves()[0]);
    var treeNode = computeTree(draughtsGame, 0, 4, true);
    minmax(treeNode, -Infinity, Infinity);
    var bestIndex = indexOfMaxMin(treeNode.valueF, "max");

    if(treeNode.valueF[bestIndex] == 1){
        console.log("test 2 passed");
    }else{
        console.log("test 2 failed");
    }

}