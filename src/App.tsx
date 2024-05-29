import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">WOLKI Grill</header>
      <div className="App-menu">
        <div className="App-menu-title">МЕНЮ</div>
        <img src="./menu.jpg" alt="menu" loading="lazy" />
        <div className="divider" />
        <div className="App-menu-title">БАР</div>
        <img src="./bar.png" alt="menu" loading="lazy" />
      </div>
    </div>
  );
}

export default App;
