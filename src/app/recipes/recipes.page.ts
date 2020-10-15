import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.page.html',
    styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
    recipes: Array<Recipe> = [
        {
            id: 'r1',
            title: 'Schnizel',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
            ingredients: ['French Fies', 'Pork Meat', 'Salad']
        },
        {
            id: 'r2',
            title: 'Spaghetti',
            imageUrl: 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/5cac3adfc445fa0dbc125dc2-b7cc82ea.jpg',
            ingredients: ['Spaghetti', 'Meat', 'Tomatos']
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
