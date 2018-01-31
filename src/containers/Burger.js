import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import BurgerView from '../components/Burger/BurgerView';

class Burger extends Component {
    state = {
        ingredients : {
            bunTop : 1,
            meat:1,
            cheese : 1,
            souce:1,
            salad : 1,
            bunBottom : 1,
        }
    }

    onAddIngredientHandler(ingredientName) {
        if(!ingredientName) return true;
        this.setState((prevState) => {
            const currentIngredient =  { ...prevState.ingredients};
            currentIngredient[ingredientName] = currentIngredient[ingredientName] + 1 
            return {
                ingredients : currentIngredient
            }
        });
    }

    onRemoveIngredientHandler(ingredientName) {
        if(!ingredientName) return true;
        this.setState((prevState) => {
            const currentIngredient =  { ...prevState.ingredients};
            if(currentIngredient[ingredientName] > 0) {
                currentIngredient[ingredientName] =  currentIngredient[ingredientName] - 1;
                return {
                    ingredients : currentIngredient
                }
            }
        });
    }

    render() {
        return (
            <Aux>
                <BurgerView 
                    ingredients={this.state.ingredients}
                    onRemoveIngredient = {this.onRemoveIngredientHandler.bind(this)}
                    onAddIngredient = {this.onAddIngredientHandler.bind(this)}
                />
            </Aux>
        )
    }
}

export default Burger;