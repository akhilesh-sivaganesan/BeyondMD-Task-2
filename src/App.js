import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from "react";
const App = () => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };

  return (
    <>
      <h1>Hello BeyondMD!</h1>
      <Button variant="contained" onClick={handleView}>View Resume</Button>
      {view && (
        <iframe src="https://drive.google.com/file/d/1sBDGIaBdA-dQf7ro__sK9icdCicEhXuM/preview" width="400" height="500" allow="autoplay"></iframe>
      )}      
    </>
  );
};


export default App;
