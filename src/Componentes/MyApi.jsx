import { useState, useEffect } from "react";

const MyApi = ({ setFeriados, feriadosCopia, setFeriadosCopia }) => {
  useEffect(() => {
    fetch("https://api.victorsanmartin.com/feriados/en.json")
      .then((data) => data.json())
      .then((f) => {
        setFeriados(f.data);
        setFeriadosCopia(f.data);
      });
  }, []);

  return (
    <div>
      {feriados.map((f) => (
        <p>{"${f.title} - ${f.date}"}</p>
      ))}
    </div>
  );
};

export default MyApi;
