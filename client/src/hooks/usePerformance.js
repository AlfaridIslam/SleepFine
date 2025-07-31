import { useEffect, useRef } from 'react';

export const usePerformance = (componentName) => {
  const startTime = useRef(performance.now());
  const renderCount = useRef(0);

  useEffect(() => {
    const endTime = performance.now();
    const renderTime = endTime - startTime.current;
    renderCount.current += 1;

    // Log performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName}:`, {
        renderTime: `${renderTime.toFixed(2)}ms`,
        renderCount: renderCount.current,
        timestamp: new Date().toISOString(),
      });
    }

    // Reset start time for next render
    startTime.current = performance.now();
  });

  // Monitor memory usage
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
      const memoryInfo = performance.memory;
      console.log(`[Memory] ${componentName}:`, {
        usedJSHeapSize: `${(memoryInfo.usedJSHeapSize / 1048576).toFixed(2)} MB`,
        totalJSHeapSize: `${(memoryInfo.totalJSHeapSize / 1048576).toFixed(2)} MB`,
        jsHeapSizeLimit: `${(memoryInfo.jsHeapSizeLimit / 1048576).toFixed(2)} MB`,
      });
    }
  }, []);

  return {
    renderCount: renderCount.current,
  };
};

// Hook to measure component mount time
export const useMountTime = (componentName) => {
  useEffect(() => {
    const mountTime = performance.now();
    
    return () => {
      const unmountTime = performance.now();
      const totalTime = unmountTime - mountTime;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Lifecycle] ${componentName}:`, {
          mountTime: `${mountTime.toFixed(2)}ms`,
          unmountTime: `${unmountTime.toFixed(2)}ms`,
          totalTime: `${totalTime.toFixed(2)}ms`,
        });
      }
    };
  }, [componentName]);
};

// Hook to measure async operations
export const useAsyncPerformance = (operationName) => {
  const startTime = useRef(null);

  const startOperation = () => {
    startTime.current = performance.now();
  };

  const endOperation = () => {
    if (startTime.current) {
      const endTime = performance.now();
      const duration = endTime - startTime.current;
      
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Async] ${operationName}:`, {
          duration: `${duration.toFixed(2)}ms`,
          timestamp: new Date().toISOString(),
        });
      }
      
      startTime.current = null;
      return duration;
    }
    return 0;
  };

  return { startOperation, endOperation };
}; 