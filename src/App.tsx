import "./App.scss";

// const EXTRA_DATA = [
//   { label: "Текила Olmeca silver 40мл", price: "20" },
//   { label: "Текила Olmeca gold 40мл", price: "20" },
// ];

// const STOCK_DATA = [{ label: "Настойки", price: "20" }];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="./wolki-logo.png"
          alt="menu"
          loading="lazy"
          className="logo"
        />
      </header>
      <div className="App-menu">
        <img src="./omenu.png" alt="menu" loading="lazy" />
        <div className="App-menu-title">МЕНЮ</div>
        <img src="./menu.jpeg" alt="menu" loading="lazy" />
        <div className="App-menu-title">БАР</div>
        <img src="./bar.jpeg" alt="menu" loading="lazy" />
        {/* <div className="App-menu-title">ДОП</div>
        <div className="App-menu-extra">
          <div>
            {EXTRA_DATA.map((el) => {
              return (
                <div key={el.label}>
                  <span>{el.label}</span>
                  <span>{el.price}</span>
                </div>
              );
            })}
          </div>
          <div>
            {STOCK_DATA.map((el) => {
              return (
                <div key={el.label}>
                  <span>{el.label}</span>
                  <span>{el.price}</span>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
