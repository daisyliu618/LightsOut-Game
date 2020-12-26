import React, { useState } from 'react';
import useSound from 'use-sound';
import flip from './assets/flip.mp3';
import './Cell.css';

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

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
