import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Mexican Chicken Salad','A super Tasty Schnitzel',
        'https://media.self.com/photos/5f1eef2914b005b8d8eba4d0/4:3/w_384/30-Minute-Roasted-Vegetable-Tacos-with-Chimichurri-BIG-flavor-satisfying-HEALTHY-vegan-glutenfree-plantbased-tacos-chimichurri-cauliflower-minimalistbaker-recipe-6.jpg',
        [
new ingredient('Meat', 1),
new ingredient('cucumber', 5)
        ]),
        new Recipe('Thai Chicken Salad','Super Saucy Taste',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fmrtrending0475.jpg%3Fitok%3D-tA_cB-C%261521838046',
    [
        new ingredient('Chicken', 2),
        new ingredient('lettuce', 10)
    ])
      ]; 
      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: ingredient[]){
       this.slService.addIngredients(ingredients);
      }
}