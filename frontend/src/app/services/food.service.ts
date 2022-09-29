import { sample_tags } from "./../../data";
import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from "../shared/models/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags():Tag[]{
    return sample_tags;
  }
  getAllFoodByTag(tag:string):Food[]{
    return tag ==="All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));


  }
}
