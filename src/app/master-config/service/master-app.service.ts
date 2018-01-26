import { Injectable } from '@angular/core';

import { ActionConfig, Section } from './../model/dynamic-app.model';
import * as config$ from './../config/master-app.config';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class MasterAppService {

    constructor() {

    }

    getMasterConfigAny(): any[] {
        return config$.masterAppConfig;
    }

    // getMasterConfig(): any[] {
    //     let configSections: Array<Section> = Array<Section>();

    //     for (const c of config$.masterAppConfig) {
    //         let section: Section = new Section();

    //         configSections.push(config)
    //     }

    //    return config.masterAppConfig;
    // }
}
