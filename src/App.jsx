import { useState } from "react";
import MyApi from "./Componentes/MyApi";
import NavFilter from "./Componentes/NavFilter";
import "./App.css";

function App() {
  const [feriados, setFeriados] = useState([]);
  const [feriadosCopia, setFeriadosCopia] = useState([]);

  return (
    <>
      <NavFilter feriados={feriados} setFeriadosCopia={setFeriadosCopia} />
      <MyApi
        setFeriados={setFeriados}
        feriadosCopia={setFeriados}
        setFeriadosCopia={setFeriadosCopia}
      />
    </>
  );
}

export default App;
