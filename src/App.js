import React from 'react';
import Grid from "./components/Grid";
import Controller from "./components/Controller";

function App() {
  return (
    <>
      <Controller/>
      <Grid />

      <p style={{border: "1px solid black", margin: "20px auto", textAlign: "center", width: "60%"}}>Rules: If a cell is alive and it has two or three alive neighbors it continues living. Otherwise it dies. If a cell is dead and it has three neighbors it becomes alive.</p>
    </>
  );
}

export default App;
