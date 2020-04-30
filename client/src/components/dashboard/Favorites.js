import React from 'react'
import styled from 'styled-components'
import calorie from '../../img/calories.svg'
import Dnavbar from './Dnavbar'
import Dfooter from './Dfooter'
function Favorites() {
    return (
      <div>
      <Dnavbar/>
      <FavsContainer div class="container">
      <div class="container">
          <div class="row">

              <div class="media">
              <img src ={calorie} alt = "calorie" style = {{height: '50px '}}></img>
                  <div class="media-body">
                      <h5 class="mt-0">Track your calories</h5>
                      <h6> Your Calorie count for today is:</h6>
                      <h6> You have N calories left to maintain your calorie goals.</h6>

              </div>

          </div>

       </div>
       <hr/>


  <div class="container">
      <div class="row">
          <div class="col">
              <div className = "Recipes-new">
                  <div className= "container">
                    <div class="list-group list-group-flush">
                      <li class="list-group-item"> Favorites</li>
                      <a class="list-group-item" href="/path"><strong>
                      {/* Recipe table */}
                      <div class="media">
                      <img src="..." class="align-self-start mr-3" alt="..."/>
                          <div class="media-body">
                              <h5 class="mt-0">Bat soup</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                          </div><button type="button" class="btn btn-outline-success">Add to favorites</button> </div> </strong></a>

                          <a class="list-group-item" href="/path"><strong>
                      {/* Recipe table */}
                      <div class="media">
                      <img src="..." class="align-self-start mr-3" alt="..."/>
                          <div class="media-body">
                              <h5 class="mt-0">Sad soup</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                          </div><button type="button" class="btn btn-outline-success">Add to favorites</button> </div> </strong></a>
                          <a class="list-group-item" href="/path"><strong>
                      {/* Recipe table */}
                      <div class="media">
                      <img src="..." class="align-self-start mr-3" alt="..."/>
                          <div class="media-body">
                              <h5 class="mt-0">Cat soup</h5>
                              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                          </div><button type="button" class="btn btn-outline-success">Add to favorites</button> </div> </strong></a>
                    </div>
                  </div>
              </div>
              </div>
           </div>
   </div>
</div>


{/* Pagination */}

<PaginationA nav aria-label="...">
<ul class="pagination">
  <li class="page-item disabled">
  <a class="page-link" href="#" tabindex="-1">Previous</a>
  </li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item active">
  <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
  </li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item">
  <a class="page-link" href="#">Next</a>
  </li>
</ul>
</PaginationA>

</FavsContainer>
<Dfooter/>
</div>
    )
}
export default Favorites;


const FavsContainer = styled.section`
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
  }`

  const PaginationA = styled.section`
  padding-top: 10px;
  width: 60%;
  margin: auto;
}`
