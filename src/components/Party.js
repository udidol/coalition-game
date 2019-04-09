import React, { Component } from 'react';

class Party extends Component {
    render() {
        const {
            partyName,
            partyNameHebrew, 
            color,
            isClicked,
            mandates,
            onClicked
        } = this.props;

        return (
            <div className="party-button">
                <button name={partyName} className={`${color}${isClicked ? ' clicked' : ''}`} onClick={onClicked}><span className="strong">{partyNameHebrew}</span>&nbsp; ({mandates})</button>
            </div>
        );
    }
}

export default Party;