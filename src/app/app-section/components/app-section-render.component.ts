import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-section-render',
    templateUrl: './app-section-render.component.html'
})
export class AppSectionRenderComponent implements OnInit {
    paramId: string;
    subSectionName: string;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        // subscribe to the parameters observable
        this.route.paramMap.subscribe(params => {
            this.paramId = params.get('paramId');
            this.subSectionName = params.get('subSectionName');
        });
    }
}
