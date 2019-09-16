import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <br></br>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <br></br>
            <p>Calories: {calories} kcal</p>
            <br></br>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}
export default Recipe;