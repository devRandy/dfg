import { Component, OnInit } from '@angular/core';
import { RouterOutlet  } from '@angular/router';

import { MasterAppService } from './app-config/service/master-app.service';
import { Section } from './app-config/model/section.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  masterSection: Section[];

  constructor (private masterAppService: MasterAppService) {
  }

  ngOnInit() {

    console.log(this.masterAppService.masterConfig[0].sectionName);

  }
}

