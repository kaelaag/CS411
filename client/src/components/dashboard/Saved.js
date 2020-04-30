import React, {Component} from 'react'
import axios from 'axios'

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedRecipes: {}
    };
  }

  componentDidMount() {
    this.getSavedRecipes();
  }

  getSavedRecipes() {
    let userId = this.props.user._id;
    axios.get(`/recipes/save/${userId}`)
    .then(res => {
      this.setState({
        savedRecipes: res.data
      })
    })
  }

  deleteRecipe = (id) => {
    axios.get(`/recipes/delete/${id}`)
    .then(this.getSavedRecipes())
    .catch ((err) => console.log(err))
  }

  render() {
    let showSavedRecipes;
    if (this.state.savedRecipes.length > 0) {
      showSavedRecipes = this.state.savedRecipes.map((recipe, i) => {
        return(
          <div key={i} className='show-saved-recipe'>
            <img className='saved-recipe-img' src={recipe.image} alt={recipe.name}></img>
            <a href={recipe.link}>
              <p className='saved-recipe-name'>{recipe.name}</p>
            </a>
            <button className='delete-recipe' onClick={()=>this.deleteRecipe(recipe._id)}>Delete Recipe</button>
          </div>
        )
      })
    }
    return(
      <div className='main'>
        <div className='saved-body'>
          {showSavedRecipes}
        </div>
      </div>
    )
  }
}

export default Saved;
