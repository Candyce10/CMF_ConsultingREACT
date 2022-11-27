import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './services.css';
import './const_page.css';
import './affiliates.css';
import './i18next';
import './404.css';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={(<div>Loading~~~</div>)}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Suspense>
);


