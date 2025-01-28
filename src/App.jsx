
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardHome from './pages/DashboardHome.jsx';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import IndexLayout from './layouts/IndexLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Navbar from './components/Navbar.jsx'
import Infocard from './components/Infocard.jsx'

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<IndexLayout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>,
            <Route path="/signup" element={<SignupPage/>}/>,
        </Route>,
        <Route path="/dashboard" element={<DashboardLayout/>}>
        </Route>
    ])
)


export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
