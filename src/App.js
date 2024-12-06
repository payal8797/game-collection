// App.js  
import React from 'react';  
import { BrowserRouter as Router } from 'react-router-dom';  
import Main from './Main'; // Import the Main component  

function App() {  
  return (  
    <Router>  
      <Main />  
    </Router>  
  );  
}  

export default App;