import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppComponent from './components/appComponent.jsx';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<AppComponent />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
