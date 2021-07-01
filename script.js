let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = ' Start guessing... ';
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = '?';
    document.querySelector(".guess").value = " ";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector("h1").textContent = ' Guess My Number! ';
    
})

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    
    if (!guess) {
        document.querySelector(".message").textContent = "🚫 No number";
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = ' 🎉 Correct Number';
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("h1").textContent = '🎉 Congratulation You Won!!';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? ' 📈 Number is High' : ' 📉 Number is Low';
            score--;
            document.querySelector(".score").textContent = score;
          
        } else {
            document.querySelector('.message').textContent = ' You lost the Game';
            score--;
            document.querySelector(".score").textContent = 0;
            document.querySelector('h1').textContent= '😱 Ahh! You Lost The Game. '
          
        }
      
    }


    // Another Approch
    
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = ' 📈 Number is High';
    //         score--;
    //         document.querySelector(".score").textContent = score;
          
    //     } else {
    //         document.querySelector('.message').textContent = ' You lost the Game';
    //         score--;
    //         document.querySelector(".score").textContent = 0;
          
    //     }
      
    // }
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = ' 📈 Number is Low';
    //         score--;
    //         document.querySelector(".score").textContent = score;
              
    //     } else {
    //         document.querySelector('.message').textContent = ' You lost the Game';
    //         score--;
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
    
});
