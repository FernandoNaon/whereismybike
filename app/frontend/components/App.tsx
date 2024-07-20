import React, { useState, useEffect } from "react";
import MapContainer from "./MapContainer";
type Props = {};


const App: React.FC<Props> = () => {
  return (
    <div className="container">
      <h1>Where is my bike?</h1>
      <MapContainer />
    </div>
  );
};

export default App;
