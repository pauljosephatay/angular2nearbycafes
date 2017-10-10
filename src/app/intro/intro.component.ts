import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {

  @Output() onStart: EventEmitter<any> = new EventEmitter();

  onStartClick() {
    this.onStart.emit();
  }

}
