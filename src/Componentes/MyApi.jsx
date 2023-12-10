import { useState, useEffect } from "react";

const MyApi = ({ feriados, setFeriados }) => {
  useEffect(() => {
    fetch("https://api.victorsanmartin.com/feriados/en.json")
      .then(data => data.json())
      .then(f => setFeriados(f.data);
    setFeriados(f.data));
  }, []);

  return( 
    <div>
      {feriados.map(f=><p>{`${f.title}-${new Date (f.date).getDate}`}</p>)}
    </div>;
  )
  
export default MyApi;
