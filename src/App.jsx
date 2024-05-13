import { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return 100;
        } else {
          return prevProgress + 10;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>Progress Bar Example</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
