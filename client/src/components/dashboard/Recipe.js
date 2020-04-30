import React, {Component} from 'react'

class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: {},
      didUpdate: false,
      ingredients: "corona"
    }
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
  }

  handleIngredientsChange(e) {
    this.setState({
      ingredients: e.target.value
    });
  }

  componentDidUpdate(prevProps){
    if (this.props.recipes !== prevProps.recipes) {
      this.setState({
        didUpdate: true
      })
    }
  }

  render() {
    let queriedRecipes = Array.from(this.props.recipes);
    let recipes;
    if (queriedRecipes.length > 0) {
      recipes = queriedRecipes.map((recipe, i) => {
        return(
          <div key={i} className='show-recipe'>
            <a href={recipe.recipe.url}>
              <p className='recipe-name'>{recipe.recipe.label}</p>
            </a>
            <img className='recipe-img' width={'15%'} height={'15%'} src={recipe.recipe.image} alt={recipe.recipe.label}/><br/>
            <button onClick={()=>this.props.saveRecipe(recipe.recipe)} className='save-recipe'>Save Recipe</button>
          </div>
        )
      })
    } else {
      recipes = (
        <p>No Recipes Found.</p>
      )
    }
    return(
      <div className='search-and-filter-recipes'>
        <div className='search-recipes'>
          <h1>Search Recipes by Ingredients:</h1><br/>
            <section className="find-recipes">
              <p>Ex: "bat"</p>
              <input onChange={this.handleIngredientsChange} ingredients="ingredients" type="text" />
              <button onClick={()=>this.props.fetchRecipes(this.state.ingredients)} className='fetch-recipes'>Find Recipes</button>
            </section>

          <h2>Gained 40 lbs in quarantine?...Then filter the recipes by your calorie goal:</h2><br/>
            <section className='filter-by-calories'>
              <input onClick={(e)=>this.props.updateRecipes(e.target.value)} id='calories' type='checkbox' value='calories'/>Calories<br/>
            </section>
        </div>
      {recipes}
      </div>
        )
    }
}

export default Recipes;
