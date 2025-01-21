import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColourMenuComponent } from './colour-menu/colour-menu.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'magicColours';

}
