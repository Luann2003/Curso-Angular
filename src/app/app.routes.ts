import { Routes } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipesComponent } from './components/pipes/pipes.component';
import { EventosComponent } from './components/eventos/eventos.component';


export const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'event', component: EventosComponent},
];
