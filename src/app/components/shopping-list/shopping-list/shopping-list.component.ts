import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}

  ingredients: Ingredient[] = [
    new Ingredient('carrot', 3),
    new Ingredient('potato', 3),
    new Ingredient('bread', 1),
    new Ingredient('Apples', 5),
  ];

  ngOnInit(): void {}
}
