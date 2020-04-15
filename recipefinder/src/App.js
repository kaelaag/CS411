import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import image from './veggies.gif'
function App() {
  return (
  <div>
    <Navbar/>
    <br />
    <div class="media">
            <img src={image}class="align-self-center mr-3" alt="image"></img>
            <div class="media-body">
                <h5 class="mt-5">Center-aligned media</h5>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
        </div>
    <Footer/>

  </div>
  );
}

export default App;
