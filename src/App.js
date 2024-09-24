import CGV from './components/CGV';
import { Route, Routes } from 'react-router-dom';
import Page from './components/Page';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Page />} />
                <Route path='/CGV' element={<CGV />} />
            </Routes>
        </div>
    );
}

export default App;
