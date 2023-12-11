import { useState } from "react";
import MyApi from "./Componentes/MyApi";
import NavFilter from "./Componentes/NavFilter";
import "./App.css";

function App() {
  const [feriados, setFeriados] = useState([]);
  const [feriadosCopy, setFeriadosCopy] = useState([]);

  return (
    <>
      <NavFilter feriados={feriados} setFeriadosCopy={setFeriadosCopy} />
      <MyApi
        setFeriados={setFeriados}
        feriadosCopy={feriadosCopy}
        setFeriadosCopy={setFeriadosCopy}
      />
    </>
  );
}

export default App;
