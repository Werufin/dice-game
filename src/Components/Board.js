import React from 'react';

import NewRoll from './NewRoll';
import CurrentPick from './CurrentPick';
import ValidatedPick from './ValidatedPick';

import faces from '../Data/Faces';
import { TO_ROLL, ROLLED, PICKED, VALIDATED } from '../Data/Status.js';

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dices: [
                { id: 1, result: '', status: TO_ROLL },
                { id: 2, result: '', status: TO_ROLL },
                { id: 3, result: '', status: TO_ROLL },
                { id: 4, result: '', status: TO_ROLL },
                { id: 5, result: '', status: TO_ROLL },
                { id: 6, result: '', status: TO_ROLL },
            ],
            myPick: false,
            remainingRolls: 3,
            healthPoint: 15
        };
        this.rollDices = this.rollDices.bind(this);
        this.fromRolledToPicked = this.fromRolledToPicked.bind(this);
        this.fromPickedToRolled = this.fromPickedToRolled.bind(this);

    }

    render() {
        return (
            <div>
                <h3>{this.props.playerName}  {this.props.myTurn ? "(Playing...)" : "(Waiting...)"}</h3>

                <NewRoll
                    dices={this.state.dices}
                    onButtonClick={this.rollDices}
                    onDiceClick={this.fromRolledToPicked}
                    myTurn={this.props.myTurn}
                    myPick={this.state.myPick}
                    remainingRolls={this.state.remainingRolls} />
                <CurrentPick
                    dices={this.state.dices}
                    onButtonClick={this.pickDice}
                    onDiceClick={this.fromPickedToRolled}
                    myTurn={this.props.myTurn}
                    myPick={this.state.myPick} />
                <ValidatedPick dices={this.state.dices} />
            </div>
        );
    }


    fromRolledToPicked = (id, result) => {
        this.setState(state => ({
            dices: this.state.dices.map(x => x.id === id ? ({ ...x, status: PICKED }) : x),
        }));
    }


    fromPickedToRolled = (id, result) => {
        this.setState(state => ({
            dices: this.state.dices.map(x => x.id === id ? ({ ...x, status: ROLLED }) : x),
        }));
    }


    pickDice = (e) => {
        this.setState(state => ({
            dices: this.state.dices.map(x => x.status === PICKED ? ({ ...x, status: VALIDATED }) : x)
                .map(x => x.status === ROLLED ? ({ ...x, status: TO_ROLL }) : x),
            myPick: false,
        }));
        this.props.endTurn();
    }

    rollDices = (e) => {
        const rollDice = () => {
            const min = 1;
            const max = faces.length;
            return Math.floor(min + Math.random() * (max - min));
        }

        if (this.state.remainingRolls === 1) {
            this.setState(state => ({
                dices: this.state.dices.map(x => x.status === TO_ROLL || x.status === ROLLED ? ({ ...x, result: rollDice(), status: VALIDATED }) : x),
                remainingRolls: 0
            }));

            this.props.endTurn();
        }
        else if (this.state.remainingRolls > 1) {
            this.setState(state => ({
                dices: this.state.dices.map(x => x.status === TO_ROLL || x.status === ROLLED ? ({ ...x, result: rollDice(), status: ROLLED }) : x),
                remainingRolls: this.state.remainingRolls - 1,
                myPick: true
            }));
        }


    }
}



export default Board;

