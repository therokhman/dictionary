import React from "react";
import { ThemeProvider, CssBaseline, Grid } from '@mui/material';
import theme from "./theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Definition from "./components/Definition";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
              <Grid container justifyContent="center">
                  <Grid item xs={12} sm={8} md={5} lg={6}>
                      <BrowserRouter>
                          <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/search/:word" element={<Definition />} />
                          </Routes>
                      </BrowserRouter>
                  </Grid>
              </Grid>
      </ThemeProvider>
  )
}

export default App;
