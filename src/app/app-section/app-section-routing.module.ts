import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppSectionTemplateComponent } from './components/app-section-template.component';
import { AppSectionRenderComponent } from './components/app-section-render.component';


const routes: Routes = [
    {
        path: 'app-section',
        component: AppSectionTemplateComponent,
    },
    {
        path: 'app-section/:sectionName',
        component: AppSectionTemplateComponent,
        children : [
            {
                path: ':subSectionName/:paramId',
                component: AppSectionRenderComponent
            },
            // {
            //     path: ':subSectionName/:param/:subParam',
            //     component: AppSectionRenderComponent
            // }

        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppSectionRoutingModule {}
