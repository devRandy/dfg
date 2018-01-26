import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';


@Component({
    selector: 'app-section-template',
    templateUrl: './app-section-template.component.html'
})
export class AppSectionTemplateComponent implements OnInit {
    sectionName: string;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        // subscribe to the parameters observable
        this.route.paramMap.subscribe(params => {
            console.log(params.get('sectionName'));
            this.sectionName = params.get('sectionName');


        });
    }
}
