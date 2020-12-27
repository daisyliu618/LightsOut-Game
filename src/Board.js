import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import cheering from './assets/cheering.mp3';
import Cell from './Cell';
import './Board.css';

function Board(props) {
    // static defaultProps = {
    //     nrows: 5,
    //     ncols: 5,
    //     chanceLightStartsOn: 0.25,
    // };

    let { nrows = 5, ncols = 5, chanceLightStartsOn = 0.25 } = props;
    const [hasWon, setHasWon] = useState(false);
    const [board, setBoard] = useState([]);

    //   state = {
    //         hasWon: false,
    //         board: this.createBoard(),
    //     };

    const createBoard = () => {
        let board = [];
        for (let y = 0; y < nrows; y++) {
            let row = [];
            for (let x = 0; x < ncols; x++) {
                row.push(Math.random() < chanceLightStartsOn);
            }
            board.push(row);
        }
        return board;
    };

    useEffect(() => {
        setBoard(createBoard());
    }, []);

    const flipCellsAround = (coord) => {
        // let { ncols, nrows } = this.props;
        let _board = [...board];
        let [y, x] = coord.split('-').map(Number);
        console.log(coord, y, x);

        function flipCell(y, x) {
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                _board[y][x] = !_board[y][x];
            }
        }
        flipCell(y, x);
        flipCell(y, x - 1);
        flipCell(y, x + 1);
        flipCell(y - 1, x);
        flipCell(y + 1, x);

        let hasWon = _board.every((row) => row.every((cell) => !cell));
        // this.setState({ board: board, hasWon: hasWon });
        setBoard(_board);
        setHasWon(hasWon);
    };

    const makeTable = () => {
        if (board.length === 0) {
            return;
        }
        let tblBoard = [];
        for (let y = 0; y < nrows; y++) {
            let row = [];
            for (let x = 0; x < ncols; x++) {
                let coord = `${y}-${x}`;
                row.push(
                    <Cell
                        key={coord}
                        isLit={board[y][x]}
                        flipCellsAroundMe={() => flipCellsAround(coord)}
                    />
                );
            }
            tblBoard.push(<tr key={y}>{row}</tr>);
        }

        console.log(tblBoard);
        console.log(nrows);

        return (
            <table className="Board">
                <tbody>{tblBoard}</tbody>
            </table>
        );
    };

    const [play, { stop }] = useSound(cheering, { volume: 0.5 });

    const [isHovering, setIsHovering] = useState(false);

    /** Render game board or winning message. */

    return (
        <div className="BoardDisplay">
            {hasWon ? (
                <div
                    className="Winner"
                    onMouseEnter={() => {
                        setIsHovering(true);
                        play();
                    }}
                    onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                    }}
                    isHovering={isHovering}
                >
                    <span className=" neon-blue">YOU</span>
                    <span className=" neon-orange">WIN! </span>
                </div>
            ) : (
                <div>
                    <div className="Board-title">
                        <div className=" neon-orange">Lights </div>
                        <div className=" neon-blue">Out </div>
                    </div>
                    {makeTable()}
                </div>
            )}
        </div>
    );
}

export default Board;
