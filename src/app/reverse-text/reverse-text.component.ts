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
  selector: 'app-reverse-text',
  standalone: true,
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    // Thanks JSONDerulo via https://stackoverflow.com/questions/77759649/why-is-my-mat-slide-toggle-state-changing-but-the-animations-wont-work-unless
    MatInputModule
  ],
  templateUrl: './reverse-text.component.html',
  styleUrl: './reverse-text.component.css'
})
export class ReverseTextComponent {
  title = "Reverse Text"
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
