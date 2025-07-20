import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load components for better performance
const Home = React.lazy(() => import('./pages/Home'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));
const ResumePage = React.lazy(() => import('./pages/ResumePage'));
const DownloadsPage = React.lazy(() => import('./pages/DownloadsPage'));

// Loading component
const LoadingScreen = () => (
  <div className="min-h-screen bg-white dark:bg-dark-900 flex items-center justify-center relative">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center relative"
    >
      <div className="spinner mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Loading...</p>
    </motion.div>
  </div>
);

// Page transition wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <Router>
      <div className="App relative">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
                <Route 
                  path="/" 
                  element={
                    <PageWrapper>
                      <Home />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/blog" 
                  element={
                    <PageWrapper>
                      <BlogPage />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/blog/:slug" 
                  element={
                    <PageWrapper>
                      <BlogPostPage />
                    </PageWrapper>
                  } 
                />
                <Route 
                  path="/resume"
                  element={( <PageWrapper> <ResumePage /> </PageWrapper> )}
                />
                <Route 
                  path="/downloads"
                  element={( <PageWrapper> <DownloadsPage /> </PageWrapper> )}
                />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </div>
      </Router>
  );
}

export default App;
