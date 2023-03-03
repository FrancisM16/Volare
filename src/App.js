import './App.css';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenidos todos!"/>
      <ItemCount/>
    </div>
  );
}

export default App;
