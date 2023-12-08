import { useState } from "react";

const NavFilter = ({ feriados, setFeriadosCopia }) => {
  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInput(value);
    const feriadosFiltrados = feriados.filter((f) => f.title.includes(value));
    setFeriadosCopia(setFeriadosCopia);
  };
  const handleReset = (e) => {
    setFeriadosCopia(feriados);
    setInput("");
  };
  return (
    <div>
      <input type="text" onChange={handleChangeInput} value={input} />
      <button onClick={handleReset}>Reset Filter</button>
    </div>
  );
};

export default NavFilter;
