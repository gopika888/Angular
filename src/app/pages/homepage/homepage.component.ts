import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
constructor(private api:ApiService){}
  todos:any;
  ngOnInit(){
    this.api.getTodo().subscribe((data:any)=>{
      this.todos=data
    })
  }
}
