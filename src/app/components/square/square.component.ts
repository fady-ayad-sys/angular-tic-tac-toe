import { Component, Input } from '@angular/core';
import { Player } from 'src/app/types';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() value: Player | undefined;
  Player = Player;
}
