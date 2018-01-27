import { ActionConfig } from './action-config.model';

export class Section {
    sectionName: string;
    sectionController: string;
    sectionPermission: string[];
    loadConfig: ActionConfig;
    saveConfig: ActionConfig;
    additionalActionConfig: ActionConfig[];
    subSectionConfig: Section[];
    sectionDescription: string;
    sectionLink: string;

    constructor(config: any) {
        this.read(config);
    }

    private read(config: any) {
        this.sectionName = config['sectionName'] ? config['sectionName'] : null;
        this.sectionController = config['sectionController'] ? config['sectionController'] : null;
        this.sectionPermission = config['sectionPermission'] ? config['sectionPermission'] : null;
        this.loadConfig = config['loadConfig'] ? config['loadConfig'] : null;
        this.saveConfig = config['saveConfig'] ? config['saveConfig'] : null;
        this.additionalActionConfig = config['additionalActionConfig'] ? config['additionalActionConfig'] : null;
        this.subSectionConfig = config['subSectionConfig'] ? config['subSectionConfig'] : null;
        this.sectionDescription = config['sectionDescription'] ? config['sectionDescription'] : null;

        if (!config['sectionLink'] && this.sectionName) {
            this.sectionLink = '#/app-section/' + this.formatLinkString(this.sectionName);

        } else {
            this.sectionLink =  config['sectionLink'];
        }
    }

    private formatLinkString(value: string): string {
        return this.camelize(value);
    }

    private camelize(str: string): string {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
          return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        }).replace(/\s+/g, '');
      }
}
