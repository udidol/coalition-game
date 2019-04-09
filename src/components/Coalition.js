import React, { Component } from 'react';

class Coalition extends Component {
    seatFactory() {
        let seatsArr = [],
            totalSeats = 0,
            seatBgColors = '',
            seatBorderColors = '',
            seatBackBorderColors = '';

        for (let i=0; i<30; i++) {
            for (let j=0; j<4; j++) {
                seatBgColors = this.props.coalitionMandates > totalSeats ? 'rgba(69, 117, 204, 1)' : 'rgba(69, 117, 139, 0)';
                seatBorderColors = this.props.coalitionMandates > totalSeats ? '#4575CC' : '#adadad';
                seatBackBorderColors = this.props.coalitionMandates > totalSeats ? '#ffffff' : '#adadad';

                seatsArr.push(<div className={`seat s${j}`} key={totalSeats+100} style={{backgroundColor: `${seatBgColors}`, borderColor: `${seatBorderColors}`, top: `${-0.132*i*i+3.96*i+30*j}px`, left: `${3*i+3.5}%` }}><div className="seatBack" style={{borderColor: `${seatBackBorderColors}`}}></div></div>);
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
