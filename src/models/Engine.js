class Engine {
    constructor(game) {
        this.game = game
    }

    request(cb) {
        let repr = this.game.getRepr()
        fetch(`http://localhost:8080/solve?repr=${repr}&depth=5`)
            .then(res => res.json())
            .then(json => cb(json.point))
    }
}

export default Engine