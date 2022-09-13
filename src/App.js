import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import { comedy,horror,action, originals } from './urls';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Orginals'/>
        <RowPost url={action}  title='Actions' isSmall/>
        <RowPost url={comedy}  title='Comedy' isSmall/>
        <RowPost url={horror}  title='Horror' isSmall/>
    </div>
  );
}

export default App;
