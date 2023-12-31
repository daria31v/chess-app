/* eslint-disable react-hooks/exhaustive-deps */
import React, {FC, useState, useRef, useEffect} from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";


interface TimeProps {
    currentPlayer: Player | null;
    restart: () => void;
};

const Timer: FC<TimeProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);

    const timer = useRef<null | ReturnType<typeof setInterval> >(null)

    useEffect(()=>{
        startTimer()
    }, [currentPlayer])

    function startTimer(){
        if(timer.current){
            clearInterval(timer.current);
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    };

    function decrementWhiteTimer(){
        setWhiteTime(prev => prev - 1);
    };

    function decrementBlackTimer(){
        setBlackTime(prev => prev - 1);
    };

    const handleRestart = () => {
        setWhiteTime(300);
        setBlackTime(300);
        restart();        
    }

    return (
        <div>
         <button className="btn-restart" onClick={handleRestart}>Restart game</button>

        <h3>Time for White = {whiteTime}</h3>
        <h3>Time for Black = {blackTime}</h3>
        </div>
    );
};


export default Timer;