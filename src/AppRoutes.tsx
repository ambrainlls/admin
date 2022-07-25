import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppNavBar from './components/main/header/navbar/NavBar';
import NotFound from './pages/notFound/NotFound';
import ContactUs from './pages/contactUs/ContactUs';
import Developers from './pages/developers/Developers';
import Feedback from './pages/feedback/Feedback';
import Projects from './pages/projects/Projects';
import LeftDrawer from "./pages/leftDrawer/LeftDrawer";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LeftDrawer />} />
                <Route path='contact-us' element={<ContactUs />} />
                <Route path='developers' element={<Developers />} />
                <Route path='feedback' element={<Feedback />} />
                <Route path='projects' element={<Projects />} />
                <Route path='not-found' element={<NotFound />} />
                <Route
                    path="*"
                    element={<Navigate to="/not-found" />}
                />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
