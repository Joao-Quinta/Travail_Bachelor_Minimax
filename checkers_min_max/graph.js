function buildMinMaxGraph(treeNode){
    var finalList = []
    var start = 'digraph  { layout=twopi; ratio=auto; overlap=true; ranksep=20;';
    var end = '}';
    var nodesListEmpty = [];
    var startFilledNodes = '    node [style="filled"]';
    var nodesListFilled = [];
    var transitionsList = [];
    var maxColors = 'color="#006400", fillcolor="#228B22"'
    var minColors = 'color="#800000", fillcolor="#d62728"'
    var stack = [];
    console.log(treeNode)

    stack.push(treeNode);
    while (stack.length > 0){
        var currentNode = stack.pop();
        var colors = minColors;
        var val;
        var nodeDef;

        if (currentNode.isMax){
            colors = maxColors;
        }

        if(currentNode.visited){
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
            nodeDef = '    ' + currentNode.uniqueID.toString() + ' [' + colors + ', label="?"]';
            nodesListEmpty.push(nodeDef);
        }

        if(!currentNode.isFinal){
            var transition;
            var fils;
            for (var i = 0; i < currentNode.value.length; i++){
                fils = currentNode.value[i];
                transition = ' ' + currentNode.uniqueID.toString() + ' -> ' + fils.uniqueID.toString();
                transitionsList.push(transition)
                stack.push(fils);
            }
        }
        console.log(nodeDef)
    }

    var transitionsString = transitionsList.join('');
    var nodesFilledString = nodesListFilled.join('');
    var nodesEmptydString = nodesListEmpty.join('');
    console.log(nodesFilledString)
    console.log(transitionsString)

    finalList.push(start);
    finalList.push(nodesEmptydString);
    finalList.push(startFilledNodes);
    finalList.push(nodesFilledString);
    finalList.push(transitionsString);
    finalList.push(end);

    var finalString = finalList.join('');
    d3.select("#graphSVG")
        .selectAll("*")
        .remove();

    var u = d3.select("#graphSVG")
        .graphviz()
        .height(windowSize)
        .width(windowSize)
        .fit(true)
        .dot(finalString)
        .render();

    console.log(u)
}

/*
test = [
    'digraph  {',
    '    a [fillcolor="#d62728", label="main"]',
    '    a -> b -> c -> d -> e -> f -> g -> h -> i -> j -> j1 -> j2 -> j3 -> l -> 2',
    '    a -> o -> p',
    '    a -> d -> f',
    '    node [style="filled"]',
    '    a -> 1 -> 2',
    '    a -> a2',
    '    1 -> i',
    '}'
]
test = test.join('')
console.log(test)
z = d3.select("#graphSVG").graphviz().height(windowSize).width(windowSize).fit(true).renderDot(test);
console.log(z)
*/