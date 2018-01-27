import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterAppService} from './service/master-app.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [ MasterAppService ],
})
export class AppConfigModule {}
