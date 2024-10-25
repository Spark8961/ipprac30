import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchData = async () =>{
    try {
      const response = await fetch("http://localhost:5001/api/recipes");
      const result = await response.json();
      console.log(result);
      setRecipes(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleRecipeClick = (index) => {
    setSelectedRecipe(recipes[index]);
    console.log(`set reipe to ${index}`);
  }

  const handleBackClick = (index) => {
    setSelectedRecipe(null);
    console.log(`set reipe to null`);
  }

  return (
    <div className='App'>
      <h1>Recipes</h1>
      { (selectedRecipe !== null) ? (
        <div>
        <h2 className='recipe-title'>{selectedRecipe.name}</h2>
        <h4><b>Time:</b><br></br>{selectedRecipe.time}</h4>
        <p><b>Ingredients:</b><br></br>{selectedRecipe.ingredients}</p>
        <p><b>Steps:</b><br></br>{selectedRecipe.steps}</p>
        <button onClick={handleBackClick}>back</button>
        </div>
      ):(
        <div>
          <ul className='recipe-list'>
            {recipes.map((recipe, index) => 
            <li key={index} className='recipe-item'>
              <h2 className='recipe-title'>{recipe.name}</h2>
              <h4><b>Time:</b><br></br>{recipe.time}</h4>
              <button onClick={() => handleRecipeClick(index)}>View</button>
            </li>
            )}
          </ul>
        </div>
      )
      }
    </div> 
  );
}

export default App;
