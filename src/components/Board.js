import React from 'react';
import Row from './Row';
import range from '../helpers/range'
import Game from '../models/Game'
import Engine from '../models/Engine'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.game = new Game()
        this.state = {
            game: this.game,
            playerNext: true,
            lastRow: -1,
            lastCol: -1
        }
        this.handleMove = this.handleMove.bind(this)
        this.engine = new Engine(this.game)
        if (!this.state.playerNext) {
            this.runEngine()
        }
    }
    render() {
        return (<div style={{
            width: "100vh", 
            height: "100vh",
            display: "flex",
            flexDirection: "column"
        }}>
            {range(15).map(x => 
            <Row 
            row={x} 
            line={this.state.game.state[x]}
            onClick={this.handleMove}
            lastRow={this.state.lastRow}
            lastCol={this.state.lastCol}
            />)}
        </div>)
    }

    handleMove(row, col) {
        if (this.state.playerNext) {
            this.state.game.set(row, col)
            this.setState({
                playerNext: false,
                lastRow: row,
                lastCol: col
            })
            this.runEngine()
        }
    }

    runEngine() {
        this.engine.request(point => {
            this.state.game.set(point.row, point.col)
            this.setState({
                playerNext: true,
                lastRow: point.row,
                lastCol: point.col
            })
        })
    }
}

export default Board