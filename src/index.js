const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");

var printResult = document.getElementById("result");
var imageComputer = document.getElementById("choices");

rock.addEventListener("click",function(){   
    var election = 0;
    choice(election); 
});

paper.addEventListener("click",function(){ 
    var election = 1; 
    choice(election);
});

scissors.addEventListener("click",function(){
    var election = 2; 
    choice(election); 
});

function choice(userElection){  
    computerChoice = Math.floor(Math.random() * 3); 
    if(userElection == computerChoice){
        result = "It's a tie";
    }
    else if(userElection==0 && computerChoice==1){
        result = "Computer wins";
    }
    else if(userElection==0 && computerChoice==2){
        result = "You win";
    }
    else if(userElection==1 && computerChoice==0){
        result = "You win";
    }
    else if(userElection==1 && computerChoice==2){
        result = "Computer wins";
    }
    else if(userElection==2 && computerChoice==1){
        result = "You win";
    }
    else if(userElection==2 && computerChoice==0){
        result = "Computer wins";
    }
    
    switch(computerChoice){
        case 0:{
            imageComputer.src = "img/rock.png"; 
            break;
        }
        case 1:{
            imageComputer.src = "img/paper.png";
            break;
        }
        case 2:{
            imageComputer.src = "img/scissors.png";
            break;
        }
    }

    printResult.innerHTML = result;  
}