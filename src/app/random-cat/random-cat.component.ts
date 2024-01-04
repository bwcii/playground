import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';

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
    MatInputModule
  ],
  templateUrl: './random-cat.component.html',
  styleUrl: './random-cat.component.css'
})
export class RandomCatComponent {
  title = "Random Cat"
  checked: boolean = false;
  textinput: string = "";
  reversedText = "";

  reverseText(unmixed: string) {
    var splitstring = unmixed.split("")
    var mixed = splitstring.reverse();
    var unmixed = mixed.join("");
    this.reversedText = unmixed;
  }
}
