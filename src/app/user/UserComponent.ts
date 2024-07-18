import {Component} from "@angular/core";


@Component({
  selector: 'app-user',
  templateUrl: './UserComponent.html',
  styleUrls: ['./UserComponent.scss'],
  standalone: true
})
export class UserComponent {
  username = UserComponent.getNewUsername();

  onButtonClicked() {
    this.username = UserComponent.getNewUsername();
  }

  static getNewUsername(): string {
    return 'youngTech' + (10 + Math.random() * 100).toString().substring(0, 2)
  }

  onKeyup(value: string) {
    this.username = value;
  }
}
