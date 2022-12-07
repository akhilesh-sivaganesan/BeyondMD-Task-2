import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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
        //'X-RapidAPI-Key': '92994eff54mshe6dc13d4b587db3p1201dajsn612ea6fb83bb',
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
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
    <Container maxWidth="lg">
      <div class="column">
        <div class="section">
          <div>
            <div class="row">
              <img width="200" height="200" src="https://images.squarespace-cdn.com/content/v1/5fbea594d49dd12447263cb2/1616114618707-0YCTARO6TC1H6OHH4KFT/Beyond+MD+Logo+Design.png"/>
              <Typography variant="h2" component="h2">
                Hello BeyondMD!
              </Typography>
            </div>
            <Button sx={{ width: 200, padding: 1, margin: 2 }} variant="contained" onClick={handleView}>View Resume</Button>
          </div>
          
          {view && (
            <iframe src="https://drive.google.com/file/d/1sBDGIaBdA-dQf7ro__sK9icdCicEhXuM/preview" class="resume" allow="autoplay"></iframe>
          )}
        </div>
        
        <div class="section">
          <Typography variant="h2" component="h2">
            Data from Diagnosis API
          </Typography>
          <Typography variant="subtitle1">
            <a href="https://rapidapi.com/rustemsoft/api/diagnosis/" target="_blank">View the Diagnosis API from RapidAPI</a>
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Symptom</TableCell>
                  <TableCell align="right">Similar Symptoms</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {medicalRecordList.map((record) => (
                  <TableRow
                    key={record['id']}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{record['id']}</TableCell>
                    <TableCell align="right">{record['category']}</TableCell>
                    <TableCell align="right">{record['symptom']}</TableCell>
                    <TableCell align="right">{record['similarSymptomsList']}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </Container>
      
  );
};


export default App;
