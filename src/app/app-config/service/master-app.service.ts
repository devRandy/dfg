import { Injectable } from '@angular/core';

import { Section } from './../model/section.model';
import { ActionConfig } from './../model/action-config.model';
import * as config$ from './../config/master-app.config';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class MasterAppService {

    private _masterConfig: Section[];
    public get masterConfig(): Section[] {

        if (!this._masterConfig) {
            this._masterConfig = this.getMasterConfig();
        }

        return this._masterConfig;
    }

    constructor() {

    }

    private getMasterConfig(): Section[] {
        let configSections: Array<Section> = new Array<Section>();

        for (const c of config$.masterAppConfig) {
            let section: Section = new Section(c);

            configSections.push(section);
        }

       return configSections;
    }
}
