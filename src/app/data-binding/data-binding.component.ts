import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  calculateTotal() {
    console.log("num1: " + this.num1);
    console.log("num2: " + this.num2);

    this.result = this.num1 + this.num2;
    console.log("result: " + this.result);
  }
}
