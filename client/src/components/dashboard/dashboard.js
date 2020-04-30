import React from 'react';
import './dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dnavbar from './Dnavbar'
import Dfooter from './Dfooter'
import Recipes from './Recipes'
import Form from './Form'
import Favorites from './Favorites'
import NotFound from '../404/404'
import image from '../../img/veggies.gif'

function App() {
  return (
  <div>
    <Dnavbar/>
    {/* <Form/> */}
     <Recipes/>
    {/* <Favorites/> */}
    {/* <NotFound/> */}
    <Dfooter/>

  </div>
  );
}

export default App;
