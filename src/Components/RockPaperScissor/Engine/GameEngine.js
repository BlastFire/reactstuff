
export const calculateWinner = (p, ai) => {
    if (p !== ai) {
        if (p === 'rock') {
            if (ai === 'paper') {
                return "Enemy Player"
            } else {
                return "Player"
            }
        }
        if (p === 'paper') {
            if (ai === 'rock') {
                return "Player"
            } else {
                return "Enemy Player"
            }
        }
        if (p === 'scissors') {
            if (ai === 'rock') {
                return "Enemy Player"
            } else {
                return "Player"
            }
        }
    } else {
        return 'Try again'
    }
}