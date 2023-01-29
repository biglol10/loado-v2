import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteElementMatch from '@pages/index';
import { Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const POSTS = [
  { id: '1_1', title: 'Post 1_1', userId: 'biglol@nate.com' },
  { id: '1_2', title: 'Post 1_2', userId: 'asdf@nate.com' },
];

const USERS = [
  { id: 'biglol@nate.com', name: 'biglol' },
  { id: 'asdf@nate.com', name: 'asdf' },
];

localStorage.setItem('POSTS', JSON.stringify(POSTS));
localStorage.setItem('USERS', JSON.stringify(USERS));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader active inline="centered" />}>
        <Routes>
          {RouteElementMatch.map((el, idx) => {
            const DynamicElement = lazy(() => import(`${el.elementPath}`)); // 백틱으로 넣어야 작동

            return <Route key={`pageElement_${idx}`} path={el.path} element={<DynamicElement />} />;
          })}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
