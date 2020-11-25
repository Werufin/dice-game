import React from 'react';
import Dice from './Dice';
import { ROLLED } from '../Data/Status'

class NewRoll extends React.Component {

    render() {
        return (
            <div>
                <button disabled={!this.props.myTurn || this.props.myPick} onClick={this.props.onButtonClick}>Roll Dices ( {this.props.remainingRolls} left ) </button>
                <h4> New Rolls</h4>
                <ul>
                    {this.props.dices.filter(x => x.status === ROLLED).map(dice => (
                        <li key={dice.id}> <Dice {...dice} onClick={this.props.onDiceClick} /></li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default NewRoll; 