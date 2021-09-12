function creatCostumTree(){
    d3.select("#" + idCheckersSVG)
        .remove();
        
    d3.select("#leftSideHeaderSVGTop2")
        .selectAll("*")
        .remove();

    d3.select("#leftSideHeaderSVGTop3")
        .selectAll("*")
        .remove();

    d3.select("#leftSideHeaderSVGTop4")
        .selectAll("*")
        .remove();

    d3.select("#leftSideHeaderSVGBot")
        .selectAll("*")
        .remove();

    d3.select("#" + idLeftDiv)
        .append("div")
        .attr("id", "inputScreen")
        .attr("class", "inputScreenC");
    
    d3.select("#inputScreen")
        .append("div")
        .attr("id", "inputScreenTop")
        .attr("class", "reglesInputC");

    d3.select("#inputScreenTop")
        .append("div")
        .attr("id", "inputScreenTop1")
        .attr("class", "reglesInputCTop");

    d3.select("#inputScreenTop")
        .append("div")
        .attr("id", "inputScreenTop2")
        .attr("class", "reglesInputCBot");

    d3.select("#inputScreenTop1")
        .append("text")
        .text("Règles : ")
        .attr("class", "rightSideText");
    
    d3.select("#inputScreenTop2")
        .append("p")
        .append("text")
        .text("(1) il faut séparer chaque noeud avec un point final ")
        .attr("class", "textRegles");

    d3.select("#inputScreenTop2")
        .append("p")
        .append("text")
        .text("(2) il faut insérer les noeuds allant de la racine à la feuille (BFS) ")
        .attr("class", "textRegles");

    d3.select("#inputScreenTop2")
        .append("p")
        .append("text")
        .text("(3.a) un noeud final est défini par : nom (nom de taille = 1) | type (max ou min) | valeur numérique (int) || exemple -> a min 2")
        .attr("class", "textRegles");
    
    d3.select("#inputScreenTop2")
        .append("p")
        .append("text")
        .text("(3.b) un noeud non final est défini par : nom (nom de taille = 1) | type (max ou min) | liste des enfants séparés par des virgules || exemple -> a max b,c")
        .attr("class", "textRegles");

    d3.select("#inputScreenTop2")
        .append("p")
        .append("text")
        .text("(4) un noeud a max 2 sera égal à amax2, mais a_max_2 ne sera pas accepté par le parseur")
        .attr("class", "textRegles");

    d3.select("#inputScreenTop2")
        .append("p")
        .append("text")
        .text("(5) voici le texte qui résulte dans le graphe à droite : (il faut passer la souris sur un noeud pour voir son nom)")
        .attr("class", "textRegles");

    d3.select("#inputScreenTop2")
        .append("p")
        .append("text")
        .text("a max b,c . b min d,e . c min f,g . d max h,i . e max j,k . f max l,m . g max o,p .h min 1 . i min 2 . j min 3 . k min -1 . l min 5 . m min -4 . o min 2 . p min -1 ")
        .attr("class", "textRegles");

    parseInput("a max b,c . b min d,e . c min f,g . d max h,i . e max j,k . f max l,m . g max o,p .h min 1 . i min 2 . j min 3 . k min -1 . l min 5 . m min -4 . o min 2 . p min -1 ");


    d3.select("#inputScreen")
        .append("div")
        .attr("id", "inputScreenBot")
        .attr("class", "boxInputC");

    d3.select("#inputScreenBot")
        .append("input")
        .attr("type", "text")
        .attr("id", "treeInputBox")
        .attr("placeholder", "Votre arbre personalisé ici ...")
        .style("width", "100%")
        .style("height", "80%");

    d3.select("#" + leftSideHeaderSVGTop + "4")
        .append("input")
        .attr("type", "button")
        .attr("class", "button")
        .attr("value", "RUN MINIMAX ->")
        .on("click", function() {
            clickPlayButton("bruh", "run");
        });

}

function parseInput(test2){
    var test2 = test2.replaceAll(' ', '');
    var test1 = test2.split('.');
    var nbNoeuds = test1.length;
    var nodes = [];
    var wholeTree;
    while (test1.length > 0){
        var current = test1.pop();
        var value = current.slice(4,).split(',');
        var type = current.slice(1, 4);
        var name = current[0];
        var isFinal;
        var isMax;

        if(value.length == 1){
            isFinal = true;
        }else{
            isFinal = false;
        }

        if(type == "max"){
            isMax = true;
        }else{
            isMax = false;
        }

        if (isFinal){
            nodes.push(new NodeCostum(name, parseInt(value), isFinal, isMax));
        }else{
            var values = []
            for (j in value){

                var i = 0;
                while (i < nodes.length){
                    if(value[j] == nodes[i].uniqueID){
                        values.push(nodes[i]);
                        i = nodes.length;
                    }
                    i = i + 1;
                }
            }
            if(test1.length == 0){
                wholeTree = new NodeCostum(name, values, isFinal, isMax);
            }else{
                nodes.push(new NodeCostum(name, values, isFinal, isMax));
            }
            
        }
        
    }
    minmax(wholeTree, -Infinity, Infinity);
    buildMinMaxGraph(wholeTree, 1, true, nbNoeuds);
}