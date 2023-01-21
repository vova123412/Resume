import React, { useState, useEffect } from 'react';
import { LinearProgress  } from '@material-ui/core';

const LoadingBar = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prevProgress => {
        if (prevProgress >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prevProgress + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <LinearProgress variant="determinate" value={loadingProgress} />;
    </div>
  );
};

export default LoadingBar