import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
    {path: "card", component: CardComponent},
    {path: "", component: CardComponent},
];
