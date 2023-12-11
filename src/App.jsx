import { useState } from "react";
import MyApi from "./Componentes/MyApi";
import NavFilter from "./Componentes/NavFilter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  const [feriados, setFeriados] = useState([]);
  const [feriadosCopy, setFeriadosCopy] = useState([]);

  return (
    <>
      <h5>LISTA DE FERIADOS EN CHILE</h5>
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
