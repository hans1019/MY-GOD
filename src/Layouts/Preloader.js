import React, {useState, useEffect} from "react";
import "./Preloader.css";
export default function Preloader() {
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
    <>
      <div className="loader">
        <div className="loader-top">
          <div className="loader_progress" style={{ width:`${progress}%`}}></div>
          <div className="loader_top_wrapper">
            <p className="loader_text is-lefet">Matteo Fabbiani</p>
            <p className="loader_text is-right">
              BRAND STRATEGY • BRAND IDENTITY • WEBSITE EXPERIENCE
            </p>
          </div>
        </div>
        <div className="loader-bottom">
          <div className="loader_bottom_wrapper">
            <p className="loader_number">{progress}</p>
          </div>
        </div>
      </div>
    </>
  );
}
