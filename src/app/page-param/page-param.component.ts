import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Logger} from '../services/app-logger-util';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-page-param',
  templateUrl: './page-param.component.html',
  styleUrls: ['./page-param.component.css']
})
export class PageParamComponent implements OnInit {

  id: number;
  item: string;
  fragment: string;
  queryParam1: string;
  queryParam2: string;

  constructor(private logger: Logger,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.item = this.route.snapshot.params['item'];
    this.fragment = this.route.snapshot.params['fragment'];

    // If i need repaint phis page
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.item = params['item'];
    });

    this.route.queryParams.subscribe(par => {
      this.queryParam1 = par['par1'];
      this.queryParam2 = par['par2'];
    });

    this.route.fragment.subscribe(fr => {
      this.fragment = fr;
    });
  }

}
