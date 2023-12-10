import { useState } from "react";
import MyApi from "./Componentes/MyApi";
import NavFilter from "./Componentes/NavFilter";
import "./App.css";

function App() {
  const [feriados, setFeriados] = useState([]);
  const [feriadosCopy, setFeriadosCopy] = useState([]);

  return (
    <>
      <NavFilter feriados={feriados} setFeriadosCopia={setFeriadosCopia} />
      <MyApi feriadoseriados={feriados} setFeriados={setFeriados} />
    </>
  );
}

export default App;
