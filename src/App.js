import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/navbar/NavBar';
import Search from './components/search/Search';

function App() {
  return (
    <MuiThemeProvider>
      <Navbar />
      <Search />
    </MuiThemeProvider>
  );
}

export default App;
