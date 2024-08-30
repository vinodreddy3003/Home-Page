import React, { useEffect } from 'react';
//import axios from 'axios';
import PieQ from './PieQ';
import Result from './Result';
import './MainResult.css';

const MainResult = ({ data,score, correctAnswers, wrongAnswers }) => {
  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await axios.post('https://your-backend-url.com/api/results', {
          
          data
        });
        console.log('Data sent successfully:', response.data);
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };

    sendData();
  }, [score, correctAnswers, wrongAnswers]);
  return (
    <div>
      <h1 className='main-result'>Quiz Results</h1>
      <div className='results-container'>
        <Result
          total={score}
          correct={correctAnswers}
          wrong={score - correctAnswers}
        />
        <PieQ correct={correctAnswers} wrong={score - correctAnswers} />
      </div>
    </div>
  );
};

export default MainResult;
