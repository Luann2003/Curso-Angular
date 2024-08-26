import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventosComponent, EmitterComponent, ListRenderComponent, PipesComponent, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrigido de styleUrl para styleUrls
})
export class AppComponent {
  title = 'primeiros-passos-angular';

  userData = {
    email: 'Joaquim@gmail.com',
    role: 'Admin'
  }

  userName = 'Joaquim';
}
