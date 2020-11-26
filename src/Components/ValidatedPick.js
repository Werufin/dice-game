import React from 'react';
import Dice from './Dice'
import { VALIDATED } from '../Data/Status'

class ValidatedPick extends React.Component {

    doNothing = () => { };

    render() {
        return (
            <div>
                <h4>Validated Rolls</h4>
                <div className="flex h-16">
                    <div className=" flex-1 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 pt-2 pl-2">
                        {this.props.dices.filter(x => x.status === VALIDATED).map(dice => (
                            <Dice key={dice.id} {...dice} onClick={this.doNothing} />
                        ))}
                    </div>
                    <div className="flex-none bg-blue-100 rounded-xl w-16 ml-2" />
                </div>
            </div>
        );
    }
}

export default ValidatedPick; 