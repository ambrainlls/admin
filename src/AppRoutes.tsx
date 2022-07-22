import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppNavBar from "./components/main/header/navbar/NavBar";
import NotFound from "./pages/NotFound/NotFound";

function AppRoutes () {
    return (
        <BrowserRouter>
            <AppNavBar />
            <Routes>
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