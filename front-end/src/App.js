import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dnavbar from './components/Dnavbar'
import Dfooter from './components/Dfooter'
import Recipes from './components/Recipes'
import Form from './components/Form'
import Favorites from './components/Favorites'
import NotFound from './components/NotFound'
import image from './veggies.gif'

function App() {
  return (
  <div>
    <Dnavbar/>
    {/* <Form/> */}
    {/* <Recipes/> */}
    <Favorites/>
    {/* <NotFound/> */}
    <Dfooter/>

  </div>
  );
}

export default App;

