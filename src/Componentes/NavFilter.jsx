import { useState } from "react";

const NavFilter = ({ feriados, setFeriadosCopy }) => {
  const [input, setInput] = useState("");

  const handleChangeInput = (e) => {
    const value = e.target.value;
    setInput(value);
    const feriadosFiltrados = feriados.filter((f) => f.title.includes(value));
    setFeriadosCopy(feriadosFiltrados);
  };
  const handleReset = (e) => {
    setFeriadosCopy(feriados);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Busca el feriado "
        onChange={handleChangeInput}
        value={input}
      />
      <button type="button" class="btn btn-primary" onClick={handleReset}>
        Reset Filter
      </button>
    </div>
  );
};

export default NavFilter;
