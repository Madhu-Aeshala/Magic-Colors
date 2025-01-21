import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultServiceService } from '../services/result-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firstpage',
  imports: [CommonModule],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})
export class FirstpageComponent {
  colourMenu= ["Red", "Orange", "Black","Purple", "Pink", "Violet",]
  
  constructor(public router:Router,public resultService:ResultServiceService){

  }
  yes(){
    this.resultService.updateResult(1);
    this.router.navigate(['/second']);
  }
  no(){
    this.router.navigate(['/second']);
  }

}
