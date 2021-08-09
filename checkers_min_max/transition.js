var pre = '';
var preCC = '';
var post = '';
var postCC = '';

//make transition
function discoverTransition(actualCheckersGame){
    console.log("pre : " + pre);
    console.log("post : " + post);
    console.log("preCC : " + preCC);
    console.log("postCC : " + postCC);
    console.log(actualCheckersGame.moves());
}

//prepare transition
function prepareTransition(element, actualCheckersGame){
    //console.log(element.__data__.cc);
    //console.log(element.__data__);

    if(pre == '' && element.__data__.piece != '-'){
        pre = element.__data__.piece;
        preCC = element.__data__.cc;
    }else if(pre != ''){
        post = element.__data__.piece;
        postCC = element.__data__.cc;
        discoverTransition(actualCheckersGame);
    }
}

function resetValues(){
    pre = '';
    post = '';
    preCC = '';
    postCC = '';
}