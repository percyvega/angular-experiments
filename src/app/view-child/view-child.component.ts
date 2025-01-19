import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent implements AfterViewInit {
  title = 'view-children-example';
  @ViewChild('box') box!: ElementRef;
  @ViewChildren('box') boxes!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.box.nativeElement.style.opacity = Math.random();

    this.boxes.forEach((box, index) => {
      box.nativeElement.style.backgroundColor = this.getRandomColor();
      console.log(box.nativeElement.textContent + ": " + box.nativeElement.style.backgroundColor);
    });
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
