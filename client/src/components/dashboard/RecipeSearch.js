import React, { Component } from "react";
import axios from "axios";
import Recipes from "./Components/Recipes";
import Saved from "./Components/Saved";
// import Footer from "./Components/Footer";                                    // Maha's Footer
// import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Logo from "./Images/recipeFinderLogo.png";                            // Maha's logo

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
    let nav;
    let contents;
      nav = (
        <>
          <div className="nav-box">
            <nav>
              <Link className="nav-text" to="/recipes">
                Recipe Search
              </Link>{" "}
              |{" "}
              <Link className="nav-text" to="/saved">
                Saved Recipes
              </Link>
            </nav>
          </div>
        </>
      );
      contents = (
        <>
          <Route
            exact
            path="/saved"
            render={() => <Saved user={this.state.user} />}
          />
          <Route
            exact
            path="/recipes"
            render={() => (
              <Recipes
                fetchRecipes = {this.fetchRecipes}
                updateRecipes={this.updateRecipes}
                recipes={this.state.recipes}
                saveRecipe={this.saveRecipe}
              />
            )}
          />
        </>
      );
    return (
      <Router>
        <div className="App">
          <img className="logo" src={Logo} alt="logo" />
          <div className="nav-box">
            <nav>{nav}</nav>
          </div>
          {contents}

        </div>
      </Router>
    );
  }
}

export default App;
