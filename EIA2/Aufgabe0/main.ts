function YourName(){
    document.getElementById("Text").innerHTML="";
    var Name = prompt("Nanu, wer bist den Du?");
    if (Name==null){
        console.log("Sie haben den Vorgang abgebrochen");
    }
    else if(Name==""){
        alert("Wie heißen Sie denn?");
    }
    else{
        console.log("Halli Hallo," + Name +"! Wie schön das Sie mich besuchen.");
        document.getElementById("Text").innerHTML="Halli Hallo, <span>"+Name+"</span>! Wie schön, dass Sie mich besuchen."
    }
}
