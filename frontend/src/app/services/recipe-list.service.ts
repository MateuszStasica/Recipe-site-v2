import { Injectable } from '@angular/core';
import { RecipeList } from '../shared/models/RecipeList';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {
  private recipeList: RecipeList = new RecipeList();
  private recipeListSubject: BehaviorSubject<RecipeList> = new BehaviorSubject(this.recipeList);
  constructor() { }
}
