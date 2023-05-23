import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HumanComponent } from './human/human.component';
import { Human } from './human';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HumanComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-test';
  initData: Human[] = [
    {name:'takahashi',age:20},
    {name:'yamada',age:30},
    {name:'sakamoto',age:40}
  ]
  filterData: Human[] = this.initData

  formData = new FormGroup({
    search: new FormControl('')
  });

  search(name: string) {
    this.filterData = this.initData.filter(d=>d.name.includes(name))
  }
}
