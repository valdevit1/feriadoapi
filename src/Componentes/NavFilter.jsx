import { useState } from "react";

const NavFilter = ({ feriados, setFeriadosCopy }) => {
  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInput(value);
    const feriadosFiltrados = feriados.filter((f) => f.title.includes(value));
    setFeriadosCopy(FeriadosCopia);
  };
  const handleReset = (e) => {
    setFeriadosCopy(feriados);
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
