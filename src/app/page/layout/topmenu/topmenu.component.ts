import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})
export class TopmenuComponent implements OnInit {

  currentPage : boolean | undefined;
  pageTitle : any;

  constructor( private router: Router){}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentPage = (this.router.url == '/');

      // console.log(this.currentPage);

      this.pageTitle =  this.router.url.replace(/^\//, ""); 
      this.pageTitle = this.pageTitle.charAt(0).toUpperCase() + this.pageTitle.slice(1);;

      
    });
  }


}
