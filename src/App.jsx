import LandingPage from './pages/LandingPage.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import DashboardHome from './pages/DashboardHome.jsx';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './index.css';
import IndexLayout from './layouts/IndexLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path="/" element={<IndexLayout/>}>
            <Route index element={<LandingPage/>}/>
        </Route>,
        <Route path="/login" element={<Login/>}/>,
        <Route path="/signup" element={<SignUp/>}/>,
        <Route path="/dashboard" element={<DashboardLayout/>}>
        </Route>
    ])
)

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
