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
        <div> ${loadingProgress}</div>
      <LinearProgress variant="determinate"
         value={loadingProgress} 
         size="sm"
         color="secondary"
         style={{ height: '100px', width: '60px'}}
         thickness={302}
         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      />
      
    </div>
  );
};

export default LoadingBar