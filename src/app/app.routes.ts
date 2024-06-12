import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { UsersComponent } from './components/users/users.component';
import { BadgeComponent } from './components/users/badge/badge.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes =[
    {path: "", redirectTo: "users", pathMatch: 'full'},
    {path: "card/:ID", component: CardComponent},
    {path: "users", component: UsersComponent, children:[
        {path:":id", component: BadgeComponent},
        ]},
        
    {path: "404", component: NotFoundComponent},
    {path: "**", redirectTo: "404", pathMatch: 'full'},
];

