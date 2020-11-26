import React from 'react';
import Dice from './Dice';
import { ROLLED } from '../Data/Status'
import cubes from '../img/cubes.png'

class NewRoll extends React.Component {

    render() {

        const btn = !this.props.myTurn || this.props.myPick ?
            <button className="flex-none bg-blue-100 text-white font-bold uppercase text-xs rounded-xl w-16 ml-2" disabled>
                <img className="object-scale-down h-8 w-full mt-1" src={cubes} alt="roll" /> ( {this.props.remainingRolls} left )
            </button> :
            < button className="flex-none animate-pulse bg-blue-400 hover:bg-blue-500 text-white font-bold uppercase text-xs rounded-xl w-16 ml-2"
                onClick={this.props.onButtonClick} > <img className="object-scale-down h-8 w-full mt-1" src={cubes} alt="roll" /> ({this.props.remainingRolls} left )
            </button >;

        return (
            <div>
                <h4>New Rolls</h4>
                <div className="flex h-16">
                    <div className=" flex-1 rounded-t-xl overflow-hidden bg-gradient-to-r from-yellow-50 to-yellow-100 pt-2 pl-2">
                        {this.props.dices.filter(x => x.status === ROLLED).map(dice => (
                            <Dice key={dice.id} {...dice} onClick={this.props.onDiceClick} />
                        ))}
                    </div>
                    {btn}
                </div>
            </div >
        );
    }
}

export default NewRoll; 