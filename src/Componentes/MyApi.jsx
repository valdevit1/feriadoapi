import { useState, useEffect } from "react";

const MyApi = ({ feriados, setFeriados }) => {
  useEffect(() => {
 
      const data = fetch("https://api.victorsanmartin.com/feriados/en.json")
        .then((data) => data.json())
        .then((f) => f);
        setFeriados{data};
    );
  }, []);

  return <div>MIAPI</div>;
};
export default MyApi;
