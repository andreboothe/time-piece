import React from 'react';

// Includes
import './PocketWatch.css';

const PocketWatch = ({minuteHandPostion, hourHandPosition, secondHandPostion}) => {

    return (
        <section className="section">
            <div className="container ">
                <div className="clock-frame center">
                    <div id="time-marks">
                        <div className="time-mark time-mark--1">I</div>
                        <div className="time-mark time-mark--2">II</div>
                        <div className="time-mark time-mark--3">III</div>
                        <div className="time-mark time-mark--4">IV</div>
                        <div className="time-mark time-mark--5">V</div>
                        <div className="time-mark time-mark--6">VI</div>
                        <div className="time-mark time-mark--7">VII</div>
                        <div className="time-mark time-mark--8">VIII</div>
                        <div className="time-mark time-mark--9">IX</div>
                        <div className="time-mark time-mark--10">X</div>
                        <div className="time-mark time-mark--11">XI</div>
                        <div className="time-mark time-mark--12">XII</div>
                    </div>
                    <div className="inner-frame">
                        <div className="back-ground">
                        </div>
                        <div className="nob"></div>
                        <div id="clock-hands">
                            
                            <div 
                                className="clock-hand clock-hand--minute-hand"
                                style={{
                                    transform: `rotate(${minuteHandPostion}deg)`
                                }}
                            ></div>
                            <div 
                                className="clock-hand clock-hand--hour-hand"
                                style={{
                                    transform: `rotate(${hourHandPosition}deg)`
                                }}
                            ></div>
                            <div 
                                className="clock-hand clock-hand--second-hand"
                                style={{
                                    transform: `rotate(${secondHandPostion}deg)`
                                }}
                            ></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default PocketWatch;