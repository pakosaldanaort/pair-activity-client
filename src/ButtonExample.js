import React from 'react';

class ButtonExample extends React.Component {
    render() {
        return (
            <button id={this.props.id} onClick={ () => this.props.callbackFromParent(this.props.paco) }>Id {this.props.paco}</button>
        )
    }
}

export default ButtonExample;


// function a() {
//     console.log(1);
// }

// var fA = a;
// fA();
// a();

// var frA = a();


