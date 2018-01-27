export class ActionConfig {
    actionName: string;
    actionParameter: string;
    actionApiURL: string;
    permission: string[];
    actionDescription: string;

    constructor() {
    }
}

// 1. create in memory web api
// 2. Create module for shared components
// 3. Create model for main menu
// 4. Render Main menu
// 5. Load Nav bar based on main menu selection