import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  par1: number;
  par2: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.par1 = this.route.snapshot.params['param1'];
    this.par2 = this.route.snapshot.params['param2'];
  }

}
