import React from 'react';
import Dice from './Dice';
import { PICKED } from '../Data/Status'

class CurrentPick extends React.Component {

    render() {
        return (
            <div>
                <h4> Selected Rolls</h4>

                <ul>
                    {this.props.dices.filter(x => x.status === PICKED).map(dice => (
                        <li key={dice.id}> <Dice onClick={this.props.onDiceClick} {...dice} /></li>
                    ))}
                </ul>

                <p>You can pick and unpick dice by clicking on them</p>
                <button disabled={!this.props.myTurn || !this.props.myPick} onClick={this.props.onButtonClick}>Validate Dice Selection</button>
            </div>
        );
    }
}

export default CurrentPick; 