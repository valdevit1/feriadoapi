import { useState, useEffect } from "react";

const MyApi = ({ feriados, setFeriados }) => {
  useEffect(() => {
    
    fetch("https://api.victorsanmartin.com/feriados/en.json")
      .then(data =>{ return data.json()
      })
  ),[]}

  return (
    <div>
      MIAPI
    </div>
  );


export default MyApi;
