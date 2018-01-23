export class SectionConfig {
    sectionName: string;
    sectionController: string;
    sectionDescription: string;
    sectionPermission: string[];
    loadConfig: ActionConfig;
    saveConfig: ActionConfig;
    additionalConfig: ActionConfig[];
    subSectionConfig: SectionConfig[];
}


export class ActionConfig {
    actionName: string;
    actionParameter: string;
    actionApiURL: string;
    permission: string[];
    actionDescription: string;
}


export class FormControl {
    type: string;
    label: string;
}
