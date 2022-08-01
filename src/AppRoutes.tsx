import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/notFound/NotFound';
import ContactUs from './pages/contactUs/ContactUs';
import Employees from './pages/employees/Employees';
import Feedback from './pages/feedback/Feedback';
import Resume from './pages/resume/Resume';
import Layout from './pages/Layout';

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Employees />} />
                    <Route path='contact-us' element={<ContactUs />} />
                    <Route path='employees' element={<Employees />} />
                    <Route path='feedback' element={<Feedback />} />
                    <Route path='resume' element={<Resume />} />
                    <Route path='not-found' element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
