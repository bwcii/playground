import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { RandomCatService } from '../random-cat.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-random-cat',
  standalone: true,
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [RandomCatService],
  templateUrl: './random-cat.component.html',
  styleUrl: './random-cat.component.css'
})
export class RandomCatComponent {
  title = "Random Cat"
  checked: boolean = false;
  cats = [] as any;

  constructor(private randomCat: RandomCatService) {}

   getCat() {
    this.randomCat.getRandomCat().subscribe(data => {
      var returnValue = data[0];
      this.cats = `${returnValue.url}`;
    });
   }

   checkFunction() {
    this.checked = !this.checked;
    if (!this.checked) {
      this.cats = [] as any;
    }
  }

}
