import {Component} from '@angular/core';
import {NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    NgStyle,
    NgIf,
    FormsModule
  ],
  templateUrl: 'directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  randomNumber: number = 0;
  numberClasses: string[] = [];

  user: string = '';

  constructor() {
    this.randomNumber = Math.floor(this.generateAndGetRandomNumber());
    this.numberClasses.push(this.getSizeClass());
    if (this.isRandomNumberEven()) {
      this.numberClasses.push('italicText');
    }
  }

  generateAndGetRandomNumber(): number {
    return this.randomNumber = Math.random() * 1000;
  }

  isRandomNumberEven(): boolean {
    return this.randomNumber % 2 === 0;
  }

  getSizeClass(): string {
    if (this.randomNumber <= 400) {
      return 'h4';
    } else if (400 < this.randomNumber && this.randomNumber <= 600) {
      return 'h3';
    } else if (600 < this.randomNumber && this.randomNumber <= 800) {
      return 'h2';
    } else {
      return 'h1';
    }
  }

}
