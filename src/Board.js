import React, { useState, useEffect} from 'react';
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
    const [hasWon, sethasWon] = useState(false);
    useEffect(() => { createBoard() }, []);
    
    // const [board, setboard] = useState(createBoard());

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

    const flipCellsAround = (coord) => {
        let { ncols, nrows } = this.props;
        let board = this.state.board;
        let [y, x] = coord.split('-').map(Number);

        function flipCell(y, x) {
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }
        flipCell(y, x);
        flipCell(y, x - 1);
        flipCell(y, x + 1);
        flipCell(y - 1, x);
        flipCell(y + 1, x);

        let hasWon = board.every((row) => row.every((cell) => !cell));
        this.setState({ board: board, hasWon: hasWon });
    };


    const makeTable = () => {
        let tblBoard = [];
        for (let y = 0; y < props.nrows; y++) {
            let row = [];
            for (let x = 0; x < props.ncols; x++) {
                let coord = `${y}-${x}`;
                row.push(
                    <Cell
                        key={coord}
                        isLit={this.state.board[y][x]}
                        flipCellsAroundMe={() => this.flipCellsAround(coord)}
                    />
                );
            }
            tblBoard.push(<tr key={y}>{row}</tr>);
        }
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
            {this.state.hasWon? (
                <div
                    className="winner"
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
