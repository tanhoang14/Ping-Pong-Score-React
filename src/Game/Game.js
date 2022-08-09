import React, { useEffect, useState } from 'react';
import '../Game/Game.css'
import background from "../Style/PingPong.jpeg";

const Game = () => {
  const temp = localStorage.getItem('serve')
  const [leaderBoard,setLeaderBoard] = useState([])
  const [p1Score,setP1Score] = useState(0)
  const [p2Score,setP2Score]= useState(0)
  const [win, setWin] = useState('')
  const [isExtraRound, setExtraRound] = useState(false)
  const [serve, setServe] = useState(temp)
  const [isDisabled, setDisabled] = useState(false)
  const [total1, setTotal1] =useState(0)
  const [total2, setTotal2] = useState(0)


  const handlePlayer1Score = () =>{
    let countingP1Score = p1Score+1
    setP1Score(countingP1Score)
  }
   
  const handlePlayer2Score = () => {
    let countingP2Score = p2Score+1
    setP2Score(countingP2Score)
  }

  const handleReset = () =>{
    setP1Score(0)
    setP2Score(0)
    setWin('')
    setExtraRound(false)
    setDisabled(false)
    setServe(temp)
  }
  useEffect(() => {
    let totalScore = p1Score+p2Score; 
    console.log(totalScore)
    if(totalScore % 2 === 0 && totalScore !== 0) {
      if(serve.includes('1')){
        setServe('Player 2')
      }
      else{
        setServe('Player 1')
      }
    }

    if( p1Score === 10 && p2Score === 10 || isExtraRound){
      console.log("p1Score && p2Score")
      setExtraRound(true)
      if( p1Score - p2Score >= 2){
        console.log(p1Score,p2Score)
        setWin("Player 1 Wins")
        let totalP1 = total1 +p1Score
        let totalP2 = total2 +p2Score
        setTotal1(totalP1)
        setTotal2(totalP2)
        setLeaderBoard(current => [...current, localStorage.getItem('Player 1')  +' wins ' + p1Score+ '-'+ p2Score + ":cumulative " + totalP1 + '-' + totalP2]);
        setDisabled(true)
      }
      else if( p2Score - p1Score >= 2){
        setWin("Player 2 Wins")
        let totalP1 = total1 +p1Score
        let totalP2 = total2 +p2Score
        setTotal1(totalP1)
        setTotal2(totalP2)
        setLeaderBoard(current => [...current, localStorage.getItem('Player 2')  +' wins '+ p1Score + '-'+ p2Score + ":cumulative " + totalP1 + '-' + totalP2]);
        setDisabled(true)

      }
    }
    else{
      if(p1Score > 10 && p2Score <= 10 && isExtraRound === false){
        setWin("Player 1 Wins")
        let totalP1 = total1 +p1Score
        let totalP2 = total2 +p2Score
        setTotal1(totalP1)
        setTotal2(totalP2)
        setLeaderBoard(current => [...current, localStorage.getItem('Player 1')  +' wins '+ p1Score+ '-'+ p2Score + ":cumulative " + totalP1 + '-' + totalP2]);
        setDisabled(true)

      }
      if(p2Score >10 && p1Score <= 10 && isExtraRound === false){
        setWin("Player 2 Wins")
        let totalP1 = total1 +p1Score
        let totalP2 = total2 +p2Score
        setTotal1(totalP1)
        setTotal2(totalP2)
        setLeaderBoard(current => [...current, localStorage.getItem('Player 2')  +' wins ' + p1Score+ '-'+ p2Score + ":cumulative " + totalP1 + '-' + totalP2 ]);
        setDisabled(true)

      }
    }
}, [p1Score,p2Score])

  return (
    <>
    <div className='page-container'>
      <h3> Ping Pong Score Keeper</h3>

      <div className='background-container'>
          <img src={background} style={{ display:"flex",marginLeft:"10%", width:"80%", height:"80%"}}/>
      </div>

      <div className='display-score'>
          <span> {p1Score}</span>  VS  <span> {p2Score}</span>
          <div> {serve} will start the serve</div>
      </div>
     
      <div className='Win-Section'> {win} </div>
      <div className='buttons-container'>
        <button disabled={isDisabled} onClick={ () => handlePlayer1Score()}>+1 {localStorage.getItem('Player 1')}</button>
        <button disabled={isDisabled} onClick={ () => handlePlayer2Score()} >+1 {localStorage.getItem('Player 2')}</button>
        <button onClick={ () => handleReset()}>Reset</button>
      </div>
    </div>
  
    <div> {leaderBoard.map((record) => <h2>{record}</h2>)}</div>
    </>
  );
};

export default Game;
