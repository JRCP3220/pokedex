import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private readonly dataSVc:DataService) { }
    data:any[]=[];
    types:any[]=[];
  ngOnInit(): void {
    this.getPokemons();
    // this.dataSVc.getPokes().subscribe();
   
    
   
    
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
          console.log(pokemonsData.name);
          
          this.data.push(pokemonsData);
          
          
          
        },
        err=>{
  
        }
      );
    }
    console.log(this.data);
    console.log(pokemonsData);
    console.log(this.data);
    
  }
  

  getTypes(){
    let pokemonTypes;

    for(let i=1;i<=10;i++){
      this.dataSVc.getPokes(i).subscribe(
        res=>{
          pokemonTypes={
            position:i,
            image:res.sprites.front_default,
            name:res.name
          }
          this.types.push(pokemonTypes);
          console.log(this.data[0]);
          
          
        },
        err=>{
  
        }
      );
    }

  }
}
