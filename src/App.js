import React from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "./theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Definition from "./components/Definition";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/search/:word" element={<Definition />} />
                  </Routes>
              </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;
