import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Human } from '../human';

@Component({
  selector: 'app-human',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent {
  @Input() humanList!: Human;
}
