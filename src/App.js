import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello There Telegram! 🚀
        </h1>
        <p>
          {window.Telegram.WebApp.initData}
        </p>
      </header>
    </div>
  );
}

export default App;
