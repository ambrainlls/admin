import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/notFound/NotFound';
import ContactUs from './pages/contactUs/ContactUs';
import Developers from './pages/developers/Developers';
import Feedback from './pages/feedback/Feedback';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import HomePage from './pages/homePage/HomePage';
import DashboardContainer from './pages/dashboardContainer/DashboardContainer';

function AppRoutes () {
    return (
        <BrowserRouter>
            <DashboardContainer />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact-us' element={<ContactUs />} />
                {/*<Route path='developers' element={<Developers />} />*/}
                <Route path='feedback' element={<Feedback />} />
                <Route path='projects' element={<Projects />} />
                <Route path='resume' element={<Resume />} />
                <Route path='not-found' element={<NotFound />} />
                {/*<Route*/}
                {/*    path="*"*/}
                {/*    element={<Navigate to="/not-found" />}*/}
                {/*/>*/}
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
