import React from 'react';
import useSound from 'use-sound';
import flip from './assets/flip.mp3';
import './Cell.css';


function Cell(props) {
    // constructor(props) {
    //   super(props);
    //   this.handleClick = this.handleClick.bind(this);
    // };
    const [play] = useSound(flip);

    const handleClick = (evt) => {
        // call up to the board to flip cells around this cell

        play();
        props.flipCellsAroundMe();
    };

    // render() {
    let classes = 'Cell' + (props.isLit ? ' Cell-lit' : '');

    return <td className={classes} onClick={handleClick} />;
    // }
}

export default Cell;
