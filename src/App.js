import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Painel from './components/Painel'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="painel" element={<Painel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
