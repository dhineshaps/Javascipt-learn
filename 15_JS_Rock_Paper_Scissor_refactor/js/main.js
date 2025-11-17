//game

let playGame = confirm('Shall we play rock, paper or scissors ?');

if (playGame) {
    while (playGame) {
        //playgame
        const playerChoice = prompt('Please enter  rock, paper or scissor');

        if (playerChoice || playerChoice === '') {
            const playerOne = playerChoice.trim().toLowerCase();

            if (
                playerOne === 'rock' ||
                playerOne === 'paper' ||
                playerOne === 'scissor'
            ) {
                let computerChoice = Math.floor(Math.random() * 3 + 1);
                const rpsArray = ['rock', 'paper, scissors'];
                const computer = rpsArray[computerChoice];
                // let computer =
                //     computerChoice === 1
                //         ? 'rock'
                //         : computerChoice === 2
                //         ? 'paper'
                //         : 'scissor';

                let result =
                    playerOne === computer
                        ? 'Game is tie'
                        : computer === 'rock' && playerOne === 'paper'
                        ? 'Player wins'
                        : computer === 'paper' && playerOne === 'scissor'
                        ? 'Player wins'
                        : computer === 'scissor' && playerOne === 'rock'
                        ? 'Player wins'
                        : 'computer wins';

                console.log(result);
                //let playAgain = confirm('play Again ?');

                // if (playAgain) {
                //     location.reload();
                // } else {
                //     alert('ok, thanks for playing');
                // }

                playGame = confirm('Play Again?');
                if (!playGame) alert('ok, thanks for playing');
                continue;
            } else {
                alert("you didn't enter the any of rock, paper, scissor");
            }
        } else {
            alert('guess you have changed the mind');
            break;
        }

        // let playAgain = prompt('play Again ?');

        // if (playAgain == 'no') {
        //     break;
        // } else {
        //     alert('playing again');
        // }
    }
} else {
    alert('okay may be next time');
}

//http://127.0.0.1:5500/Javascript/Javascipt-learn/15_JS_Rock_Paper_Scissor_refacto
