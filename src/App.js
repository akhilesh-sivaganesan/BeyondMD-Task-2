import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
const App = () => {
  const [view, setView] = useState(false);
  const [medicalRecordList, setMedicalRecordList] = useState([]);
  const [medicalRecordCount, setMedicalRecordCount] = useState(20);

  const handleView = () => {
    setView(!view);
  };
  
  //const axios = require("axios");

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://diagnosis.p.rapidapi.com/api/DDxItems/GetSymptoms',
      params: {AuthenticationID: 'DEMO_AuthenticationID'},
      headers: {
        'X-RapidAPI-Key': '92994eff54mshe6dc13d4b587db3p1201dajsn612ea6fb83bb',
        'X-RapidAPI-Host': 'diagnosis.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      const slicedArray = response.data.slice(0, 20);
      setMedicalRecordList(slicedArray);
      console.log(slicedArray);
    }).catch(function (error) {
      console.error(error);
    });
  
  }, [])
  

  return (
    <div class="column">
      <Typography variant="h1" component="h2">
        Hello BeyondMD!
      </Typography>

      <Button sx={{ width: 200, padding: 1, margin: 2 }} variant="contained" onClick={handleView}>View Resume</Button>
      {view && (
        <iframe src="https://drive.google.com/file/d/1sBDGIaBdA-dQf7ro__sK9icdCicEhXuM/preview" class="resume" allow="autoplay"></iframe>
      )}

      <p>{medicalRecordList.length}</p>
    </div>
  );
};


export default App;
