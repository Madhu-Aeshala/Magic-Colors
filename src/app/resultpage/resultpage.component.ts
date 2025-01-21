import { Component } from '@angular/core';
import { ResultServiceService } from '../services/result-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultpage',
  imports: [CommonModule],
  templateUrl: './resultpage.component.html',
  styleUrl: './resultpage.component.css'
})
export class ResultpageComponent {
  result = "hello world";

  constructor(public resultSevice:ResultServiceService){
    this.result = this.resultSevice.getresult();
  }
}
