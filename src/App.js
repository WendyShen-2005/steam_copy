import './App.css';
import GameInfo from './components/GameInfo';
import NavBar from './components/NavBar';
import PageHeader from './components/PageHeader';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <PageHeader/>
      <GameInfo/>
    </div>
  );
}

export default App;
