import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import AddCard from '~/pages/ActionCard/AddCard';
import Detail from '~/pages/Detail/Detail';
import EditCard from '~/pages/ActionCard/EditCard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="" Component={Home} />
                    <Route path="/add" Component={AddCard} />
                    <Route path="/detail/:id" Component={Detail} />
                    <Route path="/edit/:id" Component={EditCard} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
