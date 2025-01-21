import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultServiceService } from '../services/result-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thirdpage',
  imports: [CommonModule],
  templateUrl: './thirdpage.component.html',
  styleUrl: './thirdpage.component.css'
})
export class ThirdpageComponent {
  colourMenu= ["Green", "Purple","Violet","White","Black"]
  
  constructor(public router:Router, public resultService:ResultServiceService){

  }
  yes(){
    this.resultService.updateResult(3);
    this.router.navigate(['/fourth']);
  }
  no(){
    this.router.navigate(['/fourth']);
  }

}
