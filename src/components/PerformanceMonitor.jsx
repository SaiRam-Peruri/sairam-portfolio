import React, { useEffect, useState } from 'react';

const PerformanceMonitor = ({ children }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Performance observer for tracking render times
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            setMetrics(prev => ({
              ...prev,
              loadTime: entry.loadEventEnd - entry.loadEventStart
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      // Cleanup observer
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Monitor memory usage (if supported)
    if ('memory' in performance) {
      const updateMemory = () => {
        setMetrics(prev => ({
          ...prev,
          memoryUsage: performance.memory.usedJSHeapSize / 1048576 // Convert to MB
        }));
      };

      updateMemory();
      const interval = setInterval(updateMemory, 5000); // Update every 5 seconds

      return () => clearInterval(interval);
    }
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return children;
  }

  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs p-2 rounded-lg backdrop-blur-sm border border-gray-700 z-50">
        <div className="flex flex-col gap-1">
          <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
          <div>Memory: {metrics.memoryUsage.toFixed(1)}MB</div>
        </div>
      </div>
    </>
  );
};

export default PerformanceMonitor;
