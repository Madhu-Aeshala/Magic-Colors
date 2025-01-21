import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  colourMenu= ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Violet", "White", "Black"]
  result = 0;
  constructor() { }

  getresult(){
    return this.colourMenu[this.result-1];
  }

  updateResult(r:number){
    this.result = this.result+r;
    //console.log(this.result)
  }
}
