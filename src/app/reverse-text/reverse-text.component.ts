import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-reverse-text',
  standalone: true,
  imports: [
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
  ],
  templateUrl: './reverse-text.component.html',
  styleUrl: './reverse-text.component.css'
})
export class ReverseTextComponent {
  title = "Reverse Text"
  enabledState: boolean = false;
}
