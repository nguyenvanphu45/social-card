import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import Detail from '~/pages/Detail/Detail';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="" Component={Home} />
                    <Route path="/detail/:id" Component={Detail} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
