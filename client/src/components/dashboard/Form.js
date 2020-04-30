import React from "react";
import styled from "styled-components";
import avatar from '../../img/avatar1.jpg';

function Form() {
  return (
    <FormContainer div class="container">

      <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
        <li class="breadcrumb-item active" aria-current="page">Edit profile</li>
     </ol>
    </nav>

    <div class="media">
          <img src ={avatar} class = "align-self-center mr-3" alt = "avatar" style = {{height: '60px '}}></img>
          <div class="media-body">
            <h5 class="mt-0">Edit profile</h5>
            <p>Keeping your information updated ensures you stay on track of your health goals.</p>
         </div>
      </div>
      <hr/>

    <form>
        <div class="form-group row">
          <label for="input FirstName" class="col-sm-2 col-form-label">First Name</label>
          <div class="col-sm-10">
            <input type="FirstName" class="form-control" id="FirstName" placeholder="First Name"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="LastName" class="col-sm-2 col-form-label">Last Name</label>
          <div class="col-sm-10">
            <input type="LastName" class="form-control" id="LastName" placeholder="Last Name"/>
          </div>
        </div>
        {/* Age form needs validation, currently takes letters and numbers */}
        <div class="form-group row">
          <label for="Age" class="col-sm-2 col-form-label">Age</label>
          <div class="col-sm-10">
            <input type="Age" class="form-control" id="Age" placeholder="Age"/>
              <small id="passwordHelpInline" class="text-muted">
                Must be over 12 years old.
          </small>
          </div>
        </div>

        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Sex </legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label class="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label class="form-check-label" for="gridRadios2">
                  Female
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                <label class="form-check-label" for="gridRadios3">
                  I do not wish to disclose
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        </form>
        <hr/>


        <form>
          {/* Weight needs validation */}
        <div class="form-group row">
          <label for="Weight" class="col-sm-2 col-form-label">Weight</label>
          <div class="col-sm-10">
            <input type="Weight" class="form-control" id="Weight" placeholder="Weight in Pounds"/>
              <small id="passwordHelpInline" class="text-muted">
                Must be above 0.
          </small>
          </div>
        </div>
        <div class="form-group row">
          <label for="Height" class="col-sm-2 col-form-label">Height</label>
          <div class="col-sm-10">
            <input type="Height" class="form-control" id="Height" placeholder="Height in Feet"/>
              <small id="passwordHelpInline" class="text-muted">
                Must be above 0.
          </small>
          </div>
        </div>

        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Activity level</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                <label class="form-check-label" for="gridRadios1">
                  I never exercise
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                <label class="form-check-label" for="gridRadios2">
                  I exercise sometimes
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                <label class="form-check-label" for="gridRadios3">
                  I never miss a day!
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-2">Dietary restrictions</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1"/>
              <label class="form-check-label" for="gridCheck1">
                Vegetarian
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1"/>
              <label class="form-check-label" for="gridCheck1">
                Vegan
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck1"/>
              <label class="form-check-label" for="gridCheck1">
                Gluten Free
              </label>
            </div>
          </div>
        </div>
        <hr/>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Update Personal Information</button>
          </div>
        </div>
  </form>

    </FormContainer>
  );
}
export default Form;

const FormContainer = styled.section`
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 80px;
  }`
