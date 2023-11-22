import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomePageComponent {
  [x: string]: any;
  inputAdd!: string;
  items: any;
  constructor(private api:ApiService){  }
  todos:any='';
  ngOnInit(){
    this.api.getTodo().subscribe((data:any)=>{
      this.todos=data
    })
    }
    delete(id:any){
      this.todos = this.todos.filter((e : {id:any})=> e.id != id)
    }
}

