import React from 'react';

// Includes
import './PocketWatch.css';

const PocketWatch = ({minuteHandPostion, hourHandPosition, secondHandPostion, onClickFlipLid}) => {

    return (
        <section className="section">
            <div className="container ">
                <div className="clock-frame center clock-frame__bg-grey-white">
                    <div onClick={onClickFlipLid} className="clock-frame__lid"></div>
                    <div id="time-marks">
                        <div className="time-mark time-mark--1 time-mark--dark">I</div>
                        <div className="time-mark time-mark--2 time-mark--dark">II</div>
                        <div className="time-mark time-mark--3 time-mark--dark">III</div>
                        <div className="time-mark time-mark--4 time-mark--light">IV</div>
                        <div className="time-mark time-mark--5 time-mark--light">V</div>
                        <div className="time-mark time-mark--6 time-mark--light">VI</div>
                        <div className="time-mark time-mark--7 time-mark--light">VII</div>
                        <div className="time-mark time-mark--8 time-mark--light">VIII</div>
                        <div className="time-mark time-mark--9 time-mark--light">IX</div>
                        <div className="time-mark time-mark--10 time-mark--dark">X</div>
                        <div className="time-mark time-mark--11 time-mark--dark">XI</div>
                        <div className="time-mark time-mark--12 time-mark--dark">XII</div>
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