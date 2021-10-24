import React, { Component } from 'react';

class Keypads extends Component {

    render() {
        const disableBtn = !this.props.clearBtnEnabled;
        return (
            <div className="input">
                <div className="actions">
                    <button className="reset" onClick={this.props.reset}>Reset</button>
                    <button className="clear" disabled={disableBtn} onClick={this.props.clearInput}>Clear</button>
                </div>
                <div className="keypad">
                    <button className="btn" value="7" onClick={this.props.inputHandler}>7</button>
                    <button className="btn" value="8" onClick={this.props.inputHandler}>8</button>
                    <button className="btn" value="9" onClick={this.props.inputHandler}>9</button>
                    <button className="btn mathsSymbol" value="/" onClick={this.props.inputHandler}>/</button>
                    <button className="btn" value="4" onClick={this.props.inputHandler}>4</button>
                    <button className="btn" value="5" onClick={this.props.inputHandler}>5</button>
                    <button className="btn" value="6" onClick={this.props.inputHandler}>6</button>
                    <button className="btn mathsSymbol" value="*" onClick={this.props.inputHandler}>*</button>
                    <button className="btn" value="1" onClick={this.props.inputHandler}>1</button>
                    <button className="btn" value="2" onClick={this.props.inputHandler}>2</button>
                    <button className="btn" value="3" onClick={this.props.inputHandler}>3</button>
                    <button className="btn mathsSymbol" value="-" onClick={this.props.inputHandler}>-</button>
                    <button className="btn" value="." onClick={this.props.inputHandler}>.</button>
                    <button className="btn" value="0" onClick={this.props.inputHandler}>0</button>
                    <button className="btn mathsSymbol" value="=" onClick={this.props.getResult}>=</button>
                    <button className="btn mathsSymbol" value="+" onClick={this.props.inputHandler}>+</button>
                </div >
            </div>
        );
    }
}

export default Keypads;