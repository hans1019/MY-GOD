import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Import CSS file for styling

const ProgressBar = () => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 50); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="progress-number">{progress}%</p>
    </div>
  );
};

export default ProgressBar;