import logo from './logo.svg';
import './App.css';
import PruevasComponent from './components/PruevasComponent'
import { AjaxComponent } from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <PruevasComponent />

        <AjaxComponent />
      </header>
    </div>
  );
}

export default App;
