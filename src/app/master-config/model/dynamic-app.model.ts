export class Section {
    sectionName: string;
    sectionController: string;
    sectionPermission: string[];
    loadConfig: ActionConfig;
    saveConfig: ActionConfig;
    additionalActionConfig: ActionConfig[];
    subSectionConfig: Section[];
    sectionDescription: string;

    constructor() {
    }
}


export class ActionConfig {
    actionName: string;
    actionParameter: string;
    actionApiURL: string;
    permission: string[];
    actionDescription: string;
}

// 1. create in memory web api
// 2. Create module for shared components
// 3. Create model for main menu
// 4. Render Main menu
// 5. Load Nav bar based on main menu selection
// 6.
