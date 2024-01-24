import React, { useState } from 'react';
import questions from '../questions';
import Result from './Result';

export default function QuestionBox() {
  const [highlightOptions, showHighlight] = useState('inline');
  const [correctAns, setCorrectAns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [currentQues, setQues] = useState(0);
  const [themeColor, changeColor] = useState('#FFF8E3');
  const [altTheme, changeTheme] = useState('#1D2B53');
  const [quesBoxColor, changeBoxColor] = useState('#F3D7CA');
  const [altBoxColor, changeBoxcolor] = useState('#7E2553');
  const [highlight, setHighlight] = useState('#4D9535');

  const theme = () => {
    changeColor((event) => (event === '#FFF8E3' ? '#1D2B53' : '#FFF8E3'));
    changeTheme((event) => (event === '#1D2B53' ? '#FFF8E3' : '#1D2B53'));
    changeBoxColor((event) => (event === '#F3D7CA' ? '#7E2553' : '#F3D7CA'));
    changeBoxcolor((event) => (event === '#7E2553' ? '#F3D7CA' : '#7E2553'));
  };
  const Hightlight = () => {
    setHighlight("#EB87E1");
  };
  const remove = () => {
    setHighlight("#4D9535");
  };
  const answers = (event) => {
    const curQuestion = questions[currentQues].options;
    const selectedOption = curQuestion.find((val) => val.id === event);
    if (selectedOption && selectedOption.isCorrect) {
      setCorrectAns((correct)=>correct + 1);
    }
    if (currentQues < questions.length - 1) {
      setQues((Ques)=>Ques + 1);
    } else {
      setShowResult(true);
      showHighlight('none');
    }
  };
  return (
    <div style={{ backgroundColor: themeColor }}>
      <button className="theme" onClick={theme}>THEME CHANGE</button>
      {showResult ? (
        <Result style={{ backgroundColor: quesBoxColor }} correctAnswers={correctAns}  background = {quesBoxColor}/>
      ) : (
        <div className="questionBox" style={{ backgroundColor: quesBoxColor }}>
          <h2>{currentQues + 1} of 5</h2>
          <h1 style={{ color: highlight }}>Q{currentQues + 1}. {questions[currentQues].text}</h1>
          <div className="options">
            {questions[currentQues].options.map((option, num) => (
              <button className={`option${num + 1}`} onClick={() => answers(option.id)} >{option.text}</button>
            ))}
          </div>
        </div>
      )}
      <div className="highlighter">
        <button className="highlight" onClick={Hightlight} style={{display: highlightOptions}}>Highlight</button>
        <button className="highlight" onClick={remove} style={{display: highlightOptions}}>Remove Highlight</button>
      </div>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
}