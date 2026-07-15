import React, {useState, useEffect} from 'react';

import './progress-bar.css';


//https://alligator.io/react/react-hooks/
// pass percentRange state through props to Range an ProgressBar components
const Range = (props) => {
    return (
        // render current the filled range of progress bar along its width
        <div className="range" style={{width: `${props.percentRange}%`}}/>
    );
};

const ProgressBar = (props) => {
  return (
      <div className="progress-bar">
          {/*render available progress bar’s limit*/}
          <Range percentRange={props.percentRange}/>
      </div>
  );
};


function EffectedFn() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000 * 10);
    });
  
    return (
      <div>
        {loading && <span>Loading...</span>}
        {!loading && <span>All Done!</span>}
      </div>
    );
  }




export const ProgressBarContainer = (props) => {
  let [percentRange, setProgress] = useState(0);

  return (
     
          
          <ProgressBar percentRange={props.percent}/>
    
  );
};