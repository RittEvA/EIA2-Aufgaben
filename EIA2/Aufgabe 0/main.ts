function YourName(){
    document.getElementById("Text").innerHTML="";
    var Name = prompt("dein Name");
    if (Name==0){
        console.log("Sie haben den Vorgang abgebrochen");
    }
    else if(Name==""){
        alert("Wie heißen Sie denn?");
    }
    else{
        console.log("Halli Hallo," + Name +"! Wie schön das Sie mich besuchen.");
        document.getElementById("Text").innerHTML="Hallöchen<div class='YourName'>"+Name+"</div>. Danke für Ihren"
    }
}
