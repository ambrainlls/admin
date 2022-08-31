import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/notFound/NotFound';
import ContactUs from './pages/contactUs/ContactUs';
import Employees from './pages/employees/Employees';
import Feedback from './pages/feedback/Feedback';
import Resume from './pages/resume/Resume';
import Layout from './pages/Layout';
import Project from './pages/Project/Project';
import Metric from './pages/metric/Metric';
import GitMetric from './pages/gitMetric/GitMetric';
import JiraMetric from './pages/jiraMetric/JiraMetric';
import Jobs from './pages/jobs/Jobs';

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
                    <Route path='projects' element={<Project />}/>
                    <Route path='metric' element={<Metric />}/>
                    <Route path='git-metric/:userId' element={<GitMetric />}/>
                    <Route path='jira-metric/:id' element={<JiraMetric />}/>
                    <Route path='jobs' element={<Jobs />} />
                    <Route path='not-found' element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
