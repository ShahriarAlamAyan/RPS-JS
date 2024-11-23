let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
    }

/* -- Another way to make this opration-- 
    if (score === null){
        score ={
        win: 0,
        lose: 0,
        tie: 0
        }
    };
*/



function playGame(playerMove) {
    const computerMove = pickComputerMove()
    

    let result = ''
    if (playerMove === 'Rock'){
        if (computerMove === 'Rock') {
            result = 'Tie'
        } else if (computerMove === 'Paper') {
            result = 'You Lose'
        } else if (computerMove === 'Scissors') {
            result = 'You Win'
        } 
        
    } else if (playerMove === 'Paper'){
        if (computerMove === 'Rock') {
            result = 'You Win'
        } else if (computerMove === 'Paper') {
            result = 'Tie'
        } else if (computerMove === 'Scissors') {
            result = 'You Lose'
        }

    } else if (playerMove === 'Scissors'){
        if (computerMove === 'Rock') {
            result = 'You Lose'
        } else if (computerMove === 'Paper') {
            result = 'You Win'
        } else if (computerMove === 'Scissors') {
            result = 'Tie'
        }
    }

    if (result === 'You Win') {
        score.win += 1
    } else if (result === 'You Lose') {
        score.lose += 1
    } else if (result === 'Tie') {
        score.tie += 1
    }

    localStorage.setItem('score',JSON.stringify(score))

    alert('You picked ' + playerMove + ', Computer picked '+ computerMove + ', Result is: ' + result + '\nScore: Win:' + score.win + ' Lose:' + score.lose + ' Tie:' + score.tie)
    
    

    /* -- Another way to make this alert --
    alert(`You picked ${playerMove}, Computer picked ${computerMove}, Result is: ${result}
        Score: Win:${score.win} Lose:${score.lose} Tie:${score.tie}`)
    */
    
}

function pickComputerMove() {
    const randomNumber = Math.random()
    let computerMove = ''

    if (randomNumber >= 0 && randomNumber <= 1/3) {
        computerMove = 'Rock';
        
    } else if (randomNumber > 1/3 && randomNumber <= 2/3) {
        computerMove = 'Paper';
        
    } else if (randomNumber > 2/3 && randomNumber <= 1) {
        computerMove = 'Scissors';
        
    }
    return computerMove; 
}