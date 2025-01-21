import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultServiceService } from '../services/result-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fourthpage',
  imports: [CommonModule],
  templateUrl: './fourthpage.component.html',
  styleUrl: './fourthpage.component.css'
})
export class FourthpageComponent {
  colourMenu= ["Yellow","Orange","Pink","Violet","White","Black"]
  
  constructor(public router:Router, public resultService:ResultServiceService){

  }
  yes(){
    this.resultService.updateResult(4);
    this.router.navigate(['/result']);
  }
  no(){
    this.router.navigate(['/result']);
  }
}
