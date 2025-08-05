import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CGV from './components/CGV/CGV';
import { Route, Routes } from 'react-router-dom';
import Page from './components/Page/Page';
import ThemeToggle from './components/ThemeToggle';
// ... autres imports ...

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <ThemeToggle />
                <Routes>
                    <Route path='/' element={<Page />} />
                    <Route path='/CGV' element={<CGV />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App; 