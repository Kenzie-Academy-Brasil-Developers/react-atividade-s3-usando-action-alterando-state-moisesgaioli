import './App.css';
import UserCard from './components/UserCard';
import Username from './components/Username';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Username />
        <UserCard />
      </header>
    </div>
  );
}

export default App;
