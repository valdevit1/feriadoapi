import { useState, useEffect } from "react";

const MyApi = ({ setFeriados, feriadosCopy, setFeriadosCopy }) => {
  useEffect(() => {
    fetch("https://api.victorsanmartin.com/feriados/en.json")
      .then(data => data.json())
      .then(f => 
    setFeriados(f.data);
    setFeriadosCopy(f.data));
  }, []);

  return( 
    <div>
      {feriadosCopy.map(f=><p>{`${f.title}-${f.date}`}</p>)}
    </div>;
  )
}
export default MyApi;
