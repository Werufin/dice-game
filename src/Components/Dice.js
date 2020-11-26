import React from 'react';
import faces from '../Data/Faces.js';


class Dice extends React.Component {

    onClick = (e) => {
        this.props.onClick(this.props.id, this.props.result);
    }

    render() {
        return (
            < button className={((this.props.id + this.props.result) % 3 === 0 ? ' bg-yellow-400 hover:bg-yellow-500' : ' bg-gray-400 hover:bg-gray-500') +
                'rounded-md text-white font-extrabold text-center mr-2'}
                onClick={this.onClick} >
                < img className="object-scale-down h-12 w-12 p-1" src={faces[this.props.result]} alt="roll" />
            </button >
        );
    }
}

export default Dice; 