import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes =[
    {path: "", redirectTo: "users", pathMatch: 'full'},
    {path: "users", component: UsersComponent},
    {path: "card/:ID", component: CardComponent},
];

