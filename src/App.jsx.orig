import React from 'react';
import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import DashboardHome from './pages/DashboardHome.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
			<Route exact path="/login" element={<Login/>} />
			<Route exact path="/signup" element={<SignUp/>}/>
			<Route exact path="/dashboard-home" element ={<DashboardHome/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
