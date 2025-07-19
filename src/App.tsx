import { useState } from "react";
import "./App.scss";
import Bar from "./bar";
import Menu from "./menu";

function App() {
  const [lang, setLang] = useState<"ru" | "en" | "zh">("ru");

  return (
    <div className="App">
      <Menu lang={lang} setLang={setLang} />
      <Bar lang={lang} />
    </div>
  );
}

export default App;
