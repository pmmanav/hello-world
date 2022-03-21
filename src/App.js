import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Welcome } from './components/Welcome'
import Hello from './components/Hello';
import HelloWithoutJSX from './components/HelloWithoutJSX';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <HelloWithoutJSX />
    </div>
  );
}

export default App;
