import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { UsersComponent } from './components/users/users.component';
import { BadgeComponent } from './components/badge/badge.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes =[
    {path: "", redirectTo: "users/0", pathMatch: 'full'},
    {path: "card/:ID", component: CardComponent},
    {path: "users", component: UsersComponent, children:[
        {path:":id", component: BadgeComponent},
    ]},
    {path: "login", component: FormComponent},
        
    {path: "404", component: NotFoundComponent},
    {path: "**", redirectTo: "404", pathMatch: 'full'},
];

