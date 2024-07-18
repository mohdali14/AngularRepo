import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, PostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';

  /* if loop */
  userRole : string ='admin';


  /* for loop */
  productList =[
    {id : 1 , name: 'I phone'},
    {id : 2 , name: 'Samsung'},
    {id : 3 , name: 'LG'},
    {id : 4 , name: 'Motorola'},
  ];

  /* swithc */

  shippingMethod : string ="standard";


}
