import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.scss'
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handeClcik(){
    this.changeNumber.emit();
  }
}
