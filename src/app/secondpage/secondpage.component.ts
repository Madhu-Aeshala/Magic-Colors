import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultServiceService } from '../services/result-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondpage',
  imports: [CommonModule],
  templateUrl: './secondpage.component.html',
  styleUrl: './secondpage.component.css'
})
export class SecondpageComponent {
  colourMenu= [ "Blue", "Purple", "Pink","White","Black"]
  
  constructor(public router:Router,public resultService:ResultServiceService){

  }
  yes(){
    this.resultService.updateResult(2);

    this.router.navigate(['/third']);
  }
  no(){
    this.router.navigate(['/third']);
  }

}
