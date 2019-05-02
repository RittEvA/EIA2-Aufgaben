function YourName(){
    document.getElementById("Text").innerHTML="";
    let callName:string = prompt("Nanu, wer bist den Du?");
    if (callName==null){
        console.log("Sie haben den Vorgang abgebrochen");
    }
    else if(callName==""){
        alert("Wie heißen Sie denn?");
    }
    else{
        console.log("Halli Hallo," + callName +"! Wie schön das Sie mich besuchen.");
        document.getElementById("Text").innerHTML="Halli Hallo, <span>"+callName+"</span>! Wie schön, dass Sie mich besuchen."
    }
}
