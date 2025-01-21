import { CommonModule, NgFor } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FirstpageComponent } from '../firstpage/firstpage.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colour-menu',
  imports: [FirstpageComponent,CommonModule],
  templateUrl: './colour-menu.component.html',
  styleUrl: './colour-menu.component.css'
})
export class ColourMenuComponent {

  colourMenu= ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Violet", "White", "Black"]

  constructor(public router:Router){

  }
  
  yes(){
    this.router.navigate(['/first']);
  }

}
