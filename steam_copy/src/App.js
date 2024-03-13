import './App.css';
import NavBar from './NavBar';
import PageHeader from './PageHeader';
import GameInfo from './GameInfo';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div style={{padding: "75px", 
            paddingTop: "130px", 
            maxWidth: "1000px",
            margin: "0 auto"           
          }}>
        <PageHeader/>
        <GameInfo/>
      </div>
    </div>
  );
}

export default App;
