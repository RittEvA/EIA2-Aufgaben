function YourName(){
    document.getElementById("Text").innerHTML="";
    var CallName:string = prompt("Nanu, wer bist den Du?");
    if (CallName==null){
        console.log("Sie haben den Vorgang abgebrochen");
    }
    else if(CallName==""){
        alert("Wie heißen Sie denn?");
    }
    else{
        console.log("Halli Hallo," + CallName +"! Wie schön das Sie mich besuchen.");
        document.getElementById("Text").innerHTML="Halli Hallo, <span>"+CallName+"</span>! Wie schön, dass Sie mich besuchen."
    }
}
