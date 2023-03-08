import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="*" element={ <Navigate to="/" /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
