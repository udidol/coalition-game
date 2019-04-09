import React, { Component } from 'react';

class Coalition extends Component {
    seatFactory() {
        let seatsArr = [];
        let totalSeats = 0;

        for (let i=0; i<30; i++) {
            for (let j=0; j<4; j++) {
                seatsArr.push(<div className={`seat s${j}`} key={totalSeats+100} style={{backgroundColor: `${this.props.coalitionMandates > totalSeats ? 'rgba(0, 0, 139, 1)' : 'rgba(0, 0, 139, 0)'}`, top: `${-0.132*i*i+3.96*i+30*j}px`, left: `${3*i+5.5}%` }}><div className="seatBack"></div></div>);
                totalSeats++;
            }
        }

        return seatsArr;
    }

    render() {
        return (
            <div className="coalition">
                {this.seatFactory()}
            </div>
        );
    }
}

export default Coalition;
