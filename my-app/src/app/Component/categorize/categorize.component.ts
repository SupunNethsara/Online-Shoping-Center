import { Component } from '@angular/core';
declare function supun():any;

@Component({
  selector: 'app-categorize',
  templateUrl: './categorize.component.html',
  styleUrls: ['./categorize.component.scss']
})
export class CategorizeComponent {
  ngOnInit(){
   
    supun();
    
    }
}
