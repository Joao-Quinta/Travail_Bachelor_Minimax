function buildMinMaxGraph(treeNode, depth, isCostum){
    var totalNumberOfNodes = treeNode.uniqueID;
    var nodesVisited = 0;

    var ranksep;

    switch(depth){
        case 1: 
            ranksep = '2';
            break;
        case 2: 
            ranksep = '5';
            break;
        case 3: 
            ranksep = '15';
            break;
        case 4: 
            ranksep = '10';
            break;
        default: 
            ranksep = '15';
            break;
    }

    /*
        1 -> 2
        2 -> 5
        3 -> 15
        4 -> 10
    */
    var root = treeNode.uniqueID.toString();
    var finalList = []
    var start = 'digraph  { layout=twopi; ratio=auto; overlap=true; ranksep=' + ranksep + '; root=' + root + ';';
    if (isCostum){
        start = 'digraph  {ratio=auto; overlap=false;';

    }
    
    var end = '}';
    var nodesListEmpty = [];
    var startFilledNodes = '    node [style="filled"]';
    var nodesListFilled = [];
    var transitionsList = [];
    var maxColors = 'color="#006400", fillcolor="#228B22"'
    var minColors = 'color="#800000", fillcolor="#d62728"'
    var stack = [];

    stack.push(treeNode);
    while (stack.length > 0){
        var currentNode = stack.pop(0);
        var colors = minColors;
        var val;
        var nodeDef;

        if (currentNode.isMax){
            colors = maxColors;
        }

        if(currentNode.visited){
            nodesVisited = nodesVisited + 1;
            if (currentNode.isFinal){
                val = currentNode.value.toString();
            }else{
                if(currentNode.isMax){
                    var index = 0;
                    var currentMax = currentNode.valueF[0];
                    for (var i = 1; i < currentNode.valueF.length; i++){
                        if(currentMax < currentNode.valueF[i]){
                            index = i;
                            currentMax = currentNode.valueF[i];
                        }
                    }
                    val = currentMax.toString();
                }else{
                    var index = 0;
                    var currentMin = currentNode.valueF[0];
                    for (var i = 1; i < currentNode.valueF.length; i++){
                        if(currentMin > currentNode.valueF[i]){
                            index = i;
                            currentMin = currentNode.valueF[i];
                        }
                    }
                    val = currentMin.toString();
                }
            }
            nodeDef = '    ' + currentNode.uniqueID.toString() + ' [' + colors + ', label="' + val + '"]';
            nodesListFilled.push(nodeDef);
        }else{
            //nodeDef = '    ' + currentNode.uniqueID.toString() + ' [' + colors + ', label="' + val + '"]';
            nodeDef = '    ' + currentNode.uniqueID.toString() + ' [' + colors + ', label="?"]';
            nodesListEmpty.push(nodeDef);
        }

        if(!currentNode.isFinal){
            var transitionChosen;
            var transition;
            var fils;
            var label;
            var color;
            for (var i = 0; i < currentNode.value.length; i++){
                label = (i+1).toString();
                fils = currentNode.value[i];
                if (fils.visited){
                    if(currentNode.isMax){
                        transitionChosen = indexOfMaxMin(currentNode.valueF,"max");
                        color = 'green';
                    }else{
                        transitionChosen = indexOfMaxMin(currentNode.valueF,"min");
                        color = 'red';
                    }
                    if (i == transitionChosen){
                        transition = ' ' + currentNode.uniqueID.toString() + ' -> ' + fils.uniqueID.toString()+ ' [label=' + label + ' color='+ color +' penwidth=4]';
                        //transition = ' ' + currentNode.uniqueID.toString() + ' -> ' + fils.uniqueID.toString()+ ' [label=' + label + ']';
                    }else{
                        transition = ' ' + currentNode.uniqueID.toString() + ' -> ' + fils.uniqueID.toString()+ ' [label=' + label + ']';
                    }

                    transitionsList.push(transition);
                    stack.push(fils);
                    
                }
                if(!fils.visited && depth < 4){
                    //transition = ' ' + currentNode.uniqueID.toString() + ' -> ' + fils.uniqueID.toString() + ' [label=' + label + ']';
                    transition = ' ' + currentNode.uniqueID.toString() + ' -> ' + fils.uniqueID.toString() + ' [style=dashed label=' + label + ']';

                    transitionsList.push(transition);
                    stack.push(fils);
                }
                
            }
        }
    }

    var transitionsString = transitionsList.join('');
    var nodesFilledString = nodesListFilled.join('');
    var nodesEmptydString = nodesListEmpty.join('');

    finalList.push(start);
    //finalList.push(startFilledNodes);
    finalList.push(nodesEmptydString);
    finalList.push(startFilledNodes);
    finalList.push(nodesFilledString);
    finalList.push(transitionsString);
    finalList.push(end);

    var finalString = finalList.join('');
    

    var u = d3.select("#" + idMinMaxTree)
        .graphviz()
        .height(windowSize)
        .width(windowSize)
        .fit(true)
        .dot(finalString)
        .render();

    console.log("nodes visited -> " + nodesVisited);
    console.log("nodes total   -> " + totalNumberOfNodes);
}
