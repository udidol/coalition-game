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
                <button name={partyName} className={`${color}${isClicked ? ' clicked' : ''}`} onClick={onClicked}><strong>{partyNameHebrew}:</strong> {mandates} מנדטים</button>
            </div>
        );
    }
}

export default Party;