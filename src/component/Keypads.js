import React, { Component } from 'react';

class Keypads extends Component {

    render() {
        const disableBtn = !this.props.clearBtnEnabled;
        return (
            <div>
                <div className="actions">
                    <button className="button" onClick={this.props.reset}>Reset</button>
                    {/* <button className={"button " + disableBtn ? "disableBtn" : ""} disabled={disableBtn} onClick={this.props.clearInput}>Clear</button> */}
                    <button className="button" disabled={disableBtn} onClick={this.props.clearInput}>Clear</button>
                </div>
                <div>
                    <div className="keypad">
                        <button className="button" value="7" onClick={this.props.inputHandler}>7</button>
                        <button className="button" value="8" onClick={this.props.inputHandler}>8</button>
                        <button className="button" value="9" onClick={this.props.inputHandler}>9</button>
                        <button className="button" value="/" onClick={this.props.inputHandler}>/</button>
                        <button className="button" value="4" onClick={this.props.inputHandler}>4</button>
                        <button className="button" value="5" onClick={this.props.inputHandler}>5</button>
                        <button className="button" value="6" onClick={this.props.inputHandler}>6</button>
                        <button className="button" value="*" onClick={this.props.inputHandler}>*</button>
                        <button className="button" value="1" onClick={this.props.inputHandler}>1</button>
                        <button className="button" value="2" onClick={this.props.inputHandler}>2</button>
                        <button className="button" value="3" onClick={this.props.inputHandler}>3</button>
                        <button className="button" value="-" onClick={this.props.inputHandler}>-</button>
                        <button className="button" value="." onClick={this.props.inputHandler}>.</button>
                        <button className="button" value="0" onClick={this.props.inputHandler}>0</button>
                        <button className="button" value="=" onClick={this.props.getResult}>=</button>
                        <button className="button" value="+" onClick={this.props.inputHandler}>+</button>
                    </div >

                </div>
            </div>
        );
    }
}

export default Keypads;