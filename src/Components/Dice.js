import React from 'react';
import faces from '../Data/Faces'


class Dice extends React.Component {

    onClick = (e) => {
        this.props.onClick(this.props.id, this.props.result);
    }

    render() {
        return (<div onClick={this.onClick}>
            {(this.props.result + this.props.id) % 3 ? "Gold : " : ""} {faces[this.props.result - 1]}
        </div>);
    }
}

export default Dice; 