import { Suspense } from 'react';
import Loading from '@/components/loading';
import Home from '@/pages/home';

const App = () => (
  <Suspense fallback={<Loading />}>
    <main className="fluid-container bg-body">
      <Home />
    </main>
  </Suspense>
);

export default App;
