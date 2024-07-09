//getting random number
let random_number = Math.floor(Math.random() * 20);
let secret_num = random_number
//assigning 2 variables
let score = 20;
let high_score = 0;



function Again(){
    random_number = Math.floor(Math.random() * 20);
    secret_num = random_number;
    score = 20;
    document.body.style.backgroundColor = "gray";
    document.getElementById("number").innerHTML = "?";
    document.getElementById("check").innerHTML = "Start guessing...";
    document.getElementById("score").innerHTML = score;
    document.getElementById("userInput").value = "";
}

function check(){
    
    var userInput = document.getElementById("userInput").value;
    if(userInput>secret_num){
        if(score>0){
            document.getElementById("check").innerHTML = "Too low🥴";
            score-=1;
        }else{
            document.getElementById("check").innerHTML = "😔game over😔";
            document.body.style.backgroundColor = "red";
        }
        document.getElementById("score").innerHTML = score;
    }else if(userInput<secret_num){
        if(score>0){
            document.getElementById("check").innerHTML = "Too high😱";
            score-=1;
        }else{
            document.getElementById("check").innerHTML = "😔game over😔";
            document.body.style.backgroundColor = "red";
        }
        document.getElementById("score").innerHTML = score;
    }else{
        document.getElementById("check").innerHTML = "Correct number🎉✨";
        document.getElementById("number").innerHTML = secret_num;
        document.body.style.backgroundColor = "green";
        if(!(Number(document.getElementById("highscore").textContent) > score)){
            document.getElementById("highscore").innerHTML = score;
        }
        

    }
}