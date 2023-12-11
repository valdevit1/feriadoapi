import { useState, useEffect } from "react";

const MyApi = ({ setFeriados, feriadosCopy, setFeriadosCopy }) => {
  useEffect(() => {
    fetch("https://api.victorsanmartin.com/feriados/en.json")
      .then((data) => data.json())
      .then((f) => {
        setFeriados(f.data);
        setFeriadosCopy(f.data);
      });
  }, []);

  return (
    <div>
      {feriadosCopy.map((f) => (
        <p key={f.title}>
          {`${f.title}-${f.date}`}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2MnfLgWEju0ett4fmMUDTn28Bu_pCr5nvg&usqp=CAU" />
        </p>
      ))}
    </div>
  );
};
export default MyApi;
