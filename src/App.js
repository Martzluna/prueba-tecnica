import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import CreateProduct from './Components/CreateProduct';
import ListProducts from './Components/ListProducts';
import ShowProduct from './Components/ShowProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/create" element={<CreateProduct />}>
          </Route>
          <Route path="/list" element={<ListProducts />}>
          </Route>
          <Route path="/detailProduct/:id" element={<ShowProduct />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
