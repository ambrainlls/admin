import React from 'react';
import AppRoutes from './AppRoutes';
import DashboardContainer from './pages/dashboardContainer/DashboardContainer';
import './App.css';

function App() {
    return (
        <div className="App">
            <DashboardContainer />
            <AppRoutes />
        </div>
    );
}

export default App;
