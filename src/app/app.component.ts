import { Component } from '@angular/core';
import { Player } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Player = Player;
  title = 'tic-tac-toe';
}
