import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';



import GuildDefensePage from './pages/GuildDefensePage';
import GuildDefenseBuildPage from './pages/GuildDefenseBuildPage';

import GuildOffenseSetupPage from './pages/GuildOffenseSetupPage';

import GuildOffenseCounterPage from './pages/GuildOffenseCounterPage';
import GuildOffenseDetailPage from './pages/GuildOffenseDetailPage';

const App = () => {
  return (
    <Router>

      <Routes>
  

        <Route path="/" element={<Home />} />
        
 <Route path="/guild-defense" element={<GuildDefensePage />} />
  <Route path="/guild-defense/build" element={<GuildDefenseBuildPage />} />

<Route path="/guild-offense/setup" element={<GuildOffenseSetupPage />} />

 <Route path="/guild-offense" element={<GuildOffenseCounterPage />} />
      <Route path="/guild-offense-detail/:category/:teamIndex" element={<GuildOffenseDetailPage />} />



      </Routes>
    </Router>
  );
};

export default App;
