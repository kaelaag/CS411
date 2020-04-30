// React
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Layout from "./components/dashboard/dashboard";
import NotFound from "./components/404/404";
import LandingPage from "./components/landing/LandingPage";
import Favorite from "./components/dashboard/Favorites";
import Edit from "./components/dashboard/Form";
import Recipes from "./Components/Recipes";
import Saved from "./Components/Saved";

// axios
import axios from "axios";

// Style
import "./App.scss";

// Check for token to keep user logged in
if (localStorage.jwtTokenTeams) {
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtTokenTeams);
  setAuthToken(token);

  // Decode token and get user info and exp
  const decoded = jwt_decode(token);

  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./";
  }
}

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      user: null,
      recipes: {},
      queryStr: "",
      savedRecipes: {},
      calorieGoal: 0
    };
    this.fetchRecipes = this.fetchRecipes.bind(this);
    this.updateRecipes = this.updateRecipes.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  fetchRecipes(qryStr) {
    axios
    .post("/recipes", {
      query: qryStr
    })
      .then(res => {
        this.setState({
          recipes: res.data.data.hits
        });
      })
      .catch(err => console.log(err));
  }

  updateRecipes(cal) {
    axios
      .post("/recipes/update", {
        query: this.state.queryStr,
        calories: cal
      })
      .then(res => {
        this.setState({
          recipes: res.data.data.hits
        });
      })
      .catch(err => console.log(err));
  }

  saveRecipe = recipeObj => {
    axios
    .post("/recipes/save", {
      recipeId: recipeObj._id,
      id: this.state.user._id,
      name: recipeObj.label,
      link: recipeObj.url,
      image: recipeObj.image,
    });
  };
  
  
  render() {
    let user = Object.assign({}, this.state.user);
    
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/fitbit" />
              <Route exact path="/favorites" component={Favorite} />
              <Route exact path="/edit" component={Edit} />
              <PrivateRoute exact path="/dashboard" component={Layout} />
              <Route exact path="/saved" render={() => <Saved user={this.state.user} />} />
              <Route exact path="/recipes" render={() => (
                <Recipes
                  fetchRecipes = {this.fetchRecipes}
                  updateRecipes={this.updateRecipes}
                  recipes={this.state.recipes}
                  saveRecipe={this.saveRecipe}
                /> )}
              />
              <Route
                component={localStorage.jwtTokenTeams ? Layout : NotFound}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
