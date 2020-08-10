import range from '../helpers/range'

class Game {
    constructor() {
        this.state = range(15).map(x => range(15).map(y => 's'))
        this.blackNext = true
    }

    set(row, col) {
        if (this.state[row][col] == 's') {
            this.state[row][col] = this.blackNext ? 'b' : 'w'
            this.blackNext = !this.blackNext
        }
    }
    
    getRepr() {
        var repr = ''
        var prevCh = '?'
        var count = 0
        for (var i = 0; i < 15; ++i) {
            for (var j = 0; j < 15; ++j) {
                let ch = this.state[i][j]
                if (ch != prevCh) {
                    if (prevCh != '?') {
                        repr += `${count == 1 ? '' : count}${prevCh}`
                    }
                    prevCh = ch
                    count = 1
                } else {
                    ++count
                }
            }
        }
        if (prevCh != 's') {
            repr += `${count == 1 ? '' : count}${prevCh}`
        }
        return repr
    }
}

export default Game