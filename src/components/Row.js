import React from 'react';
import Square from './Square'
import range from '../helpers/range'

class Row extends React.Component {
    render() {
        return (<div style={{
            width: "100vh", 
            height: "6.66vh",
            display: "flex"
        }}>
            {range(15).map(x => 
            <Square 
            row={this.props.row} 
            col={x}
            onClick={this.props.onClick}
            value={this.props.line[x]}
            />)}
        </div>)
    }
}

export default Row