import React from 'react';
import Dice from './Dice'
import { VALIDATED } from '../Data/Status'

class ValidatedPick extends React.Component {

    doNothing = () => { };

    render() {
        return (
            <div>
                <h4> Validated Rolls</h4>
                <ul>
                    {this.props.dices.filter(x => x.status === VALIDATED).map(dice => (
                        <li key={dice.id}> <Dice {...dice} onClick={this.doNothing} /></li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ValidatedPick; 