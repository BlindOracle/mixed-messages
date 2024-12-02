//import the dependencies
import { messages } from './dataThreePiece.js';

// Function to generate a random message
function generateMessage() {
    const messageElement = document.getElementById('message');
    let mixedMessage = [];
    let formatted = '';
    function formatMessage(sentences) {
        formatted = sentences.join('\n');
        return formatted;
    };
    
    for (let message in messages) {
        let randomIndex = Math.floor(Math.random() * messages[message].length);

        switch(message) {
            case 'firstMessage':
              mixedMessage.push(`Your day might be ${messages[message][randomIndex]}.<br>`)
              break
            case 'secondMessage':
                mixedMessage.push(`But even on such days ${messages[message][randomIndex]}.<br>`)
              break
            case 'thirdMessage':
                mixedMessage.push(`At the end of the day, ${messages[message][randomIndex]}.`)
              break
            default:
                mixedMessage.push('There is not enough info.')
          }

    };

    
    formatMessage(mixedMessage);
    messageElement.innerHTML = formatted;
}

// Add event listener to button
document.getElementById('generateMessage').addEventListener('click', generateMessage);

/*
const giveMixedMessage = () => {
    

    // a randomizer utility?

    //For 1stMessage `Your day might be ${}`
    //For 2ndMessage `But even on such days, ${}`
    //For 3rdMessage `At the end of the day, ${}`

    return mixedMessage;
}
    */