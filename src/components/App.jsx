import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<div>'Loading...'</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
