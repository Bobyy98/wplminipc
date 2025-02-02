// App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; // Import Navbar here
import PcComponents from './pages/PcComponents';
import RateUs from './pages/RateUs';
import WorkInProgress from './pages/Wip';
import SelectCpu from './pages/SelectCpu';

const App = () => {
  const [user, setUser] = useState(null); // State to manage user authentication

  return (
    <>
      <Navbar user={user} setUser={setUser} /> {/* Pass user and setUser to Navbar */}
      <Routes>
        <Route path="/" element={<Home user={user} />} /> 
        <Route path="/login" element={<Login setUser={setUser} />} /> 
        <Route path="/signin" element={<Signin />} />
        <Route path="/pc-components" element={<PcComponents user={user} />} />
        <Route path="/rate" element={<RateUs user={user} />} />
        <Route path="/wip" element={<WorkInProgress user={user} />} /> 
        <Route path="/select-cpu" element={<SelectCpu user={user} />} /> 
      </Routes>
    </>
  );
};

export default App;
