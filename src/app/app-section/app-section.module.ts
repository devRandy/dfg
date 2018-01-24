import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSectionRoutingModule } from './app-section-routing.module';

import { AppSectionTemplateComponent } from './components/app-section-template.component';
import { AppSectionRenderComponent } from './components/app-section-render.component';


@NgModule({
    declarations: [
        AppSectionTemplateComponent,
        AppSectionRenderComponent
    ],
    imports: [
        CommonModule,
        AppSectionRoutingModule
    ],
    exports: [


    ],
    providers: [],
})
export class AppSectionModule {}
