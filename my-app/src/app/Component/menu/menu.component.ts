import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
declare function get():any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false,

})
export class MenuComponent {
  ngOnInit(){
    get();
   
    
    
  }
}
