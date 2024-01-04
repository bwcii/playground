import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-reverse-text',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './reverse-text.component.html',
  styleUrl: './reverse-text.component.css'
})
export class ReverseTextComponent {

}
