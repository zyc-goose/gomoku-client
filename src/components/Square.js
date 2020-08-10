import React from 'react';
import './Square.css'

class Square extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let fullSize = "6.66vh"
        let lineSize = "0.3vh"
        let spaceSize = "3.18vh"
        let smallCircleSize = "1.2vh"
        let largeCircleSize = "5.5vh"
        let isSmall = shouldDrawSmallCircle(this.props.row, this.props.col)
        return (
            <div 
            style={{
                width: fullSize, 
                height: fullSize,
                display: "flex",
                flexWrap: "wrap",
                position: "relative"
            }}>
                <div style={{width: spaceSize, height: spaceSize}} />
                <div style={{width: lineSize, height: spaceSize, backgroundColor: this.props.row == 0 ? "transparent" : "black"}} />
                <div style={{width: spaceSize, height: spaceSize}} />
                <div style={{width: spaceSize, height: lineSize, backgroundColor: this.props.col == 0 ? "transparent" : "black"}} />
                <div style={{width: lineSize, height: lineSize, backgroundColor: "black"}} />
                <div style={{width: spaceSize, height: lineSize, backgroundColor: this.props.col == 14 ? "transparent" : "black"}} />
                <div style={{width: spaceSize, height: spaceSize}} />
                <div style={{width: lineSize, height: spaceSize, backgroundColor: this.props.row == 14 ? "transparent" : "black"}} />
                <div style={{width: spaceSize, height: spaceSize}} />
                
                <div style={{
                    backgroundColor: this.props.value == 's' ? (isSmall ? "black" : "transparent") : (this.props.value == 'b' ? 'black' : 'white'),
                    width: this.props.value == 's' ? smallCircleSize : largeCircleSize, 
                    height: this.props.value == 's' ? smallCircleSize : largeCircleSize, 
                    position: "absolute",
                    borderRadius: "50%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}></div>

                <div 
                className="square square-empty"
                onClick={() => this.props.onClick(this.props.row, this.props.col)}
                />
            </div>
        )
    }
}

function shouldDrawSmallCircle(row, col) {
    if (row == 3 || row == 11) {
        return col == 3 || col == 11
    }
    return row == 7 && col == 7
}

export default Square