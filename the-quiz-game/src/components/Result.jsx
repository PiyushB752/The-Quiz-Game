import React, { useState } from 'react'
import './Result.css'

export default function Result({ correctAnswers , background }) {
  const restart = () =>{
    window.location.reload()
  }
  return (
    <div>
      <div className='result'>
        <div className="resultBox" style={{backgroundColor: background }}>
          <h1>Final result</h1>
          <br />
          <h3>{correctAnswers} of 5 correct - ({(correctAnswers/5)*100}%)</h3>
          <button className='restart' onClick={restart}>Restart game</button>
        </div>
      </div>
    </div>
  )
}
