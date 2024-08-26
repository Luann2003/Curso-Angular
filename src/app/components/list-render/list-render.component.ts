import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  constructor(private listService: ListService) {
    this.getAnimals();
  };

  animals: Animal[] = [];

  AnimalDetails = '';

  showAge(animal: Animal){
    this.AnimalDetails = `O pet tem ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal){
    console.log("Removendo animal...")
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
 
}
