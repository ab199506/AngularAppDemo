import {ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

ingredientsChanged = new EventEmitter<ingredient[]>();
private ingredients: ingredient[] = [
        new ingredient('apples',5),
        new ingredient('orange',10),
      ];
      getIngredients(){
          return this.ingredients;
      }
      addIngredient(ing: ingredient){
          this.ingredients.push(ing);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIngredients(ingredients: ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients); //use of es6 operator which allows us to turn an array of elements in to a list of elements i.e spread operator
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}