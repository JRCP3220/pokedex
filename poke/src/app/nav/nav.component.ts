import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }
  goToA():void{
    this.router.navigate(['contact-template','3220']);
  }
  goToB():void{
    this.router.navigate(['contact-template','3220']);
  }
  goToC():void{
    this.router.navigate(['contact-template','3220']);
  }
}
