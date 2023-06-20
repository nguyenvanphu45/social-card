import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import AddCard from '~/pages/ActionCard/AddCard';
import Detail from '~/pages/Detail/Detail';
import EditCard from '~/pages/ActionCard/EditCard';
import { useSelector } from 'react-redux';
import { cardsRemainingSelector } from './redux/selectors';

function App() {
    const cardLists = useSelector(cardsRemainingSelector);
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="" Component={Home} />
                    <Route path="/add" Component={AddCard} />
                    {/* <Route path="/detail/:id" Component={Detail} /> */}
                    {cardLists.map((cartList) => {
                        return <Route path="/detail/:id" element={<Detail props={cartList} />} />}
                    )} 
                    <Route path="/edit/:id" Component={EditCard} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
