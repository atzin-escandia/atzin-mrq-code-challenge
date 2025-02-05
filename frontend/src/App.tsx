import './App.css';
import Router from '@/router';
import Navbar from '@/components/Navbar';

function App() {
  return (
    <div className="App">
      <h2>STOCKS</h2>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
