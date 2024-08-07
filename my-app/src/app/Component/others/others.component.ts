import { Component } from '@angular/core';
declare function sign():any;

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent {
  ngOnInit(){
   
    sign();
    
    }
  
}
