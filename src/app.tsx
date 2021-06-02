import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from '@/components/loading';
import routes from '@/routes';

const App = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <main className="container bg-body">
        <Routes>
          {routes.map(({ path, element: Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Routes>
      </main>
    </Router>
  </Suspense>
);

export default App;
