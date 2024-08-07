import { Component } from '@angular/core';


declare function get():any;

declare function accor():any;



;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {

  ngOnInit(){
    get();
   
    accor();
    // dash();
    
    
  }

}
