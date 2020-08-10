import React from 'react';
import Board from './components/Board'
import './App.css';

function App() {
    return (
        <div style={{
            backgroundColor: "BurlyWood",
            width: "100vh",
            height: "100vh",
            margin: "auto"
        }}>
            <Board />
        </div>
    );
}

export default App;
