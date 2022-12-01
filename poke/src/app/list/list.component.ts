import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private readonly dataSVc:DataService) { }

  data:any[]=[];
  ngOnInit(): void {
    this.getPokemons();
    //this.dataSVc.getPokes().subscribe();
   
    
   
    
  }

  getPokemons(){
    let pokemonsData;

    for(let i=1;i<=10;i++){
      this.dataSVc.getPokes(i).subscribe(
        res=>{
          pokemonsData={
            position:i,
            image:res.sprites.front_default,
            name:res.name
          }
          this.data.push(pokemonsData);
           console.log(this.data);
          
          
        },
        err=>{
  
        }
      );
    }
  }
}
