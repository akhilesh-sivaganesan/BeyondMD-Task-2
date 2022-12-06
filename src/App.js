import './App.css';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { Logger } from "logging-library";
import FileViewer from "react-file-viewer";
import { CustomErrorComponent } from "custom-error";
const file = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFquUdIOtcM_jAE5BPAcBz4gY0UsdI-0XywAHim3CPKO_T-h3ZGyRrsKxaZHEb29VnP1U&usqp=CAU";
const type = "png";
const App = () => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };

  const onError = (e) => {
    Logger.logError(e, "error in file-viewer");
  };

  return (
    <>
      <h1>Hello BeyondMD!</h1>
      <Button variant="contained" onClick={handleView}>View</Button>
      {view && (
        <FileViewer
          fileType={type}
          filePath={file}
          errorComponent={CustomErrorComponent}
          onError={onError}
        />
      )}
    </>
  );
};


export default App;
