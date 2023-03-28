import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}

  recipes: Recipe[] = [
    new Recipe(
      'test food',
      'some description',
      'https://centraltransylvania.com/wp-content/uploads/2020/03/recette-des-choux-farcis-ou-sarmale-camelia-870x588-1.jpg'
    ),
    new Recipe(
      'test food',
      'some description',
      'https://centraltransylvania.com/wp-content/uploads/2020/03/recette-des-choux-farcis-ou-sarmale-camelia-870x588-1.jpg'
    ),
    new Recipe(
      'test food',
      'some description',
      'https://centraltransylvania.com/wp-content/uploads/2020/03/recette-des-choux-farcis-ou-sarmale-camelia-870x588-1.jpg'
    ),
    new Recipe(
      'test food',
      'some description',
      'https://centraltransylvania.com/wp-content/uploads/2020/03/recette-des-choux-farcis-ou-sarmale-camelia-870x588-1.jpg'
    ),
    new Recipe(
      'test food',
      'some description',
      'https://centraltransylvania.com/wp-content/uploads/2020/03/recette-des-choux-farcis-ou-sarmale-camelia-870x588-1.jpg'
    ),
  ];

  ngOnInit(): void {}
}
