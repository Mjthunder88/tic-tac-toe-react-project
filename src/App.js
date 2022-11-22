import logo from './logo.svg';
import Square from './components/Square';
import './App.css';

function App() {
  const person = {
    name: "Marcus"
  }
  return (
    <div className="App">
      <Square name={person.name} />
    </div>
  );
}

export default App;
