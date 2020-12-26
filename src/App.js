import React, { Component } from 'react';
import Board from './Board';
import Music from './Music';
import './App.css';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Display">
                    <Board />
                    <Music />
                </div>
                <p className="Instruction">
                    Pressing any of the lights will toggle it and the four
                    adjacent lights. The goal of the puzzle is to switch all the
                    lights off, preferably in as few button presses as possible.
                </p>
            </div>
        );
    }
}

export default App;
